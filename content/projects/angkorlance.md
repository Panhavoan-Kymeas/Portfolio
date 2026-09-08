---
title: "AngkorLance"
description: "A two-sided freelance marketplace built with a small team — my first Spring Boot project and a project-management course put into practice."
technologies: [Java, Spring Boot, PostgreSQL, React, Docker]
github: "https://github.com/Panhavoan-Kymeas/AngkorLance"
featured: false
order: 5
---

## Why I built it

Two things at once. I wanted to learn Java and Spring Boot by building something real, and I needed a project for a course on project management and Agile. So I treated it as both: a backend to write, and a small team to coordinate.

AngkorLance is a simplified freelance marketplace — clients post jobs, freelancers send proposals, the client accepts one.

## What I worked on

On the backend I built the REST API for that loop: register and log in, post a job, submit a proposal, accept one. That meant setting up the usual Spring layers — controllers, services, and Spring Data JPA repositories — plus JWT authentication with `CLIENT` and `FREELANCER` roles, request validation, a central exception handler, and Flyway migrations for the schema. There's a React frontend and a Docker Compose setup for running it locally.

On the process side I ran the work through a GitHub Projects board: writing issues, assigning them to teammates, and reviewing merge requests before anything landed on `main`.

## What I learned

The Spring side taught me the shape of a normal backend — how a request travels from a controller down to the database, and why validation, business rules, and persistence each live in their own layer. Doing authentication and error handling by hand made it obvious what a framework is actually saving you from.

The team side was harder than the code. Keeping several people's branches mergeable, writing issues small enough for someone to pick up, and reviewing pull requests without becoming a bottleneck all turned out to be their own skill. Going back over the project afterwards, the gaps were easy to see — thin tests, validation I'd rushed, a production setup that wasn't quite wired up — which was a useful thing to have in front of me.
