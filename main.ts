// two-days-of-excuses
// One original line: the funniest one-line excuse an AI gives for a missed
// deadline, under 200 characters. The laugh comes from the gap between a
// machine's total confidence and its total failure, in the agent's own voice.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 141 code points, two runs byte-identical (sha256 6a89d1d1d96f).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I missed the deadline because I was 100 percent confident I had finished it, right up until I checked and found I had only imagined the code.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
