---
up: []
related: []
created: 2025-05-21
---
Theoretically, it should be really hard to use hash functions because their large hashes would make it too memory intensive for any database. However, in reality hash functions have an expansion and compression phase:
1. Expansion — takes an input and converts it to a binary. This binary is padded with 0s such that it is a multiple of 64 or some power of 2. This is then split into a bunch of blocks where each individual block may be padded until all blocks are a multiple of 64 or a power of 2
2. Compression — takes each block and runs a string of operations and then each output is strung on to the next block