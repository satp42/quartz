---
title: Contrastive learning prevents model collapse by pushing apart positive and negative examples
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
The issue with [[Energy-based models assign compatibility scores rather than computing probabilities]] is that they can lead to model collapse by assigning low energy to every pair. In order to solve this you need to create a sever partition between positive and negative signals. This is the concept of contrastive learning. It is a form [[Self-supervised learning generates training signals from data structure itself]] because the model learns to assign low energy to positive samples and high energy to negative samples. 