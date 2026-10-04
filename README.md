# HoldCo Learning

A local, offline learning app with four tracks: **Real Estate**, **Small Business Acquisition**, **HoldCo Structure & Credit**, and **MBK Productions** (filmmaking). Each module is a long-form lesson, 2-3 worked examples with real numbers, and a short quiz with per-option feedback. Progress is tracked per module and saved in your browser (localStorage).

## Run it

Open `app/index.html` in a browser. No server or build tools needed. (Or `cd app && python3 -m http.server` and visit http://localhost:8000.)

Progress lives in that browser only. Use **Export progress** in the footer for a backup, **Import progress** to restore.

## How progress is tracked

Each module has up to five steps: the lesson, each worked example, and the quiz. The lesson and examples are marked done with a button. The quiz counts as passed at 75% or better (best score and attempt count are kept). A module is **complete** when every step is done. Notes you type per module are saved too.

## Layout

```
app/                       the web app (index.html, app.js, styles.css)
app/content.js             GENERATED bundle of every module (committed so the app works offline)
content/tracks.json        track metadata and the full syllabus for all four tracks
content/<track>/NN-*.md    one markdown file per module (99-capstone.md is the capstone)
.claude/skills/module-writer/   the Claude skill that writes modules (see its SKILL.md)
```

## Adding or editing a module

1. Edit or add `content/<track>/NN-slug.md` (format: `.claude/skills/module-writer/references/format.md`).
2. Validate: `python3 .claude/skills/module-writer/scripts/validate_module.py content/<track>/NN-slug.md`
3. Rebuild the bundle: `python3 .claude/skills/module-writer/scripts/build_content.py`

The validator enforces structure (lesson length, 2-3 examples, 4-6 quiz questions, an explanation on every option) and warns about weak patterns, such as the correct answer always being the longest option.

## Status

- **Real Estate**: complete (13 modules + capstone), written as the proof of concept.
- Other tracks: syllabus defined in `content/tracks.json`, modules not yet written. They show as "Coming soon" in the app.

## A note on the content

Stories are illustrative composites, not documented history. Dollar figures are worked examples, and they are internally consistent. Market data, interest rates, lending terms, and tax law change; confirm current rules with a lender, CPA, or attorney before acting on anything here. The Real Estate tax module (Module 11) is the most time-sensitive: re-verify its statements on bonus depreciation, rates, and thresholds against current law.
