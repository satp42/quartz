---
title: Activation functions in neural networks
publish: false
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Activation functions determine the range and behavior of the output of the product between an input data and the [[Neural Networks]] weights. The key insight is that activation functions introduce **non-linearity**. Without them, stacking multiple layers of neural networks would be pointless — the composition of linear transformations is just another linear transformation. Activation functions let networks learn complex, curved decision boundaries instead of just straight lines. The common choices are:
1. Sigmoid: $\sigma(x)=\frac{1}{1+e^-x}$ which squashes the output to range (0,1), which is perfect when interpreting outputs into a probability distribution
2. SiLU: $\textrm{SILU}(x) = x\cdot\sigma(x)$ used in feed-forward blocks of [[Transformers]].