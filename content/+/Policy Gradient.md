---
title: Policy Gradient
publish: false
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Policy gradient is used in [[Reinforcement Learning]] to help during [[Backpropagation]] so that the agent chooses the best actions to maximize rewards. The policy is $\pi_{\theta}(a \mid s)$ — the probability the agent takes action $a$ in state $s$ parameterized by $\theta$ (which is the [[weights and biases]] of the [[Neural Network]]). The objective is to maximize expected reward $J(\theta) = \mathbb{E}_{\pi_\theta}[R]$. The gradient of the expected reward with respect to policy parameters is: $$\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta}[\nabla_\theta \log \pi_\theta(a\mid s) \cdot R]$$
You nudge the policy to make actions that resulted in **higher reward** more likely in the future.