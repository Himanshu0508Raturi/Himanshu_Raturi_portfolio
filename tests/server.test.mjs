import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:net";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { resolve } from "node:path";

test(
  "Preview recovers from an occupied port and serves the built site",
  { timeout: 15000 },
  async (t) => {
    const occupied = createServer();
    occupied.listen(0, "127.0.0.1");
    await once(occupied, "listening");
    t.after(() => new Promise((done) => occupied.close(done)));
    const initialPort = occupied.address().port;
    const child = spawn(
      process.execPath,
      [resolve(import.meta.dirname, "../scripts/serve.mjs")],
      {
        env: { ...process.env, PORT: String(initialPort) },
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: true,
      },
    );
    t.after(() => {
      child.kill();
    });
    let output = "";
    const localUrl = await new Promise((done, reject) => {
      const timer = setTimeout(
        () => reject(new Error(`Preview did not start: ${output}`)),
        10000,
      );
      t.after(() => clearTimeout(timer));
      child.on("error", reject);
      child.on("exit", (code) =>
        reject(new Error(`Preview exited early (${code}): ${output}`)),
      );
      child.stderr.on("data", (chunk) => {
        output += chunk;
      });
      child.stdout.on("data", (chunk) => {
        output += chunk;
        const match = output.match(/Local: (http:\/\/127\.0\.0\.1:\d+)/);
        if (match) {
          clearTimeout(timer);
          done(match[1]);
        }
      });
    });
    assert.match(output, /is in use; trying/);
    assert.notEqual(Number(new URL(localUrl).port), initialPort);
    const response = await fetch(localUrl);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /Himanshu Raturi — Beyond the Code/);
    assert.equal((await fetch(`${localUrl}/not-a-page`)).status, 404);
    assert.equal(
      (await fetch(`${localUrl}/%2e%2e%2fpackage.json`)).status,
      403,
    );
  },
);
