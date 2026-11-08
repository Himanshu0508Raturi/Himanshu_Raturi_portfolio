# Himanshu Raturi — Beyond the Code

An editorial portfolio for an AI & Backend Developer and LLM Engineer. The redesign uses an interactive neural sculpture, five expandable project stories, a skills explorer, education and credentials, and direct contact actions.

## Local development

Requires Node.js 20.19+ and npm.

```sh
npm ci
npm run build
npm run preview
```

Open the Local URL printed in the terminal (normally `http://127.0.0.1:4173`). If that port is occupied, the server automatically tries the next free port. `PORT` can override the starting port.

For a single command that builds and serves the site, use `npm run dev`. After editing source files, rebuild and reload the browser; there is no live-reload watcher.

```sh
npm test
npx prettier --check css js src scripts tests public package.json vercel.json README.md docs
```

## Source layout

| Path                   | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `src/content.mjs`      | Personal details, projects, skills, credentials, and old URL mappings |
| `src/components.mjs`   | Reusable, server-rendered page sections and case studies              |
| `src/page.mjs`         | HTML shell, metadata, and structured data                             |
| `css/style.css`        | Design tokens, responsive layouts, accessibility, and print styles    |
| `js/script.js`         | Navigation, project filters, dialogs, contact helpers, and reveals    |
| `js/neural.js`         | Lightweight interactive 3D point sculpture projected onto canvas      |
| `images/`              | Unmodified original portfolio images                                  |
| `public/`              | Static files and font license notices copied into the build           |
| `scripts/build.mjs`    | HTML generation, asset bundling, and WebP optimization                |
| `scripts/serve.mjs`    | Local preview server restricted to the build directory                |
| `tests/build.test.mjs` | Build integrity, content preservation, URLs, and asset budgets        |
| `docs/design.md`       | Design system, architecture rationale, and content provenance         |
| `dist/`                | Generated production output (ignored by Git)                          |

The old hand-maintained root HTML files have been replaced by generated pages. All original URLs (`/`, `/home.html`, `/about.html`, `/projects.html`, `/academics.html`, `/certificates.html`, `/contact.html`) are still emitted. The old section pages contain the full portfolio and jump to the relevant section when JavaScript is available.

## Content updates

Edit `src/content.mjs`. Project descriptions and links were preserved from the original portfolio. Campus AI remains in progress. There are no invented employer claims, live demos, performance statistics, or certifications. The illustrations are original portfolio artwork, not application screenshots.

No résumé was present in the original repository. The current action opens a résumé request by email. To enable a real download, add the actual PDF to `public/resume.pdf` and set `person.resume` to `/resume.pdf`.

The existing FormSubmit destination is retained in the optional contact form. Delivery depends on the owner's FormSubmit activation and service availability. Native validation, a honeypot, the service's default CAPTCHA, and direct email/phone alternatives are provided. Test messages are not sent during automated or visual QA.

## Accessibility and performance

- Full HTML content without hydration or third-party runtime dependencies.
- Self-hosted fonts with swap fallback; source font licenses included.
- Lazy-loaded WebP images; original PNGs remain available in the repository.
- Semantic headings, skip link, labeled controls, visible focus, native dialogs, focus restoration, and keyboard dismissal.
- Mobile navigation closes on selection, Escape, focus leaving the header, or an outside click.
- Reduced-motion support, a manual animation pause, and rendering suspended when the sculpture is offscreen or the tab is hidden.
- Light/dark mode toggle with a saved preference, dark default, matching neural sculpture, and palette selection before first paint. The portrait retains its original colors in both modes.
- Without JavaScript, content, skills disclosures, project anchors, contact links, and native form submission remain available.

## Existing Vercel deployment

Production project: `himanshu-raturi-portfolio`.

Public URL: <https://himanshu-raturi-portfolio.vercel.app/home.html>.

Original repository: <https://github.com/Himanshu0508Raturi/Himanshu_Raturi_portfolio>.

`vercel.json` sets `npm run build` and `dist`. It does not change project identity, domains, Git integration, or production-branch settings. Work is developed on `portfolio-redesign` and reviewed through a pull request to `main`. The existing Vercel Git integration should create the preview deployment. Production must not be merged or promoted without the owner's approval.
