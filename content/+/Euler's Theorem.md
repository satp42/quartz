---
up: []
related: []
created: 2025-05-25
---
_Euler’s Theorem_ is a foundational result in number theory that generalizes [[Fermat's Last Theorem]] and underpins much of modern [[Cryptography]] (see: [[The keys in RSA are defined primarily by number theory of primes]]). It describes the behavior of numbers under modular exponentiation, especially when those numbers are coprime to the modulus.

## Statement
If $n$ is a positive integer and $a$ is any integer such that $\gcd(a, n) = 1$, then:$$a^{\varphi(n)} \equiv 1 \pmod{n}$$where $\varphi(n)$ is Euler’s Totient Function (see: Euler’s Totient), which counts the number of integers less than $n$ that are coprime to $n$.

## Intuition
- The theorem says: If you pick a number $a$ that shares no factors with $n$ (other than 1), then raising $a$ to the power of $\varphi(n)$ will always leave a remainder of 1 when divided by $n$.
- This is a deep generalization of Fermat’s Little Theorem, which is the special case when $n$ is a prime.

## Why is it useful?

- **[[RSA encryption]]**: Euler’s Theorem is the mathematical backbone of RSA encryption and decryption. The security of RSA relies on the fact that, for large $n$, it is computationally hard to deduce $\varphi(n)$ without knowing the prime factors of $n$.
- **Modular arithmetic**: Euler’s Theorem makes it possible to compute large exponents modulo $n$ efficiently, a key operation in [[Digital Signatures]] and secure communications.
## How does it work?

- [[Euler's Totient]] Function, $\varphi(n)$, counts the “invertible” numbers mod $n$.
- The set of these invertible numbers forms a group under multiplication mod $n$.
- Euler’s Theorem is a consequence of Lagrange’s Theorem from group theory: the order of any element divides the order of the group. Thus, $a^{\varphi(n)} \equiv 1 \pmod{n}$ for any $a$ coprime to $n$.

## Example
Let $n = 10$, $\varphi(10) = 4$ (since 1, 3, 7, 9 are coprime to 10).
Pick $a = 3$:$$3^4 = 81 \equiv 1 \pmod{10}$$