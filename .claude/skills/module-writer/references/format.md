# Module file format

Modules are markdown files with a small front-matter block, then three kinds of top-level (`# `) sections: the lesson, worked examples, and the quiz. The build script parses this directly, so follow it exactly.

Path: `content/<track-id>/NN-slug.md` (e.g. `content/real-estate/04-noi-and-cap-rates.md`). Capstones are `99-capstone.md` with `kind: capstone`.

## Template

```markdown
---
id: re-04
track: real-estate
kind: module
number: 4
title: NOI, Cap Rates, and the Operating Statement
subtitle: How to read what the seller gives you, and what to rebuild yourself
minutes: 60
objectives:
  - Rebuild a property's NOI from a T-12 instead of trusting a pro forma
  - Translate a cap rate into a price and back
  - Spot the five expense lines sellers most often understate
---

# Lesson

Cold open here...

## A subheading

Prose, tables, > blockquotes...

# Example 1: A short descriptive title

## The setup
...
## The numbers
| Line | Amount |
|---|---|
| ... | ... |
## What the veteran sees
...
## Change one thing
...

# Example 2: Another title
...

# Quiz

## Q1 | multiple_choice

Question text (markdown allowed, including tables).

- [ ] A wrong option :: Why it's wrong - name the specific thinking error.
- [x] The right option :: Why it's right and what it assumes or costs.
- [ ] Another wrong option :: ...

> The mentor's takeaway: the principle in one or two sentences.

## Q2 | scenario

**Scenario.** 4-8 sentences with numbers.

What is your best next move?

- [ ] ... :: ...
- [x] ... :: ...
- [ ] ... :: ...

> Takeaway.
```

## Rules

- **Front matter keys**: `id`, `track`, `kind` (`module` or `capstone`), `number`, `title`, `subtitle`, `minutes`, `objectives` (3-5 list items). Plain `key: value` and `- item` lists only (no nested YAML).
- **Top-level sections** are, in order: `# Lesson`, one to three `# Example N: Title`, `# Quiz`. Use only `##` and deeper inside them.
- **Question header**: `## Qn | multiple_choice` or `## Qn | scenario`.
- **Options**: one line each, `- [ ]` or `- [x]`, then the option text, then ` :: ` and the explanation. The explanation must be on the same line (it may be long). Exactly one `[x]` per question. 3-4 options (5 max).
- **Takeaway**: one or more lines starting with `>` after the options.
- **Markdown supported by the app**: headings, paragraphs, **bold**, *italic*, `inline code`, bullet and numbered lists, tables, blockquotes, horizontal rules. No images, no HTML, no code fences, no footnotes.
- **Tables**: use real GFM tables with a `|---|` separator; right-align numbers with `|---:|`. Keep to ~6 columns.
- **Money and numbers**: write `$1,600,000` and `6.5%` consistently. Use "k" and "M" only in prose where natural ("$450k").
- Use straight quotes or typographic quotes consistently; avoid em-dash overuse (a couple per page is fine; prefer commas and colons).

## Capstone differences

- `kind: capstone`, `number: 99`, `minutes` around 90.
- `# Lesson` is the **case briefing**: the situation, the cast, the documents on the table, the clock. 900+ words.
- The three `# Example` sections are **Stage 1/2/3** of the case (e.g., "Stage 1: Screen and underwrite", "Stage 2: Diligence and negotiation", "Stage 3: Execute and exit"). Each stage ends with what the veteran would do and why.
- The quiz has 5-8 **decision** questions, mostly scenario type, drawn from different stages.
