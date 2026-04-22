Influencer: michael-king-ipullrank

---

Title: Beyond Rankings: Designing AI Search Metrics for the Next Era of SEO
Platform: Blog
Source File: research/others/michael-king-ipullrank/beyond-rankings-designing-ai-search-metrics-for-the-next-era-of-seo.md

Content:
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


----

Title: How AI Mode Works and How SEO Can Prepare for the Future of Search -
Platform: Blog
Source File: research/others/michael-king-ipullrank/how-ai-mode-works-and-how-seo-can-prepare-for-the-future-of-search.md

Content:
Title: How AI Mode Works and How SEO Can Prepare for the Future of Search -
URL: https://ipullrank.com/how-ai-mode-works
Influencer: Michael King (iPullRank)

--- CONTENT ---
I attended the first day of Google I/O 2025 and left feeling a mix of excitement and anxiety. On one hand, as a user and developer, I’m excited for the new products and features. Google is truly a marvel of modern technology and that was on full display with products like Flow, AndroidXR, and Search. On the other hand, I’m terrified at what it means for the SEO community because the skillset and technology we use to support driving visibility is not prepared for where things are headed. To top it off, the ongoing conversation is keeping people complacent which is dangerous for the advancement of the field.
There’s been much chatter within the SEO community lately about how the generative AI driven features of Google make no difference; “it’s just SEO.” In fact, Google’s latest attempts at guidance reflect that. Much of the argument is rooted in the overlapping mechanics between generative information retrieval and classic information retrieval for the web.
Yes, you still need to make content accessible, indexable, and understood, but the difference is that in classic IR, your content comes out the same way it goes in. In generative IR, your content is manipulated and you don’t know how or if it will appear on the other side even if you did all your SEO best practices right and it informed the response. Therein lies the disconnect and the layer where SEO as it currently exists is not enough.
Last month at SEO Week, in my Brave New World of SEO talk, I doubled down by saying that, sure, there is high overlap between the organic SERPs and AI Overviews right now, but we’re not ready for what happens when memory, personalization, MCP, and the requisite agentic capabilities are mixed in. What happens when Google is pulling data from every application on the web?
With the announcement of enhancements to AI Mode, literally everything I said is either now live in your Google Search experience or on the way this year. Google has also been warning us since the launch of their AIO and AI Mode explainer doc that the best of AI Mode will ultimately make its way to the core search experience. The more I’ve researched how these features work, the more adamant I’ve become that our space needs to think bigger.
So, let’s talk about why we’re not ready and what we need to do to get ready.
The argument that AI Mode and AI Overviews are “just SEO” is short-sighted at best and dangerously misinformed at worst.
What this position gets wrong isn’t just technical nuance; it’s the complete misunderstanding of how these generative surfaces fundamentally differ from the retrieval paradigm that SEO was built on. The underlying assumption is that everything you’d do to show up in AI Mode is already covered by SEO best practices. But if that were true, the industry would already be embedding content at the passage level, running semantic similarity calculations against query vectors, and optimizing for citation likelihood across latent synthetic queries. The shocking lack of mainstream SEO tools that do any of that is a direct reflection of the fact that most of the SEO space is not doing what is required. Instead, our space is doing what it has always done, and sometimes it’s working.
Part of the confusion stems from the fact that SEO has no fixed perimeter. It has absorbed, borrowed, and repurposed concepts from disciplines like performance engineering, information architecture, UX, analytics, and content strategy, often at Google’s prompting.
Structured data? Now SEO. Site speed? SEO. Entity modeling? SEO. And the list goes on.
In truth, if every team accounted for Google’s requirements in their own practice areas, SEO as a standalone discipline would not exist.
So what we call SEO today is more of a reactive scaffolding. It’s a temporary organizational response to Google’s structural influence on the web. And that scaffolding is now cracking under the weight of a fundamentally different paradigm: generative, reasoning-driven retrieval and the competition that has arisen on the back of it.
There is a profound disconnect between what’s technically required to succeed in generative IR and what the SEO industry currently does. Most SEO software still operates on sparse retrieval models (TF-IDF, BM25) rather than dense retrieval models (vector embeddings). We don’t have tools that parse and embed content passages. Our industry doesn’t widely analyze or cluster candidate documents in vector space. We don’t measure our content’s relevance across the synthetic query set that’s never visible to us. We don’t know how often we’re cited in these generative surfaces, how prominently, or what intent class triggered the citation. The major tools have recently begun sharing rankings data for AIOs, but miss out on the bulk of them because they track based on logged-out states.
The only part that is “just SEO” is the fact that whatever is being done is being done incorrectly.
These are not edge cases. This is the system.
So no, this is not just SEO. It’s what comes after SEO.
If we keep pretending the old tools and old mindsets are sufficient, we won’t just be invisible in AI Mode, we’ll be irrelevant.
That said, SEO has always struggled with the distinction between strategy and tactics, so it doesn’t surprise me that this is the reaction from so many folks. It’s also the type of reaction that suggests a certain level of cognitive dissonance is at play. Knowing how the technology works, I find it difficult to understand that position because the undeniable reality is that aspects of search are fundamentally different and much more difficult to manipulate.
We are no longer aligned with what Google is trying to accomplish. We want visibility and traffic. Google wants to help people meet their information needs and they look at traffic as a “necessary evil.”
Watch the search section of the Google I/O 2025 keynote or read Liz Reid’s blog post on the same. It’s clear that they want to do the Googling for you.
On another panel, Liz explained how, historically, for a multi-part query, the user would have to search for each component query and stitch the information together themselves. This speaks to the same concepts that Andrei Broder highlights in his Delphic Costs paper on how the cognitive load for search is too high. Now, Google can pull from results from many queries and stitch together a robust and intelligent response for you.
Yes, the base level of the SEO work involved is still about being crawled, rendered, processed, indexed, ranked, and re-ranked. However, that’s just where things start for a surface like AI Mode. What’s different is that we don’t have much control over how we show up on the other side of the result.
Google’s AI Mode incorporates reasoning, personal context, and later may incorporate aspects of DeepSearch. These are all mechanisms that we don’t and likely won’t have visibility into that make search probabilistic. The SEO community currently does not have data to indicate performance, nor tooling to support our understanding of what to do. So, while we can build sites that are technically sound, create content, and build all the links, this is just one set of many inputs that go into a bigger mix and come out unrecognizable on the other side.
SEO currently does not have enough control to encourage rankings in a reasoning-driven environment. Reasoning means that Gemini is making a series of inferences based on the historical conversational context (memory) with the user. Then there’s the layer of personal context wherein Google will be pulling in data across the Google ecosystems, starting with Gmail, MCP, and A2A man this is a platform shift and much more external context will be considered. DeepSearch is effectively an expansion of the DeepResearch paradigm brought to the SERP, where hundreds of queries may be triggered and thousands of documents reviewed.
Another fundamental change is that AI Mode is also natively multimodal, which means that it can pull in video, audio, and their transcripts or imagery. There’s also the aspects of Multitask Unified Model (MUM) that underpin this, which can allow content in one language to be translated into another and used as part of the response. In other words, every response is a highly opaque matrixed event rather than the examination of a few hundred text documents based on deterministic factors.
Historically, your competitive analysis compared text-to-text in the same language or video-to-video. Now you’re dealing with a highly dynamic set of inputs, and you may not have the ability to compete.
Google’s guidance is encouraging people to invest in more varied content formats at the same time that they are cutting people’s clicks by 34.5%. It will certainly be an uphill battle convincing organizations to commit these resources, especially when “non-commodity” content won’t have a long life span either. Google is bringing custom data visualization to the SERP based on your data. I can’t imagine remixing your content on the fly with Veo and Imagen are far behind. That alone changes the complexion of what we’re able to strategically accomplish in the context of an organization.
I went to sleep the first night of I/O thinking about how futile it will be to log in to much of the SEO software we subscribe to for AI Mode work. It’s pretty clear that, at some point, Google will make AI Mode the default, and much of the SEO community won’t know what to do.
We are in a space where rankings have been highly personalized for twenty years, and still, the best we can do is rank tracking based on a hypothetical user who joined the web for the first time, and their first act is to search for your query. We’re operating on a system that has been semantic for at least ten years and hybrid for at least five, but the best we can do is lexical-based content optimization tools?
Siiiiigh…..there is a lot of work to be done.
At SEO Week, James Cadwallader, co-founder and CEO of conversational search analytics platform Profound casually declared that “SEO will become an antiquated function.” He quickly couched that by saying that Agent Experience (AX) is something that SEOs are uniquely positioned to transition to.
Before he got there, he thoughtfully made his case, explaining that the original paradigm of the web was a two-sided marketplace and the advent of the agentic web upends the user-website interaction model. Poignantly, James concluded that the user doesn’t care where content comes from as long as they get viable answers.
So, while Google has historically warned us against marketing to bots, the new environment basically requires that we consider bots as a primary consumer because the bots are the interpreters of information for the end user. In other words, his thesis suggests that very soon users won’t see your website at all. Agents will tailor the information based on their understanding of the user and their reasoning against your message.
On the technical end, James talked through his team’s hypothesis on how long-term memory works. It sounds as though there’s a representation of all conversations that is constantly updated and added to the system prompt. Presumably, this is some sort of aggregated embedding or another version of the long-term memory store that further informs downstream conversations. As we’ll discuss a few hundred words from here, this aligns with the approach described in Google’s patents.
Initially, I thought his conclusions were a bit alarmist, albeit great positioning for their software. Nevertheless, one of the things that I love about Profound is that they are technologists and not beholden to the baggage of the SEO industry. They didn’t live through Florida, Panda, Penguin, or the industry uproar against Featured Snippets. They are clear-eyed consumers of what is and what will be. They operate in the way best-in-class tech companies do, so they are focused on the state of the art and shipping product quickly. Since the I/O keynote, I’ve come to recognize James is right, unless we do something!
James’s talk is more biased towards OpenAI’s offerings, but as we’ve seen, Google is going in an overlapping direction, so I definitely recommend checking it out to give context.
At I/O, we had some discussions with Google engineers, and part of the conversation revolved around recognition that the relationship between them and our community is symbiotic, although simultaneously and paradoxically one-sided. After all, the web would not have adopted the secure protocol, structured data, or Core Web Vitals as fast or as completely as it did if our community did not do the legwork to make it happen. I hope whoever had those social engineering OKRs got promoted.
We also discussed how sites are losing clicks due to AIOs, and how we don’t have any data or any air cover from Google to prove to enterprises that the landscape has changed.
I’d suggested that it would have been helpful to have insights from internal usability studies or some results from the Google Labs tests of AIOs to know search behavior is changing. The engineers seemed surprised to hear how universal the click losses have been. Ultimately, we were told, again, that things are moving so fast and are so volatile that it would have been difficult to provide any data or warnings up front to have helped our community through this process. However, there were allusions that there will be future releases that may help. Since that conversation, we’ve gotten a couple of articles on Search Central that allude to the improved quality of visits from search and direction to stop measuring clicks.
So, I’m not sure whether to say “I’m sorry” or “you’re welcome.” Accept whichever works for you.
However, it’s difficult to hear such things and then learn the next day from the Google Marketing Live event that advertisers will have query-level data about AIOs, but it is what it is.
I also asked what they think our role should be in an agentic environment driven by reasoning, personal context, and DeepResearch. Aside from the standard “create great and unique and non-commodity content,” they said they weren’t sure.
And, that’s fine. We were in a similar position when RankBrain launched, and the party line was that Google didn’t know how their new stuff worked. It’s not like they were going to tell us to start using vector embeddings to understand the relevance of our content. It simply means it’s time to activate our community and get back to experimenting and learning.
Unfortunately, I don’t know that everyone is going to make it through this era. The same way some of the last generation’s SEOs couldn’t survive the paradigm shift post-Panda and Penguin, I suspect some won’t cross the chasm into this next wave of search technology.
Those of us that will, we need to start from an understanding of how the technology works and then work our way back into what can be done strategically and tactically.
No present like the time…I took to figure this out for y’all.
I’m getting tired of watching people rewrite my posts in simpler ways, so we’ll start this with some prose as a simple overview of how AI Mode works. Then we’ll go through it in a more technical form with references to patents.
You can also use this NotebookLM file to get a podcast or ask your own questions to this post.
You open Google and ask it a question. But what happens next doesn’t resemble search as you’ve known it. There are no blue underlines. Just a friendly, context-aware paragraph, already answering the next question before you think to ask it. Welcome to AI Mode.
Beneath the surface, what looks like a single reply is actually a matrixed ballet of machine cognition. First, your question is quietly reformulated into a constellation of other questions, some obvious, some implicit, some predictive. Google’s models “fan out” across this hidden web of synthetic queries, scanning not just for facts, but for ideas that can complete a “reasoning chain.”
Behind the scenes, the system isn’t just ranking content, it’s arguing with itself. It selects documents not because they won the SERP, but because they support a point in the machine’s obfuscated logic. Reasoning chains are like those old-school scratch-pad thoughts we all have while solving a problem and are now encoded into how answers are constructed. It’s not “What’s the best electric SUV?” It’s “What does ‘best’ mean to this user, right now, across these priorities?”
And, if that wasn’t enough, the models generating your answer aren’t monolithic. They’re task-specific, tuned and selected based on what kind of answer is needed. A summarizer. A comparer. A validator. It’s an ensemble cast with a rotating spotlight. Each contributes a line; a final model assembles the script.
All of this happens inside an invisible architecture powered by your past. Your clicks, your queries, your location, your Gmail threads are all boiled down into a vectorized version of… “you.”(You read that in Joe Goldberg’s voice, didn’t you?) A personalization layer that doesn’t just color the margins of the result, but warps the very selection of what qualifies as relevant.
And when the answer finally materializes, your webpages might be cited. They might not. Your content might appear not because you were optimized for the keyword, but because a single sentence happened to match a single sub-step in the machine’s invisible logic.
SEO spent the past twenty-five years preparing content to be parsed and presented based on how it ranks for a single query. Now, we’re engineering relevance to penetrate systems of reasoning across an array of queries.
Of course, Google has published some high-level documentation on how AI Overviews and AI Mode work. But, you can see from your scrollbar that that is obviously not enough for me. So, in the spirit of the late great Bill Slawski, I’ve done a bit of my own research and uncovered some of Google’s patent applications that align with the functionality that we’re seeing.
The patent application for “Search with Stateful Chat” gives us a foundational understanding of how Google’s AI Mode functions. It marks a departure from classical search into a persistent, conversational model of information retrieval. The system understands you over time, draws from numerous synthetic queries, and stitches answers together using layered reasoning. Additionally, the “Query Response from a Custom Corpus” patent that fills in critical details about how responses are generated. It explains not just what the system knows about you, but how it selects which documents to pull from, how it filters them, and how it decides what to cite.
AI Mode operates as a multi-phase system built on top of Google’s classic index. Instead of treating each query in isolation, it maintains persistent user context by tracking your prior queries, locations, devices, and behavioral signals and turns each interaction into a vector embedding. This stateful context allows Google to reason about intent over time rather than just intent in the moment.
When a new query is entered, AI Mode kicks off a “query fan-out” process (don’t worry the deep-dive on that is coming) and generates dozens (or hundreds) of related, implied, and recent queries to uncover semantically relevant documents the user didn’t explicitly request. Each of these synthetic queries is used to retrieve documents from the index, which are then scored and ranked based on how well their vector embeddings align with both the explicit and hidden queries.
These documents form what the second patent calls a “custom corpus” or a narrow slice of the index that the system has determined is relevant for your query, at this moment, for you. This corpus is the foundation for the rest of the AI Mode response.
Once the custom corpus is assembled, AI Mode invokes a set of specialized LLMs, each with a different function depending on the query classification and perceived user need. For example, some models may:
The patent lists some explicit assessments that are made about how to respond based on the understanding of the user’s information need:
From the patent’s description these align with LLMs, however, this is not a classic Mixture of Experts (MoE) model with a shared routing layer. Instead, it’s a selective orchestration where specific LLMs are triggered based on context and intent. It’s closer in spirit to an intelligent middleware stack than a single monolithic model.
Although there is some discussion of generating hypothetical answers to compare the passages against, the system doesn’t generate responses out of thin air. Instead, as with all RAG pipelines, it extracts chunks from relevant documents, builds structured representations of that information, and synthesizes a coherent answer. Some chunks are cited; many are not. And as “Query response using a custom corpus” patent application describes, citation selection happens independently of document rank, based on how directly a passage supports the generated response.
Though we’ve discussed embeddings multiple times, it’s worth saying that this entire pipeline runs on dense retrieval. Every query, subquery, document, and passage is converted into a vector embedding. Google, as Jori Ford reminded me that I’ve repeated ad nauseum for the past few years, calculates similarity between these vectors to determine what gets selected for synthesis. What matters is no longer just “ranking for the query,” but how well your document, or even an individual passage within it, aligns semantically with the hidden constellation of queries.
Additionally, Google’s retrieval pipeline no longer operates solely on static scoring functions like TF-IDF or BM25. While hybrid retrieval may still underpin initial candidate selection, the actual ranking and inclusion of content in generative answers increasingly depend on language model reasoning.
According to the “Method for Text Ranking with Pairwise Ranking Prompting” patent application, Google developed a novel system in which an LLM is prompted to compare two passages and determine which is more relevant to a user’s query. This process is repeated across many passage pairs, and the results are aggregated to form a ranked list.
Instead of assigning fixed similarity scores, the system asks: “Given this query, which of these two passages is better?” and lets the model reason it out. This represents a shift from absolute determinative relevance to relative, model-mediated probabilistic relevance. It aligns with AI Mode’s likely behavior, where:
This has several strategic consequences:
The implication is clear: it’s not enough to rank somewhere for a topic. You must engineer passages that can outperform competing content head-to-head in LLM evaluations, not just semantic similarity.
“Stateful chat” means Google accumulates an ambient memory of you over time just like James described for OpenAI. As described in the Search with stateful chat patent, these “memories” are likely aggregated embeddings representing past conversations, topics of interest, and search patterns. The interface itself adapts too, drawing from what we saw demonstrated in the Bespoke UI demo from last year.
It dynamically determines which elements (text, lists, carousels, charts) to display based on the information need and content structure. I highlighted this video in my talk at Semrush’s Spotlight conference last year as an indication of the future of search interfaces. When I first saw it, I knew we were in for something! Now we know that this functionality is powered by one of the downstream LLMs in the AI Mode pipeline.
A foundational innovation enabling AI Mode’s contextual awareness is the use of “user embedding” models as described in User Embedding Models for Personalization of Sequence Processing Models patent application. This personalization mechanism allows Google to tailor AI Mode outputs to the individual user without retraining the underlying large language model. Instead, a persistent dense vector representation of the user is injected into the LLM’s inference pipeline to shape how it interprets and responds to each query.
This vector, called a user embedding, is generated from a user’s long-term behavioral signals: prior queries, click patterns, content interests, device interactions, and other usage signals across the Google ecosystem. Once computed, the user embedding acts as a form of latent identity, subtly influencing every stage of AI Mode’s reasoning process.
In practice, this embedding is introduced during:
Importantly, this system allows for modular personalization: the same base model (e.g., Gemini) can serve billions of users while still producing individualized results in real time. It also introduces cross-surface consistency. The same user embedding could inform personalization across Search, Gemini, YouTube, Shopping, or Gmail-based recommendations. In fact, Tom Critchlow showcased on Twitter that he got the same response in both AI Mode and Gemini.
No pun, but the implication is profound. AI Mode is no longer just intent-aware; it’s memory-aware. Two users asking the same query may see different citations or receive different answers, not because of ambiguity in the query, but because of who they are. That makes inclusion a function of both semantic relevance and profile alignment. That means logged-out rank tracking data is meaningless for AI Mode because responses can be 1:1.
AI Mode rewrites the rules. You’re no longer optimizing for a specific keyword or even a specific page. You’re optimizing for your content to be semantically relevant across dozens of hidden queries and passage-competitive within a custom corpus. Your ranking is probabilistic, not deterministic, and your presence in the result depends as much on embedding alignment as it does on authoritativeness or topical breadth.
This isn’t traditional SEO. This is Relevance Engineering (r19g). Visibility is a vector, and content is judged not only on what it says, but how deeply it aligns with what Google thinks the user meant.
The query expansion technique Google refers to as “query fan-out” is fundamental to how AI Mode retrieves and selects content. Rather than issuing a single search, Google extrapolates the original query into a constellation of related subqueries in parallel. Some of these synthetic queries are directly derived, others inferred or synthesized from user context and intent. These queries span various semantic scopes and are used to pull candidate documents from the index. This enables Google to capture intent that the user didn’t, or couldn’t, explicitly express.
Google proudly discusses the concept from a high-level in the recent public documents, but the patent application Systems and methods for prompt-based query generation for diverse retrieval, offers a detailed blueprint of how query fan-out works. The process begins with a prompted expansion stage, where a LLM is used to generate multiple alternate queries from the original query. The model doesn’t hallucinate queries at random it is instructed with a structured prompt format that emphasizes:
The query fan out process considers an array of different approaches to construct synthetic queries. Based on the various patents, the table below outlines the types of synthetic queries used:
Example (Base Query: “best electric SUV”)
Queries that are semantically or categorically adjacent to the original query, often linked via entity relationships or taxonomy.
Recognized co-occurrence patterns or topical proximity in the Knowledge Graph.
Expands retrieval scope to cover similar or overlapping domains of interest.
Queries inferred from user intent, behavioral signals, or language model reasoning—what the user likely meant but didn’t explicitly say.
LLM inference based on phrasing, ambiguity, and historical user behavior.
Helps the model fulfill the deeper or unstated information need of the user.
Queries that compare products, entities, or options. Often synthesized when the user is making a choice or decision.
Classifier detects decision-making or ambiguity in original query.
Triggers retrieval of structured or contrastive content for synthesis and re-ranking.
Queries recently issued by the user, used to inform contextual understanding and query expansion in session-based or memory-informed search.
Prior queries in the session or search history retrieved via contextual layer.
Used to maintain conversational state and personalize fan-out expansion or synthesis.
(Prior queries: “EV rebates in NY” → “best electric SUV”)
Queries aligned to a specific user’s interests, location, or behavioral history (via embeddings).
Retrieved from long-term user memory or injected user profile embeddings.
Refines retrieval to reflect the unique context and past behavior of the individual user.
Lexical or syntactic rewrites that maintain core intent but use different phrasing or vocabulary.
Generated via prompt-based rewriting using LLMs (e.g., Gemini).
Increases lexical diversity of query fan-out to capture alternate phrasings of the same intent.
Queries that substitute, narrow, or generalize based on entity relationships in the KG.
LLM crosswalks entity references to broader/narrower equivalents.
Broadens or specifies scope using KG anchors—e.g., replacing “SUV” with specific models or brands.
Each of these is then routed through Google’s embedding-based retrieval system to locate relevant passages. What’s most important here is that ranking for the original query no longer guarantees visibility, because AI Mode is selecting content based on how well it aligns with one or more of the hidden fan-out queries, which, again, makes ranking in AI Mode a complex matrixed event.
The Systems and methods for prompt-based query generation for diverse retrieval patent further outline a filtering mechanism to ensure the selected queries:
This helps Google build a more well-rounded and informative synthesis, pulling not just from the best-ranking document but from a custom corpus rich in contextual diversity. In other words, it’s not enough to just say what the competition is saying.
To improve quality and relevance, the synthetic query generation process may also include chain-of-thought prompting, where the LLM walks through reasoning steps like:
In other words, the LLM doesn’t just output alternate queries. It explains why each was generated, often using task-specific reasoning or structured intents (e.g., “Help the user compare brands,” “Find alternatives,” “Explore risks and benefits”).
As I’ve learned more about query fan-out, I recognize that I wasn’t aware of it as a key aspect of AI Overviews. Early reports of AI Overviews pulling content from deep in the SERPs likely misunderstood what was happening. It’s probably not that Google’s AI was reaching far down the rankings for a single keyword; it was reaching across rankings for a different set of background queries entirely. So while SEOs are tracking position for [best car insurance], Google may be selecting a passage based on how well it ranks for [GEICO vs. Progressive comparison chart for new parents]. Based on ZipTie’s latest data, ranking #1 for the core query only gives you a 25% chance at ranking in the AIO.
One of the defining features of Google’s AI Mode is its ability to reason across a corpus of documents to generate multi-faceted answers. The “Instruction Fine-Tuning Machine-Learned Models Using Intermediate Reasoning Steps” patent describes a system for constructing and using “reasoning chains.” These are structured sequences of intermediate inferences that connect user queries to generated responses in a logically coherent way. While this may not be the exact patent for how reasoning functions in AI Mode, it does give a sense of reasoning approaches that have informed iterations of Google’s models.
Rather than relying on end-to-end generation or selecting standalone answers, this system enables Google to:
These reasoning chains may be segmented into the following groups:
This is a dramatically different operation from what we are historically used to in SEO. The job now needs to include tactics to remain relevant throughout all these reasoning steps.
Contextualizing everything we’ve learned with the steps in the Search with stateful chat patent application, we can get a sense of how and where reasoning is applied.
LLM generates initial reasoning hypotheses: What does the user likely mean? What decision-making path are they on?
Synthetic queries are generated based on inferred reasoning needs e.g., comparing features, exploring risks, looking for alternatives.
Reasoning chains determine which types of content or perspectives are required to fulfill each step, resulting in more targeted document selection.
Specific models are chosen for subtasks based on the reasoning structure (e.g., use Model A for extraction, Model B for summarization, Model C for synthesis).
Reasoning chains serve as scaffolds for answer construction with each part of the response aligning with one or more logical steps.
Passages that most directly support individual reasoning steps are cited not necessarily the highest-ranking or most comprehensive document.
In other words, reasoning pretty much touches every stage of the process. And that process is more opaque than anything we’ve ever been up against.
Content that appears in AI Mode doesn’t just need to be indexable and informative. It’s no longer enough for content to be “generally relevant.” It must be granularly useful, retrievable by step, and semantically aligned with each logical inference. It must be designed to win at multiple reasoning checkpoints. These include passage-level embedding similarity, comparative re-ranking, and natural language generation modeling.
There are four strategic pillars for creating content that succeeds in AI Mode, each of which corresponds to a specific set of content characteristics. They are as follows:
Use this table as your guide for how to implement these characteristics into your content engineering efforts.
LLMs retrieve and reason at the passage level not the whole page. A passage must answer or contextualize a specific subquery on its own.
“The Tesla Model Y offers 330 miles of range, advanced driver assistance, and a spacious interior. Compared to the Ford Mustang Mach-E, it provides more range but less trunk space.”
Many generative prompts involve choice-making. Content that articulates pros, cons, and “why X over Y” survives better in LLM pairwise ranking and synthesis.
“The Rivian R1S is ideal for off-road enthusiasts due to its ground clearance and quad-motor system, while the Tesla Model X excels in highway efficiency and autonomous features.”
Entity linking helps AI systems disambiguate and retrieve content via fan-out expansions. Specific brand, product, and category names improve visibility.
“The Hyundai Ioniq 5, classified as a compact crossover SUV, is built on Hyundai’s E-GMP platform and supports 800V ultra-fast charging.”
Content needs to be modular and extractable LLMs recombine pieces, not full documents. Clear structure enables chunk selection and formatting in synthesis.
Generative systems favor passages that reflect user goals (e.g., shopping, comparing, troubleshooting). Intent-aligned phrasing improves alignment.
“If you’re shopping for a reliable EV under $50K with high safety scores and fast charging, the Kia EV6 is a standout option.”
Redundant, bloated, or repetitive language weakens LLM performance and increases likelihood of exclusion in pairwise ranking or synthesis.
✘ “The Tesla Model Y is great. The Model Y is great because it’s great for families. Families love the Model Y.”
✔ “The Tesla Model Y combines long range with family-friendly design and seating for up to seven.”
LLMs are often asked direct questions. Content that reflects clear answers, especially early in a paragraph or section, is more likely to be used in generation.
“Yes, the federal tax credit applies to the 2024 Mustang Mach-E if it meets final assembly and battery sourcing requirements.”
Citation-worthy content must present facts clearly, avoid speculation, and include attributes like sources or structured claims (semantic triples).
“The 2024 Ioniq 5 has an EPA-estimated range of 303 miles and supports 350kW DC fast charging.” Source: U.S. Department of Energy, March 2024.
Based on how these systems function, these are all things you’ll need to do to be in the candidate documents, but there is no guarantee that you’ll get any visibility from any of this if you are misaligned with the user embeddings.
This indicates that a big part of the job now is building user embeddings that represent the activities of your targets and simulating how your content appears on the other side of the pipelines. We also need to know where we stand in all the queries being considered.
When faced with a complex problem like this, I put on my Relevance Engineer hat and think about how I would build something like this. This is how we developed our deep understanding of AIOs prior to their launch back in 2023. However, the complexity of AI Mode renders it difficult to replicate the product quickly with a simple RAG pipeline. I suspect it will be a few more weeks before I’ve built an AI Mode proof of concept.
Instead, I’ve been working on replicating the query fan-out idea in service of our AIO Simulator tool. I started by parsing features from the primary query and its SERP like entities, PAAs, related queries, etc. That approach got to something that worked, but perhaps did not surface enough variance. After learning that Gemini itself is used to build the list, I continued to explore other potential ways to do it.
At I/O, JC Chouinard shared a May 5th, 2023, paper entitled “Query Expansion by Prompting Large Language Models” with me. The paper, from the Google Research team, describes a Chain-of-Thought prompting technique for expanding queries. So I tinkered with a series of prompts until I got something that yielded results that I assume are reasonable. Then I did some digging of my own and found the aforementioned Systems and methods for prompt-based query generation for diverse retrieval patent application that explains in more detail how queries are selected in the query fan-out process.
Using similar methodologies, we can identify several types of the related and implied queries. However, we won’t have any visibility into a user’s recent queries.
Sidebar: I did some digging to see if Google has exposed the query fan-out data publicly. I’m not ready to talk about that, but there is a URL in the network requests when AI Mode is loading that responds with recent queries and a few other parameters.
https://www.google.com/httpservice/web/AimThreadsService/ListThreads?rlz=XXX&sca_esv=YYY&udm=50&reqpld=[null,null,0]&msc=gwsclient&opi=ZZZZ
Hopefully, one of the clickstream data providers will start to intercept the call and collect that data to add to their offerings.
The result is a simple app I’ve built with the latest Gemini 2.5 Pro called Qforia. Based on the initial query, it generated a series of queries, the type of synthetic query, the user intent, and the reasoning behind why the query was selected.
Since AI Mode is more complex and surfaces more queries, Qforia does the same, but in both situations, it asks the model to determine how many queries are required. When it gives its output, it shares its reasoning behind the number of queries it selected.
Qforia is a simple tool. You put in a query and an API key, and you get a bunch of potential searches back in alignment with the various types of synthetic queries that Google is generating during query fan-out.
Here’s your step-by-step to getting started with it:
Select AI Overview or AI Mode and click “Run Fan Out.”Here’s an example of an AI Overview result:
Here’s an example of an AI Mode result for the same query. Note that it attempted 28 queries, but only returned 26.
From here, you would need to pull the rankings for these keywords, vectorize all passages on yours and the competitor passages that made it through to the citations in AI Mode. Then you’d improve your passage copy for better performance in the pipeline. Unfortunately, there are no SEO tools to support this, because this isn’t SEO, it’s Relevance Engineering. Now with Qforia, you are a bit less in the dark about what queries Google might be looking for.
Based on what I’ve learned about how the technology works, the approach to ranking in the AI Mode surface needs to be matrixed. The goal is to have Gemini run into you for as many of the synthetic queries as possible and to make your message the most relevant at every reasoning turn.
Let’s think back to passage indexing. Google has a granular understanding of pages, so ideally, you’d have a single robust page that covers everything across all the subqueries. That way, you’ll only need to focus on a single page. However, in some cases, you may need multiple pages, and reviewing rankings data from the synthetic queries will reveal that.
One could argue that if you are doing topical clustering, you’re already doing this. However, in practice, the members of a topical cluster, as they are currently defined, are subjective, just like our historical understanding of relevance. Instead, these need to be data-driven based on actual user journeys and what Gemini derives during query fan-out.
Now that we have a sense of the potential underlying queries, we need to build out a matrix of keywords and see how well we rank for the subqueries. Here’s how we’d do this:
This process is more than SEO because there is no SEO software that will get you passage-level embeddings. There’s no SEO software that will calculate the relevance score on a passage level. There’s no SEO software that will help you identify synthetic queries. There’s no SEO software that will help you optimize across multiple pages at once with the goal of improving your visibility. There’s no SEO software that exists to help you optimize for AI Mode. As of this writing, you’d have to write your own code to do what I just walked you through.
In other words, you need to engineer your relevance.
Rank Tracking has been on shaky ground for a long time. As a quick recap, despite personalization, rank tracking tries to replicate a user context that doesn’t exist to indicate visibility. Due to the highly dynamic nature, it has no place in AI Mode. Since personalization is so deeply baked into the experience, data from the logged out state is inaccurate. In fact, much of the data we make decisions from in SEO is inaccurate, but precise. That may have been good enough in a deterministic environment, but doesn’t work in a probabilistic one.
The Profound team has been defining what analytics looks like for conversational search surfaces like AIOs, ChatGPT, Perplexity, and CoPilot. So I reached out to them to see what they are thinking. Profound’s AI Strategist Josh Blyskal had this to say:
“We’re bullish on AI Mode. It’s already the most-used answer engine worldwide, and we don’t see that changing anytime soon. Generative answers in a conversational interface represent a fundamentally better method of information retrieval. We expect the tracking of AI Mode to become more similar to what we’ve seen across ChatGPT and Perplexity. Brands will focus on visibility, sentiment and citations within AI Mode responses. AI Mode will very likely heavily leverage Google’s Knowledge Graph and Shopping Graph. So, for straightforward searches like 'what’s the best corporate credit card,' answers could be more aligned to regular Google results. Profound is already working on technology to help brands show up more frequently in AI Mode.”
This is an extension of the question I asked James onstage at SEO Week. I questioned what analytics even looks like in a highly personalized environment, and we agreed there is a need for persona-based tracking. That means the “ranking” for AI Mode will need to be tracked in a logged-in state for a user whose context in the Google environment matches your target audience.
Hear that? If you listen closely, you’ll catch the sound of ChatGPT Operator and Google Project Mariner rank intelligence apps starting up and inflating your search volume.
Last year’s leaked documents revealed that formats are taken into account when selecting what can rank. The implication is that there are a finite number of slots for a given content type for certain SERPs. AI Mode shifts the balance and changes what qualifies as content. This system synthesizes experiences by pulling from a range of formats including text, audio, video, images, and dynamic visualizations. In this environment, relying solely on text-based content is not just limiting. It risks being left out altogether.
Google’s AI pipeline can transcribe videos, extract claims from podcasts, interpret diagrams, and remix all of it into new outputs such as lists, summaries, or visual presentations. A product video might supply a quote. A podcast might provide a data point. An infographic could become a generated answer in text. The format matters as much as the content itself.
Early in the AI Mode process, Google’s system classifies not just the query type, but also the ideal output modality. If a visual or spoken explanation is considered more useful than a written one, AI Mode may prioritize those formats over traditional web pages. That means a more accurate article might be ignored in favor of a relevant clip or visual explanation.
Organizations must start thinking about content in terms of format-level coverage. Just as we now plan for clusters of related queries and user intents, we must also plan for clusters of related formats. Your goal is not just to be the most relevant article. It is to be the most relevant video, the most relevant chart, the most relevant soundbite.
If you are not producing those formats, Google may still reconstruct them from your content. But it may do so without citing you. Multimodal content creation is no longer just a visibility advantage. It is a strategy for controlling how your brand is represented.
In AI Mode, the winners are those who build content ecosystems, not just content pages. Visibility now depends on being present in all the places the system might look, across every format it can process.
It has become increasingly clear that most popular SEO software is not doing enough to support modern SEO. The reason why “Python SEO” exists is a function of SEO software not being state-of-the-art. Our collective lack of technical standards is why it’s so behind, but here are some key features and functionality that you, as a user, need to demand from your software providers to support your ability to engineer visibility moving forward. For the Relevance Engineers, this is what it will take for your personal toolkit to be feature complete for AI Overviews and AI Mode.
Let’s start with the main culprit, Google itself. Google Search Console is such a strange and hampered product. Like, what is the point of the Links Report? What does anyone use that for?
The whole platform is a data tease. Most reports limit you to 1000 results in the paginated series. Unless you’re clever with your filters or use the API, you can’t get much out of it efficiently. If you get too far into the year, you can’t do YoY comparisons without warehousing the data. Everything about it is inefficient. When you compare its crawl stats to your own verified Googlebot crawl data, the numbers are way off.
But I digress. Right now, we have no visibility into how AIOs or AI Mode perform. As of this writing, there is a noreferrer tag set in the experience (apparently this is a bug), so the little AI Mode traffic you’ll get will show up at Direct. All of this is laughable.
Image pulled from Barry Schwartz’s X feed
Here’s what we need specifically to make Google’s AI Search surfaces measurable:
Rank tracking is still mostly rooted in a static understanding of universal rankings. But in AI Mode, rankings are dynamic, synthesized, and user-specific.
Vector Embeddings underpin everything in modern Google. Over the past few years, we’ve uncovered that the system creates vector representations of queries, pages, passages, authors, entities, websites, and now users themselves. At this point, this data is far more vital to our work than the link graph. Despite this, the SEO industry is still anchored in lexical scoring and keyword density, unable to access the semantic landscape that actually governs inclusion in AIOs and AI Mode. If we are to remain relevant, vector embeddings must become a foundational capability.
Just last week, a research paper entitled “Harnessing the Universal Geometry of Embeddings” was released, indicating that all vector embeddings ultimately converge on the same geometry. This suggests that at some point, we’ll be able to convert between embeddings, which means we will be able to generate open source embeddings and convert them into what Google is using.
Content creation for AI Mode is often not a single-page task. You are now competing across a matrix of synthetic queries, reasoning steps, and passage-level comparisons. That means content needs to be engineered across clusters, not just optimized in isolation. Yet SEO content editor tools only let you edit content against a single keyword target based on the lexical model. The future demands an interface where content optimization happens across multiple surfaces and subqueries simultaneously, with dense retrieval in mind.
Search is no longer a one-shot decision. It’s a session-driven sequence of related questions, many of which are generated by the system itself. Query fan-out, DeepSearch, and reasoning chains all reflect this evolution. But many keyword research tools still assume isolated queries, ignoring the order in which users interact with topics. Understanding how queries evolve over time is essential to engineering influence across a user’s decision journey.
With user embeddings becoming central to how Google personalizes results, relevance is no longer universal. Two people asking the same question may see entirely different answers. The current model of rank tracking assumes a static user profile, which fails in this context. What we need instead are tools that simulate how our content performs against different behavioral personas so we can engineer for visibility across varied user contexts, not just a hypothetical average.
Query Classification in major SEO tools is basic. Typically, they are giving you a modified but out-of-date version of Andrei Broder’s navigational/informational/transactional taxonomy. It’s out of date because Broder has since added “hedonic” to the list. However, Mark Williams-Cook revealed that Google’s internal classifications are much more actionable.
I suspect the internal classification helps with determining which features to include in AI Mode.
Query fan-out rewrites the nature of visibility. Any modern SEO workflow must incorporate query expansion simulation as a baseline input to content planning and performance modeling.
AIOs and AI Mode data are not directly visible in GSC, and many generative results don’t drive clicks at all. This severs our ability to understand performance through traditional web analytics. Clickstream data becomes essential as a proxy for user behavior. It offers visibility into what users see, what they choose, and what they bypass, even in zero-click environments. SEO tools need to integrate this external signal to restore observational power in a space where direct attribution is disappearing. Re-ranking is also triggered by click behaviors; SEO software should provide a sense of the click models based on this data.
AI Mode’s logic isn’t linear; it’s inferred. Answers are built through chains of reasoning steps that span multiple passages and content types. Success means having your content selected to support one of those steps. But unless you simulate the reasoning chain, you don’t know if your content is useful to the machine’s thinking. Tools need to let us replicate this process, so we can test not just “does my content rank?” but “does my content help the model think?” and “where does my content fall out of the reasoning chain?”
Although the role of links is heavily deemphasized in these patents, I still believe in the importance of PageRank and its various forms. Despite obvious changes to how Google views the link graph, there hasn’t been any meaningful movement from link data providers in a very long time. At the very least, they should provide relevance scores between source and target documents. They should also be leveraging clickstream data and rankings to get a sense of where content lives in the index, since we now know that that impacts the value a link has to pass.
Dare I say that the link graph, as we have it, has become…not so interesting due to the gaps in the data. The link indices could be completely revitalized and significantly more valuable by becoming the providers of the embeddings data.
Aside from what we need from Google, that is ten things that the SEO software industrial complex should be racing to incorporate into their solutions. These aspects are not just relevant to the inevitable future of AI Mode becoming the default, but are relevant to AI Overviews right now. Use your voice and push your software providers to alter their products in support of features that can actually help you get a result.
AI Mode represents a structural transformation in the search landscape. What began as enhancements to the SERP has now become a self-contained ecosystem of conversational, multimodal, and memory-informed retrieval. The conventional SEO paradigm, built on explicit queries, deterministic ranking, and click-based performance attribution, is no longer sufficient.
Just as AI Mode is an expansion of AI Overviews, we can expect user behavior to follow similar but even more compressed patterns. The best analog is probably ChatGPT or Perplexity: environments where users engage in low-friction, high-trust interactions and receive fully synthesized answers with little to no click behavior. That means organic search in AI Mode behaves more like a zero-click branding channel than a traditional performance one.
But unlike Overviews, AI Mode introduces multiple dimensions that fundamentally change what it means to “show up.” So the strategy must shift. This isn’t just about ranking anymore; it’s about earning inclusion in the candidate corpus and winning passage selection.
The first decision is simple: do you want to be there?
It might sound crazy, but this may be the moment that your organization or client abandons the channel as one that they proactively manipulate. A subset of users will continue to go back to classic search. If you’re doing well there, you may not care so much about AI Mode. Perhaps your overall channel mix is just fine, and/or you’re finding better incrementality elsewhere.
From a strategic standpoint, this shift necessitates a fundamental reframing. Organizations must stop optimizing solely for traffic and begin competing for machine-mediated relevance. Success in AI Mode is not a function of surface-level rankings but of embedding alignment, informational utility, and latent inclusion in systems of reasoning. The strategic implications fall across three domains: channel reclassification, capability transformation, and data infrastructure modernization.
Historically, Organic Search has operated as a hybrid performance/brand channel. Roughly 70% attributable to performance-driven user actions and 30% to brand reinforcement. In the AI Mode paradigm, that balance will likely invert.
Search should now be reframed as a visibility and trust channel mediated through large language models. The organization’s goal shifts from driving traffic to being selected as a source. This demands a new KPI structure:
Leaders must realign budget allocations, stakeholder expectations, and measurement frameworks accordingly. It is no longer about appearing for a keyword; it is about being encoded into the model’s understanding of the information domain.
In a generative retrieval ecosystem, the source of competitive advantage is not content volume or link velocity; it is the systematic engineering of relevance across vector spaces.
Forward-leaning organizations will invest in teams that combine SEO, NLP, data science, UX, digital PR, and content strategy operations into an integrated Relevance Engineering function. This unit becomes the connective tissue between brand, product, and AI visibility.
The collapse of the click as a primary performance signal leaves organizations flying blind unless they modernize their data strategy to include machine-consumable relevance metrics and generative surface analytics.
Executives must be open to dashboards beyond reflections of past user behavior and toward systems that surface where the organization exists in the model’s latent space, where it is understood, trusted, and re-used by AI agents on behalf of users. In other words, branding is in addition to performance.
Ultimately, the AI Mode environment demands a shift from search as transaction to search as participation. The question is no longer “how do we rank?” but “how are we represented in AI cognition?”
This is the emergence of a new corporate function: Relevance Strategy. Aligning with Relevance Engineering through the deliberate, cross-functional coordination of a company’s presence in algorithmic decision-making systems. Organizations that succeed here will be those that treat visibility not as a campaign outcome, but as a strategic asset to be architected, measured, and governed.
SEO in the AI Mode world is no longer about chasing blue links. It’s about building robust, retrievable, and reusable content artifacts that serve as input for machine synthesis. That requires a mindset shift from tactical optimization to strategic orchestration across queries, formats, and embeddings.
Relevance Engineers will lead this transition. They will be the ones who not only understand how the systems work, but who build workflows, training sets, and tools that keep brands visible even in a world without SERPs.
Like it or not, we are in a new era of Search. The relationship between user and search engine has changed just as the relationship between search engines and websites has changed. We can sit here and argue about what it is or isn’t. Or, we can redefine our capabilities and software based on what conversational search is actually headed.
Mike King is the Founder and CEO of iPullRank. Deeply technical and highly creative, Mike has helped generate over $4B in revenue for his clients. A rapper and recovering big agency guy, Mike's greatest clients are his two daughters: Zora and Glory.
Discover what that means for your business and why AI generation can be your competitive advantage in content and SEO.
Sign up for the Rank Report — the weekly iPullRank newsletter. We unpack industry news, updates, and best practices in the world of SEO, content, and generative AI.
iPullRank is a pioneering content marketing and enterprise SEO agency leading the way in Relevance Engineering, Audience-Focused SEO, and Content Strategy. People-first in our approach, we’ve delivered $4B+ in organic search results for our clients.


----

Title: Decoding the Future of SEO (Measurement) with Mike King
Platform: YouTube
Source File: research/youtube-transcripts/michael-king-(ipullrank)/decoding-the-future-of-seo-measurement-with-mike-king.md

Content:
Title: Decoding the Future of SEO (Measurement) with Mike King
URL: https://www.youtube.com/watch?v=vhZS8trALwQ
Influencer: Michael King (iPullRank)

--- TRANSCRIPT ---
Mike King is founder and CEO of digital
marketing agency Ipull Rank. He's been a
search engine land search market of the
year and the hit hits keep coming.
Before he was decoding Google, Mike was
known on Festival Flyers as icon the
Mike King. A Philadelphia battle rap
phenom who toured with the Wuang Clan
Rake Nause and JC Cole. His origin story
is just as colorful. At 12 years old, he
taught himself QBasic. Scored a
Microsoft internship while he was still
in high school where he was, get this,
webmaster at Microsoft. Uh this was back
in 1996 when webmaster was like still
what we called people who did that. Uh
and then he had headed to Howard
University for computer science studies
until the tour bus looked more exciting
than the lecture hall. Uh that mashup of
code and creativity led him to launch
rank in 2014, which I could have sworn
it was longer than that, but 2014, it's
still been 11 years. great uh where he
and his team have been has driven over a
billion dollars in revenue through SEO
and content strategies for Fortune 500
companies. He's also working on a book
the science of SEO decoding search
engine algorithms published by WY and
set to come out this August. Today he is
joining us to talk about the future of
SEO and more just as important uh how to
measure it. Welcome to the show Mike
King. Thanks for having me. That was a
fantastic intro. I do got to correct you
on one thing. It's $4 billion. Four
billion. Oh, wow. Don't Don't sell the
man short. No. Got to update the
LinkedIn. Absolutely.
Uh no, we Yeah, we always talk about Jim
um before he got into the world of
digital uh anything was an obituary
writer. Uh and so that's so obviously
that was not an obituary, but he was
that's that's how he got his start and
why he was able to give everyone the
these glow ups. He won. That was
amazing. Exactly. He he always crushes
those. But no, I'm I'm super excited
today's conversation. Um, just knowing
that there is a lot of fluctuation in
the world of SEO. Um, and also just one
of these things that has always been a
little bit difficult to measure, maybe a
reliance on deterministic signals within
Google Analytics, but then you know a
lot of signals are diminishing and then
just this whole question of how do you
even know what you're doing is working
and and and so forth. But um Jim, I
think uh well, how are you thinking
about starting? you want should we dive
into a background primer given that most
of the folks listening yeah they've
heard of but they might not know about
it yeah I think so um and Mike feel free
to like did I miss anything in the intro
like that maybe give us like oh I mean
you you said a whole lot that I didn't
know you were going to say so I really
appreciate you doing the well research
and all that um but yeah as far as SEO I
mean I think it has been one of those
spaces where people don't really
understand what to measure because it's
always And you know the idea of rankings
being such a forward thing that people
think of but tracking rankings actually
never made sense at least not since
Google introduced personalization
because the way rank tracking
effectively works is it's like you are
spinning up a computer who the first
thing it's ever done is log onto the web
and the first thing it did when it
logged onto the web was perform a search
for your query and then you're capturing
that information and you're thinking of
that as like you know a basis of
measurement but it's not it's not a
reflection of any user's actual context
like no user is just logging on for the
first time and doing your search is
their first action so they're going to
see something different so inherently
it's flawed data that we've always used
um but you know I think like any channel
that is a referral channel the whole
goal is to draw people to your website
to do a thing. And so I've always
measured it in that way like how many
people did that we drawn. Were they
successful? Do they complete the goals
that we want? And then if we want more
input metrics then we kind of you know
go further out and think about well who
are the audiences that we are actually
capturing and are they the audiences
that we want? Are we targeting them
effectively? Because ultimately my goal
has always been how do we drive more
qualified traffic to a website.
Interest. So, one of the uh I guess
interesting trends that we're we're
hearing a lot about right now and
there's a ton of articles around there
about this um even that you know I guess
a couple years back it was even a year
ago the demise of HubSpot SEO traffic
and this was known as you know one of
those great uh organic traffic u
machines essentially um so just for
foresis given that they're largely
measurement predictions what is
happening right now in the world of SER
yeah so Google introduced something
called AI overviews about a year ago Um,
and it's effectively the blurb that you
see at the top of the search results,
which is pretty robust. You'll see like,
you know, whatever the answer to your
question is, and then you see a series
of citations that no one actually
clicks. So, the point is that it's
causing dramatic shifts in user
behavior. Far less people are clicking
on the actual results because they're
getting their question answered right
there in the SER. And so the measurement
discussion is is really important there
because people don't know what to do,
right? Because you are so used to
measuring clicks. You're so used to
measuring, you know, the conversions
that happen after the clicks and so on.
But SEO has always or not even SEO,
search has always been a brand channel,
but people don't think of it that way.
We only think of it as purely a
performance channel. And what I mean by
it being a brand channel is, excuse me,
users have always come to the serve and
in some cases not clicked through
because they got their answer from the
soul. It wasn't because there was an
answer box. It may have been they read
through a series of meta descriptions
and page titles and they figured out
what they needed to know and there's no
reason for them to click. But at the
same time, if you learned the
information that you needed and you took
an action, that is no different than
seeing a billboard that influenced you
to buy one product over another. As an
example, let's say you were looking for
like, oh, which which earphones do I use
for working out? And then you perform a
query and then there was a featured
snippet, effectively the precursor to
these AI overview things. Um, where it
said a list of different things. So,
let's say one of them was like Apple
AirPods and you're like, "Oh, it's a
good option. Cool. I'm just going to go
straight to the store and buy it." But
in the SEO space, we don't think about
that and we don't take credit for it.
They think of, you know, impressions as
like a BS metric because, you know, we
look at things like display that only
give you um impressions and we're like,
well, no one's taking action. So my
whole point here is that there is value
in this and we're starting to truly
learn that because it's becoming more of
this like zeroclick idea where the user
doesn't have to actually click through
to take an action. It's like the the big
shift here is that before someone would
do a non-branded search and let's say
you had optimized content for what they
were that answered all the questions and
you showed up in the top of the organic
rankings. they click through, maybe they
never heard of your brand before and
they read your content now. They're
like, "Oh, this brand had some great
content. Maybe they have some some good
feelings out of that." That that's all
brand awareness and brand consideration.
Uh, and then when they're ready to buy,
that company that produced that article
that they really liked comes to mind.
The only shift now is that instead of
them clicking through your link and
going to your content and reading it,
they're potentially seeing it in the AI
overview or in AI mode or in chat GPT.
They're not even going to Google
anymore, right? So, but it's it's still
the same behavior. It's just different
mechanics. Well, yeah. I mean, to some
degree, it's a different behavior
because, you know, again, like you may
have looked through four different sites
to get to your consensus like that you
derive yourself or if the query was more
complex, you might have to break it into
a series of searches and then synthesize
all that information yourself. Now,
Google is doing all of that for you and
that may cut down on, you know, who's
getting the traffic. Google keeps saying
like, "Hey, we're distributing in the
traffic to more places." But for someone
that like built their business on
getting the most traffic for an idea,
it's not really going to work for you. M
well one one thing you mentioned about
the impressions
not really mattering is that though
because they are um not determinist
there's no deterministic ideas
associated with those impressions like
we would see you know in the example of
programmatic that is one where I think
there is a degree of valuation in large
part because there's no click often
there's no click very few people click
but there is a deterministic ID
associated with an individual that then
passes through to the to the in
conversion so you can you trace back in
the mult attribution model is that Yeah.
Yeah. In the some degree because the
thing is like with paid yes you do get a
lot more like paid anything not just
programmatic and paid you get a lot more
data whereas with organic search you're
not getting much at all right like we
used to get keyword level data they took
that away like 15 years ago October
2011. Yeah I remember the the great
Google Analytics revolt day and then
there were all these like weird little
filter hacks I think you could put in
place to be like look I've reextracted
the phrase match or whatever it was.
Yeah. Yeah, a lot of people try to like
you know reverse engineer models which
doesn't make sense because your model is
based on what the SER used to look like
and yeah anyway so we don't have that
and now we're getting a lot like we
don't have any data for AI overviews or
AI mode. Google says that yes that data
is in Google Analytic or excuse me
Google search console but there's no
filter to be able to say like oh okay
this is a function of AI reviews AI move
and so what we're seeing is like this
big decoupling
of impressions and traffic they they
used to be you know directly related
like if your impressions went up your
traffic also went up now you're seeing
impressions go up dramatically but your
clicks either staying the same or going
down And the value though is that what
we're also seeing is while you're
getting less clicks, you're seeing more
conversions. So effectively, you're
getting a more educated user when they
actually click through. But if your
business model is based on, you know,
selling ads, that obviously doesn't work
because you want as much traffic as
possible so you can get as many
impressions like you saw. Um, so yeah,
it's a bit of a mess and the only thing
you can do to recover it is to go
further down the funnel and the keywords
that you target because deeper in the
funnel there are less AI overview. Um,
so the whole like top of funnel
orformational content, it's seeing like
anywhere from 20 to 60% uh drop from
traffic.
I I want to check on something you said.
I make sure I understood it correctly.
Did you say that Google is including
impressions from AI overview in Google
Search Console, but you just can't
filter it out to say, "Show me how many
impressions." Exactly. And in the Oh,
wow. Interesting. Well, when I hear
that, I go, is that a cardality issue?
Because I saw this um I think it was a
sim report recently where they were
saying the average query length has gone
from four um words to 26 words, right?
It was some ginormous shift. I think
we've seen a few of those sort of dotted
across. But I think part of what I
struggle with there is uh like
if if I'm asking a 26 query, the number
of permutations that can exist when you
have 26 words in a in a query, it just
infinite it would seem. And I believe
there is a cardality issue if I'm not
mistaken within like Google search
console where it's I think you said
reporting on the keyword not the search
quer the full query. Is that why there's
an issue here? because quite literally
I'm the only person who's probably
sketched that or maybe there's three of
us in the last week. So there's that
privacy issue that grabs 100%. Because
like we said, you're getting to a point
where the variance in these queries is
going to be so high that it's like you
can identify an individual user well and
Google has always said like that's why
they don't allow you to get that data
anymore. And there even in GSC a lot of
those queries are anonymized, right? So
like you you are probably never going to
get that level of data from them even
though we all know the reason why they
don't do it is so no one else can do
search marketing but that's another
story for another day. Um, so yeah, it
is a problem. But I will say this, um,
I like that the queries are getting more
complicated. Like as a user of Google,
things are so much better now, right?
Like the whole idea that I had to, you
know, look at five different queries to
figure out like where to go on vacation
with my kids was a pain. And and there's
a whole research paper about this by a
gentleman named Andre Broer who you may
or may not know but if you don't know
him you know his work he he's
responsible for the search taxonomy that
everyone uses so the
navigationalformational and
transactional he wrote this book called
or not book he wrote this paper called
the delphic cost of web search and in
that he talks about there being like a
high cognitive overhead for doing search
because first thing you got to do is
like take your information need and
convert it into Orwellian and newsfeed,
then put it into your search results,
and then you got to look at like all
this noise of what's happening from the
ads to the featured snippets to then the
10 blue legs, and then you may have to
do that multiple times because you
didn't get what you wanted. So, Google
is ultimately saying like, yeah, that
doesn't make any sense. That isn't a
good experience to anyone. So, how do we
put that right in front of you? And to
that end, they have physically made the
search bar bigger to signal to users,
hey, you can put more in here. And so I
think as a product, it is a good
evolution, but as a marketing, it's not
a great place to be. That's that's so
interesting. Well, and one of the Oh,
sorry. Did you want to jump in
otherwise? Okay. So, one of the things I
I um and you mentioned earlier, uh we're
seeing more conversions. And so, that
just triggered in my brain. And I was
like, okay, um, how do we know that?
Because you can't run incrementality on
search unless there's a method that
you're aware of, but or organic search
because historically that requires
either an audience level or or a
geospaccific hold out, but there's only
one internet and there's only one Google
and so you you don't have the ability to
sort of manually um perform exclusions
like that. How do you know that we're
seeing a seeing um a performance in
conversions or a lift in conversions?
Let's talk. So it it's not the like
sophisticated incremental way that
you're you're describing it. It's
literally like if you look at the trend
over time, traffic has gone down, but
conversions is gone up. Okay. And and
are there other So I guess so would
would it be fair to say the the world of
SEO at this moment in time is is largely
grounded in a um in in a clickbased
methodology. And that is maybe what's
causing some of the panic in the in the
larger ecosystem when you're talking
about we're seeing a decline in clicks.
And so you either just have to go by
feel or I don't know. Are there any
other methods of measurement here? Yeah.
I mean, not really. Like it's literally
what does the traffic do when it lands
on your site? And so because for so long
we've been like, okay, well, let's get
more traffic so we can get more like
that linear relationship uh existed.
Everyone is like, okay, well, we're
getting less of that. But again, if
we're seeing conversions go up, what
does it matter? The ultimate goal has
always been how do we get more people to
come and buy things or be leads or
whatever. So even if the the traffic on
the channel is not what it used to be,
as long as you're getting those business
goals, I don't think it matters though.
Interesting. Yeah, it's it's one of
those uh I look this is one of the
hardest things about marketing is
isolating the impact of a given
intervention at one moment in time when
this is changing and then simultaneously
I would imagine that um well like what
we're seeing in in Bing for example with
the way that they've thought about
showroom ads uh side by side with the
with the co-pilot interactions where
you're now sort of going there's an
organic interaction that I'm having here
on the right where I have to influence
this agent and then on the left is an ad
and that is a really strange experience
of what's actually driving the click
because you'll you may only see a click
through onto your site through a
showroom ad. You may never see it from
the agent, but the agent really did
influence it. Right. Well, I think you
know where we're heading is more world
where the web itself is secondary and
the agent's experience is the primary
thing that you need to like optimize
for. Yeah. Because it's going to be so
much of like people using these
interfaces and saying, "Hey, go do this
thing for me or go find me this
information." and they're not going to
visit your website like period. So the
traffic to your website is not
ultimately going to be what matters.
It's going to be what were the outcomes
and in fact if we're talking about you
know who was actually visiting if it's
the agent we need to get back more
toward like you know bot analytics and
log files and things and less about the
clickstream analytics.
Yeah, it's interesting because my my
initial thought is you know before you
know four years ago before chatp came
out we would measure organic search you
you could measure organic search like
upper funnel lower funnel right how many
where now we can just see how many
impressions but where people are seeing
our content but not clicking through
before they would click through and read
our articles and we would actually be
able to measure it that way right are
people clicking through and reading our
content and now a lot of that's like,
nope, they're just doing a search on
chatbt. Did our brand get mentioned or
not? And I I think there's if there
aren't tools already that are doing
this, I think there's a lot in the works
that are trying to measure how many
times your company has showed up in all
of the various LLMs to see like your
your your share of voice as it were,
right? And now you're saying that might
even be irrelevant a year from now when
it's not the humans that are searching
on CHD, it's their agents that are doing
that. And so like yeah, I'm just like my
mind is is swimming here trying to
figure out that means. So a couple
thoughts on what you just said as far as
like measuring upper lower funnel. The
way that we do it is by segmenting the
keywords and then aligning those with
the pages that are at the landing pages
to figure out like okay what is upper
funnel versus lowerfunnel traffic.
you're of course using GSC, so like
that's never going to match up with your
analytics anyway, but we can kind of
triangulate it to some degree. Now, as
far as the tools, yeah, the the one that
I prefer is Profound. I feel like
they're doing the best work there. um
and they're they're actively thinking
about all this sort of stuff. But my
only issue with with the that sort of
measurement like in general and I'm not
saying specifically their tool is you're
trying to measure something that's
probabilistic in a deterministic way
that doesn't make sense. And again it's
the same sort of idea with rank tracking
but worse because everything is so
hyperpersonalized on these circus souls.
So for me to be like, "Oh yeah, well,
you know, I'm I have a share voice of X
for this series of pro." Yeah, that's
true for me or whatever, you know, agent
on my side that's representing me and
doing all the searches, but that doesn't
matter for anyone else in in the world
because their contact window is so
different. And even personas don't
really work in this case because again,
it's like these responses are like one
to one at this point. Now for Google it
may not be so much at least for right
now because like AI mode they are
rolling out that hyperpersonalization
that memory and so on. They're using you
know the personal person personal
contacts where they're pulling
information from your Gmail and all the
other stuff in the Google ecosystem. Um
so I feel like at best what we can do is
some sort of like persona level
measurement of that but even that's only
going to be directional. So it's like
what how do we measure this in a way
that makes sense? I'm not 100% sure to
be honest.
Well, it's interesting because when you
mentioned profound there um and in my
understanding of a lot of these uh I
guess the modern AIO or GEO measurement
tools is that they essentially use a a a
quadrant ecological model. If you
remember back in school when Yeah, I
know. I I I had to Google that one. Uh I
was like what what was this thing that
we would throw a wooden square into a
field and we count the number of buns in
it? Um the idea is though is is it's a
sample of the entire field and then you
extrapolate out from that from that
small sample that you're able to
actually count the deterministic buds
in. And my understanding of what these
platforms are doing is they are
essentially running um you know maybe a
hundred prompts a day on a given topic
and they're taking a sample of the
ecosystem of how they feel about a brand
or or you know are you included what's
the sentiment and then extrapolating
that out but that inherently is going to
be errorprone and the margin of error or
the confidence interval there is going
to vary quite wildly across the type of
query and I imagine the closer you get
to the bottom of the funnel perhaps the
more personalized you may become knowing
preferences and and those is that is
that how those platforms
as far as I understand it. Yeah. So, so
I know most about profound and they do
almost exactly what you said, right?
Like they'll have a few hundred prompts
or whatever prompts you give them, it
can be thousands or whatever and then
they roll all that up into your share of
voice and with sentiment analysis and so
on and so forth. And like I said, I I
feel like for what they're doing, it is
a great job. I also don't have a better
idea of what to do um specifically for
like a chatb or AI mode but you know
again when it comes to something like AI
overviews where there is some caching
involved and it isn't as personalized I
think that there's some clear things
that we should be doing. So as an
example,
if your brand is mentioned for a
non-branded term, that is something that
you should explicitly be measuring, you
know, because you are that is like brand
awareness. That is a brand awareness
metric. You should get you should be
measuring the impressions that you are
getting for your non-branded term where
your brand is showing up because even if
a user doesn't click through, you now
have like penetrated their mind share
when they've done that search uh even
though they weren't thinking well. Um I
think that excuse me more of the like
clickstream tools like uh the the panel
based tools like uh similar web dos
things like that are going to become a
lot more important in the SEO space
because they're going to give us our
only real visibility into those search
journeys. So you'll be able to see
something like okay well you know a 100
users started from this non-branded term
then they came back later in their
journey and they did a branded firm
because they saw you and I think
measuring the growth of that or for lack
of a better term the conversion rate
from the non-branded term to the branded
term is something of value to indicate
that users are finding about finding out
about you and then thinking about you as
they go through the rest of their
journey. So I think that the the
landscape of measurement for search
needs to change and I suspect the same
idea with this um you know the panel
based stuff will probably need to be
injected into schools like folk down and
things like that so we can have those
like cross uh cross session um insights
that we otherwise will not be able to
get.
Yeah, it's always one of those
interesting things where you think about
um measurement does lead to practice
often because it's the fish climbing a
tree problem in the sense of if you're
trying to measure it in this particular
way, you'll look for interventions and
mechanisms that would have driven to
that KPI. But if the KPI here is going
to be clicks, well, those are going to
perpetually diminish given the new um
the the new the the nature of an
interface versus a surface perhaps uh in
the scenario. So that that's that's
really interesting. Um and and I you
know I guess maybe because I think about
this in two there's this way of um SEO
measurement as we think about should you
invest in doing SEO or you know should
you invest in influencing these these
agents and then there is the measurement
of the practice to know actually what
works. So I'd love to lean in on that
side. Um unless Jim did you have any
questions about the macro measurement?
Okay let's talk micro measurement. How
do you measure what works in SEO knowing
that it is such a black box?
So the thing is historically the black
box wasn't so opaque, right? Like you
can know most of what Google is doing.
Um because it's all out there. Like if
you read the white papers, if you read
if you go to talks from engineers that
work in information retrieval, like they
told us pretty much everything that was
happening. The problem now is that with
reasoning coming into play and also this
this technique that they call query fan
out where you know you put in your query
your explicit query that you're looking
for. They extrapolate that to dozens of
other query and then they're pulling
results for those dozens of other query
and then taking the most relevant
passages and then bundling that all up
to then send it through a chain of
thought reasoning chain to then generate
your response. that we have no
visibility into. And even if we did,
they are taking all the passages and
they're saying compare this one to this
one. Okay, whichever ones are the
strongest one, those are the ones we
send to the final language model to then
generate the response. So that like what
do you even do then? You know what I
mean? Like what you I can tell you what
you do. What you do is you're
effectively thinking of of optimization
as like a matrix problem. meaning that
you can't just optimize for your landing
page that ranks for that core query in
standard organic. You have to also on
your own replicate what Google is doing
in the query fan out identify those
queries and then figure out where um
what your landing pages are and then
also optimize results. So it becomes a
much harder thing and there's no tools
to support it in the SEO suites yet. SEO
like the SEO software industrial complex
is like at least 10 years behind Google
and so it's very difficult when I I see
people out in the space saying like oh
it's just SEO like all these new
generative AI surface it's just SEO but
it's like yeah it would be if SEO was
what it should be and if not it's really
just like a handful of people who know
the deep technical understanding of how
things work who've been building like
their own tools, ingesting some of the
data that does exist in the SEO software
space and then enhancing that to be more
like what Google is built. So as an
example, I've miss I've mentioned the
idea of passages and number of found
there is nothing that will identify the
most relevant passage on your page for a
given keyword and then help you optimize
that. Everything is just looking at the
page broadly in the sense in the Q. But
since we've been in this like ditch
retrieval world for like the last, I
don't know, seven, eight years,
SEO just has not kept up. And so, um,
yeah, those are the things that you can
do, but you have to have, you know,
someone that understands natural
language processing or computational
linguistics or something to help you.
And then there's a big gap between
identifying the problem and then having
a writer that can then optimize
accordingly. So there's just a huge gap
in our space and SEO is not ready for
this whole GEO environment.
Very Jim, I can go so deep on this one
if you want, but I I I know I'm so
monopolizing questions. I'm curious um
maybe take us out of the weeds a little
bit. I'm curious how the clients that
you work with and the brands that you
talk to, how they're thinking of this
shift from, you know, the 10 blue links
to now personalized, answer driven, zero
click environment where their
impressions are going up but their
clicks are going down. I'm sure you've
deal with clients, you know, putting out
fires every day where they're freaking
out and you have to kind of talk them
through like how what are you seeing in
the real world with your brands and how
are you dealing with that?
Yeah, right now it's a lot of education
because you know most clients don't know
what's happening, right? Like because
Google also didn't give us any like what
I'm calling air cover. They didn't like
hey user behavior is changing because of
uh user behavior is changing because of
these changes in how we are positioning
search results. And so, you know, we've
had to like show clients and say, "Hey,
here's what's happening as a result of
this." And the problem is like they
don't necessarily believe you at first
until you show like, "Oh, it's across
the space, right?" And so, as as the SEO
information, you know, whatever, like
thought leadership is caught up too,
like you have more software companies
saying like, "Oh, okay. on average is a
34.5%
drop in CTR when AIO show up. So now
there's more information but at the same
time a year ago um I I predicted this
like I wrote a blog post for search
engine land where I was saying like hey
I think that the title of it was how
retreat augmented generation is the
future of search and you know here are
all the things you think about and we
had built a model that predicted that
traffic was going to drop somewhere
between like you know 30% for everyone
and we also predicted that um you know
there'll be a redistribution of of
search volume like the head term won't
get as much the long tail would be much
longer it's going to get a lot more the
chunky middle will get a lot more as
well and also we predicted that you know
CTR would be low so
to your question I had already projected
this was going to happen and we had
talked to clients before they didn't
care they're like cool thought
leadership great that's why we hire you
but then I'm able to come back and be
like see I was Right. And we have a
plan. So, um it's been helpful,
but it's still a lot of education
because we have this this space where
like people are like, "Okay, well, we
want to be in Chat GB team. You heard
Chat GB is going to be bigger than
Google." First of all, no. Why? Like
Google is still like 13x in traffic and
still send out way more referral
traffic. Um, but because we have the
attention for that, we can then showcase
here's an analog because everyone knows
the chatbt doesn't send much referral
traffic. So, being that they know that,
I can then show you that on AI mode and
also AI overviews and you have an
understanding um that like I'm not just
making this up and we're just like not
doing well with your ass at all.
when when you're talking about the the
influence there of um well I guess
there's AI mode and you're talking about
query fan you know that starts to get
very complicated when we think about the
volume of information being processed
but when we think about AI overviews um
it seems from personal experiences that
they they they maybe um are a little bit
more static in nature and that that you
can sort of do maybe do the same query
twice twice and you get the same one if
not very similar um is there a is there
any kind of correlation or exercise
right now that you're looking at I
Because historically it's always like if
you've got really good content and
you've got a lot of people, you know,
linking back to you, good chance you
rank in in in the first position. That
is a is a is a model that can be drawn
out through causal inference or causal
impact that you can use to then look at
what is the relationship between this
activity and this. Are there activities
that you are seeing right now that have
a causal inference uh or causal lift
associated with um AIO view integration?
Yeah, so they they both use query fan
out. It's just that AI reviews uses it
to a smaller extent. So while you know
uh AI mode might do like dozens of
queries, AI reviews might just do like
10 or something. Okay. And is that just
like the 10 blue links then is there's
like these are the 10 links. So if you
rank on page one, that's all it's going
to include. So, we as an industry, and
I'm including myself here, we mistakenly
thought that you could rank like, you
know, number 70 or whatever and still be
in the AI overview. That's not what was
happening. It's because you ranked
number three for one of those query
fanout rules. So, anyway, in answer to
your question, the thing you need to do
is improve your relevance. And improving
your relevance um is a quantitative
idea. So, it's effectively the cosign
similarity between the query and the
passage itself. And so the way you
improve that is by um you know using
semantic triples. So you know subject
predicate object like that structure in
your sentences. You also want to be very
specific. You want to have uh data
points in there. So you know you want to
say like um you know this was 16% better
than that or whatever. That structure in
your sentence is a easy to extract data
point that can be fed to a language
model. uh you want to improve your
readability. You want to structure your
your paragraphs to have be talking about
one idea because you know vector
embeddings are are how all of this
works. And when you have a bunch of
things in the same paragraph and you
embed that, it's not going to have as
high relevance as if you had one subject
being covered in that paragraph. So
interesting. So it's kind like if
someone's just ranting wildly, there may
be some good ideas floated throughout
there. Uh but the the context is going
to be lost or the I don't know the far
right now premacy of topic. Yeah. No no
no no I think this is all fairly fairly
constrained here. Um it is though the
nature I think of of human conversation
and podcast where that is how we sort of
go as we meander our way around. I'm
like huh that I know we're talking about
natural language if that seems a little
not natural or perhaps a little um
choreographed language perhaps. Oh yeah.
But ultimately it it's doing that and of
course yes like the the standard ranking
does come into play because the
candidate documents are still being
pulled from the search engine.
Interesting. So you do still want to
like bulge your links and so on. But the
reality is that a lot of that stuff that
was the classic SEO again hasn't been
done right. And we've learned a lot more
about this because all the different
leaks that have came out come out of Boo
in the last uh couple years. So there's
the EOJ antitrust trial uh documentation
testimony. Then there was also the
documents that leaked that I covered
last year. And then there was another
gentleman um who found an exploit in
Google where you could see all the
metrics use the computable search. So we
have way more information now and you
know people broadly would build links
based just on volume but we now know
that Google is really looking for
relevance on the source and target of
the link. And so it is some of the same
tactics, but you just got to be more,
you know, specific in what you do.
Otherwise, they just get ignored.
Sorry, I know Jim, I'm like I just I uh
there, if you got one, please jump in,
but um there was a uh an article that I
saw recently where Lily Ray had a post
about something in the Google ecosystem.
Now obviously she is a wellrespected SEO
in the in the community but it was on
LinkedIn and it was one of those things
I'm like what's the measurement here?
What what what are the decisions in the
measurement in this process as to why
that would become the AI overview
basically verbatim. Um is that have you
is I guess maybe the question here is is
there a way to measure entities in this
space even if they're posting on sort of
rented ground like LinkedIn? Yeah. Yeah.
So I mean that's one of the things that
we're saying to do now like build on
rented brand because that is getting a
lot more of the visibility. So when you
think about all the discussion forums,
the Reddits of the world and all that,
which I don't think the world needs more
Reddit, but here we are. Um that is one
of the things that Google is using
because they feel like it is a more um
you know reflective opinion of real
people rather than like some polished
optimized piece of content from a
business. And so to that end, what
you're describing is is like people are
posting on LinkedIn post and then
Google's like, "Cool, let me just smash
that and throw it in the AI overview
because they feel like that's come from
a more, you know, um, what's the word or
unbiased source than if it came from,
you know, me writing about myself on my
website or something." So, right now, if
you want to get an AI overview,
absolutely like just just spin up a
listical on LinkedIn post and you got it
like right away. Um, but I don't
anticipate that that's going to be
something that's going to be so easy
moving forward because Google always
plugs those little exploits or holes or
whatever as they become more popular.
Well, yeah. I was just thinking like how
do you even measure that because I
LinkedIn has both incredible content and
a successful pool of content and you
know the the in between is did it get
social proof were there you know lots of
people talking about it sharing it all
all those kind of things is social proof
then the signal that is measurable here
that you would then use to determine uh
viability of AI intervention no you
would measure whether or not it's in the
citations on the
right right but then how to get to the
citation I guess is the is like why was
that citation important versus say a
YouTube video on the topic versus your
brand website. All right. So yeah, that
that's again where measuring the
relevance of the pathogenes become the
flaw. So so in a case of a a YouTube
video, what they're going to do is
they're going to transcribe that anyway
and then embed the transcription. So
again, it's still going back to, you
know, measuring the performance of the
words versus whether or not it appears
in the citation.
Do do you think uh
the AI overviews and AI mode and chat
are they considering other signals
beyond just relevance of the passage to
the the query that the person asked? or
like like say like if given two equal
LinkedIn posts on the exact same topic,
this one got 100 likes and
20 comments and this one got 10 likes
and one comment. Is there any do you
think there's any mechanism in there to
look at other signals just beyond the
the the relevance? I forg
um but again like the relevance isn't
just the cosign similarity between the
prompt or the query and the poppy. It's
also uh through the lens of the
personalization as well. So it doesn't
fit the contents of the so that's going
to be another like you know again
because it's all vector embedding. So
it's going to be the relevance between
however they're they're vectorizing the
users contacts and the copy itself. But
in the Google environment, yes, it is
going to be some other things that are
effectively like the ty breaks going to
be the links. It's going to be um you
know some of the other things that
Google is is storing like the user
interaction signals. So click the time
on page or excuse me wild time things
like that. Um and Google has effectively
composite metrics for all these things
but those also inform the ranking as
well. So really what we're talking about
is the rewriting of this stuff after
it's been selectable. So for you all you
can control is are you in the the
candidate documents that initially get
selectable but reranking is outside of
all of that control.
Very interesting. Ah gosh I'm just
thinking through the the implications of
what this like in even the gym example
you shared. I'm like, okay, there's an
interesting test here to see, well, what
if three different people post the same
content on LinkedIn simultaneously? Uh,
knowing that one of them is uh is is
very well known, especially if they're
well known, like one of them is known
really well in SEO, one is really known
really well in paid search, would that
would they both get citations in that
scenario? Um, that's a particularly
interesting one. And also when you when
you talk about how they're just looking
at the transcription there, I go, well,
how do you measure sarcasm? Can you
measure sarcasm? Is it this is the this
is the rocks in a backpack rock backpack
in a parachute problem, right? Or rocks
on a pizza problem. Is is there a
measurement for for tonality as part of
this?
Um I know you can measure sentiment. I'm
not sure about tonality and we all know
sarcasm has always been difficult for
computers, right? Or I suspect things
are getting better, but I don't know
that it's like 100% there at this point.
Uh but to your point of of let's say you
got three different people that write
exactly the same ideas on LinkedIn, they
publish at the same time. Global already
has mechanisms for that. So you know you
talk about something like EAT, people
have always thought of that in our space
is like oh well the author bio is this
ambiguation thing. That's not how it
works. How it works is again we're going
back to vector embedding. Google
effectively has a vector representation
of every author across the web. And so
they're able to say, "Okay, well,
Michael King wrote this and such and
such wrote this. Well, here's all the
context I have on Michael King in this
vector embedding. I can compare that
against the query and I can say, well,
this is more relevant. So, I'm going to
give more uh value to this one than this
other one." So, it's not enough to just
be like, "Okay, well, we have the same
thing." because Google is is smarter
than that in their ability to understand
where things came from.
That's interesting. Does this open up
then the potential to measure um I
almost think if if you measure that and
you figure out then who are the most um
prolific entities in a given space um
and EAT stands for experience,
expertise, author, authoritiveness and
trustworthiness for all our listeners
like most of them all first exposures to
acronyms. Um, so I always like to to to
make sure that they they they have that
relevance. But when we're thinking
through that lens, um, and you isolate
say the top 10, is there a world then in
which brands go then I'm just going to
say Mike wrote this article? Like I'm
just going to put on my website and just
say he wrote it. He's very
authoritative.
Yeah. I mean, the ones with no morals
probably, right? Right. I mean, look,
every ecosystem has the good guys and
then the 1% bad guys. And you're like,
come on. Like why? Why? And look, we see
it in the major world, too. There's a I
would say a lot of snake oil platforms
out there that essentially are trying to
claim probabistic or or probabistic data
is deterministic and tell you like this
is what you need to do next but they're
really just you know trying to feed
themselves of whatever makes themselves
look the best which is a is a hard one.
That's a it's a particularly interesting
scenario just in terms of how that is
going to operate. Um, out of curiosity,
is there a measurement now associated
with how you would think about um, I
guess I would frame it as holistic
sentiment? And by what I'm getting at
here is if I search or if I ask the
query, what are the best hotels in San
Diego? And my, you know, a brand that
I'm working with, they show up there.
But then uh, then I search what what are
the worst hotels in San Diego? Does the
fact that they're in the best hotels in
San Diego mean they will not be in the
worst? Or if you get into the worst, can
you not get into the best? I'm just
wondering how you measure this the the
negative pull of of sentiment against
the positive pull.
I love this question. Um
yeah, I think it I think in that case
they're probably looking to aggregate a
lot of
information and again because it's going
to be query fan out they will probably
want to do a bunch of subqueries like uh
you know hotel San Diego's complaints
of San Diego's I don't know pests or
something like that and they're going to
basically aggregate all of those. So
it'll be like, well, okay, this hotel
appears on all these negative queries
nine times,
but you know, these all only appear on
positive bridges. And then when they
shuffle it all together, they're able to
do that. They're able to understand like
what they're so that's the the beauty of
using language models because they can
reason through all that information.
Well, and then the other thing you have
to think about from the business side is
like, well, we're going to have some
people searching um best hotel San Diego
for families and for that you might be
the best, but then other people are
saying best hotel San Diego for
professional trips and because you're
for families, you're not for
professionals or you know there there's
a mismatch there, right? So like you
might be the worst for professionals,
best for families. So you're showing up
as the worst and the best in different
categories of it. So it's like how do
you even start to think about that? I
don't know. I was I'm thinking through
the measurement limit. I'm just like,
yeah, if you can predict this, then it
becomes you basically have to run a
thousand simulations, right? Like you
got to create a thousand AI replicas of
people in the real world and have them
constantly performing searches to
cultivate a degree personalization and
then we send essentially a bot based
intent when 99% of traffic is bots and
1% is humans. Am I thinking about am I
crazy? Am I going off the deep end here?
I mean, the measurement for SEO has
always been heavily bots. Like think
about it, right? search volume for for
certain um longtail queries are just
rank trackers. Yeah. Yeah. Which is
terrifying to think about that. Well,
it's it's terrifying on one and the
other it's also just like is is this why
SEO is not getting the time a day at
times with the CFO of companies, right?
Is this why because there is a lot of
value. It's just really latent and very
hard to measure. And how how do you
think folks should be having this
conversation right now with their
finance teams about the measurement of
discipline? I have so many thoughts on
this. Like the fact that it's the
biggest referral channel and it gets
paid belief and gets paid least
attention has always
made me deep. But as far as far as
having these conversation, this is why
I'm saying like the brand channel part
of it is really important because there
is different level of investment for
brand channels and there's also not this
expectation that's held so high for SEO.
um for brand channels, right? Like cuz
when when you pitch to a CFO like, "Oh,
we want to do SEO." They're going to ask
you for projections. They're going to
ask you for all the analoges and
competitors and all this stuff. But
they're not asking you for that for
display. They're just like, "Oh, yeah.
We got to do display. Cool. Here's $10
million, right?" Or think about social
media. Like, no one's asking for
projections for social media. That is
another channel that is algorithmically
based that you have to really focus on
building content to do. But everyone's
like, "Cool. Well, it's social media and
sexy. Make more stuff. Put it out." So,
I feel like this is a good opportunity
for us to reset what the search channel
is and also manage the expectations of
like what sort of clips you're going to
get from it. Um, I think at this point
we should be thinking like let's call
it, you know, 60% performance, 40%
brand, and then also, uh, you know,
funded that way too, right? Like cool,
there's going to be 40% that we need to
just do cuz there's going to be a lot of
experimentation and again we may not be
get a lot of like direct response impact
from it, but we are going to get brand
lift from it and there's going to be
value there. And then the other 60% is
like all right, let's go lower in the
funnel and let's recover that traffic
and drive those outcomes in a way that
we did before. But again, the channel's
even gotten more more um efficient
because when those users click through,
they are actually looking to take
action. So I think that there is like
probably a you know a a simpler way to
say everything that I said to your CFO
and reframe the channel for them so that
you can get more value out of it will
also get more investment for
and if you need help reframing that to
your CFO Chad GPT will help you with
that. just take the from this uh audio
and dump it into chat, you know, clean
it up. Nice. Yeah. Have some wild
hallucinations with them as well. Who
knows? I I know as former SEOs, uh Simon
and I could we could keep talking with
you, Mike, forever. Uh but we do have to
wrap up. We're getting to the end here.
And one thing we like to do is the
incremental insight. Uh we like to end
the podcast with a takeaway. One thing
that marketers and analysts listening
can do immediately after listening to
the show. Do you have some tidbit, some
little nugget of wisdom, some tip,
trick, article, podcast, video that you
can share with our audience? Yeah,
actually have a tool uh that we made or
I made rather called Qoria. It's on the
Apple rank website and what it's for is
is identifying those query fan out
keywords. So you put a keyword in, you
got to get a Gemini key. I'm not doing
this. um get a Gemini key, you throw it
in there, and then it's going to
generate, you know, all the um projected
queries that Google Bullet is likely to
use, and then you can use that to build
your strategy for these different
circles.
Fantastic. Awesome. Awesome. Very cool.
Well, uh we'll put that link in the in
the show notes and um as as I I was
scribbling down a little uh tidbit at
the end, so I think I've got one for us.
In a world where irrelevance engineering
is the primary method of intervening in
the SE, but you're still measuring a
link by its ability to climb a SE. Well,
then there's probably time to measure
up.


----

Title: Office Hours: Optimizing for Google vs. LLMs — Yes, they're different!
Platform: YouTube
Source File: research/youtube-transcripts/michael-king-(ipullrank)/office-hours-optimizing-for-google-vs-llms-yes-they-re-different.md

Content:
Title: Office Hours: Optimizing for Google vs. LLMs — Yes, they're different!
URL: https://www.youtube.com/watch?v=TOjda22Zatw
Influencer: Michael King (iPullRank)

--- TRANSCRIPT ---
How to optimize for AI versus classic
Google search results is fundamentally a
huge issue for a ton of people. And
there's skepticism about whether there
are real differences. I'm going to tell
you right now, I shared that skepticism
because a lot of the people that I
follow in my LinkedIn feed and my
threads and my blue sky feed were saying
right from classic SEO world, which I
haven't been in for a while, they were
saying, "Hey, good optimizing for for AI
is just good SEO practices." And I was
like, "Oh, okay." Then last November, I
was in Tokyo with uh Mike King, who is
joining us today.
And I'm watching Mike present on stage
and Mike delivered an incredible talk
overall, but there was this one section
of his talk that hooked me and and kept
me uh on the edge of my seat. And it was
about exactly this topic, how to
optimize differently to appear in AI
results versus in classic Google search,
you know, rankings.
And I was fully convinced like Mike does
not BS around this stuff. He is not
coming from a place of theory. He shows
he showed examples. He showed the
research. He showed the data.
It's it's too compelling to ignore. And
so I'm I'm thrilled that Mike after the
event agreed to join us for our first
office hours of 2026
and share with you exactly how to do
these things and how they are different.
Uh the two questions that we always get
if you're late joining the the webinar,
one is how do I get the recording? You
already get it. Guess what? If you're
here, if you've registered, if anybody
on your team registers at that goldcast
link, you get the recording. It will be
sent to you afterwards. Uh two, if you
have questions, the Q&A tab, which is
which is right next to the chat and
messages, and there's a Q&A tab. Click
on that Q&A tab, leave a question for
Mike. We will answer all of them, as
many as we can, at the end of the
webinar. And with that, Mike, thank you
so much for joining us. We're thrilled
to have you. Uh please feel free to uh
take it away and and show us how to do
this uh this AI optimization thing.
>> Cool. First of all, thanks for that
introduction. That's a great vote of
confidence. So, for anyone that doesn't
know who I am or where I'm from, Mike
King. um from an agency called IP rank.
I was also just named search marketer of
the year for by uh search engine land
for a second time. So that's cool, too.
All right, so let's just jump right into
this. Um you know, the the primary
question is, is this just SEO? It's like
that all you need to do for AI search.
And my first disclaimer before I get
into this, my data driven beliefs don't
require you to agree with me. So let's
just leave that where it is. So, there's
been a lot of great research going on in
this space, whether it be from people
like Dan Petravic, uh me, you know, Met
Medahan, I can't I don't remember his
last name, but he's been doing some
great work as well. And also Josh over
at Profound has been doing some really
compelling research. So, this is one of
the uh things that he shared very
recently. He showed that from a bunch of
analyses that he did on some of the
standard ranking factors in SEO,
uh those only really explain like four
to 7% of the citations that are showing
up. He showed that there was like a
pretty weak correlation between things
like uh some of the linking scores that
we look at and so on. And then also in
that data that he looked at, he found
that there's just a lot of unexplained
variance in that performance as well.
And the ultimate conclusion that he
found is that content expertise,
freshness or things that we would bucket
under relevance broadly tend to show a
higher correlation with the visibility
of content. So one of the things that I
keep hearing people say is that AI
search uses retrieval, so SEO matters
more than ever. And I don't disagree
with that. But the thing is is that it
presupposes that our community has kept
up with retrieval. I think that our
quoteunquote best practices, the
software that we use, and this just the
general understanding of how things work
really contradict that idea. So on just
from like a data perspective, you know,
zip tie, they put out one of the first
studies that I saw on this subject where
they look to see like what's the overlap
between how things appear in Google as
far as like your rankings in standard
organic like the 10 blue links and then
how likely are you to appear in chat GPT
or perplexity and their data said that
being in the top 10 in Google gave you a
25% chance of appearing in AI search
Mike,
>> sorry to interrupt you. Am I seeing this
right? Is that is that saying that
there's only a 25% chance of showing in
AI overviews as well? The is that the
purple line?
>> Oh, damn.
>> Yeah. So, the overlap between Google
results and Google AI overview, not
high,
>> right? And the thing is this, what we we
didn't understand when this data came
out was the idea of of query fan out.
Like there was no discussion of that. I
don't think we as a community knew that
that idea existed because people were
doing this analysis. Even the the early
analysis that I did on SGE before was AI
overviews. There was no thinking about
that because we didn't know about it,
right? And then Google announced
>> and of course query fan out. I
completely understand that topic like
100%. And I'm an expert in that. But but
for those who don't know, [laughter] I
don't know what that is.
What is that?
>> Sure. So query fan out is the idea that
uh all of these different answer
engines, if you want to call them that,
um are taking the query or the prompt
that the user puts in and then
extrapolating it to a series of
synthetic queries. So, you know,
whatever your question is, like um you
know, how far is is Earth from Venus or
something like that. I mean, actually,
that's a bad one because that's that's
probably just coming from the knowledge
graph. But let's say someone is asking
like a complex question. They are then
going to break that into a series of
questions and then run those queries and
then pull different components from
passages from ranking pages to then
generate the response. So, it's not just
the pages that rank for whatever you put
in that's being used for AI overviews.
It can be a variety of other queries
that are running. And so, you have no
visibility into that. And that's part of
why this overlap is so small because
they're pulling from a variety of other
queries beyond what you typed in.
>> Okay. Okay. Okay. So, this would be like
if I search for, I don't know, a men's
tailor in New York, it might also search
for men's alterations or men's custom
suits or, you know, those kinds of
things and then pull results from all of
those types of searches,
>> right? And those types of searches vary
a lot. So, let's say, for instance,
you're like, uh, I'm training for, you
know, the New York Marathon.
What is a good training program? So,
they're going to ask a lot of implicit
questions related to that. So, you know,
how do you train to run 26.1 miles? Um,
[clears throat] uh, what is a checklist
for, you know, training for a marathon?
Like, it's going to ask a variety of
different types of questions. And you
know depending on the modality that
you're using like if you're in AI mode
there'll be a lot more of those
synthetic queries than if you're just in
AI overviews because AI overviews have
to be fast and it tends to be like five
to 10 queries that they'll use and the
chat chat GBT environment they'll use
like three to seven queries or so on.
So, we had no visibility into that. And
that's why when we look at data like
this, it's like, okay, well, what do I
even do, you know, because you're like,
well, I'm focused on ranking for uh, you
know, men's tailored suits, but it's 10
other queries that you need to consider
in order to get that visibility.
>> Got it. Got it. Okay. Thank you. I I
really appreciate it. I've seen the
phrase query fan out a bunch
>> now. Now I get it.
>> Cool. So um you know then we asked
profounder like hey like what are you
guys seeing and so for them they saw it
was even worse. It was a 19% overlap
between the Google SER and Chat GBT, but
I actually went back to Josh to see like
what's the latest and now that they have
query fan out in their data set, they
see that it's a 39%
um overlap. And so what they're doing is
they're able to pull the actual query
fan out because in chat GBT in the API
response uh you can see like in the
actual JSON you can see what was used
for those queries. So a variety of tools
are doing this now uh but I know
profound was like one of the first that
was extracting that data and they can
give it to you uh as part of their
platform. So,
>> uh, does Google does Google's AI
overview also show you the fan out? No,
>> it does not. So, the only way you can
get what they're using is if you're
using, uh, the Gemini API. And so, we
have a tool. It's called Qoria. Uh, we
were like the first one to like give you
QFO data. And what we were doing is
we're effectively using the Gemini API
and saying like, okay, based on all this
research that we did into the patents as
to how this works. Um, here's the
prompt, please generate me a series of
queries that you would if you were
trying to like answer this question. So,
we have that, but then you can also
using the Gemini API, they have a
function like a function call that it
does where it will go to Google search.
So you can use that to see what query
fan out queries it uses. And again, like
I said before, it can be anywhere from
five to 10 queries that it might use.
And so the the tooling that we use
internally, which I'm going to make open
source very soon, um does that. And it
it also does what I said before where
it'll like extrapolate based on what the
model will give it, but also you can get
exactly what it would use in the Google
search environment.
>> Killer. Okay, thank you. Cool.
>> So, another issue though is that so
there's a study that came out from
Semrush a couple months ago where they
said, you know, 28.3%
of the queries that are used have no
search volume. And that's that's the big
problem here. like there's a big
information gap in what the typical
tools are providing whether it's
Simrush, Hrefs or whoever about rankings
data because they're not going to track
rankings for queries below a certain
threshold of search volume. But the
queries that are used for query fan out
mostly have no search volume.
And the interesting thing about that is
again it kind of gives you that sense of
like these models are generating
queries. Yes, they do use like source
data from Google to some degree, but
they're they're trying to fulfill gaps
that aren't necessarily representative
of user searches. And so there's a
there's a lot of of keyword research
that needs to go into this where we just
have gaps in data uh to kind of validate
that these are the queries being used.
So, the big question or the big comeback
that I see from SEOs in the community is
like, "Oh, show me what you do for GEO
or AEO or whatever we're going to call
it that you don't do for SEO." And I
find that incredibly disappointing
because it just reflects how our
community really struggles with the
distinction between strategies and
tactics, right? So, think about this.
When you when you think about something
like outbound sales, PR, link building,
even fundraising, you use the exact same
tactics for all those things. You build
a list, you come up with targeted
messaging, you send it out, and you keep
sending it out until you get the results
that you want, right? So, no one is
calling those the same thing. There's a
different value exchange for each of
those, even though you do them the exact
same way. And social media marketing is
the same, right? Like all social media
marketing is is channel specific content
strategy. Like you are understanding the
nuances of the channel itself. You're
understanding the audience in the
channel. You're understanding the
formats of the channel and then you're
creating things and you're putting them
out. Like that's content strategy.
You're just doing it for Instagram or
Tik Tok or X or whatever it is. But
social media marketers understood that
there's value in in standing up their
own discipline because there is a
different value exchange for this. Now
for AI search, each of the channels is
different. They react differently. Your
strategy for how you structure your
content may be different. So treating it
like it's just SEO, you're you're kind
of missing the forest for the trees. And
that's not to that's that's to say
nothing about the fact that AI search
has attention from the decision makers
in business right now in ways that SEO
hasn't in like 20 years. And it's an
opportunity to reframe what you're doing
so you get more buy in and people
actually execute on it and you can get
away from some of the reputation
problems that SEO has. So on and so
forth. But here's a a concrete example
of something that is different in AI
search. So not sure if if the audience
is aware of the 499 HTTP response code.
Um but it was something that was
introduced by engine X I think like you
know 15 years ago or whatever but it's
also been adopted by CDNs and a lot of
like modern you know clients right
[snorts] and so because and what it
means is that the client gave up on
waiting for the server to respond to the
request and because all the AI search
platforms aside from Google and Bing
which have indices they're all fetching
the pages in real time. This is
something that we need to look for. And
so here's an example, right? This is a
client that I worked on recently that
they saw a spike in the 499s, which
again means that, you know, um chatpt
when it's coming to the to these pages,
it's like, hey, you're taking too long
to load, so I'm just going to move on to
something else. And so what they saw was
a dramatic drop in their visibility in
chat GPT because of this one thing. And
yes, fundamentally what we're talking
about here is you got to do log file
analysis, but SEO never taught you that
this is something you need to look for.
In fact, if you look at any blog post
that talks about, you know, the
different HTTP response codes, none of
them mention the 499 response code. And
this is a fundamental thing that is
keeping you out of AI search.
I'm sure we'll see a flood of these blog
posts after people hearing about this
though. So chatbt, you know, they use
both uh Bing and Google as their
indices. I mean, there's been a lot of
discussion as of late that they've
stopped using Bing, but nevertheless,
the whole point is that these URLs are
requested in real time. There is no
index. I've seen that things get like
short-term cached. If you keep like
saying like, hey, you ask the same
question and it goes out, it'll go out
like maybe two or three times and after
that it'll just use what's in the cache.
But beyond that, I don't see them having
like a long-term index in the way that
Google does. And so there's ranking
factors that are a bit different as
well. So they care a lot about your
metad description. As we all know, the
metad description is not a ranking
factor in Google. In fact, in most
cases, something like 80% of cases, it
gets rewritten by Google anyway or they
they pull something off the page.
Semantic URLs matter a lot. We know that
URLs have a very very small correlation
in Google. They
>> Wait, so just to be clear, so the the
metad description is used by chat GPT.
>> What?
>> Yes. It's it's not just like for getting
someone to click and I'll show you this
in a couple slides where they're they
look at it to determine whether or not
they're going to request the page and
then, you know, review the content and
use it as part of the response. Um
there's a recency bias. they look at a
lot of the UGC content and you know
content that has like extractable data
in comparisons like they bias towards
that. So when when AI search gets your
search result, you know, it's basically
what you see in the SER, right? Like
they're getting the URL, they're getting
the title, they're getting the
description, and if the snippet is
different, they may also get that as
well, depending on how it's structured.
And then based on that, they make a
decision like, are we going to request
this page and then use it? So your
metadata is the advertisement to the LLM
to determine whether or not they're
going to use your content. And so again,
some more data from profound. They found
that if you have a URL that uh you know
is is heavily like the slug is heavily
keyword related or high semantic
similarity of the slug, it has a it gets
11.4% more citations and they're seeing
that um you know if it's if it's very
specific to the query that's asked 5%
more citations there. So again, we all
know the URL like yes, ideally, you
know, you have a good structured URL
that doesn't have a bunch of parameters,
but we all know that Google doesn't use
that as a major rank ranking factor
anymore, but it is significant in the
LLM environment.
>> Huh.
[snorts] Um, so Bing's Copilot, you
know, they they use it they use their
own index with chat GPT on top of it. uh
the system can also take actions in you
know the the ecosystem. Uh perplexity is
using Bing and Google but they are
citation forward. So you know being that
they care so much about citations they
are more looking more deeply at the
content and and making determinations
of like where do we want to send the
user. It's it's less about the [snorts]
light review that these other systems
are doing. they are more trying to like
synthesize the information deeply to
give you that answer.
>> So it also means that you are trying to
there's going to be like different
strategic considerations. So as an
example,
one of the things that you often will do
in marketing to generate leads is not
have a pricing page. Like I pull rank
does not have a pricing page because I
want you to talk to us, right? And what
that means is that I'm losing
opportunities to control my narrative
because in this environment, they're
going to go look for an answer. So they
go to Cyrus's site, they go to Clutch,
they go to Design Rush, and they're
pulling whatever is in there to indicate
what my pricing is. So strategically, I
need to make a different decision for AI
search because of that. I need to say I
want to control my narrative around my
pricing and I may want to have a pricing
page. So is that just SEO? No, it's a
business decision that you need to
incorporate into what it is that you're
doing
>> to totally different. Can can I ask Mike
on that on that pricing thing? Is there
is there evidence that essentially I if
let's say lots of people on the internet
are saying some wrong or old thing but
the page on your site
>> says the right most updated thing
>> that the LLM will will bias to the
answer that's on the domain that's being
asked about.
>> It depends which LLM. Um, and I've seen,
you know, varied responses from this,
right? Like I've seen if you have your
primary page that's saying what your
pricing is and other people are saying
something different, AI overview will
say, well, I pull rank says that their
pricing is this and these other people
say that, but you'll be like the first
part of the response. Um, in chatb I see
it more being the consensus rather than
what you say. Yeah, we we've struggled
with this a bunch where where, you know,
like old descriptions of Spark Toro from
its early days when it was based on
Twitter keep showing up in AI overviews
and we're like gosh, how do we how do we
get it to talk about the Spark Tour
that's been around the last four years
rather than the one that launched in
2018
>> and yeah, it's just been a struggle.
>> A lot of this is actually way more akin
to reputation management than it is like
standard SEO. What I mean by that is
it's like you got to think about the
content ecosystem. It's not just the
page on your site. So you got to think
about like how do you spread that
message across this matrix of queries
and across a variety of formats and
sites and so on so that then the
consensus is your message not like what
everyone else is saying about you.
>> I mean controlling stuff on our own
sites hard enough. [laughter]
Yeah,
>> here's another one of my favorite
retorts. People say things like, "Oh, I
didn't do any of that fancy GEO stuff
and I'm in chat GBT in 24 hours."
>> I see that all the time,
>> but I've never seen someone show me that
for a competitive prompt or query space.
If you can, I'd love to see it. So, my
DMs are open. Send it to me.
>> Um, this is one of my favorite ones.
Chunking is a scam. So chunking
which is basically like restructuring
your content in a way that it's you know
more bite-size and you're having like
atomic units of information basically
and what in in practice it looks a lot
like thing that you would do where
you're like breaking up paragraphs and
not having walls of text and so on. And
you know, I highlight this blog post
because it it's one of the blog posts
that Cyrus wrote back in the day that
was really impactful on me. Um, it's
called 10 super easy copywriting tips
for link building. And he comes out
swinging in this in this post where he's
like showing side by side two things
that you had written and showing how the
thing that had a lot more structure
performed better than the wall of text.
>> It performed better on like linking. It
performed better on time on site. like a
variety of metrics it performed better
on. And I remember Jamie uh Stephen, he
had sent it to me. He was like because
when I first started writing for M, I
was writing like these big walls of text
and he was like, "Yo, check this out.
Use this to inform the way that you
write." And anything I've written since
you can like tie back to the the the
concepts in this blog post from Cyrus.
And you know, when we're talking about
chunking, chunking is really the word
that's used on the AI and information
retrieval side for what these systems
are doing with your content. They're
breaking them down into passages and
then indexing them that way and then
those chunks are what what are being fed
to the language model to generate these
responses. But when we're talking about
chunking as to what we're doing as
marketers, it's really restructuring
your pages. And so people have been
saying like, "Oh, chunking is a scam."
Well, here's an example, right? This
paragraph that I have here, it's
targeting the keywords machine learning
and data privacy. And just for clarity
here, both search engines and large
language models are built on something
called the vector space model where
they're effectively plotting your
queries or your prompts and the
documents that we're talking about
whether they're passages or full pages
or whatever in multi-dimensional space.
And then the queries or prompts that are
physically closest to the documents or
excuse me the the documents that are
physically closest to the query are
considered the most relevant and that's
measured in a variety of different uh
distance measures uh one of which is
called cosign similarity. So what you're
seeing here is this one paragraph I have
done cosign similarity on it between
machine learning in the paragraph and
then data privacy in the paragraph. And
so the scores here for machine learning
are 6481 and for data privacy 6948. Now
I have simply split that one paragraph
in half and now I've measured the same
thing again. [snorts] So for the first
paragraph which is focused on machine
learning the uh cosign similarity
improved to 7477
which is a 15.4%
improvement and then the same for the
data privacy paragraph is now a 7634 a
9.78 improvement. So in those
environments, just me splitting this in
half has made them more relevant and
more um they have more potential to
perform in those systems.
So when we talk about chunking like this
is part of what you're doing. Again, you
need to be thinking about humans first
and you need to be structuring your
content for humans first so that it can
be more performant in the ways that we
had just seen. But this also supports
the nuances of these systems that you
want to be more visible in. So
anyone that says that that is like not
worth doing doesn't know what they're
talking about. And then Danny Sullivan
just the other day he said something to
the effect of Google doesn't want you to
make bite-size content and that Google
may make a change down the line where
that no longer works. Here's the full
quote. I'm not going to read it to you,
but you know, you you can see it on the
internets. And here's the problem with
what he said. It doesn't align with how
these things actually work or where the
research is going for all of these
different systems.
>> It doesn't It doesn't even align with
how people read. [laughter]
>> Exactly. Exactly.
>> What the Come on, man. Doesn't Wait a
minute. Wait a minute. Am I incorrect
here? If we go pull up a bunch of Danny
Sullivan blog posts on Google, aren't
they chunked? Aren't they like short
little paragraphs with a couple
sentences on each topic and then it's
like all broken? He doesn't write big
freaking walls of text that go whatever.
Whatever. [laughter]
>> So, so this all started with passage
indexing. Like this is the the
innovation that allowed all of this to
happen, right? like Google announced
this I want to call it like 2018 or so
where they went away from just
understanding pages on the full page
level to understanding it on the passage
level right and so that that then
ultimately gave us retrieval augmented
generation which is how all these things
function but to his point that like oh
things may change you know soon and and
all the chunking you did won't be
valuable again that doesn't make sense
so with the state-of-the-art these are
some of the key innov innovations that
have come out of research that Google
deep minds been building on top of you
know the various like Google research um
organizations in the company have been
working on. So there's something that
Berkeley rolled out called uh ring
attention that really like is taking
long sequences and then breaking them up
and then rotating the sequences. And so
what that means is that they're taking
passages and they are looking for where
there is you know unified meaning in a
single passage. So again like you doing
chunking
helps this right and then Google has
something
>> I'm sorry
>> I'm sorry I don't I don't want to stop
you but just like on this specifically
so I saw Daisy by the way great to see
you in the comments. Um, Daisy saying
like chunking is just good content
structure and I is is that is that
generally right or is is chunking like
this process of I think what I'm hearing
you saying is chunking is like take a
specific topic se separate it out write
about or provide information about only
that thing
and then move on to the next topic
rather than trying to blend multiple
ideas concepts information into a single
paragraph or a single sentence. So,
where it's different from just content
structure is that we can have a
measurable feedback loop. And what I
mean by that is like the same way I just
showed you how I measured cosign
similarity of what I've done there. When
you're structuring your content, there's
a series of different measures that we
might want to use. We have a a ton of
different metrics that we use on the
relevance engineering side of things,
but effectively we can make an
adjustment, see how well it scores, and
then have validation or verification
that this is better than what we had
before. Now, the difference is that, you
know, historically like all the content
editing tools out there, they're not
based on semantic analysis. They're all
doing effectively like TF, which isn't
the only thing being used in these
environments. So yes, we are physically
doing what we've always done where it's
like use more headers, make sure that
this section is only talking about this
thing, using data points, using semantic
triples, all that sort of stuff. But now
we have the ability to measure it in the
same way that these systems are, so that
we can say, okay, that adjustment didn't
actually do anything. this one did.
>> Okay. Okay. Cool.
>> All right. So, yeah, we've got ring
attention, which is, you know, another
one of these innovations. And then
Google is also trying to move towards
infinite context where it's like, you
know, we talk about context windows. I
think with Gemini, it's like a million
tokens that they can look at. Google's
trying to continue to extend that. But
there's an argument that once you have,
you know, a large enough context, you
don't necessarily need
to like take a passage. You can take the
whole page. You can take the whole
internet and put it in there or
whatever. But even then, what they're
doing is they're compressing the
information. And when you compress
something that's messy, that has a lot
of information in it, that's like a wall
of text, you lose more information. If
instead you're compressing these smaller
chunks, you retain that information. So
even with this innovation, chunking your
content is better. Um, Meta has
something called Mewalker where they're
basically taking long for long form
content and then breaking it into these
hierarchical
uh memory trees and then they can
basically traverse the tree to get to
the information. But again, a chunk
works better in here in that you can
build this like map of semantic anchors
in the content and then reference it
again. Um, there's something called
recursive language model which came out
of MIT where they're breaking down these
longer inputs into smaller units and
then recursively looking at these
different chunks which I implicitly just
said chunks. So like that's going to
work better in this environment. This is
an innovation from MIT but Google built
on top of that with something called
mixture of recursions or M and this is
looking at more individual to tokens and
then like looking at things based on
their complexity but again even in in
this environment having [snorts] your uh
content chunked means that it's going to
be less complex and they're going to be
able to like review the content faster
which they're going to orient towards.
So they're not gonna like prefer a big
block of text. And then the last one,
something that Google rolled out or
talked about recently called nested
learning where they have something
called the hope architecture, which is
built on the idea of of what they are
calling memory infusion where they're
building long-term context. Again, in
this environment, having something that
is understandable on that atomic level
or a chunk will also do better because
anything that's outside of that chunk
would be considered noisy data and they
would get rid of it. So my whole point
here is no matter what they do,
structured content will always perform
better in these environments and also
for people.
>> Um, go ahead. I don't I don't want to
derail you too much, but a lot of time
when I write, Mike, I I write in a way
that is intentionally trying to not
sound like AI, like not just deliver
information, like let me give voice and
tone and tenor and humor and emotion and
all those kinds of things. Let me let me
play with words in ways that I know AIs
don't. Am I hurting my AI visibility
when I do that?
>> Uh, it depends. And what I mean by that
is like if you are mixing a lot of
things in the in the explanation of
something like yes, that is going to do
it. But like just because you write with
style does not necessarily mean it's
going to be worse for those
environments. Um, you know, because like
I mean I'm not as good as you as a
writer, but like I I also write in that
way where it's like there's a lot of
random aides and yeah, you know, there's
personality in the writing and so on and
so forth,
>> but it doesn't stop us from performing.
And that that's kind of my whole point
here. like what what um
what Danny said kind of presents the
idea as though doing the these
structural things
and um you know writing for people are
mutually exclusive and they're not. It's
just a constraint that you may want to
introduce so that your content can
perform better. Like the way I've always
looked at it is though if we're thinking
about, you know, user personas that
we're creating content for, the machines
are just another persona. I'm still
mostly speaking to, you know, the
segments of my audience that are actual
people, but I do have to also account
for, you know, the lowest common
denominator, which will be a machine
that doesn't understand things as well.
And to some degree, like that's no
different from accounting for
accessibility for your website
>> and that,
>> you know, you're still gonna make like
the best thing that you can make, but
you also want to make sure that, you
know, someone that's blind can get the
information that they want.
>> So I I just don't like the way that it's
framed as though, you know, like you're
doing this thing only for machines. Like
when we know fundamentally better
structure is better for everybody and
everything.
>> Yeah. Part of me, part of me wonders,
and this might be outside the the
context of what we need to get through
here, but part of me wonders whether
there's a case to be made for,
you know, writing for
saucy humans, right? Like like writing
like Geraldine does for people and then
writing for information retrieval of all
kinds, search engines and AIs, which is
which is fundamentally just a different,
you know, science of writing versus kind
of the art of
building human connection and emotional
writing.
>> Well, my point is that you can blend the
two, you know, like obviously, you know,
Geraldine's a fantastic writer, but like
I don't think you I what I believe is
that you can do something similar to
what she does, but also kind of like
drop in data points here and there or
have like very um direct statements that
are extractable. So, and and that's not
to say like again like she's a fantastic
writer. It's not to say that I want to
change what she writes or her style or
or someone like that in their style.
It's just that there are like little
things that can be sprinkled in. And if
you're doing it stylistically, it can
still work for both things. Like as an
example, rapping, right? Like if you are
a good rapper, you technically or you
typically have very strong technical
skills. And technical skills as they're
presented in rap usually means that
you're matching a lot of syllables.
You're using a lot of, you know, various
literary objects in your stuff. And you
may say to to yourself like, hey, I want
to do more of those. You still have to
connect with a human while doing that,
but you're saying like this is your
style. So, I think the same thing
applies to writing online as well.
>> Yeah. Yeah. Hugely helpful. Okay. Thank
you. Thank you.
>> Yeah. So, another one of my favorite
things that people say is like, "Oh, you
don't have case studies to prove this
works." Of course I do, but you're
telling me that you don't. So, um,
here's an example of, you know, a client
that we work with in the vehicle sales
space. uh you know we grew their their
chat GBT visibility by 661%
their AI overview visibility by 330%.
Largely by doing things that I've
described here um you know one of which
was well I didn't describe this here but
like the the technical components of
making sure the content is accessible
and then creating more content that
aligns with those semantic gaps that we
talked about. So looking at query fan
out, figuring out where they're missing
things and then plugging those holes so
that they have more opportunity to
appear as a part of these results. The
way I look at it is that AI search is
effectively like a raffle. And we don't
have a lot of control over what happens
in the synthesis side of things like
once the pages are selected. But where
you do have control is how many of those
synthetic queries do you rank for? So,
think of each of those queries in your
ranking being a raffle ticket. And so,
the more raffle tickets you have, the
more likely you are to win the raffle.
And that's basically how we do it. And
here's another brand. So, this is in the
telecom space. Uh, we grew their AI
overviews by 253%. Again, a lot of the
same work that we're talking about, just
making sure that the content is aligned
in the way that we're needed to be and,
you know, doing the adjustments. Um this
one a a financial services uh uh client
we work with. So [snorts] this was like
very focused on the various uh content
engineering metrics that we have and you
know just really improving that semantic
relevance for these pages and we saw
um you know obviously the results are
the most important part as far as like
for the business. We saw 121% increase
in signups 52.6 sex increase in organic
search traffic because another thing I
want to kind of highlight here is
there's no real difference between
search and AI search like all search is
AI search because all of the things that
are part of Google's technology are
being used for both things um but yeah
we saw 17x improvement in relevant
scores 24% increase in AI overviews
um and then 72 increase 72% increase AI
overviews per page. So like yes, what
we're doing is working, but my ultimate
conclusion here is that until our
software catches up, um it's not
realistic that everyone is doing that
idealistic form of SEO that we talk
about when we say it's just SEO. You
know, most people are doing a very
checklist focused version of SEO where
it's like, okay, I'll fire up this tool.
This tool tells me everything's on fire
and then I do these things. But a lot of
the things that that these tools are
looking for are so out ofdate with the
state-of-the-art.
>> Yeah.
So, just to wrap it up, like I said, for
my full rank, we also have this AI
search manual, which is 20 chapters of
pure fire, you know, I mean, of
[clears throat] everything that you need
to know about this, and we're actually
in the process of updating it as well.
So, you know, it's a great source for
you to check it out.
>> This is the only time I find it
acceptable to use AI art. [laughter]
>> And also, there's SEO week, so you know,
come through. I'm me. [laughter]
Oh, Mike, that was that was incredible.
I'm sure you saw some of the comments
that were just uh blown away and amazed.
But
>> thank you.
>> Wow. What what a master class in how to
do this incredibly hard and challenging
thing. Um we have got a very healthy
number of uh questions and I'm going to
hopefully get through as many as we can.
For folks who need to drop off the
webinar, no problem. The recording will
be sent to you, including the next 15
minutes of Q&A with Mike. Uh, that
recording is also available to anyone
who registers. So, if you're like, "Oh
my god, my boss needs to see this. Oh my
god, my client needs to see this. Oh my
god, my friend needs to see this." You
can send them the recording link. They
will get uh the last 45 minutes of the
next 15 with Mike. So, all right. Uh,
let's go through Oops. Most
uh All right.
Uh Kristen asked in here, "Are blog post
updates considered
recent if you update the content to show
recency?" You know, the the recent
stats, the content with this time
timestamps, or does the original publish
date on on so-called evergreen content
still affect or or harm you?
>> So, that's another place where it's
going to be different in Google than it
is in these AI search platforms. So the
way that Google measures recency is that
they basically have like their index
works like the wayback machine. They
have various copies of your pages over
time and it also drives uh how often
they crawl you because they basically
score how often you truly update things.
So they don't trust what you put in the
um site maps or anything like that. Now
on the AI search side because there is
no index they are heavily relying on
whatever date you put there and even
with Google they do look to associate a
date with all your content like even if
you don't explicitly have one in there
but you say something like oh 5 days ago
they will try to use that implicit date
that you use to associate that with your
content. So whole point here is like
yes, update the dates and update the
content and you'll see better
performance.
>> Awesome. Uh Colin asked about the query
fan out uh issue. Does does query fan
out solidify the the sort of long-held
ideal of writing for more than just a
primary keyword set like like that you
might focus on a a topic or or a primary
search keyword but then you try and work
in a lot of secondary and tertiary
keywords like is that classic you know
SEO from 1015 years ago is that still
relevant? Yeah, that that's exactly it.
And again, I think that kind of went
away with when passage indexing was
introduced because because they're
looking at things on a passage level,
they can be like, "This is the greatest
passage on the internet for this query
that is not your target primary query.
So you can think of like every page
having many opportunities to rank for
things rather than just like your one to
three primary queries that you were
thinking about.
>> Right. Okay. Awesome. Uh
male asked and and Darren Shaw actually
asked about this too
with these differences in in sort of how
AIS do things and now Google AI overview
and AI mode. uh how important are
metadata
um accessibility and and specifically
schema?
>> Yeah, all of those are really important
and and that's another argument that's
been happening in our space. That one I
don't really uh engage in like whether
or not you should use structured data. I
mean, we just keep seeing more and more
evidence that these LLMs can consume all
of the structured data. They're not just
using the things that Google gave rich
results to. So, one of the things that
we are doing is like going back through
and saying like, well, what vocabularies
were we not using that are worth
considering for a given page? The
metadata incredibly valuable. Um, you
know, because again, like that's what's
being used to determine whether or not
they're either even going to fetch your
page. And then the accessibility. Yes.
Really important because I mean it kind
of speaks to like the the lack of
rendering content, right? Because like
most of these platforms are not using
JavaScript. So what you're probably
doing as a function of accessibility is
also going to support them understanding
your content as well as possible.
>> Okay. Okay. Yeah. Cool.
um how how important are are is a URL
string itself should should people be
focused on that more or is just a hey
this is a small little signal if you
know if you have it structured in a
particular way you don't need to worry
is it problematic if you use you know
slashblog versus slash articles or have
a does subdomains versus subdirectories
still matter all that kind of stuff
>> yeah I would not go back and change your
URLs because again that could be
catastrophic for classic search but
moving forward I would probably think a
bit more about what's in that string or
within that what's what's in that uh
slug because way it's interpreted isn't
just going to be like oh does it have a
high cosign similarity like the language
model is going to read that it's going
to read that text and be like oh yeah
this is highly relevant to that user's
prompt
So I would moving forward probably have
like longer slugs. So like what you have
on your blog post where it could be the
full title of the article rather than
like reducing it to just the target
keyword
would probably would be a better
approach moving forward, but I wouldn't
go back and change URLs.
>> Cool. Okay, that is that is very
helpful. And also
[laughter]
um some work off our plate. Uh can you
can you speak to the so uh Becca
commented that like for example when she
asks questions to chat GPT or or or
Gemini Google AI mode that kind of stuff
she's seeing that a lot of the time they
will site things especially on Reddit
from years ago rather than more recent
but maybe like less um
uh you know fewer response threads.
that have happened in the in the more
recent past. And I see the same thing,
right? Like when I a lot of the times if
I search classic Google, I will see the
most recent Reddit threads.
>> If I if I use AI mode, I'm seeing these
like older ones a year, two years, four
years. Um what is that a oh that's
that's just random. Like that's an
anecdote. That's not that's not data.
They do prefer recency. or is that
because of something that the AIS are
doing differently than than classic
Google search?
>> So in the example you just gave it may
be a function of the fact that AI mode
does more queries in the query fan out
like AI mode can do 20 50 in some case
I've seen like a 100 queries that it
runs uh because the way they think about
it is like if you're in that environment
it can be a slower response whereas in
search it needs to be almost instant. So
it may be a function of the fact that
they are uh running more queries and
some of those Reddit posts come up for
different things and being that they're
they may be longer posts, they may be
more relevant to whatever that query is.
>> So it's not necessarily about the like
like authority or or having built up
links or anything like that. It's
basically there's a whole lot more
content on a lot of different topics in
this old thread.
>> Yeah. Let's show we're going to cite
that one rather than this new thread
which is hyperfocused and has only four
responses about this specific thing.
>> Right? So I mean there generally is
still a recency bias for Reddit
specifically. Um but it can be
overpowered by the relevance bias.
>> Got it. Got it. Very helpful. Okay. That
that fits with everything you said
before too. Okay. Uh well, Melissa asks,
"How are you tracking AI visibility?"
>> You know, I have many thoughts,
>> but I'm I'm going to put my thoughts
aside.
[laughter]
>> So, actually, I want to touch on what I
I think I've seen your thoughts are. So,
you know, the the primary concern that
people have about measuring measurement
of visibility in these environments is
that it's highly probabilistic, right?
And my counter is that rank tracking has
always been probabilistic. Not to the
same degree, but people are are
calling rankings a source of truth when
it's not, which is reflected directly in
what you see in your Google search
console data where they're giving you an
average of how you show up. So we've
already we were already using imperfect
data for rank tracking to begin with.
Now the problem is further compounded in
these AI search environments because all
three of us could do this exact same
prompt and get wildly different
information because of the context that
we have with the machines and so on. But
and then and then the different tools
are doing it differently. So some tools
are getting the responses from the APIs
which is going to be very different from
what you get from the interfaces. um as
I understand how profound does it,
they're scraping the interfaces and
they're also scraping it multiple times
a day. So the answer that you're getting
or the the the value that you're getting
is the average of how you're showing up,
which to some degree is not much
different from the value that you would
get from Google Search Console. So I'm
not saying that any of this is perfect
or it's the way to do it. I'm just
saying that of the approaches that I've
heard, that one makes the most sense to
me. But at the end of the day, for any
of these tools, you can't really expect
accuracy. You can only expect precision.
>> Okay. Yeah. Yeah. I I've always been
I've been deeply curious about like,
hey, if you know a thousand people were
to run this same prompt,
>> how how many different, you know, brands
would show up in a thing? which ones
would be first, second, third, fourth,
fifth, you know what, whatever. And then
how does that map to how any particular
collection or tracking tool might
monitor it? And is there enough overlap
to where you could you could basically
say like aha this methodology is
directionally accurate or like wow you
know whatever you know maybe maybe
profound takes a prompt and runs it five
times in a day and it's like oh it turns
out actually if you run it less than 500
times you won't get enough statistical
significance to be able to really say
how often a brand shows up and so
they're ju they're just throwing random
stuff at you like it you know it's just
meaningless
that that I can't speak to. Like I don't
know the nuances. I just understand that
they do it more than once. So it's like
at least it's better than just doing it
once and being like here's who you are
and where you stand.
>> But I think the other part of it and and
again I don't know if they are doing
this but I think that because so many of
these tools are also pulling in um
clickstream data they may be comparing
it against that as well. that that I
think would be a a real like a sciency
solution, right? Like that that would be
a provable solution. I would love that.
Um okay. Uh Mariss asked
where where do you begin with the
content restructuring process like you
know you work with a new client or
you're recommending to to an SEO out
there. They've got a page they feel like
hey this page provides a lot of very
important information. We want to make
sure that it is getting cited in you
know uh AIS. We want to make sure that
that information is being reflected in
the answers.
What do I actually do?
>> Yeah. And that's another place where I
feel like [clears throat] SEO software
is really falling short right now
because you should be able to put in a
URL, your prompts, and then it should
pull the query fan out and then it
should go through and score each of your
passages and say like, "Hey, this is
covering too many different topics.
split us up in this way or whatever.
[snorts] And you know, the reason I can
clearly describe that is because we have
equivalents to what I just said in
house. Um, and you know, like again, I I
intend to open source a whole bunch of
stuff that we're using because I feel
that strongly that the SEO space is so
behind and I hope that, you know, some
of these tools will just grab my code
and throw it in to their tools cuz it it
it's just such a miss right now. But
where I would start if I had no tools is
I would just read the content and then I
would say okay which of these paragraphs
is just covering too many things. which
of these paragraphs is not um you know
clearly explaining the topic and where
can I inject more clear extractable
meaning and that'll be basically like
what are the the self-sufficient
sentences or paragraphs and how can I
split things up and then also how can I
add headings that are like very clear
like this section is about this thing so
you have clear likeformational
boundaries in your content. And then
after that, I would start going through
and saying, well, where can I put like
data points that reinforce what I'm
talking about and make it sound more
authoritative? Also, how can I improve
the readability? Like, there's plenty of
tools out there that'll give you
readability feedback. And, you know, I I
just start with those things and then
see how that performs. And then by the
time you've launched your stuff, all my
free stuff will be out. Amazing.
[laughter]
Um, some quick lightning round ones.
Should brands avoid using acronyms or
shortened versions of their brand name
because essentially like um you know AI
can't recognize it or or make the
correct associations.
>> No, because you know all this stuff is
built built on basic natural language
processing. the whole entity, you know,
um, resolution thing. I don't want to
say it's been completely solved, but
like it's really good. So, as long as
you've defined that acronym somewhere,
use it. Okay, cool. Very [snorts]
helpful. Um, h how do you decide? This
is a little longer than lightning round.
How do you decide where LLM
optimization, you know, appearing in AIS
should sit on your list of initiatives
and priorities versus versus any other
sort of growth marketing or SEO thing
that you're doing?
>> Yeah. Um, I can answer that one fast
actually. Um, these platforms are more
branding channels than they are
performance channels. So I would think
about it more about like if this is a
brand effort that we need to care about
then yeah it it gets in your order of
priority based on that, right? Um but if
your goal is to drive performance, I
would not put AI search on the top of
your list because you know they it
drives just far less referral traffic.
It tends to be more performant referral
traffic. it's more qualified because the
user spent all that time educating
themselves in the channel, but you know
your your ROI is going to be reasonably
low at least right now from a
performance perspective.
>> Super helpful. Uh what about PR? Is PR
sort of the the quick way like is that
the cheat code to get mentioned by and
covered by AIS?
>> The cheat code is YouTube videos. It's
it's the second most used or cited
source in these platforms. Um, but PR is
super helpful because again, the more
your message is in more places, the more
sources to generate that consensus. So,
it's a big part of the play, but so is
user generated content because because
Reddit is still the number one cited
source across all of these platforms.
>> Yeah, Reddit, YouTube, that feels big.
Uh, do you do you think Instagram
threads
um Facebook
maybe even I don't know Twitter if
someone buys it and stops making it a
underage porn site? Um, like will those
will those platforms also become sources
or do you think that like Meta is
intentionally trying to keep AIS out of
them?
Um,
so
I I think it's more difficult because a
lot of that content is, you know,
multimedia and they don't have the level
of access that they want to be
[clears throat] able to ingest it in
real time. So Google has the advantage
there because they index all of YouTube
and so they have the transcripts. They
have more than that because they can
understand multimodal content natively.
so they can understand like what each
frame means and so on. So, you know, it
just speaks to Google just having more
advantages than anyone in this space and
long term they're going to win this
game. But to your point, I don't know
that we're going to see an immediate
usage of those platforms because of how
difficult it will be to use them in real
time.
>> Yeah. Yeah. Yeah. Uh, I think this is
going to have to be our last question,
but Mike Matthew Silverman's curious.
What's the most overrated advice that
you see in optimizing for AI?
>> That is just SEO.
[laughter]
>> Fair enough. Fair enough. Perfect.
Perfect. And uh, Mike, thank you so much
for joining us. This was absolutely
outstanding. Amanda, thank you for being
here despite getting over the flu. I
hope you feel better soon. Uh, and
everyone who joined us, remember Mike's
got a bunch of great resources on his
website at iPool rank. He runs this
amazing conference called SEO week in
New York that you should check out if
you can be there. Uh, and of course,
make sure that you send the goldcast
registration link to other folks. They
will get this recording as will you and
the slides. Amanda will make sure that
you have all of those in the next few
days. Thanks so much for joining us and
take care everybody.


----
