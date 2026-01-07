---
title: Predicting abstract representations reduces computational waste compared to pixel-level prediction
publish: false
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
At a high-level, the benefit of [[Energy-based models assign compatibility scores rather than computing probabilities]] is that you do not have to be too fine-grained and reduce the state space too a smaller dimension (i.e. it's much easier to predict direction a ball moves then the velocity of the ball). By predicting abstract futures in latent space, [[Latent variables in JEPA enable single models to represent multiple plausible futures]] thus allowing models like [[JEPA]] to handle uncertainty efficiently without generating specific outputs. Contrast that with model architectures like [[Transformers]] and you have to expend immense amount of compute to generate pixel-level granularity for irrelevant details. These elements vary endlessly and hold little semantic value for understanding scene dynamics, forcing the model to expend capacity on noise rather than core events.