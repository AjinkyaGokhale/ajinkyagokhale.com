# AGENTS.md

Guide for AI agents (and humans) working in this repo. Read before making changes.

## Core rules

- **Always clarify, never assume.** If scope, design, or intent is unclear, ask before coding.
- **No major rewrites.** Prefer the smallest change that solves the task. If a request needs a
  large/structural change, stop and clarify first.
- **Minimal comments.** Comment only what isn't obvious from the code. Match surrounding style.
- **Respect the workflow results.** CI must be green before merge. Never merge a red PR, and never
  bypass or weaken a check to make it pass — fix the cause.
- **No force-push, no rebase** on shared branches (`dev`, `main`). History is append-only; use
  merge commits via PRs.

## Branch & PR workflow

```
feature branch  ──PR──▶  dev (staging)  ──PR──▶  main (prod)
```

- Branch off `dev` for every change: `feature/...`, `fix/...`, `chore/...`.
- Open a PR into **`dev`** (the staging/integration branch). Never commit straight to `dev` or `main`.
- Promote to production by opening a PR from `dev` into **`main`**.
- `main` is production: pushing to it triggers `.github/workflows/deploy.yml` (S3 + CloudFront).
- `dev` has no deploy workflow yet — if a staging deploy is wanted, clarify before adding one.

## CI (runs on every PR)

`.github/workflows/ci.yml` runs and must pass:

1. `npm run lint` — Prettier (format check) + ESLint
2. `npm run check` — `svelte-check` (types + a11y)
3. `npm run build`
4. `npm run check:assets` — asset size budget

Run all four locally before pushing.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the built `dist/` |
| `npm run check` | `svelte-kit sync` + `svelte-check` (types/a11y) |
| `npm run lint` | Prettier `--check` + ESLint (read-only) |
| `npm run format` | Prettier `--write` (auto-fix formatting) |
| `npm run check:assets` | Fail if `dist/` assets exceed budget — run after `build` |
| `npm run compress:assets` | Downscale + compress raster images in `static/img` in place |

**Adding images:** drop them in `static/img/...`, then run `npm run compress:assets` before
committing. It caps the longest edge (default 1600px) and re-encodes PNG (lossless) / JPG+WebP
(q82); AVIF and SVG are left alone. Tune with `MAX_DIM` and `QUALITY` env vars, e.g.
`MAX_DIM=1400 QUALITY=80 npm run compress:assets`. Budget caps (override via env on
`check:assets`): `MAX_IMAGE_KB=500`, `MAX_JS_KB=300`, `MAX_CSS_KB=120`.

## Translations (i18n)

All UI/content copy lives in `src/lib/i18n/translations.js` as one object per locale: `en` and `de`.

- **Keep `en` and `de` in sync.** Every key added, renamed, or removed in one locale must be
  mirrored in the other. The two objects must have identical shape.
- Reference copy in components via the `$t` store (e.g. `$t.projects.projects`), never hard-code
  strings in markup.
- Project entries (`projects[]`) support: `name`, `subtitle`, `period`, `status`, `category`,
  `image` (path under `/static`), `desc`, `bullets[]`, `tags[]`, `link`, `repo`. Cards group by
  `category` and render in array order. Translate user-facing values (`subtitle`, `status`,
  `category`, `desc`, `bullets`); leave shared values (`image`, `link`, `repo`, tech `tags`) identical.
