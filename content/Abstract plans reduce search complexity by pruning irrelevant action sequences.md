---
title: Abstract plans reduce search complexity by pruning irrelevant action sequences
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Planning in high-dimensional action spaces faces combinatorial explosion—for a robot with 10 actions available at each time step, considering 20 steps ahead requires evaluating $10^{20}$ possible sequences. Abstract planning in [[JEPA]]-based systems solves this by reasoning at higher levels of abstraction that prune vast regions of the search space.

Rather than planning over primitive actions like "move joint 1 by 0.01 radians," abstract plans operate over semantic actions like "reach for object" or "navigate to location." This reduces branching factor dramatically. Because [[Hierarchical abstraction enables predictions across different temporal scales]], the model can first plan abstractly, then refine details only for the chosen high-level plan.

The pruning works through learned affordances—the model's world model, trained via [[Self-supervised learning generates training signals from data structure itself]], learns which abstract action sequences are feasible. For example:
- Abstract plan: "walk to door → open door → enter room"
- Infeasible plans pruned: "walk through wall" gets high energy (low compatibility) from the [[Energy-based models assign compatibility scores rather than computing probabilities|EBM]]
- Only plausible high-level plans proceed to detailed motion planning

This two-stage approach reduces complexity from $O(b^d)$ to approximately $O(b_{\textrm{abstract}}^{d/k} + b_{\textrm{concrete}}^k)$ where $k$ is the refinement horizon and $b$ is the branching factor. For typical values, this represents exponential savings.

Because [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]], the abstract planning operates entirely in latent space—the model never needs to generate detailed pixel predictions for every hypothetical plan, only for the selected trajectory.

[[Latent variables in JEPA enable single models to represent multiple plausible futures]] is crucial here: the model maintains uncertainty at the abstract level ("the door might be locked or unlocked") without committing to specifics until necessary. This allows efficient exploration of the high-level strategy space before investing computation in detailed predictions.

Abstract planning transforms intractable search problems into manageable ones by leveraging learned world models that understand which futures are possible and which can be safely ignored, enabling real-time decision-making in complex environments.
