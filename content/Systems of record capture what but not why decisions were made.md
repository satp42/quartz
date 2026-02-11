---
title: Systems of record capture what but not why decisions were made
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Traditional enterprise systems—Salesforce for customers, Workday for employees, SAP for operations—became trillion-dollar platforms by storing canonical data. They excel at capturing **what is currently true**: the final deal value, the resolved ticket status, the current account owner.

What they don't capture is **why it became true**: the negotiation context, the escalation reasoning, the exception approval logic. This distinction represents a fundamental gap in how enterprises record their operations.

## The Two Clocks Problem

Every system maintains a **state clock** (what's true right now) but lacks an **event clock** (what happened, in sequence, with reasoning). Examples of this gap:

- The CRM shows "closed lost" but not that you were the second choice or which feature was decisive
- The config file shows `timeout=30s` but not why someone tripled it from 5 seconds
- The contract shows a 60-day termination clause but not that the client negotiated for 30 days and you traded it for a liability cap
- The treatment plan shows "switched to Drug B" but not that Drug A was working until insurance stopped covering it

This made sense when humans were the reasoning layer—organizational memory was distributed across conversations and could be reconstructed on demand. But AI agents need access to precedent to exercise judgment reliably.

## Why This Matters for Agents

[[Decision traces enable agents to reason from organizational precedent]] rather than reconstructing context from scratch each time. Without the "why," agents must either:
- Make decisions blind to organizational history
- Rely entirely on rules that can't capture real-world exceptions
- Repeatedly ask humans for context that should have been captured

The systems that capture decision reasoning—not just decision outcomes—will become the foundation for [[Context graphs function as organizational world models that enable simulation]].

## Related

- [[Context graphs capture decision traces, not just current state]]
- [[Facts with temporal validity windows enable queryable event histories]]
- [[Enterprise context requires resolving entities across disparate systems]]
