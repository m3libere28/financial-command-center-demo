# Financial Command Center Demo — Agent Rules

These rules apply to every automated agent working in this public repository.

## Project boundary

- This repository contains only the public fictional Morgan household demo.
- All people, balances, accounts, goals, projections, and recommendations must remain visibly fictional.
- The private personal Command Center lives only in `m3libere28/command-center`.
- Never copy code, data, images, configuration, documentation, or history from the personal repository without explicit approval and a privacy review.
- Do not add Supabase, authentication, production APIs, personal recovery tools, analytics, tracking, forms, or persistent browser storage.

## Deployment boundary

- `.github/workflows/pages.yml` is the only Pages workflow.
- Pages must publish only the explicit sanitized runtime allowlist.
- Agents must not merge, deploy, change Pages settings, handle secrets, or change repository visibility.

## Engineering rules

- Keep changes narrow, dependency-free where practical, and limited to this demo.
- Preserve fictional metadata guards and visible demo/educational disclosures.
- Update the allowlist and privacy checks together if a runtime file is intentionally added.
- Run JavaScript syntax, workflow syntax, privacy, credential, allowlist, reference, and responsive checks before review.
- Human approval is required for merge and release.
