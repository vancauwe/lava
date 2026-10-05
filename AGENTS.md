# LAVA agent notes

## Design system

- **Engineering:** `.agents/skills/frontend-dev` (`--op-*` token contract, font loading, no raw hex in markup)
- **Active design skill:** `lava-theme` (sober pastels, Space Grotesk + Instrument Serif)

Open Pulse product chrome (attribution bar, provenance cards) does **not** apply here — this is an artistic portfolio, not an Open Pulse dashboard. Keep the engineering contract; skip those two product components.

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
