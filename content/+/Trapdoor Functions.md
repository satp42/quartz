---
up: []
related: []
created: 2025-05-21
---

Trapdoor functions are functions in [[Cryptography]] that are unidirectionally computed such that it is easy to compute in one direction, and difficult to compute in the other way. In other words, it is easy to compute from A -> B, but not from B -> A.

The best example of this is factoring. I can multiply two numbers easily. But, if I had to factor, it would be hard without knowing one of the numbers.

This is different from [[Hash Functions]] because trapdoor functions allow for reversibility given that you have a specialized key. As part of the [[Hash functions have properties that make them impossible to hack]], the concept of pre-image resistance has no version of trapdoors that allow for reversibility

Examples of trapdoor functions are [[RSA encryption]].