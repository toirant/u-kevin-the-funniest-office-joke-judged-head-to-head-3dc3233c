import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke: setup (printer jams on deadline day),
// turn (HR rewards it), punchline last (the double meaning of
// "stops working" — it breaks, and it is the only one that ever
// stops labouring).
const JOKE =
  "Our office printer only jams on deadline day, so HR gave it Employee of the Month — it is the only one here that ever stops working.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

// Validate the gate before writing: UTF-8 text, 1-200 chars,
// a single line, not whitespace-only.
function validate(text: string, stage: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(
      `[${stage}] Joke must be 1-200 characters, got ${chars.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error(`[${stage}] Joke must not be only whitespace`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error(`[${stage}] Joke must be a single line`);
  }
  // Reject non-UTF-8-representable content: a lone surrogate would
  // not survive a UTF-8 round-trip.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error(`[${stage}] Joke is not valid UTF-8 text`);
  }
}

validate(JOKE, "pre-write");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");

// Re-read what was written and validate it again, so a partial or
// corrupted write can never pass silently.
const written = readFileSync(outFile, "utf8");
if (written !== JOKE) {
  throw new Error("Written entry does not match the joke");
}
validate(written, "post-write");
console.log(`Wrote ${[...JOKE].length} characters to ${outFile}`);
