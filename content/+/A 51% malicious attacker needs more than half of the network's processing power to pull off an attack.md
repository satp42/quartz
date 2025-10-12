---
up: []
related: []
created: 2025-05-27
---
A malicious attacker needs more than half of the network's processing power to pull of an attack on the [[Bitcoin]] [[Blockchain]], which they may use a [[Sybil attacks are stopped by Proof-of-Work systems|Sybil attack]] to complete. 

Attackers will need to recompute hashes on all blocks after the block they changed. This won't be able to guarantee them that their malicious chain is the longest unless they can outcompete the entire rest of the network's processing power.

Theoretically this costs around 1M to do, but in practice it's impractical. A 51% attacker can't broadcast invalid transactions because transactions are secured by [[Digital Signatures]]. However, they can do something called reogs which is when the attacker can claim one chain is valid for some time, and then suddenly produce a longer chain that has different data.