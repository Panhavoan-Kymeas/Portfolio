import {
  siOpenjdk, siSpringboot, siPostgresql, siReact, siDocker, siAstro,
  siNodedotjs, siTypescript, siJavascript, siGo, siSqlite, siPython,
  siMysql, siGnubash, siKubernetes, siRedis, siGit, siTailwindcss,
  siFastapi, siNextdotjs, siVuedotjs, siMongodb, siGraphql, siHtml5,
  siCss, siFlask, siDjango, siExpress, siRust, siGithubactions, siLinux,
} from 'simple-icons';

// Maps a `technologies:` frontmatter string to a monochrome SVG path.
// Unknown names just render as a text-only chip — add a line here to give
// one an icon.
const TECH: Record<string, string> = {
  java: siOpenjdk.path,
  'spring boot': siSpringboot.path,
  spring: siSpringboot.path,
  postgresql: siPostgresql.path,
  postgres: siPostgresql.path,
  react: siReact.path,
  docker: siDocker.path,
  astro: siAstro.path,
  'node.js': siNodedotjs.path,
  node: siNodedotjs.path,
  nodejs: siNodedotjs.path,
  typescript: siTypescript.path,
  javascript: siJavascript.path,
  go: siGo.path,
  golang: siGo.path,
  sqlite: siSqlite.path,
  python: siPython.path,
  mysql: siMysql.path,
  bash: siGnubash.path,
  kubernetes: siKubernetes.path,
  k8s: siKubernetes.path,
  redis: siRedis.path,
  git: siGit.path,
  tailwind: siTailwindcss.path,
  'tailwind css': siTailwindcss.path,
  fastapi: siFastapi.path,
  'next.js': siNextdotjs.path,
  nextjs: siNextdotjs.path,
  'vue.js': siVuedotjs.path,
  vue: siVuedotjs.path,
  mongodb: siMongodb.path,
  mongo: siMongodb.path,
  graphql: siGraphql.path,
  html: siHtml5.path,
  html5: siHtml5.path,
  css: siCss.path,
  flask: siFlask.path,
  django: siDjango.path,
  express: siExpress.path,
  rust: siRust.path,
  'github actions': siGithubactions.path,
  linux: siLinux.path,
};

export function techIcon(name: string): string | undefined {
  return TECH[name.trim().toLowerCase()];
}
