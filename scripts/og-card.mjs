// Generates public/social-card.png (1200x630) for Open Graph / Twitter previews.
// Run with: node scripts/og-card.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/social-card.png', import.meta.url));

const paper = '#f4f1ea';
const ink = '#24241f';
const muted = '#706f67';
const line = '#d7d2c7';
const accent = '#d85b32';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${paper}"/>
  <rect x="0" y="0" width="1200" height="8" fill="${accent}"/>

  <!-- brand -->
  <text x="90" y="128" font-family="Noto Serif, Georgia, serif" font-size="46" font-weight="600" fill="${ink}" letter-spacing="-2">KP<tspan fill="${accent}">.</tspan></text>

  <!-- eyebrow -->
  <line x1="90" y1="196" x2="126" y2="196" stroke="${accent}" stroke-width="2"/>
  <text x="140" y="203" font-family="DejaVu Sans Mono, monospace" font-size="20" fill="${accent}" letter-spacing="3">BACK-END DEVELOPER &#183; PHNOM PENH</text>

  <!-- name -->
  <text x="86" y="320" font-family="Noto Serif, Georgia, serif" font-size="104" fill="${ink}" letter-spacing="-4">Kymeas</text>
  <text x="86" y="430" font-family="Noto Serif, Georgia, serif" font-size="104" fill="${ink}" letter-spacing="-4">Panhavoan<tspan fill="${accent}">.</tspan></text>

  <!-- tagline -->
  <text x="90" y="510" font-family="DejaVu Sans, sans-serif" font-size="27" fill="${muted}">I build web services in Java and Python,</text>
  <text x="90" y="548" font-family="DejaVu Sans, sans-serif" font-size="27" fill="${muted}">and write about what I learn.</text>

  <!-- ring motif -->
  <circle cx="1010" cy="300" r="118" fill="none" stroke="${line}" stroke-width="2"/>
  <circle cx="1010" cy="300" r="99" fill="none" stroke="${accent}" stroke-width="15"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
