---
title: "Designing the Unhappy Path"
date: "2026-07-21"
description: "A few patterns for making product failures clear, recoverable, and less frustrating."
tags: [design, engineering]
---

Most interfaces are designed around the moment everything works. Real products spend plenty of time elsewhere: a request times out, a permission is missing, or input arrives in a shape nobody expected.

## Make the next action obvious

An error message should answer three questions: what happened, what it means for the user, and what they can do next.

```ts
return {
  message: 'We could not save your changes.',
  detail: 'Your connection was interrupted.',
  action: 'Try again',
};
```

Good recovery is a product feature, not an afterthought.
