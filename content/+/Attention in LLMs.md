---
title: Attention in LLMs
publish: false
tags:
description: Attention is all you need — how to understand a sentence
permalink:
aliases:
showDateAndReadTime: false
---
When a [[Large Language Models]] tries to understand a sentence, you have to assign differing weights to each token in the sentence. There are three special vectors assigned to each token in the sentence:
1. Query (Q): Represents the token vector of the token you're focused on
2. Key (K): Represents a word in the input that is being compared against the Query. It acts like a label or a signpost for the information it holds.
3. Value (V): Contains the actual information or meaning of the word associated with the Key. Once a Key is deemed relevant by a Query, the corresponding Value is what gets passed along.
The query of one word interacts with keys of all other words to calculate the attention scores. The mechanism that calculates these scores are [[Scaled Dot-Product Attention]].