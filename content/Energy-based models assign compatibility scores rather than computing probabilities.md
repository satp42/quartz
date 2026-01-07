---
title: Energy-based models assign compatibility scores rather than computing probabilities
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Unlike most ML models that generate a probability distribution of the possible outcomes, energy-based models assign the compatibility of the pair of inputs. For example, if $y$ is a good continuation of $x$, then an EBM would output low energy between the $(x,y)$ pair. Whereas, if it were bad the energy output would be high. Imagine it as if magnets repelling vs. attracting. The reason why these EBMs are easier than [[Transformers]] is that [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]].