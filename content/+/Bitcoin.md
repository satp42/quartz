---
up: []
related: []
created: 2025-05-27
---
Bitcoin is a [[Blockchain]] that allows for peer-to-peer [[Decentralization]] for store of value exchange. In this network, users can make state changes to the blockchain through [[Blocks store the state of the blockchain which can be shown on public ledger]]. This happens by users spending/creating [[UTXO (unspent transaction output)]]. 
1. Users who want to make transactions, which are signed via [[Digital Signatures]], broadcast them to the network where [[Nodes in blockchain|nodes]] listen for transactions. 
2. They verify that the transaction is valid. Nodes validate a transaction by checking if the owner digitally signed a hash of the previous transaction and the public key of the next owner. It involves validating if the the digital signatures line up. 
3. Then if validated, nodes push transactions into the mempool where nodes then assemble transactions into blocks and use [[Proof-of-Work]] to tunr it into a block
	- An important note is that [[Nodes consider the longest chain to be the correct chain]] before doing any block mining.
4. The [[Gossip Protocol]] sends the message about the new block being created to the rest of the nodes.

# Properties of Bitcoin
- Bitcoin is completely peer-to-peer which means no centralized authority is telling people what to do. This also means we cannot assume anything about a node at any given time.
- [[Nodes consider the longest chain to be the correct chain]]
- Nodes get the freedom to arrange blocks and transactions however they wish — this will lead into [[MEV (Maximal Extractable Value)]]
- [[A 51% malicious attacker needs more than half of the network's processing power to pull off an attack]]

---
TODO:
- explain philosophy of Bitcoin
- explain double spend