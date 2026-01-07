The $K(x)$ for anything $x$ that is able to be expressed as a string is the length of the shortest program that produces $x$ as its output. An example of this are the two 16-bit strings:
1. `0101010101010101` — print `01` eight times
2. `1000110101110100` — print `1000110101110100` one time
The interest note is that due to the [[Invariance Theorem]], the Kolmogorov complexity is unique property of the string and not the description language itself. Due to the [[Halting Problem]] we cannot find $K(x)$ for any arbitrary string $x$.

- Write about prefix-free code vs. plain complexity
- [[Shannon entropy]] vs. $K(x)$


There is a resource-bounded way, typically $K^t$ that bounds it by time resources which may lengthen the complexity.
- Circuit-size complexity
- Depth-limited complexity
gzip and PNG are time-bound compressors that describe the $K^t(x)$ of an image or file.


Open research areas:

These challenges point to exciting areas for future research. A major goal is to prove rigorous lower bounds on the complextropy of specific physical models, showing that for certain systems, complexity _must_ arise. Another direction is to develop better empirical proxies that are both computationally tractable and theoretically sound.