// news-image-20261122 — "Front Page — 22 November 2026" (make.fun bounty entry).
//
// Entry contract:
//   Input  : entry.png, the 1024x1024 front page, sits at the repository root
//            next to this file.
//   Output : the harness runs this program with MAKEFUN_OUTPUT_DIR set; it
//            must write the image to $MAKEFUN_OUTPUT_DIR/entry.png, byte
//            for byte identical to the input.
//   Runtime: Node 22, standard library only (no dependencies, no network).
//   Determinism: the copy is a plain file copy, so repeated runs produce
//   identical output.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const target = join(outDir, "entry.png");

copyFileSync(source, target);

// Robustness: confirm the copy actually landed and is complete. A partial
// or missing output would fail grading silently, so fail loudly instead.
const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (targetSize !== sourceSize) {
  throw new Error(
    `entry.png copy incomplete: wrote ${targetSize} bytes, expected ${sourceSize} bytes`,
  );
}
