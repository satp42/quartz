---
title: Multiplicative gating allows neural networks to control the flow of info for each specific input
publish: false
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Gates are like adjustable knobs that decide whether a neural network passes certain data through. If we are given a particular input $X$, and pass it through a linear layer with weights $W$ (which is just doing a matrix multiplication) and a non-linear [[Activation functions]] $\sigma$ , and then multiply its output element-wise with our original data $Y$, you get a Hadamard product.

In this situation, $\sigma(XW)$ is the gate. It's a vector that dynamically scales $Y$. In some cases, we use [[Attention in LLMs]] to d