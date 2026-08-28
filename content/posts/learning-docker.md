---
title: "What I Learned About Docker"
date: "2026-08-28"
description: "A practical mental model for images, containers, and the small details that finally made Docker click."
tags: [docker, learning, devops]
cover: "/images/covers/learning-docker.webp"
coverAlt: "Nested charcoal and ivory boxes beside a small orange cube"
---

Docker felt more complicated than it needed to be until I stopped treating it as a tiny virtual machine. A container is simply an isolated process, assembled from an image and run with a particular configuration.

## Images are recipes, containers are runs

An image is an immutable set of filesystem layers plus metadata. A container is what you get when you run that image with a writable layer on top.

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
```

The order matters. Docker caches each instruction as a layer, so copying dependency files before application code prevents every source edit from invalidating the expensive install step.

> A good container is boring: one clear job, explicit inputs, and disposable state.

## The useful questions

When a container behaves unexpectedly, I now ask:

1. What is baked into the image?
2. What is supplied when the container starts?
3. Where does persistent data live?
4. Which network can this process see?

That model is small enough to remember and useful enough to debug with.
