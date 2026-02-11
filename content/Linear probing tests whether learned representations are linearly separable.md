---
title: Linear probing tests whether learned representations are linearly separable
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Linear probing is an evaluation methodology that tests whether representations learned through [[Self-supervised learning generates training signals from data structure itself|self-supervised learning]] have organized semantic information in a geometrically structured way. It serves as a diagnostic tool for assessing representation quality in models like I-JEPA.

The procedure is straightforward: freeze the pre-trained encoder and train only a single linear layer on top for a downstream task: $$\hat{y} = \textrm{softmax}(W \cdot E(x) + b)$$where $E(x)$ is the frozen encoder output, and only $W$ and $b$ are learned. If this simple linear classifier achieves high accuracy, the representations must be linearly separable—meaning different semantic categories occupy distinct regions in the embedding space.

**Why Linear Probing Matters:**

Linear separability indicates that [[Masked prediction tasks force models to learn semantic relationships between image regions|masked prediction]] successfully learned semantic structure rather than merely memorizing surface statistics. If similar objects cluster together in embedding space while different objects are well-separated, downstream tasks become dramatically simpler.

For I-JEPA representations, high linear probing accuracy demonstrates that:
1. The model learned to encode semantic content (object categories, scene types) rather than just low-level features (edges, textures)
2. [[Vision Transformers process images by treating patches as sequential tokens|Patch representations]] carry class-discriminative information
3. The representation space is well-organized, with smooth manifolds for each category

**Comparison to Fine-tuning:**

Full fine-tuning allows updating all encoder parameters, potentially achieving higher accuracy but at risk of overfitting and losing generality. Linear probing provides a more stringent test—if representations are truly high-quality, minimal additional computation should suffice.

The gap between linear probing and fine-tuning accuracy is diagnostic:
- Small gap (< 2-3%): Representations are excellent, encoder learned proper abstractions
- Large gap (> 10%): Representations are suboptimal, encoder needs significant adaptation

**Connection to JEPA Architecture:**

Linear separability emerges naturally from [[JEPA training requires balancing four objectives to prevent trivial solutions]]—the variance preservation objective ensures representations use the full embedding space rather than collapsing, while the prediction objective encourages semantic structure. Additionally, because [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]], the model focuses on high-level features that are naturally more linearly separable than pixel-level patterns.

Linear probing thus serves as both an evaluation tool and a design signal—architectures and training procedures that produce linearly separable representations have successfully distilled semantic knowledge into a computationally efficient form for downstream applications.
