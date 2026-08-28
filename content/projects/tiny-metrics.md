---
title: "Tiny Metrics"
description: "A privacy-minded analytics script and a tiny dashboard for the numbers that actually matter."
technologies: [Go, SQLite, JavaScript]
github: "https://github.com/yourusername/tiny-metrics"
demo: "https://example.com"
featured: true
order: 3
---

## About

Tiny Metrics tracks page views, referrers, and useful events without cookies or individual visitor profiles. The client is deliberately small and the dashboard avoids vanity metrics.

## Technical notes

The event endpoint is written in Go and batches writes to SQLite. A short retention window keeps the database compact, while daily aggregates retain useful trends.

## What I learned

Constraints improve analytics. Deciding not to identify people produced a simpler data model and made every collected field justify its existence.
