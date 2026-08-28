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

Before publishing, search the repository for these placeholders:

- `Alex Morgan` — name and site identity
- `yourusername` — GitHub and LinkedIn links
- `hello@example.com` — email address
- `your-domain.example` — canonical domain in `astro.config.mjs`

Add posts to `content/posts/` and projects to `content/projects/`. The schemas and available frontmatter fields are defined in `src/content.config.ts`. Set `draft: true` on a post to keep it out of production lists and routes.

## Publish with GitHub Pages

1. Push the repository to GitHub with `main` as the default branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push a commit. The included workflow builds and deploys the site.

For a custom domain, replace `site` in `astro.config.mjs`, create `public/CNAME` containing only the domain (for example `www.example.com`), then configure that same domain in GitHub Pages and at your DNS provider.

If deploying to a project URL without a custom domain (such as `username.github.io/repository`), set `site` to `https://username.github.io` and add `base: '/repository'` in `astro.config.mjs`.
