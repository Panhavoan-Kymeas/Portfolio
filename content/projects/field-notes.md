---
title: "Field Notes"
description: "A local-first notes app for capturing ideas quickly and organizing them without breaking flow."
technologies: [TypeScript, React, IndexedDB]
github: "https://github.com/yourusername/field-notes"
demo: "https://example.com"
featured: true
order: 1
---

## Why I built it

Most note-taking tools ask for organization before the thought has fully formed. Field Notes starts with a frictionless stream and lets structure emerge later through lightweight links and labels.

## How it works

Notes are written to IndexedDB immediately. A background synchronization layer reconciles local changes when a connection is available, so typing never waits for the network.

The interface is deliberately quiet. Search, keyboard navigation, and backlinks do most of the heavy lifting.

## What I learned

Designing local-first software changes the failure model. The network stops being a prerequisite and becomes a background capability—but conflict resolution and schema migration deserve much more care.
