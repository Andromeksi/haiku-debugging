// haiku-debugging: a 5-7-5 haiku about debugging, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "cursor blinks at three",
  "the log file says nothing new",
  "yet the bug blinks back",
].join("\n");

// The gate allows 1-200 characters of UTF-8 text; refuse anything outside it,
// so a future edit that grows the poem can never silently pass the gate.
if (HAIKU.length < 1 || HAIKU.length > 200) {
  throw new Error(`haiku must be 1-200 characters, got ${HAIKU.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
