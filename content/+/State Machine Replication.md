---
up: []
related: []
created: 2025-06-16
---

State machine replication is the problem of having several computers (or [[Nodes in blockchain]]) maintain the same copy of some data (as in the transactions found in [[Merkle Tree]]s) for an infinite number of incoming transaction (which are just [[UTXO (unspent transaction output)]] in [[Bitcoin]]). In this case:
- States are the data the machine wants to keep copies of
- Incoming transactions change the state, thus we need to keep updating our machines via [[Blocks store the state of the blockchain which can be shown on public ledger|Blocks]]
- State machine is the way we define how state changes for incoming transactions