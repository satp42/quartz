---
up: 
related: 
created: 2025-05-27
---
This is a protocol (that uses [[Networking principles in Wi-Fi]]) by which [[Bitcoin]] helps miners that have just used [[Proof-of-Work]] to mint a new [[Blocks store the state of the blockchain which can be shown on public ledger]] inform the rest of the [[Nodes in blockchain|nodes]] in the [[Blockchain]]. Whenever a node hears about or creates a new block, it transfers that information to other adjacent nodes. **Notice that it doesn't send it to all the nodes, just adjacent nodes.** This is because, eventually the new block will get into a new block not after long. Hence, why *each node gossips to 8 other nodes on average.* If a node does not receive a block, it will request it when it receives the next block because it realized that it is missing a transaction in the [[Merkle Tree]].

The way to enter the Gossip Protocol is to have a bootstrap node that introduces you to a list of peer nodes. In Bitcoin Core, this is handled by hard-coded DNS servers  that are queried to find intial list of peers.

Post 2015, Bitcoin altered the gossip protocol for security reasons so that [[Diffusion is used to improve privacy for Gossip Protocols]]