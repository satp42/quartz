---
title: Workflow ontology creates moats through accumulated operational knowledge
publish: false
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Domain-specific AI agents build defensible moats by accumulating operational knowledge that competitors cannot easily replicate, even with access to the same foundation models.

The moat comes from three compounding factors:

**Edge case coverage:** Each task execution reveals exceptions and corner cases that get encoded into the system. A scheduling agent learns how different executives prefer meeting times. A code review agent captures team-specific style preferences. This knowledge isn't in GPT-4 or Claude's training data—it's captured through live usage.

**Domain-specific rules:** Systems accumulate decision logic for the specific workflow—billing codes in healthcare, legal clause variations in contracts, IT runbook procedures. Competitors can't "plug in a model" and match this accuracy because the model alone doesn't know these operational details. Additionally, with human-in-the-loop infrastructure, [[RLHF]] provides a way of improving the model on core insights essential for the agent.

**Compounding switching costs:** As the agent handles more tasks, it becomes increasingly tailored to the company's specific patterns and preferences. Each completed workflow strengthens the moat. A competitor would need years of similar task executions to build equivalent coverage.

Example: Cognition's Devin captures thousands of pull-request patterns and code review preferences with each use. A competitor using the same LLM would still be starting from zero on this operational knowledge.

This creates SaaS-like lock-in: the canonical data model and decision logic for the job lives in the product, not in any model you can download.