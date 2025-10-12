---
up: []
related: []
created: 2025-05-27
---
All blocks in the blockchain contain a block header and some data. The block header contains the following:
- Hash from the [[Hash Functions]] of the previous block's header
- Nonce — an arbitrary number
- Block number to show when the block was created
- [[Merkle Tree]] of transaction data

The block data contains a series of signed transactions that show all transactions made up to the date. This data is the actual data that is consistently hashed to form the the Merkle root in the block header.