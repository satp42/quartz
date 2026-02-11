---
title: The things I have built
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
The thing I have built is part of my constant practice of building [[Power]]. To ship is to actualize a worldview. In a world where intelligence is commoditized, [[Agency]] has became the most important factor to live a meaningful life. This page isn't limited to just technical projects, but generally ideas that were actualized by me. My list of [[ideas]] can be a place to see the backlog of things I need to build. I also really liked [Jacky Zhao's idea of a failure resume](https://jzhao.xyz/posts/a-failure-resume), and so I also decided to build this out at [[My failure resume]].

# OverUnder

OverUnder was one of the deepest dive I had into startups. It was a localized prediction market where people could launch markets for their friend groups, universities, clubs, and communities with trust-less resolution. I built the full-stack — Next.js frontend with Privy wallet abstraction, Supabase for social layers, and Solidity contracts on Base L2 implementing an LMSR automated market maker for continuous liquidity provision. The technical innovation was in the resolution stack where I integrated Reality.eth's bonded system (adversarial attacks becomes economically irrational through exponential bond requirements) with a mixed approach of Kleros Court arbitration and EigenLayer AVS agents as the final backstop for subjective outcomes. This meant groups could open markets on anything from "will Satwik win the run club race today?" to NCAA game outcomes with cryptographic guarantees on settlement. The architecture used ERC-1155 on-chain access control, hierarchical LP pools where market creators earned percentage fee on volume, and an oracle adapter that combined the Reality.eth, Kleros Court, and EigenLayer logic together to event outcomes. I built the tokenomics around a three-sided marketplace where bettors got instant liquidity via LMSR, LPs earned 0.5% fees on volume, and creators earned percentage of total action. This idea led to me receiving a $1M pre-seed offer at 10% equity from a New York based crypto fund, but ultimately I did not take it due to our team’s shared belief that the regulatory landscape did not allow for sustained growth at the present moment.

# Advocate

Prior to building OverUnder, I was the youngest founding engineer at two startups. At Advocate ([tryadvocate.com](http://tryadvocate.com)), I built the agentic infrastructure with an indexed GraphRAG approach to insurance waiver laws. This helped the company close the third largest deal in their company to date. 

# LawLoop

Then I worked for LawLoop ([lawloop.ai](http://lawloop.ai)), where I helped build an AI agent that automates paralegal tasks like intake, document prep, and case management. I wrote the code for a proactive agent using Vercel's AI SDK with Pipedream MCPs to create a memory layer that proposed actions to end users. We distributed to 20+ law firms nationwide.

# PrivateLoRA + Multi-Token Gen

Another project I worked on was about optimizing the PrivateLoRA inference framework. PrivateLoRA is framework for privacy-preserving LLM personalization, where you offload 99% of compute to the cloud while maintaining a private LoRA adapter on-device. The issue is round-trip activations for every transformer layer means ~30 layers × 100ms RTT = 3000ms per token, or 0.33 TPS. Thus, I decided to take multi-token prediction to predict N future tokens simultaneously with independent heads, and combine it with LoRA's effectiveness even when applied to a single layer. I applied the private LoRA module to only the final transformer block which reduced round trips from 30 per token to 1 per token. Then by integrating multi-token prediction to generate N=5 tokens per forward pass, which amortizes the single round-trip acorss multiple tokens. I implemented this using PyTorch, carefully choosing which layer to inject the private LoRA by experimenting with layers 28-32 of LLaMA-7B, and then using the findings to adapt the multi-head prediction mechanism. This led to a 150x latency improvement while maintaining comparable personalization quality to full multi-layer LoRA.

# Federated Learning

Finally, one of the projects I’m most excited about is my earliest venture into research. I worked with the Vice Chancellor for Research at UC Davis on research regarding Federated Learning — which at the time was relatively novel. The core contribution was a new backdoor attack algorithm in federated learning environments. The attack works by computing two separate momentum terms: one for benign data and one for malicious data. It then combines them strategically to inject backdoors while evading detection. This achieved 95.8% backdoor accuracy on EMNIST (vs 69.2% baseline) while maintaining 94.52% accuracy on the main task. I then built defense evasion mechanisms into the loss function using cosine similarity constraints to make adversarial updates seem legitimate. The attack worked on anomaly detection, differential privacy, and norm clipping. The research culminated into a paper titled “Double Momentum Backdoor Attack in Federated Learning.” It demonstrated that there still exists significant gaps in federated learning systems while also showing how momentum-based optimization could be exploited for stealthy attacks.