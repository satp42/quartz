---
up: []
related: []
created: 2025-05-28
---
Consensus protocols are [[Blockchain]] systems that tackle the [[State Machine Replication]] problem in a [[Byzantine environment]].

They are the backbone of [[Distributed Systems]] to ensure that a network of independent (potentially unreliable) actors agree on a single, canonical sequence of state transitions. Consensus is what transforms a loose federation of computers into a unified, resilient organism.

At its core, consensus takes a given set of transactions from [[Nodes in blockchain|Nodes]] (in the case of [[Bitcoin]], these are [[UTXO (unspent transaction output)]]), and they first specify which of them are part of the network, and then they order them up and add it to state machines.

Examples of consensus protocols are:
- [[Proof-of-Work]]
- [[Proof-of-Stake]]
