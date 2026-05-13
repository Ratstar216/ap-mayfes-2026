import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const basePath = "2026";
const outDir = path.resolve("out");
const targetDir = path.join(outDir, basePath);

await rm(targetDir, { recursive: true, force: true });
await mkdir(targetDir, { recursive: true });

for (const entry of await readdir(outDir, { withFileTypes: true })) {
  if (entry.name === basePath) {
    continue;
  }

  await cp(path.join(outDir, entry.name), path.join(targetDir, entry.name), {
    recursive: true,
  });
}
