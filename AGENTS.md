# LAVA agent notes

## Design system

- **Engineering:** `.agents/skills/frontend-dev` (`--op-*` token contract, font loading, no raw hex in markup) — from [Open Pulse](https://openpulse.science) / [open-pulse-webkit](https://github.com/sdsc-ordes/open-pulse-webkit)
- **Active design skill:** `lava-theme` (sober pastels, Space Grotesk + Instrument Serif)
- **CI / deploy:** GitHub Actions patterns adapted from Open Pulse webkit (lint, check, build, Pages deploy)

## Stack

- SvelteKit + `@sveltejs/adapter-static` → GitHub Pages
- Newsletter: Kit (ConvertKit) HTML form POST. Env: `PUBLIC_KIT_FORM_ACTION`
- Thank-you: `/newsletter/thanks/` — set as Kit post-subscribe redirect
- Base path for project Pages: set `BASE_PATH=/repo-name` at build time

## Commands

```bash
npm run dev
npm run check
npm run build
npm run lint
```
