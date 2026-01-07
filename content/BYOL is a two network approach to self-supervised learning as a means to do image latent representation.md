---
title: "Bootstrap your own latent: A new approach to self-supervised Learning"
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
BYOL is a type of SSL that uses two networks: an online network and a target network. The key thing is that [[Self-supervised learning generates training signals from data structure itself]], so the networks are sampled from the same data distribution (see [[Contrastive learning prevents model collapse by pushing apart positive and negative examples]]). This is good because it prevents model collapse through asymmetric prediction and slow updates.

The online network consists of an encoder, projector, and predictor. The target network shares the encoder and projector but lacks a predictor and updates via EMA of the online network's parameters because [[Exponential Moving Average creates stable learning targets in self-supervised systems]]. Both process differently masked views of the same input image, creating predictions in latent space rather than pixels which is beneficial because [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]].

GPT came up with this example that helped me understand it:

> Consider a single image of a bouncing ball, augmented into two views: $v$ (cropped left, color-distorted) and $v'$ (flipped, blurred).
> - **Forward Pass 1**: Feed $v$ to online network ($\theta$): encoder $f_\theta(v) \rightarrow y_{\theta}$, projector $g_\theta(y_\theta) \rightarrow z_{\theta}$, predictor $q_\theta(z_\theta)$. Feed $v'$ to target network ($\xi$): encoder $f_\xi(v') \rightarrow y_\xi'$, projector $g_\xi(y_\xi') \rightarrow z_{\xi}'$.
> - **Loss Computation**: Minimize normalized L2 distance, forcing online prediction to match target's stable representation.
> - **Symmetric Pass**: Swap inputs—$v'$ to online, $v$ to target—and average losses: $\mathscr{L}_\textrm{BYOL} = \frac{1}{2}(\mathscr{L}+\tilde{\mathscr{L}})$  
> - **Updates**: Online $\theta$ optimizes via gradient descent; target $\xi \leftarrow \tau\xi + (1-\tau)\theta$ where based on [[Exponential Moving Average creates stable learning targets in self-supervised systems]] could have $\tau=0.99$ ensuring slow, stable evolution. 