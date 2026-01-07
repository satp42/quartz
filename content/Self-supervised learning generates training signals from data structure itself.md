---
title: Self-supervised learning generates training signals from data structure itself
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Self-supervised learning is a type of training process that is often accompanied in [[JEPA]] that makes the model learn meaningful ontologies from the data itself rather than human-provided labels. One popular SSL technique is [[BYOL is a two network approach to self-supervised learning as a means to do image latent representation|BYOL]] which uses an online network and target network to prevent [[Contrastive learning prevents model collapse by pushing apart positive and negative examples|model collapse]]. SSL can learn from the data structure itself because it takes advantage of the data invariances and relationships that create things like temporal continuity in videos or spatial consistency in images. Because [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]], SSL focuses on robust features from raw structure of the data.