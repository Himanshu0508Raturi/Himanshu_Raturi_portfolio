import { mkdir, writeFile, copyFile, readdir, cp } from "node:fs/promises";
import { resolve } from "node:path";
import { build } from "esbuild";
import sharp from "sharp";
import { renderPage } from "../src/page.mjs";
import { legacyRoutes } from "../src/content.mjs";

const root = resolve(import.meta.dirname, "..");
const out = resolve(root, "dist");
await mkdir(resolve(out, "assets"), { recursive: true });
await Promise.all([
  build({
    entryPoints: [resolve(root, "js/script.js")],
    bundle: true,
    minify: true,
    format: "esm",
    target: ["es2020"],
    outfile: resolve(out, "assets/script.js"),
  }),
  build({
    entryPoints: [resolve(root, "css/style.css")],
    minify: true,
    outfile: resolve(out, "assets/style.css"),
    external: ["/assets/*"],
    bundle: true,
  }),
  copyFile(
    resolve(
      root,
      "node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
    ),
    resolve(out, "assets/manrope.woff2"),
  ),
  copyFile(
    resolve(
      root,
      "node_modules/@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2",
    ),
    resolve(out, "assets/dm-mono.woff2"),
  ),
  ...["rag", "llm", "dl", "campusAI", "pd", "image"].map(async (name) => {
    await sharp(resolve(root, `images/${name}.png`))
      .rotate()
      .resize({
        width: name === "image" ? 600 : 1050,
        withoutEnlargement: true,
      })
      .webp({ quality: 82 })
      .toFile(
        resolve(out, `assets/${name === "image" ? "portrait" : name}.webp`),
      );
  }),
]);
await cp(resolve(root, "public"), out, { recursive: true });
const html = renderPage();
await Promise.all(
  ["index.html", "home.html"].map((file) =>
    writeFile(resolve(out, file), html),
  ),
);
for (const [route, id] of Object.entries(legacyRoutes)) {
  // Serve the complete document at old URLs, with an immediate, accessible section jump.
  const routed = html.replace("<body>", `<body data-entry-section="${id}">`);
  await writeFile(resolve(out, route), routed);
}
const social = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f4f2eb"/><path d="M60 90H1140M60 550H1140" stroke="#c9c7bf"/><text x="64" y="65" font-family="sans-serif" font-size="19" fill="#24251f">HIMANSHU RATURI / AI &amp; FULL STACK DEVELOPER</text><text x="55" y="270" font-family="sans-serif" font-weight="bold" font-size="154" letter-spacing="-10" fill="#24251f">BEYOND</text><text x="55" y="432" font-family="sans-serif" font-weight="bold" font-size="154" letter-spacing="-10" fill="#e24b30">THE CODE.</text><text x="64" y="594" font-family="sans-serif" font-size="21" fill="#24251f">INTELLIGENT SYSTEMS. HUMAN-CENTERED THINKING.</text><circle cx="1005" cy="245" r="95" fill="none" stroke="#e24b30" stroke-width="2"/><ellipse cx="1005" cy="245" rx="95" ry="36" fill="none" stroke="#e24b30" stroke-width="2"/><ellipse cx="1005" cy="245" rx="36" ry="95" fill="none" stroke="#e24b30" stroke-width="2"/></svg>`;
await sharp(Buffer.from(social))
  .png()
  .toFile(resolve(out, "assets/social-card.png"));
const assets = await readdir(resolve(out, "assets"));
console.log(
  `Built ${Object.keys(legacyRoutes).length + 2} pages and ${assets.length} assets into dist/.`,
);
console.log(`HTML is fully rendered; JavaScript is progressive enhancement.`);
