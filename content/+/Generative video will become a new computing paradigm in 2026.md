"Google's Veo 3 already produces 8-second, photorealistic, sound-on clips for just a few dollars per video, often indistinguishable from reality. Soon, you'll be able to generate near-perfect footage of anything, on the fly, for a marginal cost approaching 0, and video will become a new basic building block for software."

Ideas:
- Imagine being able to create a brand new season of your favorite canceled TV series. Or a personalized kids cartoon starring your own family as the characters. Or an AI-native successor to TikTok, where every video is made for exactly one viewer.
- Imagine you're shopping online, you'll be able to see yourself wearing the clothes or using the products you're browsing. And when you're apartment hunting, your stuff will be auto-staged in every listing you click on.
- We'll have video games built with no game engine.
	- Basically the [Autonomous Game Studio](https://trapezoidal-slime-884.notion.site/Autonomous-Game-Studio-2b1eefc87333802ba2c8e63600f774e7) from [Roam](roam.lol) — [[My architecture for an autonomous game studio]]
- We'll have APIs that return infinite robotic training data. 
- And we'll definitely be able to have video calls with loved ones long after they're gone.
YC ideas:
- **Video games with no game engine** (pure generative video)
- **APIs that return infinite robotic training data**
- **AI-native TikTok** where every video is personalized per viewer
- **Virtual try-on for e-commerce** at scale
- **Video-based simulation environments**

[[EgoX: Egocentric Video Generation from a Single Exocentric Video]] could create a new way to generate egocentric robotics data

Look at [Tavus](https://www.tavus.io/) and specifically understand what they built with:
- Phoenix-3 (photorealistic face rendering model)
- Raven-0 (perception engine)
- Sparrow-0 (conversational flow model)

LLMs need a better way to understand video the way attention modules understand text. Similar to [Narrative](https://narrative.video/) you can combine [Dexa](https://dexa.ai/) and [Pickle](https://pickle.com/memory) to make a way for videographers to search through B-roll. Imagine a proactive editor that string B-roll together to make a video from natural language. [[Memory layer that scrapes unstructured data from different modalities and uses data ontologies to make smart search engines for your data]]

Combining [[LLM memory layers require reasoning to create dynamic memory]] to create virtual versions of yourself using the models governed by Tavus


[[NeRFs]] are also a cool piece of tech that can help with video generation.
# Core Foundation Model Players in the space
- Google NanoBanana
- [Odyssey](https://odyssey.ml/introducing-interactive-video)
- [Decart](https://decart.ai/enterprise)
- [Runway](https://runwayml.com/)

# Opportunities from Mux
1. **Batch Video Generation & Personalization at Scale** - E-commerce brands need to generate 1000s of product variations with consistency (avatars, audio, timing). Current solutions either cost too much or lack consistency.
2. **Model Orchestration & Cost Optimization** - With Sora, Veo, WAN, Kling, and others all having different speeds/costs/quality, developers need a unified router to pick the best model per use case.
3. **Video Quality Control & Iteration Loop** - No standardized way to A/B test variations, collect human feedback, or iterate without full regeneration. Physics errors and character inconsistencies persist.

Observability to create better outputs on what we want. Why can’t we feed a model a 30 second video and ask it to continue the scene with a new character created from a reference image and voice? Or reshoot a clip so we can see a scene from a different angle, or make the motion match a reference video?