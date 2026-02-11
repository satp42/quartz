---
title: Orchestration and context layers must remain tightly coupled for agent effectiveness
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
The **context layer** and **orchestration layer** cannot be separated without losing the feedback loop that makes agents improve over time. This tight coupling is structural, not accidental, and it's a key architectural principle for building reliable agent systems.

## Why They Must Be Coupled

The orchestration layer (where agents execute) is the only place that sees the full decision context:
- What inputs were gathered across which systems
- What policies were evaluated and in what order
- What exceptions were granted and by whom
- What precedents were referenced
- What actions were taken and what outcomes resulted

Without being in this execution path, the context layer can't capture [[Decision traces enable agents to reason from organizational precedent]]. It receives data **after decisions are made**, via ETL, losing the reasoning that connected inputs to actions.

Conversely, orchestration without context means:
- Agents start every task from scratch, without organizational memory
- No learning from past executions
- Repeated mistakes because failure patterns aren't captured
- Inability to reference precedent or understand what worked before

## The Feedback Loop

Context informs orchestration:
- Accumulated facts guide what data to gather
- Prior decision traces suggest likely next steps
- Historical patterns indicate optimal paths
- [[Context graphs function as organizational world models that enable simulation]] enables "what if" reasoning

Orchestration strengthens context:
- Every agent run produces new traces
- Execution feedback reveals which paths were optimal
- Failed runs highlight where context was insufficient
- Successful runs become precedent for future decisions

This bidirectional flow is what makes the system improve:
1. Agent uses context to make a decision
2. Execution creates a trace with context, actions, and outcome
3. Trace feeds back to context graph
4. Context graph learns what worked
5. Next agent benefits from accumulated learning

**Break the coupling and you break the feedback loop.**

## Why Incumbents Can't Build This

Traditional systems of record are architecturally incapable of this coupling:

**Salesforce**, **ServiceNow**, **Workday**: These store **current state**, not decision-time context. When a discount gets approved, the opportunity updates to reflect the new price—but the context that justified it (customer escalations, precedent deals, approval conversations) isn't preserved. They lack the event clock entirely.

**Snowflake**, **Databricks**: These receive data via **ETL after the fact**. They have temporal views (you can query historical snapshots), but by the time data arrives, the decision context is gone. They're in the read path, not the write path. They see what happened, not why.

**RAG systems**: These retrieve relevant documents at query time but don't capture execution traces. Each agent run is stateless—there's no accumulated learning from prior runs, no synthesis of patterns across executions.

## Being in the Execution Path

To capture decision traces, you must be **in the execution path at commit time**:
- Observing what context was gathered (not just what was stored)
- Recording which policy version applied (not just the outcome)
- Capturing exception routes and approvals (not just final state)
- Linking decisions to prior precedent (not just to static rules)
- Making traces queryable for future reasoning (not just for auditing)

This requires the orchestration layer and context layer to be the **same system**—or at minimum, so tightly integrated that traces are captured atomically with execution.

## The Three-Layer Architecture That Works

Successful context graphs emerge from three layers working together:

1. **Context Layer**: Resolves entities, stores facts with temporal validity, synthesizes knowledge across sources, maintains evidence chains. This is [[Enterprise context requires resolving entities across disparate systems]] and [[Facts with temporal validity windows enable queryable event histories]].

2. **Orchestration Layer**: Executes workflows, makes decisions, routes approvals, invokes tools, manages agent lifecycles. This is where [[Agent trajectories through organizational state space encode implicit ontology]] happens.

3. **Feedback Layer**: Captures execution traces, evaluates outcomes, reinforces successful patterns, updates the context graph. This is what enables [[Context graphs function as organizational world models that enable simulation]].

Critically, **the feedback layer is what couples orchestration to context**. It's not enough to have both layers—you need explicit infrastructure for turning execution into learning.

## Why This Creates Moats

Companies that own both orchestration and context have compounding advantages:
- Every agent run makes the system smarter
- Accumulated context improves agent reliability
- Better agents get deployed more
- More deployment generates more traces
- Traces improve context

This is [[Workflow ontology creates moats through accumulated operational knowledge]]: the longer the system runs, the more organizational physics it understands, the harder it becomes to replace.

Competitors entering later must either:
- Build their own context from scratch (losing years of accumulated learning)
- Try to import context (but decision traces are captured in execution, not stored separately)
- Operate without context (producing agents that can't learn from organizational precedent)

## Related

- [[Context graphs capture decision traces, not just current state]]
- [[Decision traces enable agents to reason from organizational precedent]]
- [[Context graphs function as organizational world models that enable simulation]]
- [[Agent trajectories through organizational state space encode implicit ontology]]
- [[Systems of record capture what but not why decisions were made]]
