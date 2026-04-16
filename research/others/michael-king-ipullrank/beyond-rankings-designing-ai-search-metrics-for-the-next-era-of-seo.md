Title: Beyond Rankings: Designing AI Search Metrics for the Next Era of SEO
URL: https://ipullrank.com/ai-search-metrics
Influencer: Michael King (iPullRank)

--- CONTENT ---
Rankings don’t equal revenue anymore. Search is different and as marketers, we need to learn how to handle the new requirements of AI Search. It’s not just SEO.
“The foundational assumptions that built the entire marketing departments of SEO are crumbling,” said iPullRank Director of Marketing Garrett Sussman. “Content is not just quantity and keywords. More pages does not mean more traffic.”
How we think about value within our marketing channels is changing. We’ve gone beyond focusing on single keywords to query fan-outs that provide a different result every time someone asks an LLM a question.
I know what you’re thinking: How can we measure success these days? How is our brand being discussed in LLMs? And how can I explain all of this to the C-suite at my organization?
At iPullRank, we’re figuring that out for you. We’ve studied and experimented with new frameworks and metrics to help tell your brand’s marketing story and measure how it’s doing. And you should be too. Every business has unique challenges, a unique industry, and a unique position within the search results (both cited and generated) across its topic of authority. Customized experiments and metrics are going to be critical to your success in terms of both performance and measurement.
“We’re trying to figure out, what are the levers we can pull that can help our clients increase their AI citation counts and increase their AI visibility by purely looking at different content metrics and things that we can change within the content?” said iPullRank Lead Relevance Engineer Patrick Schofield.
Let’s discuss how we can show your CEO that your marketing is still working, even if the results look a little different now.
We have moved from a world of deterministic rankings in which a page sits at a certain position for a specific term to a world of probabilistic AI search. Tools like AI Overviews, Perplexity, and ChatGPT synthesize your data, then generate a number of synthetic sub-queries (a process known as query fan-out) to create a single generative response.
If you aren’t cited in that response, you don’t exist. To survive this shift, we need a more nuanced approach to reporting that treats search as both a brand channel and a performance channel.
AI Overviews began changing user behavior and resulting in traffic losses almost immediately upon their rollout in 2024. Even Wikipedia has seen its traffic decline with the advent of AI Overviews.
Even through all this change, organic search still matters and should not be forgotten. According to HubSpot, it remains the primary discovery channel and AI systems still retrieve information from search.
However, due to these changes, we need to experiment to see what works best these days because it’s clear that generic SEO and best practices are a thing of the past.
“We need to have a more nuanced approach to reporting for AI Search because it’s still messy,” Garrett said. “It’s still hard to define attribution, but that doesn’t mean that we shouldn’t track it at all.”
To navigate attribution, we categorize metrics into three distinct layers:
Traditional SEO has had 30 years to figure out what makes a search engine tick. AI Search has only had a couple. This is where Relevance Engineering comes in.
Relevance Engineering identifies what modern AI systems reward, like accuracy, depth, structure, and answerability, and translates those rewards into measurable Natural Language Processing (NLP) and retrieval signals.
We came up with these new AI Search metrics by translating the qualities that search and AI systems reward into measurable signals we can use to diagnose and improve content performance. Here’s how to do it:
As we move into the technical data of creating new metrics, remember that what works for a massive ecommerce site will probably fail for a niche legal firm. The context of your industry and the reality of your specific website are now the only rules that matter.
The process of calculating new metrics starts with generating vector embeddings for the primary keyword and the content with which that keyword is associated. Then you compare those embeddings using cosine similarity to get a score. If you do that across your URLs, “you start to get a good understanding of the semantic relationships between all of your content,” Patrick said.
You can calculate your own cosine similarity scores using tools like Screaming Frog.
If you want to calculate it manually, you must generate a mathematical embedding for a primary keyword and a separate embedding for the content associated with that keyword, and then mathematically compare the two using cosine similarity.
For larger, automated operations, you can build a custom content engineering pipeline. The team at iPullRank calculates these scores using a tool that fetches both a client’s content corpus and competitor content from the search results, calculating all metrics simultaneously before analyzing the data with tools like BigQuery and Python.
At the iPullRank lab, we’ve developed a suite of metrics to decode how to optimize for AI Search.
Here are seven of the primary metrics that we use to measure success (but please note that we’re keeping some proprietary ones confidential and reserved for our clients, so there are a couple missing from this table and you may see some redacted information in the images to follow):
Semantic relationship between keyword and content embeddings.
Proves mathematical relevance to search intent.
Composite of word count, topical completeness, and fact density.
Signals “authority” to LLMs and crawlers.
Weighted count of entities (people, places, things) mapped to WikiData.
Provides “Knowledge Graph anchors” for AI systems.
AI rewards concise information over “fluffy” prose.
Helps traditional SEO, but requires a “sweet spot” for AI.
Level of novel information compared to existing SERP results.
Rewards unique insights over “copycat content.”
Ensures appropriate information density without crowding.
Overall, we’ve found that Content-Keyword Cosine and Strategic Entity Richness have an outsized effect on AI Citations. That’s not to say that the other metrics like Info Gain or Entity Density Balance are not important, they simply have less of an effect on AI Citations.
Let’s dive a bit deeper into all of our findings and see how our new metrics stack up.
We analyzed over 79,000 URL-query pairs across multiple AI platforms (ChatGPT, Claude, Perplexity, and Google) to see what actually drives visibility. The results debunked several long-standing SEO myths.
“Traditional ranking position is still the great gatekeeper in AI citations,” Patrick said. Our data shows a stark drop-off in AI citations for any page ranking outside of the top 10. To be cited by an AI, you first have to be trusted by the index. Step one of AI search optimization is still securing a top 5 organic position. Also, ensure you are providing unique insights and not copycat content.
One of our most significant findings was the outsized impact of Entity Richness on mid-tail queries. While head terms are too broad and long-tail terms too specific, mid-tail queries saw a 292% lift in citation probability when entity density was optimized. If you want a quick win, start with your mid-tail pages.
Is long-form dead? Not exactly. Cited URLs averaged 1,800 words, while non-cited URLs averaged only 1,200. However, the quality of those words matters. Increasing word count without increasing entity count (adding fluff) actually decreased citation probability. You must grow your facts and your word count proportionally.
Conceptual Depth helps traditional SEO but can hurt AI citations. Traditional Google Search rewards “Ultimate Guides” that go 10 layers deep into a topic. However, AI engines often look for the most direct, specific answer. If your page is too deep and complex, the AI may pass you over for a more efficient source.
Once you have your baselines, the next step is not to over-optimize the entire site at once, but to run controlled experiments. Based on our analysis of 79,000 query-URL pairs, here are three high-impact experiments you can deploy today:
Since head terms (broad topics) require higher authority, we found that introducing deeper entities linked via specific, fact-checkable claims can improve both organic rank and AI citation probability.
AI Overviews prioritize answerability. If your content is buried under a 500-word personal anecdote or repetitive SEO bridge content, the AI is less likely to scrape it.
For long-tail keywords, less is more. A long-tail query usually has a very specific intent. If you include too many tangential entities, you dilute the relevance of the primary answer.
You’ve seen what work needs to be done, so how can you ensure you have the right team to do it? The shift from SEO to AI search necessitates a shift in how we build our teams. We are moving away from silos. Instead, we see the rise of the Relevance Engineering hierarchy, which includes a number of new roles including:
A newly organized team designed around the current AI environment can go a long way toward improving your efficiency.
“It’s not just about your website anymore, it’s omnichannel,” Garrett said. “It’s all holistic.”
We can’t forget about SEO but we shouldn’t be reliant on the same SEO best practices we’ve used for years, especially for different industries. We are officially past the era of “set it and forget it” SEO.
Also, you have to remember that there are limitations and caveats on these metrics. The results represent correlation rather than causation, meaning the data shows average observed tendencies across the roughly 79,000 query-URL pairs rather than guaranteed outcomes. Additionally, the study relies on bucket-level aggregation for rank and query length, an approach that successfully smooths out noise but also obscures individual, page-level variances, and the AI citation data itself is aggregated from multiple platforms rather than isolating the behavior of each individual system.
Right now, it’s all just supporting information to help us make intelligent decisions in our marketing strategies. These patterns might look entirely different in other industries, in different languages, or if observed over a longer time window, so use your best judgment when using new metrics for your business. Or just reach out to us and we can help.
“You need to use your own critical thinking of what’s going to matter the most to your business,” Garrett said.
Francine is a Content Marketing Manager at iPullRank with 10 years of digital marketing experience and nearly 20 years of professional writing experience. As a former journalist, she is constantly asking questions, seeking out and following the latest SEO news trends, and trying to learn everything about everything.
Discover what that means for your business and why AI generation can be your competitive advantage in content and SEO.
Sign up for the Rank Report — the weekly iPullRank newsletter. We unpack industry news, updates, and best practices in the world of SEO, content, and generative AI.
iPullRank is a pioneering content marketing and enterprise SEO agency leading the way in Relevance Engineering, Audience-Focused SEO, and Content Strategy. People-first in our approach, we’ve delivered $4B+ in organic search results for our clients.
