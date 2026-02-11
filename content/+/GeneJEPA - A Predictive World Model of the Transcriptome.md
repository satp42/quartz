---
title: GeneJEPA - A Predictive World Model of the Transcriptome
publish: false
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
The core issue is that although [[scRNA-seq helps reveal gene expression at individual cell level uncovering cellular heterogeneity]], the data associated with scRNA sequencing is extremely challenging:
1. It's highly dimensional with ~20,000 genes per cell
2. Sparsity due to gene expressions not being detected leading to a lot of gene parameters being zero
3. Technical variation across batches creates high noise
4. Genes do not have natural sequence
The issue with foundation models like scGPT is that they used [[Large Language Models]] and treated the genes as tokens in a sequence. Using masking, they tried to predict missing gene expression values, but the issue is that it forced arbitrary ordering on inherently set-structured data — **gene expressions are sets not sequences**. Additionally, it tries to reconstruct noisy count values exactly which can lead to it overfitting batch-specific artifacts instead of biological principles.

GeneJEPA uses [[JEPA]] to predict representations of masked genes from visible genes because [[Self-supervised learning generates training signals from data structure itself]]. The way it works is similar to how [[BYOL is a two network approach to self-supervised learning as a means to do image latent representation|BYOL]] works:
1. Split the cell's genes randomly with ~55% of expressed genes be context genes and ~45% being target genes
2. You have a student encoder that process the context genes into context embeddings and a teacher encoder that uses the fact that [[Exponential Moving Average creates stable learning targets in self-supervised systems]], and applies that to the target embeddings. The predictor tries to predict the target embeddings from the context embeddings.
3. The training objective is to minimize the distance between the prediction and target in embedding space.

There is certain aspects that they focus on to satisfy the gene component of this world model paper.

**Tokenization of Genes and Expression**
The challenge with this is how do you encode both which gene and how much it is expressed. The solution is to use a Fourier Feature Tokenization
1. Gene identity embedding is just $$e_{id} = \textrm{Embedding}(i) \in \mathbb{R}^{d_{id}}$$
2. Continuous value encoding using Fourier features helps encode how much of a gene is expressed. We define frequencies $\{w_1, \dots, w_{N_f}\}$ logarithmically spread. Then: $$e'_{val} = [\sin(v\cdot w_1), \cos(w\cdot w_1), \dots, \sin(v \cdot w_{N_f}), cos(v\cdot w_{N_f})]$$
	This creates high-dimensional representation where the low frequencies capture whether the expression is generally low vs high, while high frequencies capture fine-grained quantitative differences. 
3. Concatenate the embedding vectors for the identity and value, apply a linear projection so that the model learns to combine identity and value in useful ways. Finally, add a layer normalization so there aren't any drastic training sweeps.

Importantly, this is better than scGPT because, what scGPT does is it discretizes the expressions into bins (i.e. if a gene is expressed with 2.5 and another gene is 4.9, they'll be encoded in the same way because they both are in a bin). But, because we make the expressions highly-dimensional, the embeddings become hyper-specific to that exact gene.

