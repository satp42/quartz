---
title: Context graphs capture decision traces, not just current state
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Traditional enterprise systems focus exclusively on the "state clock" which only shows what is currently true. For example, a CRM shows the final deal value and a ticket system shows what bugs have been resolved. These systems optimize for answering "what is true now"?

Context graphs add the "event clock" which captures what happened, what order it happened, and with what reasoning. Context graphs add another layer that make all enterprise suites with richer context:
- The CRM captures not just what is "closed" and "lost", but also that you were the second choice and the winner had one feature shipping next quarter
- The ticket captures not just what bug is "resolved" but the debugging path and why that solution was chosen
- The config file captures not just what parameter values are, but that someone tripled it after production incidents showed that the original value was too aggressive.

The core thing is that with context graphs in enterprise suites [[Context graphs function as organizational world models that enable simulation]].

[[Decision traces enable agents to reason from organizational precedent]]. A lawyer needs case law, not just verdicts. An experienced employee knows not just current policies why exceptions were granted historically. Without these traces, agents must reason without organizational memory.

The "two clocks" reveal why agents are unable to automate real work: we have elaborate systems for state but haven't captured the reasoning that connects observations to actions.