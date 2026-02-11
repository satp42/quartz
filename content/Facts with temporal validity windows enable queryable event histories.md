---
title: Facts with temporal validity windows enable queryable event histories
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
[[Systems of record capture what but not why decisions were made]]. They also don't capture **when that became true** or **when it stopped being true**. This temporal gap makes it impossible to reason about historical context or understand how situations evolved.

Facts with temporal validity windows solve this by treating time as a first-class dimension. Each fact carries not just an assertion, but the period during which it was valid.

## Structure of Temporal Facts

A temporal fact includes:
- **Text**: The assertion itself ("Paula works at Microsoft as Principal Engineer")
- **validAt**: When did this become true? (March 15, 2024)
- **invalidAt**: When did it stop being true? (null—still current)
- **Status**: Canonical, Superseded, Corroborated, Synthesized
- **Mentions**: Which entities does this reference? (Paula → Person, Microsoft → Organization)
- **Content**: What source document is this derived from?

This structure makes temporal queries native to the system rather than reconstructed through search.

## Queryable Time

With temporal validity, queries become precise:
- "What's Paula's current employer?" → Filter facts where `invalidAt` is null
- "Where did Paula work in 2022?" → Filter facts where `validAt ≤ 2022` and `invalidAt > 2022` (or null)
- "When did this configuration change and what was it before?" → Query facts with overlapping validity windows

The event clock becomes **queryable data**, not something an LLM must reconstruct from document timestamps.

## Why This Matters for Agents

[[Decision traces enable agents to reason from organizational precedent]], but precedent only makes sense in temporal context:
- A pricing exception from 2023 might not apply if company policy changed in 2024
- An escalation pattern matters more if it's recent versus historical
- Understanding "what changed when" is essential for debugging, auditing, and learning

Without temporal validity, agents must either:
- Treat all information as eternally current (leading to stale reasoning)
- Rely on document timestamps as proxies (which don't reflect when facts became true)
- Ask humans to provide historical context every time

## The Event Clock vs. State Clock

[[Systems of record capture what but not why decisions were made]], but they also capture only **current state**, not **historical evolution**. Temporal facts build the event clock:
- State clock: "The config timeout is 30 seconds"
- Event clock: "The timeout was 5 seconds until June 2024, when someone changed it to 30 seconds because production was timing out under load"

This shift from state to events enables:
- Auditing: "Why is this configured this way?"
- Debugging: "What changed before this broke?"
- Learning: "How long do deployments usually take?"

## Three Types of Temporal Facts

1. **Directly observed**: Extracted from a single source document
2. **Corroborated**: The same fact appears in multiple sources, increasing confidence
3. **Synthesized**: Derived from multiple observations (e.g., "Paula worked at Google from January 2020 to March 2024" synthesized from hire and departure facts)

[[Synthesis from multiple observations creates higher-order facts]] that are often more useful than point-in-time snapshots.

## Related

- [[Context graphs capture decision traces, not just current state]]
- [[Enterprise context requires resolving entities across disparate systems]]
- [[Systems of record capture what but not why decisions were made]]
- [[Context graphs function as organizational world models that enable simulation]]
