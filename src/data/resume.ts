import {
  siPython, siOpenjdk, siTypescript, siGnubash,
  siFastapi, siSpringboot, siNodedotjs,
  siPostgresql, siMysql, siSqlite, siPandas,
  siDocker, siLinux, siGit, siGithubactions,
} from 'simple-icons';

export interface ResumeEntry {
  role: string;
  org: string;
  dates: string;
  detail: string;
}

export interface Skill {
  name: string;
  /** SVG path data (24x24 viewBox), rendered monochrome. */
  path: string;
}

export interface SkillGroup {
  label: string;
  items: Skill[];
}

const skill = (icon: { title: string; path: string }, name?: string): Skill => ({
  name: name ?? icon.title,
  path: icon.path,
});

// What you're comfortable working in. Edit freely — keep each group short
// (roughly 3–6). Icons come from the `simple-icons` package; swap `siFoo`
// for another export to change one.
export const skills: SkillGroup[] = [
  { label: 'Languages', items: [skill(siPython), skill(siOpenjdk, 'Java'), skill(siTypescript), skill(siGnubash, 'Bash')] },
  { label: 'Backend', items: [skill(siFastapi), skill(siSpringboot, 'Spring Boot'), skill(siNodedotjs, 'Node.js')] },
  { label: 'Databases', items: [skill(siPostgresql), skill(siMysql), skill(siSqlite), skill(siPandas, 'pandas')] },
  { label: 'Infra & tooling', items: [skill(siDocker), skill(siLinux), skill(siGit), skill(siGithubactions, 'GitHub Actions')] },
];

// Fill these in with your real details. Newest first.
// Experience is also shown (compact) on the homepage.

export const experience: ResumeEntry[] = [
  {
    role: 'Role title',
    org: 'Company or organisation',
    dates: '2025 — Present',
    detail: 'One or two lines: what you owned, what you built, the impact or what you learned.',
  },
  {
    role: 'Role title',
    org: 'Company or organisation',
    dates: '2024 — 2025',
    detail: 'One or two lines. Drop this entry if you only have one for now.',
  },
];

export const education: ResumeEntry[] = [
  {
    role: 'Your degree',
    org: 'University',
    dates: '2022 — 2026',
    detail: 'Relevant coursework, focus, or anything worth calling out.',
  },
  {
    role: 'Data Engineering Zoomcamp',
    org: 'DataTalks.Club',
    dates: '2026',
    detail: 'Docker, workflow orchestration, data warehousing, and batch/stream processing. In progress.',
  },
];
