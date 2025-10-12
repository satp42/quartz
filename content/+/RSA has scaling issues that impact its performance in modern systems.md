---
up: []
related: []
created: 2025-05-25
---

The strength of [[RSA encryption]] relies on it being difficult to factor $N$. The difficulty in factoring numbers increases more slowly as numbers get bigger. This is problematic as RSA relies on being a [[Trapdoor Functions]] with factoring difficulty. To keep up with advancements in factoring algorithms and computing, current RSA numbers are around 1024 bits. Meanwhile, [[Elliptic curve cryptography]] achieves similar security with only 256 bit keys.

The problem with larger keys is that they lead to slower encryption, decryption, and [[Digital Signatures]] operations. Bigger keys means more space and requirements in bandwidth to transmit. This can be a bottleneck in systems that need to handle lots of transactions.