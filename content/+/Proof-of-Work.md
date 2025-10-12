---
up: []
related: []
created: 2025-05-27
---
Proof-of-Work is a consensus protocols for [[Blockchain]] miners/validators/nodes to decide which blocks are next in the chain by forcing block proposers to expend energy to create a new block. In [[Bitcoin]] and other blockchains, there is a rule that all valid block headers must be below a certain threshold which is typically the number of zero bits that a hash begins with. Therefore, the nonce (which is in [[Blocks store the state of the blockchain which can be shown on public ledger]]) is varied as the input (alongside previous hash, merkle root, timestamp, etc.) into the [[Hash Functions]] that finds the block hash until it meets the zero bits requirement. This works because [[Hash functions have properties that make them impossible to hack]] so it requires miners to brute force until they find the perfect nonce to propose a block.

The rationale for PoW is that it enforces block proposers expend some investment to make a block hence why [[Sybil attacks are stopped by Proof-of-Work systems]]. If a greedy attacker is able to assemble more CPU power than all honest [[Nodes in blockchain|nodes]], he would have to choose between using it to defraud the chain or just use it to mint more blocks and get block reward.

The producer of a block gets the following:
1. The first transaction in a block is a special transaction that starts a new coin owned by the creator of the block
2. If the amount of energy it takes to mint the transaction is more than the output value of the transaction, the difference is a transaction fee that is added to the incentive value of the block