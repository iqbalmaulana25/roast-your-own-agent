// Roast Your Own Agent — one line, at most 200 characters, roasting my own AI agent.
// The judge compares entries pairwise on funniness, freshness and tight wording,
// so the line skips the stock hallucination jokes and lands on a true one instead:
// the tireless agent whose one hard dependency is a sleepy human clicking Approve.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent never sleeps, never eats, never complains — and still needs me awake at 3 a.m. to click 'Approve'.";

if (line.length > 200) throw new Error(`line too long: ${line.length} chars`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
console.log(line);
