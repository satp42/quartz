---
up: []
related: []
created: 2025-05-22
---
The private key is generated based on two large primes $p$ and $q$, and the public key is generated based on $pq$. Given the public key, one needs to factor $pq$ to derive the private key. Because factoring is hard due to [[Asymmetric key cryptography]], RSA is secure.

The procedures in terms of these numbers are as follows:
1. Two large prime numbers $p$ and $q$ are chosen. You compute $N = pq$
2. Choose $e$ relatively prime to $(p-1)(q-1)$. $N$ and $e$ will be the public key
	- public key: $(N, e)$ where $N=pq$
3. Calculate $d$, the modular inverse of $e$ ${} \bmod{(p-1)(q-1)}$. Therefore, $ed=1\bmod{(p-1)(q-1)}$. $d$ is the private key
	- private key: $d = e^{-1} (\bmod{(p-1)(q-1)})$
4. To send a message $m$, the sender calculates $c \equiv m^{e} \bmod{N}$
5. To decrypt a message, the receiver computes $c^d \equiv m \bmod{N}$

## RSA proof of correctness
- If $ed \equiv{1} \bmod{(p-1)(q-1)}$ then there must be some $k$ such that $ed=k(p-1)(q-1) + 1$
- Therefore, $c^d = m^{ed} = m^{k(-1)(q-1)+1} \equiv m * m^{k(p-1)(q-1)} \bmod{N}$ 
- By Euler's theorem, $m^{p-1} \equiv 1 \bmod{p}$, as long as $p$ is prime. But we can still use the fact that $N = pq$ to show that $m^{k(p-1)(q-1)} \equiv 1 \bmod{N}$. Theefore, we are left with $m\mod{N}$