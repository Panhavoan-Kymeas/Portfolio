---
title: "Queue Watch"
description: "A compact dashboard that makes background jobs, failures, and retries easy to understand."
technologies: [Astro, Node.js, PostgreSQL]
github: "https://github.com/yourusername/queue-watch"
featured: true
order: 2
---

## Why I built it

Background jobs are often invisible until they fail. Queue Watch creates a calm, readable view of throughput, retries, and the jobs that need attention.

## What I focused on

- Fast scanning without a wall of charts
- Useful filtering that can be shared as a URL
- Error details that preserve context
- Accessible status colors and labels

## What I learned

Operational interfaces need progressive disclosure. The first screen should answer “is everything okay?” while the underlying details remain one click away.
