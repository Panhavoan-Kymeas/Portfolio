# Personal portfolio + learning blog

A static Astro site for projects, learning notes, and writing. Content lives in Markdown, so the repository is the CMS.

## Start locally

```bash
npm install
npm run dev
```

The production check and build is:

```bash
npm run build
```

## Customize it

Site identity lives in a few places:

- Name, bio, and social links: `src/pages/index.astro`, `src/pages/about.astro`,
  `src/components/Header.astro`, `src/components/Footer.astro`
- Titles and Open Graph defaults: `src/layouts/BaseLayout.astro`
- Canonical domain / base path: `site` and `base` in `astro.config.mjs`
- The sample posts and projects in `content/` are placeholders — replace them
  with your own (see below)

### New posts and projects

```bash
npm run new                    # interactive
npm run new -- post "Title"
npm run new -- project "Title"
```

This writes a frontmatter stub to `content/posts/` or `content/projects/`. The
schemas and available fields are defined in `src/content.config.ts`. Posts start
with `draft: true`; they render in `npm run dev` (with a "Draft" marker) but are
excluded from the production build, routes, and RSS feed until you set it to
`false`.

### Cover images

Both posts and projects support optional cover artwork in list cards and detail
pages. Place the image **beside its Markdown file** and point `cover` at it with a
relative path:

```yaml
cover: "./my-cover.webp"
coverAlt: "A useful description of the image"
```

Astro optimizes and generates responsive versions at build time, so commit the
full-resolution source (roughly 1536×1024, 3:2). Images with a broken `cover`
path fail the build instead of 404-ing in production.

For an image that should only appear inside an article, also place it beside the
Markdown file and reference it with standard Markdown: `![Description](./image.png)`.

### Social card

`public/social-card.png` is the Open Graph / Twitter preview image. Regenerate it
after changing the palette or copy with `npm run og` (see `scripts/og-card.mjs`).

## Publish with GitHub Pages

1. Push the repository to GitHub with `main` as the default branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push a commit. The included workflow builds and deploys the site.

For a custom domain, replace `site` in `astro.config.mjs`, create `public/CNAME` containing only the domain (for example `www.example.com`), then configure that same domain in GitHub Pages and at your DNS provider.

If deploying to a project URL without a custom domain (such as `username.github.io/repository`), set `site` to `https://username.github.io` and add `base: '/repository'` in `astro.config.mjs`.
