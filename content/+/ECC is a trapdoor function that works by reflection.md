---
up: 
related: 
created: 2025-05-25
tags:
  - note/boat🚤
---

ECC is a a [[Trapdoor Functions]] for [[Elliptic curve cryptography]] that works by the following.

An elliptic curve is an equation with the from $y^2 = x^3 + ax + b$. These type of curves have symmetry on the x-axis. Let $A$ and $B$ be elliptic curve points that are coordinates on the curve. If we draw a line between $A$ and $B$, this line must interact the curve at most one other point $D$. If you reflect $D$ across the x-axis, and call it a point $C$, then you get the process of $A \cdot B = C$. You keep repeating this process till you get a new point $E$.

![ECC](https://blockchain-at-berkeley.notion.site/image/https%3A%2F%2Fblog.cloudflare.com%2Fcontent%2Fimages%2Fimage02.gif?table=block&id=b324938a-ed37-4aab-920f-97e4b25ac5e7&spaceId=ae8581e6-ee4c-4c31-8a1f-df96cfbffd8a&userId=&cache=v2)
This is a trapdoor because dotting two points is easy. However, if you are given a starting point of $A$ and another point of $E$, finding out how many times the first point was dotted with itself to make $E$ is hard. In other words finding $n$ such that $E=nA$ is hard.

To make ECC more secure, we compute the points and their dots over integers that are $\mod p$ where $p$ is prime. This makes it hard to reverse as no efficient algorithm exists and unline in [[RSA encryption]], where you can use integer factorization, brute force is infeasibile.