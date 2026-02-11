---
title: Vision Transformers process images by treating patches as sequential tokens
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Vision Transformers (ViTs) adapt transformer architectures from language modeling to computer vision by decomposing images into sequences of patches that are processed as tokens. This architectural choice is fundamental to I-JEPA's ability to perform [[Masked prediction tasks force models to learn semantic relationships between image regions]].

An image $I \in \mathbb{R}^{H \times W \times C}$ is divided into non-overlapping patches of size $P \times P$. Each patch is flattened and linearly projected into a $D$-dimensional embedding: $$x_i = \textrm{Linear}(\textrm{Flatten}(I_{patch_i})) + e_{pos}^i$$where $e_{pos}^i$ is a learnable position embedding that encodes spatial location.

Unlike CNNs that have inductive biases for local spatial relationships, ViTs treat image patches as a set with positional information, similar to how language models treat words in a sentence. The self-attention mechanism then learns which patches are relevant to each other: $$\textrm{Attention}(Q, K, V) = \textrm{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

This design enables [[JEPA]] architectures because:
1. **Flexible masking**: Entire patches can be masked (not fed to the context encoder), creating prediction tasks where [[JEPA separates world understanding into three specialized components: context encoder, target encoder, and predictor]]
2. **Abstract representations**: The patch-level tokenization naturally implements [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]] by operating on patch embeddings rather than raw pixels
3. **Long-range dependencies**: Self-attention can model relationships between distant image regions without the locality constraints of convolutions

I-JEPA leverages this architecture by using one ViT as the context encoder processing visible patches and another as the target encoder processing masked patches. The predictor network then attempts to predict the target patch representations from the context, enabling [[Self-supervised learning generates training signals from data structure itself]] without requiring labels.

The patch-based tokenization also facilitates [[Hierarchical abstraction enables predictions across different temporal scales]] in video settings, where patches can be aggregated spatially and temporally at multiple resolutions.
