---
title: "AngkorLance"
description: "A two-sided freelance marketplace built with a small team — my first Spring Boot backend, coming from FastAPI, plus a project-management course put into practice."
technologies: [Java, Spring Boot, PostgreSQL, React, Docker]
github: "https://github.com/Panhavoan-Kymeas/AngkorLance"
featured: false
order: 5
---

## Why I built it

Two things at once. I wanted to learn Java and Spring Boot by building something real, and I needed a project for a course on project management and Agile. So I treated it as both: a backend to write, and a small team to coordinate.

AngkorLance is a simplified freelance marketplace — clients post jobs, freelancers send proposals, the client accepts one.

## What I worked on

On the backend I built the REST API for that loop: register and log in, post a job, submit a proposal, accept one. That meant the usual Spring layers — controllers, services, and Spring Data JPA repositories — plus JWT authentication with `CLIENT` and `FREELANCER` roles, request validation, a central exception handler, and Flyway migrations for the schema. There's a React frontend and a Docker Compose setup for running it locally.

On the process side I ran the work through a GitHub Projects board: writing issues, assigning them to teammates, and reviewing merge requests before anything landed on `main`.

## What I learned

I'd written backends before in FastAPI, so the interesting part was seeing what Spring does differently. A few things that stuck with me:

- **Derived queries.** In FastAPI I wrote queries by hand with SQLAlchemy. Spring Data JPA generates them from the method name — `findByEmail`, `findByJobIdAndFreelancerId` — so a lot of the repository layer is just an interface with no bodies. Convenient, until a query doesn't fit the naming scheme and you have to decide where that line is.
- **DTOs vs Pydantic.** A Java DTO is a plain class with fields, getters, setters, and a constructor. Pydantic hands you parsing and validation for free; in Spring those are split up — the DTO holds the shape, Bean Validation annotations (`@NotBlank`, `@Email`) do the checking, and a `@RestControllerAdvice` turns the failures into responses.
- **Spring Security's assumptions leak.** The main hook is `UserDetailsService.loadUserByUsername`, built around a `String` "username". This app authenticates by the numeric user id from the JWT, so I end up passing the id through a method literally called `loadUserByUsername`. It works, but it's a clear case of a framework's assumptions showing through.

The team side was harder than any of that. Keeping several people's branches mergeable, writing issues small enough for someone to pick up, and reviewing pull requests without becoming a bottleneck all turned out to be their own skill. Going back over the project afterwards, the gaps were easy to see — thin tests, validation I'd rushed, a production setup that wasn't quite wired up — which was a useful thing to have in front of me.
