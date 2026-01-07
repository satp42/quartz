---
title: Exponential Moving Average creates stable learning targets in self-supervised systems
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Exponential Moving Averages (EMA) create stable learning targets in [[Self-supervised learning generates training signals from data structure itself|SSL]] techniques like [[BYOL is a two network approach to self-supervised learning as a means to do image latent representation|BYOL]] by maintaining slow updating versions of the model parameters that smooths out rapid fluctuations in the online network's updates. This keeps the online network from running into unstable feedback loops where the model predicts its own noisy outputs.

EMA computes the weighted average of the parameters over time, by giving exponentially decreasing weights to older updates. $$\theta_{t}^{\textrm{target}} = \alpha \theta_{t}^{\textrm{online}} + (1-\alpha)\theta_{t-1}^{\textrm{target}}$$
Without EMA, using the online network itself as a target causes [[Contrastive learning prevents model collapse by pushing apart positive and negative examples|collapse]]. EMA rather makes a slow average that provides reliable supervision even as the online network updates aggressively