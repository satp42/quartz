---
title: Reinforcement Learning uses sparse reward signals
publish: false
tags:
  - note/boat🚤
description:
permalink:
aliases:
showDateAndReadTime: false
---
[[Reinforcement Learning]] is often an added benefit that finetunes a [[Large Language Models]] after its pretrained [[Supervised Learning]] created the base model. The thing about RL, however, is that it has a sparse feedback which means it gives a reward/loss signal only on some actions, often delayed, after a sequence of steps. For example, in a game, the agent only gets a reward at the end if it wins, not for every move it makes. Since reward depends on a long sequence, it’s harder to tell which action was responsible

If an agent were to choose action $a$ in states $s$ to maximize expected reward, then [[Policy Gradient]] is used for the [[Backpropagation]]. The policy is $\pi_{\theta}(a \mid s)$ — the probability the agent takes action $a$ in state $s$ parameterized by $\theta$ (which is the [[weights and biases]] of the [[Neural Network]]).