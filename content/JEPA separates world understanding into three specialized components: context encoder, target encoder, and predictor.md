---
title: "JEPA separates world understanding into three specialized components: context encoder, target encoder, and predictor"
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
[[JEPA]] decomposes world modeling into three specialized neural networks that work together to learn representations through prediction. This architectural separation allows the model to learn robust features while avoiding [[Contrastive learning prevents model collapse by pushing apart positive and negative examples|collapse]].

The **context encoder** $E_c$ processes the visible parts of the input (e.g., unmasked image patches or past video frames) into a latent representation. This encoder must extract meaningful features from partial observations that enable prediction of missing information.

The **target encoder** $E_t$ processes the masked or future portions of the input separately. Critically, this encoder uses [[Exponential Moving Average creates stable learning targets in self-supervised systems|EMA]] of the context encoder's parameters to create stable learning targets: $$\theta_t^{\textrm{target}} = \alpha \theta_t^{\textrm{context}} + (1-\alpha)\theta_{t-1}^{\textrm{target}}$$

The **predictor** network $P$ takes the context encoder's output and attempts to predict the target encoder's representations. By [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]], the predictor learns to model relationships in latent space rather than reconstructing raw pixels.

This three-component design enables [[Self-supervised learning generates training signals from data structure itself]] because the model generates its own supervision signal by predicting one part of the data from another, without requiring labeled examples.
