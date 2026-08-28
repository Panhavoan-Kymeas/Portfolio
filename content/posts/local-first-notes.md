---
title: "Notes on Local-First Software"
date: "2026-08-12"
description: "Why software feels different when the user owns the data and the network becomes optional."
tags: [architecture, local-first]
cover: "/images/covers/local-first-notes.webp"
coverAlt: "A small local house connected by an orange line to a distant cluster"
---

The best local-first software has an almost physical quality. You make a change and it is simply *there*—no spinner, no hopeful pause, no question about whether a server agreed.

## A shift in authority

Local-first is not just an offline mode. It moves the primary copy of data closer to the person creating it, then treats synchronization as a separate concern.

This creates hard distributed-systems problems, but it also creates a much better baseline experience: instant interaction, resilience to flaky networks, and data that remains accessible.

## What I’m still learning

- How CRDTs make concurrent edits mergeable
- Where local-first architecture adds too much complexity
- What good export and ownership guarantees look like

The interesting part is not the technology by itself. It is the trust that emerges when a tool keeps working on the user’s terms.
