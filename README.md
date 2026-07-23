# Financial Command Center Demo

An isolated, fictional Morgan household demo for product evaluation and education.

## Safety boundary

- Fictional data only.
- No forms, analytics, tracking, persistent storage, or production integrations.
- No personal financial advice.
- `.github/workflows/pages.yml` is the only Pages workflow.
- Pushes to `main` publish only the explicit sanitized runtime allowlist after human-approved merge.
- Pull requests and non-default branches do not deploy.
- Do not copy code, data, assets, or documentation from the private `command-center` repository without a privacy review.

## Repository boundary

This public repository contains only the fictional Morgan household demo. The private personal Command Center, Supabase integration, authentication, recovery tools, migration work, and personal assets belong exclusively to `m3libere28/command-center`.

The Pages runtime allowlist is:

- `index.html`
- `app.js`
- `data.js`
- `styles.css`
- `phase2.css`
- `icon.svg`
- generated `.nojekyll`

## Run locally

Serve this directory with any static HTTP server, then open `index.html`.

## QA

The QA workflow validates the runtime allowlist, JavaScript syntax, fictional-data markers, privacy rules, credentials, and local references.

## Deployment

`pages.yml` builds a fresh `_site` directory from the allowlist above and uploads only that directory. A merge or push to `main` starts the workflow automatically. Deployment remains a human-controlled release decision because changes reach `main` only through an approved merge.
