---
up: 
related: 
created: 2025-05-27
tags:
  - note/boat🚤
---
A Merkle tree compresses an entire tree data structure into one hash. It can be used to verify that some piece of the data is included in a tree within $\mathcal{O}(\log{n})$ , and takes $\mathcal{O}(n\log{n})$ time to create an entire merkle tree. The hash at the very top of a tree is called the Merkle root.

![Merkle Tree](https://blockchain-at-berkeley.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F25fee97d-6eec-43ec-8c77-54861499f4c0%2FUntitled.png?table=block&id=018ee246-d655-40eb-ba3a-4f1a2953be4c&spaceId=ae8581e6-ee4c-4c31-8a1f-df96cfbffd8a&width=1420&userId=&cache=v2)

Merkle Trees work by using [[Hash Functions]] to take the hashes of each transaction (denoted as $T_x$) and hash recursively into a trie-like structure. 

An example way of proving that $T_D$ exists in the transaction data is to check that the hashes of $H_{AB}$ exists, then $H_C$, then $H_{EFGH}$ and notice how since $H_{ABCDEFGH}$ exists, by the principle of how hash functions operate, $H_D$ must exist.

TODO:
- What are [Merkle-Patricia-trie trees](https://ethereum.stackexchange.com/questions/6415/eli5-how-does-a-merkle-patricia-trie-tree-work)
- 