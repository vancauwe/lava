# LAVA

Artistic portfolio site for **LAVA** — front page, series archive, and newsletter signup. Static SvelteKit app for GitHub Pages; newsletter via [Kit](https://kit.com/) (formerly ConvertKit).

## Develop

```bash
npm install
npm run dev
```

```bash
npm run check
npm run build
npm run preview
```

## Design

- Fonts: Space Grotesk + Instrument Serif (SIL OFL)
- Palette: sober pastels (paper / lilac / blush / sage / soft ink)
- Tokens: `--op-*` contract — see `.agents/skills/lava-theme/` and `AGENTS.md`

## Newsletter (Kit)

No backend: the LAVA form posts straight to Kit, then Kit redirects back to LAVA.

1. Create a free Kit account and a **Form** (Grow → Landing Pages & Forms).
2. Open **Embed → HTML** and copy the form `action` URL  
   (e.g. `https://app.kit.com/forms/1234567/subscriptions`).
3. Set GitHub Actions **variable** (or local `.env`):

   - `PUBLIC_KIT_FORM_ACTION` — that `action` URL

4. In the Kit form settings:
   - Set **post-subscribe redirect** to your live thank-you page, e.g.  
     `https://<user>.github.io/lava/newsletter/thanks/`  
     (include `/lava` when using project GitHub Pages).
   - **Disable double opt-in** (Incentive: uncheck confirmation email, or enable auto-confirm).

5. Test: submit on `/newsletter` → land on `/newsletter/thanks` → appear in Kit subscribers.

Copy `.env.example` → `.env` for local values.

## GitHub Pages

1. Repo **Settings → Pages → Source**: GitHub Actions.
2. Push to `main` — `Deploy GitHub Pages` builds with `BASE_PATH=/lava` (or empty for `*.github.io` user sites) and deploys.

## License

See [LICENSE.md](LICENSE.md).
