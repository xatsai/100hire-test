require('dotenv').config();

const { ApifyClient } = require('apify-client');
const fs = require('fs-extra');
const path = require('path');

// Initialize Apify client
const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
});

// Paths
const sourcesPath = path.join(process.cwd(), 'research/sources.md');

// Keywords for filtering
const KEYWORDS = [
    'ai', 'seo', 'search', 'google',
    'ranking', 'content', 'automation',
    'llm', 'chatgpt'
];

// Read sources.md
const content = fs.readFileSync(sourcesPath, 'utf-8');

// Extract influencers + LinkedIn URLs
function parseLinkedInProfiles(md) {
    const sections = md.split('## ').slice(1);
    const data = [];

    sections.forEach(section => {
        const lines = section.split('\n');
        const rawName = lines[0].trim();
        const name = rawName.replace(/^\d+\.\s*/, '').trim();

        const linkedinLine = lines.find(line =>
            line.toLowerCase().includes('linkedin:')
        );

        if (linkedinLine) {
            const urlMatch = linkedinLine.match(/https?:\/\/[^\s]+/);
            if (urlMatch) {
                data.push({
                    name,
                    url: urlMatch[0]
                });
            }
        }
    });

    return data;
}

// Normalize folder name
function normalizeName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Check relevance
function scorePost(text) {
    if (!text) return 0;

    const lowerText = text.toLowerCase();
    let score = 0;

    KEYWORDS.forEach(keyword => {
        if (lowerText.includes(keyword)) {
            if (keyword === 'ai' || keyword === 'seo') {
                score += 2;
            } else {
                score += 1;
            }
        }
    });

    return score;
}

function formatPostedAt(postedAt) {
    if (!postedAt) return null;
    if (typeof postedAt === 'string') return postedAt;
    if (typeof postedAt === 'number') return new Date(postedAt).toISOString();

    if (typeof postedAt === 'object') {
        if (typeof postedAt.timestamp === 'number') return new Date(postedAt.timestamp).toISOString();
        if (typeof postedAt.time === 'number') return new Date(postedAt.time).toISOString();
        if (typeof postedAt.date === 'string') return postedAt.date;
        if (typeof postedAt.iso === 'string') return postedAt.iso;
    }

    return null;
}

// Main function
async function run() {
    if (!process.env.APIFY_API_TOKEN) {
        throw new Error('Missing APIFY_API_TOKEN in environment.');
    }

    const onlyInfluencersRaw = process.env.ONLY_INFLUENCERS || '';
    const onlyInfluencers = new Set(
        onlyInfluencersRaw
            .split(',')
            .map(s => s.trim().toLowerCase())
            .filter(Boolean)
    );

    const maxPosts = Number.parseInt(process.env.MAX_POSTS || '10', 10) || 10;

    let influencers = parseLinkedInProfiles(content);
    if (onlyInfluencers.size > 0) {
        influencers = influencers.filter(i => onlyInfluencers.has(i.name.toLowerCase()));
    }

    for (const influencer of influencers) {
        console.log(`\nProcessing ${influencer.name}`);

        const folderName = normalizeName(influencer.name);
        const outputDir = path.join(
            process.cwd(),
            'research/linkedin-posts',
            folderName
        );

        await fs.ensureDir(outputDir);

        try {
            // Call Apify actor
            const actorInput = {
                targetUrls: [influencer.url],
                // Keep this modest to avoid slow/profile timeouts.
                maxPosts,
                includeQuotePosts: true,
                includeReposts: true,
                scrapeReactions: false,
                maxReactions: 5,
                postNestedReactions: false,
                scrapeComments: false,
                maxComments: 5,
                postNestedComments: false,
            };

            const run = await client.actor("A3cAPGpwBEG8RJwse").call(actorInput);

            const { items } = await client
                .dataset(run.defaultDatasetId)
                .listItems();

            // Score + filter posts
            const scoredPosts = items
                .map(item => {
                    const text = item.text || item.content || item.socialContent?.text || '';
                    return {
                        ...item,
                        text,
                        score: scorePost(text)
                    };
                })
                .sort((a, b) => b.score - a.score)
                .slice(0, 20); // keep top 20

            let count = 1;

            for (const item of scoredPosts) {
                const filePath = path.join(outputDir, `post-${count}.md`);
                const formattedDate = formatPostedAt(item.postedAt);

                const fileContent = `
Author: ${influencer.name}
Profile: ${influencer.url}

Post URL: ${item.linkedinUrl || item.url || 'N/A'}
${formattedDate ? `Date: ${formattedDate}` : ''}
Score: ${item.score}

Content:
${item.text}
`;

                await fs.writeFile(filePath, fileContent.trim());
                console.log(`Saved: post-${count}.md`);
                count++;
            }

        } catch (err) {
            console.error(`Failed for ${influencer.name}: ${err.message}`);
        }

        // Delay to avoid rate limits
        await new Promise(r => setTimeout(r, 3000));
    }
}

run().catch(err => {
    console.error(`LinkedIn scraper failed: ${err.message}`);
    process.exit(1);
});