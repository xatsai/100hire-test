const fs = require("fs-extra");
const path = require("path");

const SOURCES_PATH = path.join(__dirname, "../research/sources.md");
const OUTPUT_ROOT = path.join(__dirname, "../research/youtube-transcripts");

function slugifyInfluencerName(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function slugifyFileName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function extractVideoId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v");
    }

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }
  } catch (error) {
    return null;
  }

  return null;
}

async function getTranscript(videoId) {
  const { YoutubeTranscript } = await import(
    path.join(__dirname, "../node_modules/youtube-transcript/dist/youtube-transcript.esm.js")
  );
  const transcript = await YoutubeTranscript.fetchTranscript(videoId);
  return transcript.map((item) => item.text).join("\n");
}

async function getVideoTitle(url, videoId) {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
    );

    if (response.ok) {
      const data = await response.json();

      if (data.title) {
        return data.title.trim();
      }
    }
  } catch (error) {
    // Fall back to the video ID when title lookup fails.
  }

  return videoId;
}

function parseInfluencers(markdown) {
  const lines = markdown.split(/\r?\n/);
  const influencers = [];
  let currentInfluencer = null;
  let inYoutubeSection = false;

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+\d+\.\s+(.+)$/) || line.match(/^##\s+(.+)$/);

    if (headingMatch) {
      if (currentInfluencer) {
        influencers.push(currentInfluencer);
      }

      currentInfluencer = {
        name: headingMatch[1].trim(),
        youtubeUrls: [],
      };
      inYoutubeSection = false;
      continue;
    }

    if (!currentInfluencer) {
      continue;
    }

    const trimmedLine = line.trim();

    if (/^-\s*youtube:/i.test(trimmedLine)) {
      inYoutubeSection = true;
      continue;
    }

    if (/^-\s*[a-z]+:/i.test(trimmedLine) || /^###\s+/.test(trimmedLine) || /^---$/.test(trimmedLine)) {
      inYoutubeSection = false;
    }

    if (inYoutubeSection && /^https?:\/\/.+/i.test(trimmedLine)) {
      currentInfluencer.youtubeUrls.push(trimmedLine);
    }
  }

  if (currentInfluencer) {
    influencers.push(currentInfluencer);
  }

  return influencers;
}

async function saveTranscript(influencerName, url) {
  const videoId = extractVideoId(url);

  if (!videoId) {
    console.log(`Failed: ${url}`);
    return;
  }

  try {
    const [title, transcript] = await Promise.all([getVideoTitle(url, videoId), getTranscript(videoId)]);
    const influencerFolder = path.join(OUTPUT_ROOT, slugifyInfluencerName(influencerName));
    const fileName = `${slugifyFileName(title || videoId) || videoId}.md`;
    const outputPath = path.join(influencerFolder, fileName);

    await fs.ensureDir(influencerFolder);
    await fs.writeFile(
      outputPath,
      `Title: ${title}\nURL: ${url}\nInfluencer: ${influencerName}\n\n--- TRANSCRIPT ---\n${transcript}\n`,
      "utf8"
    );

    console.log(`Saved: ${fileName}`);
  } catch (error) {
    console.log(`Failed: ${videoId}`);
  }
}

async function main() {
  const markdown = await fs.readFile(SOURCES_PATH, "utf8");
  const influencers = parseInfluencers(markdown);

  for (const influencer of influencers) {
    const uniqueUrls = [...new Set(influencer.youtubeUrls)];

    if (uniqueUrls.length === 0) {
      continue;
    }

    await fs.ensureDir(path.join(OUTPUT_ROOT, slugifyInfluencerName(influencer.name)));
    console.log(`Processing ${influencer.name} (${uniqueUrls.length} videos)`);

    for (const url of uniqueUrls) {
      await saveTranscript(influencer.name, url);
    }
  }
}

main().catch((error) => {
  console.error("Failed to process transcripts.", error);
  process.exit(1);
});
