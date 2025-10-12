---
up: []
related: []
created: 2025-05-21
---

Hash functions have the following properties for it to be proper:
1. Deterministic — if $H(m) = f$ then every time I put $m$ into the function it should yield $f$
2. Pre-image resistance — given a hash of $h$, it should be hard to find an $m$ that yields $H(m) = h$
3. Second pre-image resistance — given an input $m$ it should be difficult to find another input $n$ that leads to $H(m) = H(n)$
4. Collision resistance — It should be hard to find two inputs that yield the same hash. This is different from second pre-image because second pre-image resistance is about finding a different input that hashes to the same value as a given input, while collision resistance is about finding any two different inputs that hash to the same value.

The benefit of hash functions is that they ultimately yield to hackers having to brute force everything to understand what is being encrypted. If I have a hash, I need to brute force every possibility of $x$ to figure out what message yielded that hash. Similarly, if someone has a message, I cannot find another message that yields the same hash as them.