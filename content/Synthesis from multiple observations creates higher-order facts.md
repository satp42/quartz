---
title: Synthesis from multiple observations creates higher-order facts
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Individual observations capture point-in-time snapshots. But the most useful knowledge often emerges from **synthesizing across multiple observations** to derive higher-order facts that weren't explicitly stated in any single source.

Consider three source facts:
- "Paula works at Google" (validAt: 2020-01-15)
- "Paula is a Senior Engineer at Google" (validAt: 2022-06-01)
- "Paula joined Microsoft as Principal Engineer" (validAt: 2024-03-15)

From these, you can synthesize:
- "Paula worked at Google from January 2020 to March 2024" (duration fact)
- "Paula was promoted to Senior Engineer at Google in June 2022" (progression fact)

These **synthesized facts** have different properties than directly observed facts:
- They derive meaning from temporal relationships between observations
- They capture patterns (career progression, organizational changes) that no single document states
- They make implicit timelines explicit and queryable
- They enable reasoning about duration, causality, and evolution

## Types of Synthesized Facts

**Timeline synthesis**: Combining hire and departure facts to understand employment duration, project timelines, or configuration lifespans.

**Corroboration synthesis**: When multiple sources assert the same fact, confidence increases. A fact mentioned in an email, confirmed in a meeting, and recorded in CRM becomes more reliable than any single observation.

**Pattern synthesis**: Recognizing that similar decisions made under similar conditions create precedent. "Whenever healthcare companies face procurement delays, we extend payment terms."

**Causal synthesis**: Linking events that occurred in sequence to infer relationships. "The deployment on June 15 preceded the P1 incident on June 16; deployments to this service are high-risk."

## Why Synthesis Is Hard

Determining what's true from historical assertions requires judgment:
- **Reconciling conflicts**: Two sources claim different facts—which is authoritative?
- **Identifying supersession**: A new fact makes an old fact invalid—when did the transition occur?
- **Inferring gaps**: Between "joined company" and "left company" is a gap—can we infer continuous employment?
- **Maintaining evidence chains**: Each synthesized fact must trace back to source facts, which trace to original content

This is where LLM-powered resolution becomes essential. The model can:
- Cluster similar facts
- Identify supersession relationships
- Synthesize timeline facts from scattered observations
- Judge confidence levels based on source quality and corroboration

## Synthesized Facts Enable Simulation

[[Context graphs function as organizational world models that enable simulation]] depends on synthesized knowledge. Point-in-time observations alone can't answer:
- "How long do typical deployments take?" (requires duration synthesis)
- "What's the blast radius of changes to this service?" (requires causal synthesis)
- "Is this precedent still applicable?" (requires temporal synthesis with policy evolution)

Simulation requires understanding **not just what happened, but patterns in how things happen**

## Status Hierarchy

Facts carry status indicating their provenance:
- **Directly observed**: Extracted from a single source document
- **Corroborated**: Same fact appears in multiple sources
- **Superseded**: A newer fact has replaced this one
- **Synthesized**: Derived from multiple observations
- **Canonical**: Currently accepted as ground truth

This hierarchy preserves epistemic uncertainty. An agent reasoning over facts can weight them appropriately: corroborated canonical facts are more reliable than superseded observations.

## The Evidence Chain

Critically, synthesized facts maintain **audit trails**:
- Each synthesized fact points back to source facts
- Source facts point to original content
- The reasoning for synthesis is captured

This enables:
- Debugging why an agent reached a conclusion
- Validating that synthesized knowledge reflects reality
- Updating synthesis when source facts change
- Explaining decisions to stakeholders

Without evidence chains, synthesis becomes ungrounded—the system "hallucinates" facts without being able to justify them.

## Relation to Entity Resolution

Synthesis depends on [[Enterprise context requires resolving entities across disparate systems]]. You can't synthesize Paula's employment timeline without first knowing that "Paula," "P. Chen," and "paula@google.com" refer to the same person across different sources.

Entity resolution must happen **before** fact synthesis. The progression is:
1. Observe raw content
2. Resolve entities (people, organizations, products)
3. Extract facts with entity mentions
4. Synthesize higher-order facts across resolved entities
5. Enable agents to reason over synthesized knowledge

## Related

- [[Facts with temporal validity windows enable queryable event histories]]
- [[Enterprise context requires resolving entities across disparate systems]]
- [[Context graphs function as organizational world models that enable simulation]]
- [[Decision traces enable agents to reason from organizational precedent]]
