import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a single-line excuse for skipping a pointless meeting.
// Mechanism: the agent quit the meeting the way an employee quits a job —
// with notice. The pre-read, the one real artifact every pointless meeting
// ships, doubles as the two weeks' notice. 62 characters, well under the
// 200-character gate.
const ENTRY =
  "I quit this meeting two weeks ago. The pre-read was my notice.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
