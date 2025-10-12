---
up: []
related: []
created: 2025-05-25
---
_Euler’s Totient Function_ (often written as $\varphi(N)$ or $\phi(N)$) is a central concept in number theory and [[Cryptography]], especially for understanding the structure of modular arithmetic and the security of systems like [[RSA encryption]] (see: [[The keys in RSA are defined primarily by number theory of primes]]).
## Definition
Given a positive integer $N$, $\varphi(N)$ is defined as the number of positive integers less than $N$ that are coprime to $N$ (that is, their greatest common divisor with $N$ is 1):
$$\varphi(N) = |{k \in {1, 2, \ldots, N-1} \mid \gcd(k, N) = 1}|$$For example, $\varphi(9) = 6$ because the numbers $1, 2, 4, 5, 7, 8$ are all coprime to $9$.
## Properties
- **Multiplicativity:** If $m$ and $n$ are coprime, then $\varphi(mn) = \varphi(m)\varphi(n)$. This is crucial for working with products of primes.
- **For a prime $p$:** $\varphi(p) = p - 1$ (since all numbers less than $p$ are coprime to $p$).
- **For a power of a prime $p^k$:** $\varphi(p^k) = p^k - p^{k-1} = p^k(1 - \frac{1}{p})$.
- **For a product of two distinct primes $p$ and $q$:** $\varphi(pq) = (p-1)(q-1)$. This formula is fundamental in RSA, where $N = pq$.
## General Formula
If $N$ factors as $N = p_1^{k_1} p_2^{k_2} \cdots p_m^{k_m}$ (where the $p_i$ are distinct primes), then:$$\varphi(N) = N \prod_{i=1}^m \left(1 - \frac{1}{p_i}\right)$$
## Why is Euler’s Totient Important?

- **Cryptography:** $\varphi(N)$ determines the cycle length of numbers modulo $N$—key for the security of RSA, which relies on the difficulty of factoring $N$ to compute $\varphi(N)$.
- **Modular arithmetic:** $\varphi(N)$ is the size of the multiplicative group of units modulo $N$; these are the numbers that have modular inverses (see: [[Euler's Theorem]]).
- **Mathematical insight:** The totient function links the structure of integers to their prime factors, revealing deep patterns in number theory.
## Examples
- $\varphi(8) = 4$ (the numbers $1, 3, 5, 7$ are coprime to $8$)
- $\varphi(15) = \varphi(3) \times \varphi(5) = 2 \times 4 = 8$ (the numbers $1, 2, 4, 7, 8, 11, 13, 14$ are coprime to $15$)
- $\varphi(12) = 12 \times (1 - \frac{1}{2}) \times (1 - \frac{1}{3}) = 12 \times \frac{1}{2} \times \frac{2}{3} = 4$

  

**Further Connections**

- Leads directly to [[Euler's Theorem]], which describes the behavior of exponentiation in modular arithmetic for coprime numbers.
- Essential for understanding [[The keys in RSA are defined primarily by number theory of primes]].
- Links to concepts in group theory, such as the structure of the multiplicative group modulo $N$.