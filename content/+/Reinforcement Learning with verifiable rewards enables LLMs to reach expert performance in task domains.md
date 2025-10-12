---
title: Reinforcement Learning with verifiable rewards enables LLMs to reach expert performance in task domains
publish: false
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
[[Reinforcement Learning]] with clearly verifiable reward signals has enabled [[Large Language Models]] to achieve expert level performance in domains like math and competitive programming. In these task domains, the reward function can be cleanly and reliably specified (e.g., does the code pass all provided unit tests, or is the answer provably correct?), which allows RL to efficiently optimize for success criteria. The deterministic nature of the reward removes ambiguity during [[Backpropagation]] — which is important because [[RL uses sparse reward signals]] which means with vague rewards it already doesn't know what caused the reward signal.

The only issue with RLVR is that when using this rule-based reward model (exact match, regex, test-pass) in long, free-form, or multi-step answers, only 45.4% of multi-domain problems can be solved with verifiable rewards. 