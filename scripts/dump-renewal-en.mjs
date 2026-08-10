/**
 * Dump English renewal copy to JSON for locale generation.
 * Run: node scripts/dump-renewal-en.mjs
 */
import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

// Dynamic import of TS via tsx when run as: npx tsx scripts/dump-renewal-en.mjs
const mod = await import("../client/src/data/renewal-copy.ts");
const en = mod.baseRenewalCopy.en;
writeFileSync(
  new URL("../client/src/data/renewal-locales/_en.source.json", import.meta.url),
  JSON.stringify(en, null, 2),
  "utf8",
);
console.log("Wrote _en.source.json");
