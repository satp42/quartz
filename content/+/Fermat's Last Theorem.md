---
up: []
related: []
created: 2025-05-25
---
Related to [[The keys in RSA are defined primarily by number theory of primes]]

Fermat’s Little Theorem is a key result in elementary number theory, foundational for modern [[Cryptography]] and the structure of modular arithmetic. It describes a striking property of prime numbers and modular exponentiation.
## Statement
If $p$ is a prime number and $a$ is any integer not divisible by $p$, then:$$a^{p-1} \equiv 1 \pmod{p}$$Equivalently, for any integer $a$:$$a^p \equiv a \pmod{p}$$
## Intuition
- If you take any number $a$ that isn’t a multiple of a prime $p$, and raise it to the $(p-1)$th power, then divide by $p$, the remainder will always be $1$.
- This property is unique to primes. It does not generally hold for composite numbers.
## Why is it useful?
- **Primality testing:** Fermat’s Little Theorem provides a quick way to check if a number is likely prime (though not a guarantee, due to pseudoprimes).
- **[[RSA encryption]]:** The theorem is a special case of [[Euler's Theorem]] and is used in the construction and security of RSA keys.
- **Modular arithmetic:** It shows that exponentiation cycles in a predictable way modulo a prime, forming the basis for many cryptographic protocols.
## Example
Let $p = 7$, $a = 3$:$$3^{6} = 729 \equiv 1 \pmod{7}$$Indeed, $729 \div 7 = 104$ remainder $1$.

## Further Connections
- Generalizes to [[Euler's Theorem]], which applies to any modulus $n$ (not just primes) and uses the totient function $\varphi(n)$.
- Underpins the mathematics of [[The keys in RSA are defined primarily by number theory of primes]].
- Related to the structure of the multiplicative group modulo $p$.