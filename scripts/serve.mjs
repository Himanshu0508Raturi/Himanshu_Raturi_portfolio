import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve(import.meta.dirname, "../dist");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".pdf": "application/pdf",
};
try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error("Run npm run build before starting the preview.");
  process.exit(1);
}
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    const file = resolve(
      root,
      `.${pathname === "/" ? "/index.html" : pathname}`,
    );
    if (!file.startsWith(root + sep)) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": mime[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" }).end("Page not found");
  }
});
let port = Number(process.env.PORT || 4173);
let retries = 0;
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  console.error("PORT must be a number between 0 and 65535.");
  process.exit(1);
}
server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && retries < 10 && port < 65535) {
    console.log(`Port ${port} is in use; trying ${port + 1}…`);
    retries += 1;
    port += 1;
    server.listen(port, "127.0.0.1");
    return;
  }
  console.error(`Could not start the preview: ${error.message}`);
  console.error("Try another port with the PORT environment variable.");
  process.exitCode = 1;
});
server.on("listening", () => {
  console.log(`Local: http://127.0.0.1:${server.address().port}`);
});
server.listen(port, "127.0.0.1");
