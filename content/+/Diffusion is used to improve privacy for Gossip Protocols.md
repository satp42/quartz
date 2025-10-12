---
up: []
related: []
created: 2025-05-27
---
In 2015, [[Bitcoin]] improved their [[Gossip Protocol]] to improve the privacy of the propagation method. Instead of immediately flooding a message to each connected peer, the node waits a random exponential delay before propagating to each of its peers.

```
def gossip(msg):
	for peer in peers: 
		schedule_send(peer, msg, wait=np.random.exponential(1.0 / theta))
```

The purpose of this is to obscure the p2p message graph which makes it harder for observers to determine the original source of a message. In the original wave propagation method, a *supernode* (a node that connects to all the [[Nodes in blockchain|nodes]] in the network of the [[Blockchain]]) can observe the transactions and trace back to the original miner node that made the block via [[Proof-of-Work]]. With diffusion, the message signals are obscured so that it is untraceable which original node sent out the message, while maintaining that each node gets the new block message.