---
title: Enterprise context requires resolving entities across disparate systems
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Before agents can reason about organizational knowledge, they must solve the **identity resolution problem**: determining that "Sarah Chen" in an email, "S. Chen" in a meeting transcript, and "@sarah" in Slack refer to the same person. Similarly, "ACME Inc" in CRM and "ACME" in support tickets must be recognized as the same customer.

This problem extends beyond simple name matching to understanding **entity relationships** across the entire organizational data landscape: which documents belong to which project, which tickets relate to which customer, which deployments affected which services.

## Why Entity Resolution Is Foundational

Without entity resolution, every activity signal is ambiguous:
- A document edit could be related to multiple projects or none
- A Slack conversation might reference customers that exist in CRM under different names
- Escalation patterns can't be understood without linking support tickets to account data

[[Context graphs capture decision traces, not just current state]], but those traces are meaningless without knowing which entities participated in which decisions.

## Three Layers of Structure

Building context requires three progressively structured layers:

1. **Content**: Immutable source documents (the evidence trail)
2. **Entities**: Resolved identities—people, organizations, products, events
3. **Facts**: Temporal assertions about entities (the event clock)

Each layer builds on the previous one. You cannot have meaningful facts without resolved entities, and you cannot resolve entities without observing content across systems.

## The Multi-Dimensional Index

Context isn't just temporal—it exists across multiple axes simultaneously:
- **Timeline**: When did this happen? When was it valid?
- **Geospatial**: Where did this occur?
- **Semantic**: What concepts does this relate to?
- **Structural**: How does this connect to other entities?

A comprehensive enterprise context layer must support queries across all these dimensions: "What did we discuss about Acme Corp in meetings held in New York during Q3?"

## The Fragmentation Tax

Organizations pay a continuous cost for not solving entity resolution—the manual work of stitching together context that was never captured properly. Different functions use different tools, each with partial visibility. Context graphs eliminate this tax by resolving identities once and making relationships queryable across all systems.

## Related

- [[Context graphs capture decision traces, not just current state]]
- [[Facts with temporal validity windows enable queryable event histories]]
- [[Systems of record capture what but not why decisions were made]]
- [[Synthesis from multiple observations creates higher-order facts]]
