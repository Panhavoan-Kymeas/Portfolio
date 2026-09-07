// Scaffold a new post or project.
//   npm run new                    interactive prompts
//   npm run new -- post "My Title"
//   npm run new -- project "My Project"
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { writeFile, mkdir, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const today = () => new Date().toISOString().slice(0, 10);

const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const postTemplate = ({ title, description, slug }) => `---
title: "${title}"
date: "${today()}"
description: "${description}"
tags: []
# cover: "./${slug}.webp"
# coverAlt: ""
draft: true
---

Write the post here.
`;

const projectTemplate = ({ title, description, slug }) => `---
title: "${title}"
description: "${description}"
technologies: []
# cover: "./${slug}.webp"
# coverAlt: ""
# github: ""
# demo: ""
featured: false
order: 99
---

## Why I built it

## What I focused on

## What I learned
`;

async function main() {
  const [, , ...args] = process.argv;
  const rl = createInterface({ input: stdin, output: stdout });

  let type = args[0];
  if (type !== 'post' && type !== 'project') {
    const answer = (await rl.question('Type — [p]ost or pro[j]ect? ')).trim().toLowerCase();
    type = answer.startsWith('j') || answer === 'project' ? 'project' : 'post';
  }

  const title = (args[1] ?? (await rl.question('Title: '))).trim();
  if (!title) {
    rl.close();
    console.error('A title is required.');
    process.exit(1);
  }

  const description = (await rl.question('Description: ')).trim();
  rl.close();

  const slug = slugify(title);
  const dir = new URL(`content/${type}s/`, root);
  const file = new URL(`${slug}.md`, dir);

  if (await exists(file)) {
    console.error(`content/${type}s/${slug}.md already exists.`);
    process.exit(1);
  }

  const template = type === 'post' ? postTemplate : projectTemplate;
  await mkdir(dir, { recursive: true });
  await writeFile(file, template({ title, description, slug }), 'utf8');

  console.log(`Created content/${type}s/${slug}.md`);
  console.log(`Edit it, drop a ${slug}.webp cover beside it if you want one, then set draft: false when ready.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
