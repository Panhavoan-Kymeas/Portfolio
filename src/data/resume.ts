export interface ResumeEntry {
  role: string;
  org: string;
  dates: string;
  detail: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// What you're comfortable working in. Edit freely — keep each group short
// (roughly 3–6) so it stays scannable.
export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'Java', 'TypeScript', 'SQL', 'Bash'] },
  { label: 'Backend', items: ['FastAPI', 'Spring Boot', 'Node.js', 'REST APIs'] },
  { label: 'Data & storage', items: ['PostgreSQL', 'MySQL', 'SQLite', 'pandas'] },
  { label: 'Infra & tooling', items: ['Docker', 'Linux', 'Git', 'GitHub Actions'] },
];

// Fill these in with your real details. Newest first.
// Shown on the About page and (experience only) on the homepage.

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
