---
title: Agent trajectories through organizational state space encode implicit ontology
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
The traditional approach to building knowledge graphs assumes you must define organizational ontology upfront: What are the entities? How do they relate? What structure matters? But every organization is different, and real work doesn't follow predefined schemas.

Instead, **agents discover organizational structure through problem-directed traversal**. When an agent investigates an issue or completes a task, its trajectory through systems and data reveals which entities matter, how they connect, and what relationships are real.

## Agents as Informed Walkers

Unlike random walks (which discover structure through brute-force coverage), agent trajectories are **problem-directed**. The agent goes where the problem takes it, adapting based on what it finds.

When investigating a production incident, an agent might:
1. Start broad—what changed recently across all systems? (global exploration)
2. Narrow to specific services based on error patterns (local exploration)
3. Trace deployment history and configuration changes
4. Check related incidents and their resolution paths

This trajectory samples organizational structure, biased toward parts that matter for real work. Accumulate thousands of such walks and patterns emerge:
- Which entities appear repeatedly (and therefore matter)
- Which relationships get traversed (and are therefore real)
- Which paths lead to successful outcomes

## Structural Equivalence vs. Homophily

Graph representation learning distinguishes two types of similarity:
- **Homophily**: Nodes are similar because they're directly connected
- **Structural equivalence**: Nodes are similar because they play analogous roles, even if never directly connected

Consider two senior engineers—one works on payments, one on notifications. No shared tickets, no overlapping code, no common Slack channels. Homophily wouldn't see them as similar. But **structurally they're equivalent**: same role in different subgraphs, similar decision patterns, similar escalation paths.

Agent trajectories reveal structural equivalence because problem-directed walks follow similar patterns across different domains. The agent working on a payment incident and one working on a notification incident take analogous paths through their respective subgraphs.

## The Schema Emerges from Use

This inverts the usual assumption: **you don't need to understand a system to represent it**. Traverse it enough times and the representation emerges. The schema isn't the starting point—it's the output.

From accumulated trajectories, you learn:
- Co-occurrence statistics (which entities appear together when solving problems)
- Traversal patterns (which paths lead to which outcomes)
- Structural roles (which entities play analogous functions)

This is economically elegant: agents aren't building the context graph as a separate task—they're solving problems worth paying for. [[Context graphs function as organizational world models that enable simulation]] emerges as exhaust from productive work.

## Why This Needs Infrastructure First

There's an important refinement to this framing: agents can't wait for thousands of runs to "discover" that Sarah Chen is a person who works at Acme Corp. [[Enterprise context requires resolving entities across disparate systems]] must happen **before** agents start walking.

Think of node2vec: it learns embeddings from walk patterns over **existing edges**. It doesn't discover nodes and edges from scratch—the graph must exist first.

Similarly, agents need a pre-built map: resolved entities, established relationships, temporal state. **Build the map first, then agents walk it effectively.**

The "agents as walkers" framing works beautifully for:
- Extending the graph (discovering new relationships)
- Validating existing structure
- Surfacing patterns humans missed
- Learning optimal paths through known territory

But it's not how you bootstrap. That requires intentional infrastructure for [[Enterprise context requires resolving entities across disparate systems]] and [[Facts with temporal validity windows enable queryable event histories]].

## The Feedback Loop

Better context makes agents more capable → Capable agents get deployed more → Deployment generates trajectories → Trajectories improve context → The cycle compounds.

Each agent run adds evidence about organizational structure. Over time, the accumulated walks create:
- Learned representations of how the organization functions
- Discovered ontology through use rather than specification
- Patterns that reveal optimal paths without hard-coding flows

## Related

- [[Context graphs capture decision traces, not just current state]]
- [[Decision traces enable agents to reason from organizational precedent]]
- [[Context graphs function as organizational world models that enable simulation]]
- [[Enterprise context requires resolving entities across disparate systems]]
