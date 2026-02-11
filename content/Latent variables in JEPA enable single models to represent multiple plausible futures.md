---
title: Latent variables in JEPA enable single models to represent multiple plausible futures
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
The real world is inherently uncertain—from the same current state, many different futures are possible. [[JEPA]] handles this multimodal prediction problem by incorporating latent variables $z$ that represent different possible outcomes without committing to a single prediction.

Traditional deterministic models must choose one specific prediction, which fails when multiple futures are equally plausible. For example, when predicting the next frame of a video where a ball could bounce left or right, a deterministic model might average these possibilities and predict the ball goes straight through—a physically impossible outcome.

JEPA instead learns a distribution over latent variables: $$p(y|x) = \int p(y|x,z)p(z|x)dz$$where $x$ is the observed context, $y$ is the target prediction, and $z$ captures the uncertainty. The model can sample different values of $z$ to generate different plausible predictions.

This is why [[Energy-based models assign compatibility scores rather than computing probabilities]]—rather than forcing the model to output a single "most likely" prediction, EBMs assign compatibility scores to multiple (context, target) pairs, with different latent variables $z$ leading to different compatible futures.

By [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]], JEPA's latent variables operate in representation space rather than pixel space. This means the latent variable might encode "ball bounces left" vs "ball bounces right" at a semantic level, rather than trying to model every pixel variation.

This latent variable approach enables [[JEPA]] to maintain multiple hypotheses simultaneously, making it robust to uncertainty without requiring massive computational overhead to generate every possible future explicitly.
