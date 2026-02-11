---
title: Context graphs function as organizational world models that enable simulation
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
A **world model** is a learned, compressed representation of how an environment works. It encodes dynamics (what happens when you take actions in specific states), captures structure (what entities exist and how they relate), and enables prediction (given current state and proposed action, what happens next?).

Context graphs with sufficient accumulated structure become world models for **organizational physics**—not the physics of mass and momentum, but of decision dynamics, state propagation, and entity interactions.

## From Retrieval to Simulation

Most knowledge management systems are retrieval engines: "What similar situations have we seen?" Context graphs as world models go further: "**What would happen if** we took this action?"

This distinction is the test of understanding. If your context graph can't answer "what if" questions, it's just a search index.

Examples of organizational simulation:
- **Code changes**: Given a proposed change, current configurations, and feature flags—will this break something? Which customers get affected?
- **Process deviations**: If we approve this exception, what precedent does it set? How will it affect future decisions?
- **Escalation paths**: This support ticket looks similar to previous incidents—what's the blast radius? Who needs to be involved?

These aren't retrieval queries. They're **inference over accumulated structure**: patterns learned from watching enough trajectories through production problems.

## Organizational Physics

Where robotics world models learn physical dynamics (how objects fall, how forces propagate), organizational world models learn:
- **Decision dynamics**: How do exceptions get approved? How do escalations propagate?
- **State propagation**: What happens when you change this configuration while that feature flag is enabled?
- **Behavioral patterns**: Which code paths are fragile? Which configurations interact dangerously?

[[Decision traces enable agents to reason from organizational precedent]] by capturing not just what decisions were made, but the conditions under which they succeeded or failed.

## Training Agents in Imagination

World models from reinforcement learning research demonstrate something powerful: agents can train entirely inside "dreams"—simulated trajectories through latent space—without executing in the real environment.

The same principle applies to organizations:
1. Accumulate enough [[Agent trajectories through organizational state space encode implicit ontology]]
2. The context graph learns patterns of how work unfolds
3. Agents can simulate hypothetical actions before executing them
4. Dangerous scenarios can be explored safely
5. Policies can be validated against learned organizational dynamics

This is what experienced employees have that new hires don't: not different cognitive architecture, but a better world model. They've seen enough situations to simulate outcomes:
- "If we push this Friday, on-call will have a bad weekend"
- "This customer pattern indicates churn risk"
- "That configuration change will cascade into these services"

These aren't rules. They're **inference over an internal model of system behavior**.

## World Models Enable Continual Learning Without Retraining

A profound implication: the path to economically transformative AI might not require solving continual learning (updating model weights from ongoing experience). Instead, keep the model fixed but improve the world model it reasons over.

The LLM doesn't need to learn if the world model keeps expanding:
- Each [[Decision traces enable agents to reason from organizational precedent|decision trace]] is evidence about organizational dynamics
- At decision time, perform inference over accumulated evidence
- More trajectories → better inference
- Not because the model updated, but because the world model expanded

This is external memory that makes static models contextually intelligent. Each resolved fact, each synthesized timeline, each entity relationship expands what the model can reason about—without retraining.

## The Three Requirements

For context graphs to function as world models, they must:

1. **Capture temporal dynamics**: [[Facts with temporal validity windows enable queryable event histories]] so the system understands not just current state but how state changes over time

2. **Enable structural reasoning**: [[Enterprise context requires resolving entities across disparate systems]] so relationships and patterns can be discovered

3. **Close the execution loop**: [[Orchestration and context layers must remain tightly coupled for agent effectiveness]] because world models require feedback from actual execution to improve predictions

## Relation to JEPA

This connects to [[JEPA]]'s approach to world modeling: [[JEPA separates world understanding into three specialized components: context encoder, target encoder, and predictor]]. Context graphs implement a similar architecture but for organizational rather than perceptual domains:
- **Context encoder**: The accumulated structure from entity resolution, facts, and relationships
- **Target encoder**: The organizational state being predicted
- **Predictor**: The inference system that simulates outcomes based on learned dynamics

Like JEPA, [[Latent variables in JEPA enable single models to represent multiple plausible futures|latent variables enable representing multiple plausible futures]]—essential because organizations rarely have deterministic outcomes.

## Related

- [[Context graphs capture decision traces, not just current state]]
- [[Decision traces enable agents to reason from organizational precedent]]
- [[Agent trajectories through organizational state space encode implicit ontology]]
- [[Facts with temporal validity windows enable queryable event histories]]
- [[JEPA]]
