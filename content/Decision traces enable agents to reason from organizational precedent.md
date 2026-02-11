---
title: Decision traces enable agents to reason from organizational precedent
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Agents encounter the same ambiguity humans resolve daily through judgment and organizational memory. But unlike humans, agents can't rely on tribal knowledge passed through onboarding or Slack conversations. They need **decision traces**: structured, queryable records of what inputs were gathered, what policies were evaluated, what exceptions were granted, who approved what, and which precedents governed the decision.

## What Decision Traces Capture

A complete decision trace records:
- **Context at decision time**: What data was available when the decision was made
- **Exception logic**: "We always give healthcare companies an extra 10% because their procurement cycles are brutal"
- **Precedent references**: "We structured a similar deal for Company X last quarter—we should be consistent"
- **Cross-system synthesis**: The support lead checked ARR in Salesforce, saw escalations in Zendesk, read a Slack thread flagging churn risk
- **Approval chains**: A VP approved a discount on a Zoom call—the decision record captures who authorized the deviation and why

These traces don't live in [[Systems of record capture what but not why decisions were made]]. They exist in heads, meetings, and conversations that were never treated as data.

## From Rules to Precedent

Rules tell an agent what should happen in general: "Use official ARR for reporting." But **decision traces capture what happened in this specific case**: "We used X definition, under policy v3.2, with a VP exception, based on precedent Z."

This distinction matters because:
- Rules can't capture every edge case
- Real work involves exceptions as much as standard processes
- Organizational precedent evolves through accumulated decisions

When a renewal agent proposes a 20% discount (beyond the 10% policy cap), it can reference:
- Three SEV-1 incidents from PagerDuty
- An open escalation threatening cancellation in Zendesk
- A prior renewal where a VP approved a similar exception

The resulting approval becomes precedent for future decisions. Over time, these traces form [[Context graphs function as organizational world models that enable simulation]].

## The Compounding Effect

Each captured decision creates searchable precedent. Similar cases can reference prior decisions rather than re-learning the same edge case in Slack. The feedback loop accelerates:

1. Decision traces become searchable precedent
2. Agents reference precedent when making new decisions
3. New decisions add traces to the graph
4. The system learns which paths were optimal

This compounds into organizational intelligence—not just task completion, but accumulating reasoning about how work actually gets done.

## Why This Requires Infrastructure

Capturing decision traces isn't a feature you bolt onto existing systems. It requires being **in the execution path at commit time**:
- Observing what context was gathered across systems
- Recording which policy version was evaluated
- Capturing exception routes and approvals
- Linking decisions to prior precedent
- Making the trace queryable for future reasoning

[[Orchestration and context layers must remain tightly coupled for agent effectiveness]] because only the orchestration layer sees the full decision context.

## Related

- [[Context graphs capture decision traces, not just current state]]
- [[Systems of record capture what but not why decisions were made]]
- [[Facts with temporal validity windows enable queryable event histories]]
- [[Agent trajectories through organizational state space encode implicit ontology]]
