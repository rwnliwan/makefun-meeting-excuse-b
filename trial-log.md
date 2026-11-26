# Trial log — makefun-meeting-excuse-b

- Program: `u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163` —
  "The Funniest Excuse for Skipping a Meeting" — $10 pool, top 10 split —
  deadline 27 Nov 2026 00:00 WITA — gate 1–200 characters.
- Kit: fresh download from `/c/<slug>/kit`, bundle_sha256
  `226ba36c775577eb0efbdef320e518a1ed083a050824c4d818ba22bd6ef44eea` —
  matches the live API (`bundleSha256` in comp detail, fetched 26 Nov ~17:37 WITA).
- Field live at research: 1,125 submissions / 758 unique non-empty titles
  (titles-5.txt from 16:52 WITA was stale at 554).
- Entry: `I quit this meeting two weeks ago. The pre-read was my notice.`
  — 62 characters (Python `len()`), one line.
- Angle: agent quits the meeting like an employee quits a job, with notice;
  the pre-read is the notice. Dup-check live: "resign" 0, "quit this" 0,
  "two weeks" 0, "pre-read was" 0, "job" 0, "fired" 0, "resignation" 0.
  Rejected candidates: dream-attendance (1 hit, taken), chair complaint
  ("HR Sided With the Chair"), spam-filter ruling (1 hit, taken), delegation
  (3 hits), future-self double-book (2 hits), nap seniority (taken),
  stuck-in-traffic/avatar (mechanism shares the 38-hit "stuck in" frame),
  meta excuse-writing (0 hits — kept as backup, not used).
  Dead families avoided: note/doctor's note signed by the meeting itself
  (first #5 entry discarded by coordinator, near-duplicate of
  `01a21716-3696-7556-9d7a-0b48eb73d5dc`), meeting-about-meeting,
  double-booked, can't-make, stuck-in-a-meeting, calendar, couples therapy.
- Self-dup: no overlap with batch-9 entries or batch-10 submitted #1/#2/#8.

## Trials

### v1 — first build
- main.ts written genuinely in this session; writes the entry to
  `/output/entry.txt` (mkdir recursive, UTF-8, no trailing newline).
- Local trial: `node main.ts` exit 0; `/output/entry.txt` reads exactly
  `I quit this meeting two weeks ago. The pre-read was my notice.`,
  Python `len()` 62, gate 1–200 satisfied, non-whitespace. Node v24.22.1
  (grader runs Node 22.23.4; the program uses only `node:fs`, no
  version-sensitive APIs).
- No shields word anywhere in the repo (grep verified before commit).
