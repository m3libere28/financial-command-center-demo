# Demo Review Checklist

## Boundary

- [ ] Only fictional Morgan data is present.
- [ ] No personal names, values, images, addresses, or private documentation exist.
- [ ] No code or data was copied from `m3libere28/command-center` without privacy review.
- [ ] No Supabase, production API, recovery, analytics, tracking, form, cookie, or persistent-storage integration exists.

## Runtime

- [ ] The runtime is limited to the allowlist in `pages.yml`.
- [ ] `mode: "demo"` and `fictional: true` guards remain.
- [ ] Local references resolve.
- [ ] JavaScript and workflow syntax checks pass.
- [ ] Privacy and credential scans pass.

## Experience

- [ ] Fictional and educational disclosures remain visible.
- [ ] Keyboard, focus, reset, and Copilot interactions work.
- [ ] No horizontal overflow occurs at 320, 360, 390, 768, 1024, and 1440 pixels.
- [ ] Reduced-motion behavior remains available.

## Human approval

- [ ] Merge and release are explicitly approved.
- [ ] No agent changed Pages settings or deployed manually.
