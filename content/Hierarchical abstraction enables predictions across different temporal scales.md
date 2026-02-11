---
title: Hierarchical abstraction enables predictions across different temporal scales
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Effective world models must reason about both immediate next-step consequences and long-term outcomes. Hierarchical abstraction in [[JEPA]] architectures solves this by learning representations at multiple temporal scales, where higher levels capture slower-changing, more abstract patterns.

At the **low level**, the model predicts immediate state transitions—for example, the next video frame or the ball's position in the next millisecond. These predictions are detailed but short-horizon. Because [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]], even low-level predictions operate in latent space rather than pixel space.

At **mid levels**, the model learns to predict over multiple time steps by aggregating low-level representations. For instance, instead of predicting 30 individual frames, it might predict "the ball follows a parabolic trajectory." This abstraction drastically reduces computational cost: $$\textrm{Cost}_{\textrm{hierarchical}} \ll \textrm{Cost}_{\textrm{frame-by-frame}} \times T$$

At the **high level**, the model captures invariant features and long-term outcomes—"the ball will land in the basket" regardless of exact pixel-level trajectory details. These abstract representations enable efficient planning because [[Abstract plans reduce search complexity by pruning irrelevant action sequences]].

The hierarchy emerges naturally through architectural choices:
- Temporal pooling layers aggregate information over time windows
- Skip connections allow high-level predictions to guide low-level refinement
- Multi-scale loss functions encourage learning features at different granularities: $$\mathcal{L} = \sum_{s \in \textrm{scales}} \lambda_s \|P_s(E(x)) - E(y_s)\|^2$$

This multi-scale approach aligns with how [[Energy-based models assign compatibility scores rather than computing probabilities]]—the model can assign compatibility at different abstraction levels, checking both "is this trajectory physically plausible?" (low-level) and "does this achieve the goal?" (high-level).

Hierarchical prediction enables [[JEPA]] to be both precise when needed and efficient for long-horizon reasoning, mirroring how human cognition operates at multiple levels of abstraction simultaneously.
