---
name: lava-theme
description: >-
  Visual design for the LAVA artistic portfolio. Sober pastels (paper, lilac,
  blush, sage, soft ink), Space Grotesk headings, Instrument Serif captions.
  Supplies --op-* token values consumed by the frontend-dev engineering skill.
  TRIGGER when choosing or changing colours, type, spacing, layout, or page
  looks for LAVA. SKIP for CI, infra, or non-visual work.
---

# LAVA theme

Gallery-quiet chrome so colourful works lead. Soft pastel washes, no neon glow,
no card grids in the hero.

## Active fonts (npm)

- `@fontsource/space-grotesk` — headings, nav, UI (OFL)
- `@fontsource/instrument-serif` — ledes, captions, newsletter pitch (OFL)

Import both as JS at app entry (`src/routes/+layout.svelte`). No CDN fonts.

## Token values

See [`assets/tokens.css`](assets/tokens.css). Copy into the app global
stylesheet `:root`. Never put raw hex in component markup — use `var(--op-*)`.

## Layout principles

1. **Brand first** — “LAVA” is the hero signal on `/`.
2. **One job per section** — one headline, one short supporting line.
3. **Works over chrome** — series thumbnails / placeholders carry colour; UI stays pastel.
4. **Motion** — soft fade-up on load, gentle wash drift, link underline grow. No bounce spam.

## Colour families

- **Art Series** — blue / green pastels only (`mist` → `--op-info`, `sage` → `--op-blue-pale`)
- **Expositions** — orange / violet pastels only (`blush` → `--op-blue-light`, `lilac` → `--op-blue`)
- Landing CTA: plain “Stay up to date with us” + lilac Newsletter button
- Landing mosaic: ≤5 series extracts, asymmetrical scatter to the right of LAVA; fixed tile sizes (no full-bleed stretch on phone)
- **Series extracts** — small equal square frames, `--op-frame` black border, centered triptych
- **Series detail wash** — one pastel (`--series-a`) fading to white (`--op-surface`):
  - Connections: seafoam
  - Because I Could Not Stop for Death: moss
  - L’Hirondelle: blush
  - Les Colchiques: soft blue
  - One Art: rose
- **Other series to discover** — white band; horizontal rows with small thumbs

## Routes

| Path                  | Purpose                                            |
| --------------------- | -------------------------------------------------- |
| `/`                   | Front — brand, one line, CTAs                      |
| `/series`             | Series index (Ode to Poems / Notebooks / Graffiti) |
| `/series/[slug]`      | Series detail                                      |
| `/expositions`        | Expositions index                                  |
| `/expositions/[slug]` | Exposition detail                                  |
| `/newsletter`         | Pitch + Kit subscribe form                         |
| `/newsletter/thanks`  | Post-subscribe thank-you (Kit redirect target)     |

## Newsletter

Static HTML `POST` to Kit form URL via `PUBLIC_KIT_FORM_ACTION` (from Embed →
HTML → `action`). Kit redirects to `/newsletter/thanks/` after subscribe —
configure that URL in Kit form settings (include `BASE_PATH` on project Pages).
Disable double opt-in in Kit Incentive settings. If the env var is unset, the
form shows a configure hint.
