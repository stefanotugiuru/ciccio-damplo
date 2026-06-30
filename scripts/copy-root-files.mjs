import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");

copyFileSync(join(outDir, "it", "index.html"), join(outDir, "index.html"));
console.log("Copied out/it/index.html -> out/index.html");
