import {
  siPython, siOpenjdk, siTypescript, siJavascript, siGnubash,
  siSpringboot, siFastapi, siNodedotjs,
  siReact, siNextdotjs, siHtml5, siCss,
  siPostgresql, siMysql, siSqlite,
  siDocker, siLinux, siGit,
} from 'simple-icons';

export interface ResumeEntry {
  role: string;
  org: string;
  dates: string;
  detail?: string;
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

// TODO(kymeas): your LinkedIn lists 16 skills but only shows two publicly.
// This set is inferred from your projects, certs, and coursework — trim it to
// what you'd actually want to be asked about.
export const skills: SkillGroup[] = [
  { label: 'Languages', items: [skill(siPython), skill(siOpenjdk, 'Java'), skill(siJavascript, 'JavaScript'), skill(siTypescript), skill(siGnubash, 'Bash')] },
  { label: 'Back end', items: [skill(siSpringboot, 'Spring Boot'), skill(siFastapi), skill(siNodedotjs, 'Node.js')] },
  { label: 'Front end', items: [skill(siReact), skill(siNextdotjs, 'Next.js'), skill(siHtml5, 'HTML'), skill(siCss)] },
  { label: 'Databases', items: [skill(siPostgresql), skill(siMysql), skill(siSqlite)] },
  { label: 'Tooling', items: [skill(siDocker), skill(siLinux), skill(siGit)] },
];

// Newest first. Experience is also shown (compact) on the homepage.
export const experience: ResumeEntry[] = [
  {
    role: 'Back End Developer',
    org: 'Innotech Solutions',
    dates: 'Mar 2026 — Present',
    detail: 'Full-time, on-site in Phnom Penh. Back-end web and web-application development. (Add a line or two on the services / features you own.)',
  },
];

export const education: ResumeEntry[] = [
  {
    role: 'Bachelor’s degree',
    org: 'Royal University of Phnom Penh',
    dates: '2023 — 2026',
    detail: 'Confirm your exact degree and major.',
  },
  {
    role: 'Associate’s degree',
    org: 'TUX Global Institute',
    dates: 'Feb 2025 — Present',
  },
  {
    role: 'Data Engineering Zoomcamp',
    org: 'DataTalks.Club',
    dates: '2026',
    detail: 'Docker, workflow orchestration, data warehousing, and batch/stream processing. In progress.',
  },
  {
    role: 'Samsung Innovation Campus',
    org: 'Samsung',
    dates: 'Apr — Dec 2024',
    detail: 'Python and data structures.',
  },
];

export const certifications: ResumeEntry[] = [
  {
    role: 'Version Control',
    org: 'Meta',
    dates: 'Oct 2025',
    detail: 'Credential HL7STCYUTTRE',
  },
  {
    role: 'Python (Basic)',
    org: 'HackerRank',
    dates: 'Jun 2024',
  },
];

export const awards: ResumeEntry[] = [
  {
    role: 'Huawei ICT Competition 2024–2025 Cambodia — National Round',
    org: 'Huawei Cambodia',
    dates: 'Dec 2025',
  },
  {
    role: 'Engineering Day Competition — 1st Runner-Up',
    org: 'RUPP, Dept. of Information Technology & Engineering',
    dates: 'Jan 2023',
  },
];
