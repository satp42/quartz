---
up: 
related: 
created: 2025-05-25
tags:
  - note/boat🚤
---

This is a form of [[Asymmetric key cryptography]] that uses math to merge two distinct keys, and uses the output of that to encrypt and decrypt data.

It differs form [[RSA encryption]] because instead of [[The keys in RSA are defined primarily by number theory of primes]], it uses an elliptic curve equation (yes a literal elliptic curve) to generate the keys.

ECC was created because [[RSA has scaling issues that impact its performance in modern systems]]. We needed a [[Trapdoor Functions]] that is harder to reverse otherwise RSA numbers would get impractically large.

ECC solves this because [[ECC is a trapdoor function that works by reflection]].

Here are the essentials for ECC:
- Private key is some large integer $n$
- Public key is a the public point dotted with itself $n$ time such that $E=nA$
- Prime number $p$: the curve operates over a finite field $\mathbb{F}_{p}$

[[Bitcoin]] and [[Ethereum]] use an elliptic curve known as secp256k1 with an equation $y^2 = x^3 + 7$. Additionally, ECC is used for modern-day [[Digital Signatures]]