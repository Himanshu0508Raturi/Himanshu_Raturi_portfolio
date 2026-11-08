# Redesign validation

Validated locally before opening the pull request.

- Production build succeeds with `npm run build`.
- Eight Node tests pass: text contrast, anchor/dialog integrity, local resources, original project/credential content, historical routes, metadata/contact actions, asset budgets, and a real occupied-port server regression test.
- Browser widths checked: 320, 390, 768, 1024, 1440, and 1920 CSS pixels. No horizontal document overflow found.
- All three project filters, all five case-study dialogs, native Escape dismissal and focus restoration, mobile navigation selection/closure, skills disclosures, manual motion pause, clipboard copy, and invalid-email/required-field validation checked in the browser.
- `/home.html` renders the new homepage; `/about.html`, `/projects.html`, `/academics.html`, `/certificates.html`, and `/contact.html` retain complete HTML and enter the appropriate section.
- No missing loaded images or browser console warnings/errors found in the tested flows.
- All five linked project repositories were confirmed accessible through the GitHub connector. Credential/social destinations are retained from the original live site; third-party service availability and inbox delivery are outside local validation.
- No contact message was submitted and no production deployment was promoted.
- Reduced motion is implemented through native media queries and the canvas animation scheduler. Manual pause was exercised; OS-level reduced-motion emulation was not available through the browser testing interface.
- Dependency installation reported zero known vulnerabilities.

Browser testing used the production output served locally, not source files. Fonts are self-hosted. Original PNGs total about 8 MB; their generated WebP replacements total about 353 KB. The minified JavaScript bundle is approximately 7 KB before compression.

The original six live HTML pages returned HTTP 200 and matched the original checkout before changes. Original repository assets remain untouched. Vercel project settings could not be read through the unauthenticated CLI; the existing project's successful production GitHub status and unchanged live URL were verified instead.
