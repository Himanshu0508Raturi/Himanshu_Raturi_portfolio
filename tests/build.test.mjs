import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import {
  projects,
  certificates,
  legacyRoutes,
  person,
} from "../src/content.mjs";
import { escape } from "../src/components.mjs";

const out = resolve(import.meta.dirname, "../dist");
const html = await readFile(resolve(out, "index.html"), "utf8");
test("Text colors meet AA contrast in light and dark themes", async () => {
  const luminance = (hex) => {
    const rgb = hex
      .slice(1)
      .match(/../g)
      .map((value) => parseInt(value, 16) / 255)
      .map((value) =>
        value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
      );
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  };
  for (const themeFile of ["style.css", "theme.css"]) {
    const css = await readFile(
      resolve(import.meta.dirname, `../css/${themeFile}`),
      "utf8",
    );
    const color = (name) =>
      css.match(new RegExp(`--${name}:\\s*(#[a-f0-9]{6})`))[1];
    for (const background of ["paper", "paper-dark"])
      for (const foreground of ["ink", "muted", "accent"]) {
        const values = [
          luminance(color(background)),
          luminance(color(foreground)),
        ];
        const ratio =
          (Math.max(...values) + 0.05) / (Math.min(...values) + 0.05);
        assert.ok(
          ratio >= 4.5,
          `${themeFile}: ${foreground} on ${background}: ${ratio.toFixed(2)}`,
        );
      }
  }
});
test("Every internal anchor and dialog trigger resolves to a unique ID", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, "IDs must not repeat");
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(anchor), `Missing target: ${anchor}`);
  for (const [, id] of html.matchAll(/data-case-open="([^"]+)"/g))
    assert.match(html, new RegExp(`<dialog[^>]+id="${id}"`));
});
test("All referenced local resources exist in the production output", async () => {
  const css = await readFile(resolve(out, "assets/style.css"), "utf8");
  const resources = new Set(
    [...html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)].map((match) => match[1]),
  );
  for (const [, path] of css.matchAll(/url\(["']?(\/[^)'" ]+)/g))
    resources.add(path);
  for (const resource of resources)
    assert.ok((await stat(resolve(out, `.${resource}`))).isFile(), resource);
});
test("All five source repositories and six published credentials are preserved", () => {
  assert.equal(projects.length, 5);
  assert.equal(certificates.length, 6);
  for (const project of projects) {
    assert.ok(html.includes(`${person.github}/${project.repo}`), project.name);
    assert.ok(
      html.includes(project.description),
      `Missing original description: ${project.name}`,
    );
  }
  for (const cert of certificates)
    assert.ok(html.includes(escape(cert.url)), cert.title);
  assert.match(html, /IN PROGRESS/);
  assert.doesNotMatch(html, /instagram\.com|John Doe|Coursera/);
});
test("The production entry point and every historical HTML URL remain usable", async () => {
  assert.equal(await readFile(resolve(out, "home.html"), "utf8"), html);
  for (const [route, id] of Object.entries(legacyRoutes)) {
    const page = await readFile(resolve(out, route), "utf8");
    assert.ok(page.includes(`data-entry-section="${id}"`), route);
    assert.ok(page.includes(`id="${id}"`), route);
    assert.match(page, /<h1 /);
  }
});
test("Metadata, contact actions, and no-invented-resume behavior are present", () => {
  assert.equal((html.match(/<h1 /g) || []).length, 1);
  assert.match(html, /<html lang="en">/);
  assert.match(html, /name="description"/);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/himanshu-raturi-portfolio\.vercel\.app\/"/,
  );
  assert.match(html, /href="mailto:raturihimanshu077@gmail.com"/);
  assert.match(html, /href="tel:\+917906819386"/);
  assert.match(
    html,
    /action="https:\/\/formsubmit.co\/raturihimanshu077@gmail.com" method="POST"/,
  );
  assert.match(html, /Request résumé/);
  assert.doesNotMatch(html, /href="[^\"]+\.pdf"/);
  for (const match of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g))
    assert.match(match[0], /rel="noopener noreferrer"/);
});
test("Images and bundled code stay within the portfolio performance budget", async () => {
  assert.ok((await stat(resolve(out, "assets/script.js"))).size < 20000);
  assert.ok((await stat(resolve(out, "assets/style.css"))).size < 35000);
  for (const name of [
    ...projects.map((project) => project.image),
    "portrait",
  ]) {
    assert.ok(
      (await stat(resolve(out, `assets/${name}.webp`))).size < 300000,
      name,
    );
  }
});
