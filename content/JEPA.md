---
title: JEPA — Joint Embedding Predictive Architectures
publish: true
tags:
description:
permalink:
aliases:
showDateAndReadTime: false
---
Joint Embedding Predictive Architecture (JEPA) is a framework for learning world models through self-supervised prediction in learned representation spaces. Proposed by Yann LeCun, JEPA is to world models what [[Transformers]] are to [[Large Language Models]]—a foundational architecture that enables learning rich representations of how the world evolves.

# Core Philosophy

Traditional approaches to predictive modeling force models to reconstruct exact pixels or high-dimensional observations, which wastes computation on irrelevant details like specific texture patterns or lighting variations. JEPA instead operates on a key insight: [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]].

Rather than predicting "what will the next frame look like pixel-by-pixel," JEPA predicts "what semantic features will be present in the next state." This abstraction makes learning tractable and enables models to capture causal structure rather than surface correlations.

# Architecture

[[JEPA separates world understanding into three specialized components: context encoder, target encoder, and predictor]]. The context encoder processes visible or past information, the target encoder (updated via [[Exponential Moving Average creates stable learning targets in self-supervised systems|EMA]]) processes future or masked information, and the predictor attempts to bridge them in latent space.

This design enables [[Self-supervised learning generates training signals from data structure itself]]—the model generates training signals by predicting one part of the input from another, without human labels. Importantly, [[Latent variables in JEPA enable single models to represent multiple plausible futures]], allowing the model to maintain uncertainty over possible outcomes rather than committing to a single prediction.

# Training Dynamics

Training JEPA models is delicate: [[JEPA training requires balancing four objectives to prevent trivial solutions]]. The model must learn informative representations while avoiding collapse, maintain prediction accuracy while preserving diversity, and capture semantic structure while remaining invariant to irrelevant transformations.

[[Energy-based models assign compatibility scores rather than computing probabilities]], which JEPA leverages to avoid committing to explicit probability distributions over high-dimensional spaces. Instead, the model learns to assign high compatibility to plausible (context, target) pairs and low compatibility to implausible ones.

# Hierarchical Reasoning

Effective world models must reason across timescales—from immediate next steps to long-term outcomes. [[Hierarchical abstraction enables predictions across different temporal scales]], allowing JEPA to plan efficiently. This enables [[Abstract plans reduce search complexity by pruning irrelevant action sequences]], making real-time decision-making tractable in complex environments.

# Applications

**I-JEPA (Image)**: Applies JEPA to static images using [[Vision Transformers process images by treating patches as sequential tokens]]. Through [[Masked prediction tasks force models to learn semantic relationships between image regions]], I-JEPA learns visual representations that capture object semantics and spatial relationships. Evaluation via [[Linear probing tests whether learned representations are linearly separable]] demonstrates these representations are highly effective for downstream tasks.

**V-JEPA (Video)**: Extends to video by predicting future frame representations from past frames, learning temporal dynamics and physics intuition.

**GeneJEPA**: [[GeneJEPA - A Predictive World Model of the Transcriptome]] applies JEPA principles to genomics, treating gene expression as a world to be modeled.

# Foundation Layer
To understand JEPA deeply, start with these foundational concepts:
1. [[Energy-based models assign compatibility scores rather than computing probabilities]]
2. [[Predicting abstract representations reduces computational waste compared to pixel-level prediction]]
3. [[Self-supervised learning generates training signals from data structure itself]]
4. [[Contrastive learning prevents model collapse by pushing apart positive and negative examples]]
5. [[Exponential Moving Average creates stable learning targets in self-supervised systems]]

JEPA represents a paradigm shift from generative modeling (which asks "what will happen?") to predictive modeling in learned spaces (which asks "what features will be present?")—a distinction that dramatically improves both efficiency and the quality of learned representations.