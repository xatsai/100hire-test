const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs-extra");
const path = require("path");

const SOURCES_PATH = path.join(__dirname, "../research/sources.md");
const OUTPUT_ROOT = path.join(__dirname, "../research/blogs");
const REQUEST_DELAY_MS = 1500;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function parseInfluencersWithBlogs(markdown) {
  const lines = markdown.split(/\r?\n/);
  const influencers = [];
  let current = null;
  let inBlogSection = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const headingMatch = rawLine.match(/^##\s+\d+\.\s+(.+)$/) || rawLine.match(/^##\s+(.+)$/);

    if (headingMatch) {
      if (current) influencers.push(current);
      current = { name: headingMatch[1].trim(), blogUrls: [] };
      inBlogSection = false;
      continue;
    }

    if (!current) continue;

    if (/^-\s*blog:/i.test(line)) {
      inBlogSection = true;
      continue;
    }

    if (/^-\s*[a-z]+:/i.test(line) || /^###\s+/.test(line) || /^---$/.test(line)) {
      inBlogSection = false;
    }

    if (inBlogSection && /^https?:\/\/\S+/i.test(line)) {
      current.blogUrls.push(line);
    }
  }

  if (current) influencers.push(current);
  return influencers.map((influencer) => ({
    ...influencer,
    blogUrls: [...new Set(influencer.blogUrls)],
  }));
}

function extractContentFromHtml(html) {
  const $ = cheerio.load(html);
  const title = $("title").first().text().trim() || $("h1").first().text().trim() || "untitled";

  const removeSelectors = [
    "script",
    "style",
    "noscript",
    "template",
    "svg",
    "iframe",
    "nav",
    "footer",
    ".sidebar",
  ];

  removeSelectors.forEach((selector) => $(selector).remove());

  const cleanedTextFrom = ($node) =>
    $node
      .text()
      .split(/\r?\n/)
      .map((line) => line.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .filter((line) => !line.startsWith(":root"))
      .join("\n");

  const selectors = ["article", ".entry-content", ".post-content", ".article-content"];
  let text = "";

  for (const selector of selectors) {
    $(selector).each((_, el) => {
      const candidate = cleanedTextFrom($(el));
      if (candidate.length > text.length) {
        text = candidate;
      }
    });
  }

  const paragraphFallback = () => {
    const seen = new Set();
    const lines = [];
    $("body p").each((_, el) => {
      const line = $(el).text().replace(/\s+/g, " ").trim();
      if (!line || line.length < 40) return;
      if (seen.has(line)) return;
      seen.add(line);
      lines.push(line);
    });
    return lines.join("\n");
  };

  if (!text || text.length < 300) {
    text = paragraphFallback() || cleanedTextFrom($("body").first());
  }

  const junkPhrases = [
    "Start Free Trial",
    "Get A Demo",
    "Privacy Policy",
    "Terms of Service",
    "All Logos",
    "PlatformPlatform",
  ];
  text = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !junkPhrases.some((phrase) => line.includes(phrase)))
    .join("\n");

  return { title, text };
}

async function fetchBlog(url) {
  const response = await axios.get(url, {
    timeout: 30000,
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; BlogScraper/1.0)",
    },
  });

  return extractContentFromHtml(response.data);
}

async function saveBlog(influencerName, url, blog) {
  const influencerDir = path.join(OUTPUT_ROOT, slugify(influencerName));
  await fs.ensureDir(influencerDir);

  const fileName = `${slugify(blog.title) || "untitled"}.md`;
  const filePath = path.join(influencerDir, fileName);
  const fileContent = `Title: ${blog.title}\nURL: ${url}\nInfluencer: ${influencerName}\n\n--- CONTENT ---\n${blog.text}\n`;

  await fs.writeFile(filePath, fileContent, "utf8");
  console.log(`Saved: ${path.basename(filePath)}`);
}

async function run() {
  const markdown = await fs.readFile(SOURCES_PATH, "utf8");
  const onlyInfluencersRaw = process.env.ONLY_INFLUENCERS || "";
  const onlyInfluencers = new Set(
    onlyInfluencersRaw
      .split(",")
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean)
  );

  let influencers = parseInfluencersWithBlogs(markdown);
  if (onlyInfluencers.size > 0) {
    influencers = influencers.filter((influencer) => onlyInfluencers.has(influencer.name.toLowerCase()));
  }

  for (const influencer of influencers) {
    if (influencer.blogUrls.length === 0) continue;

    console.log(`\nProcessing ${influencer.name} (${influencer.blogUrls.length} blogs)`);
    for (const url of influencer.blogUrls) {
      try {
        const blog = await fetchBlog(url);
        await saveBlog(influencer.name, url, blog);
      } catch (error) {
        console.log(`Failed: ${url}`);
      }

      await sleep(REQUEST_DELAY_MS);
    }
  }
}

run().catch((error) => {
  console.error("Blog scraping failed:", error.message);
  process.exit(1);
});
