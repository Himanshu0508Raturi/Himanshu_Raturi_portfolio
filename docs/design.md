# Beyond the Code

An editorial interpretation of an AI engineer's digital universe: warm paper, expressive type, and a vermilion computational sculpture. Generous space and a clear reading order keep the experimental hero accessible. Project stories alternate imagery and text; a charcoal personal chapter, technical index, educational timeline, and vermilion contact chapter provide distinct rhythms.

## Design tokens

- Paper `#f4f2eb`; secondary paper `#e9e6dd`; ink `#24251f`; muted `#626358`; vermilion `#b73a25`.
- Self-hosted Manrope variable for headings and body, DM Mono for labels, and a system serif for expressive italic words.
- Gutters 20–96px; section spacing 80–160px; content uses asymmetric two-column compositions before becoming a deliberate single-column mobile experience.
- Fine rules and square controls, with pill filters and the circular contact gesture as limited exceptions.
- Interaction timing 200–350ms, section reveals 800ms, entrance 1.1s; cubic-bezier(.22,1,.36,1).
- Native cursor remains visible. A small optional pointer accent appears only with a fine pointer. Native reduced-motion preferences stop animated treatments and render the sculpture once.

## Content provenance

Baseline: `f85785b` on `main`. All six live pages were fetched successfully and matched the local HTML before implementation. Original images are retained in `images/`; optimized WebP copies are generated at build time. Project artwork is explicitly identified as artwork.

- Five projects, their full original descriptions, technology tags, and GitHub destinations are retained.
- Six published credentials are retained. The original commented-out Coursera credential is not presented as earned. Its original HTML remains available in Git history.
- Three education entries retain their institutions, dates, and scores. No employment history or new achievements were invented.
- GitHub, LinkedIn, X, email, and phone are preserved. The generic `instagram.com` placeholder is omitted because it is not a personal profile.
- No résumé file or live project demo was present. The résumé action requests it by email; source links are shown without invented demo destinations.
- Amazon ML Summer School appeared as an aspiration, not an acceptance. The general interest in ML foundations is retained without presenting participation as an achievement.

## Architecture decision

The original repository was a small, static Bootstrap multi-page website with no package manifest or Vercel configuration. A static, component-based renderer fits this content and avoids shipping a UI framework solely for a small set of interactions. Node generates complete HTML; esbuild bundles native JavaScript/CSS; Sharp optimizes the supplied imagery; the neural sculpture projects 3D coordinates onto a 2D canvas. No third-party client scripts, GPU framework, API secrets, or server runtime are required.

The production URL and Vercel project identity are unchanged. `vercel.json` describes only the build/output and response headers; it does not create, link, rename, or promote a project. All seven original HTML entry URLs are generated in `dist/`.
