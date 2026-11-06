/**
 * Reports message keys present in en.json but missing from fr/de/es.
 * Runtime merges en as fallback, so missing keys show English.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const locales = ["en", "fr", "de", "es"];

function flatten(obj, prefix = "") {
  const out = {};
  for (const [key, value] of Object.entries(obj)) {
    const full = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(out, flatten(value, full));
    } else {
      out[full] = value;
    }
  }
  return out;
}

const messages = Object.fromEntries(
  locales.map((locale) => [
    locale,
    JSON.parse(fs.readFileSync(path.join(root, "messages", `${locale}.json`), "utf8")),
  ]),
);

const enFlat = flatten(messages.en);
let exitCode = 0;

for (const locale of ["fr", "de", "es"]) {
  const flat = flatten(messages[locale]);
  const missing = Object.keys(enFlat).filter((key) => !(key in flat));
  if (missing.length === 0) {
    console.log(`${locale}: all ${Object.keys(enFlat).length} keys defined locally`);
    continue;
  }
  exitCode = 1;
  console.error(`${locale}: ${missing.length} keys missing — add translations to messages/${locale}.json`);
  for (const key of missing.slice(0, 30)) {
    console.error(`  - ${key}`);
  }
  if (missing.length > 30) {
    console.error(`  … and ${missing.length - 30} more`);
  }
}

process.exit(exitCode);
