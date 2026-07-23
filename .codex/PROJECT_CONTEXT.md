# Project Context

This is the standalone public Financial Command Center demo. It presents a fictional Morgan household for product evaluation and education.

## Sources of truth

1. `AGENTS.md` — repository and safety boundaries.
2. `PROJECT_STATUS.md` — current project state.
3. `data.js` — implemented fictional dataset.
4. `index.html`, `app.js`, `styles.css`, and `phase2.css` — implemented experience.
5. `.github/workflows/qa.yml` — privacy and runtime checks.
6. `.github/workflows/pages.yml` — the only deployment workflow and runtime allowlist.

## Hard boundary

The private personal dashboard is a different project in `m3libere28/command-center`. This repository must not contain personal source, names, values, images, Supabase integration, recovery tooling, or migration documentation.
