---
up: 
related: 
created: 2025-05-27
---
[[Nodes in blockchain|Nodes]] in [[Blockchain]]s always consider the longest chain to be the correct chain, specifically for [[Proof-of-Work]] because it means that the most energy was put into that chain. Nodes are economically incentivized to mine on a longer chain because if they spend energy on a shorter chain, the [[Blocks store the state of the blockchain which can be shown on public ledger|Blocks]] may never be introduced to the canonical chain.

Before creating a block on the chain, [[Miners check the transaction validity before mining]] which shows nodes endorsing the longest chain. If there are two proper chains that are equally long, a node will mine on either chain, as they will end up converging later on.

This is why [[Sybil attacks are stopped by Proof-of-Work systems]] because even if malicious actors tried to make an incorrect chain, we would still follow the longest chain.