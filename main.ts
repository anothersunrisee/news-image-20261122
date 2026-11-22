// news-image-20261122 entry (Node 22, standard library only).
// The front page is the entry.png next to this file; the program copies it
// to the output directory the harness provides. Run it outside the grader
// with:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
