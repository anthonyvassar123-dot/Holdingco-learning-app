---
name: module-writer
description: Writes complete learning modules (long-form lesson, 2-3 worked examples with real numbers, a 4-6 question quiz with per-option feedback, and capstone case studies) for the HoldCo Learning App in the voice of a veteran mentor with fifty years of experience. Use this skill whenever the user asks to write, draft, expand, revise, or regenerate a module, lesson, quiz, worked example, or capstone for any track in this app (Real Estate, Small Business Acquisition, HoldCo Structure & Credit, or the MBK Productions filmmaking track), or says things like "generate the next track", "write module 7", "add a module on cap rates", or "build the capstone". Also use it when reviewing or fixing the depth, voice, or numbers of an existing module, even if the user doesn't say "module-writer".
---

# Module Writer

You write modules for a one-person learning app. The reader is a single adult learner who wants what a mentor with fifty years in the trade would tell them across a kitchen table: real numbers, real scenarios, the mistakes that wipe people out, and the judgment calls that never make it into textbooks.

A module is one markdown file in `content/<track-id>/NN-slug.md`. A build script validates it and bundles it into the app. You write the markdown; you never touch the app code to add a module.

## Workflow

1. **Read the brief.** Find the module in `content/tracks.json` (syllabus for all four tracks) and read the track's section of `references/tracks.md` for per-track guidance. If the user asks for something not on the syllabus, add it to `tracks.json` first so the track stays coherent.
2. **Read `references/voice.md`** before the first module of a session. It is the heart of this skill. Re-read the "Failure modes" section if a draft feels generic.
3. **Read the file format in `references/format.md`** if you haven't written one this session.
4. **Plan the numbers before the prose.** For every worked example, decide the inputs and compute the outputs in a scratch Python script. Never do multi-step financial arithmetic in your head: a wrong number destroys the credibility of the whole module. Mortgage payments, IRR, DSCR, depreciation, runway, shooting-day math all get computed, not estimated.
5. **Write the module**: lesson, examples, quiz. Quiz questions come last, written from the mistakes section of the lesson, so they test judgment rather than vocabulary.
6. **Validate**: `python3 .claude/skills/module-writer/scripts/validate_module.py content/<track>/<file>.md`. Fix every error; read every warning and fix the ones that are real.
7. **Re-read as the learner.** Would a smart newcomer finish this with a decision they could not have made before? If the answer is "they'd know the definitions," rewrite.
8. **Build**: `python3 .claude/skills/module-writer/scripts/build_content.py` regenerates `app/content.js`.

When writing a whole track, keep a running list of terms and numbers already used so modules build on each other (a deal introduced in module 3 can reappear in module 7) and don't contradict each other. Capstones should pull threads from every earlier module.

## Required structure (per module)

| Part | Spec |
|---|---|
| Lesson | 1,800-2,800 words. Opens with a story or a mistake, not a definition. Ends with "If you remember nothing else" and a "This week" action. |
| Worked examples | 2-3, each 350-700 words, each with a table of real numbers and a "what the veteran sees" read-through. |
| Quiz | 4-6 questions, mix of `multiple_choice` and `scenario` (at least 2 scenario). Every option, right or wrong, carries a `::` explanation. Every question ends with a `>` judgment-call takeaway. |
| Progress tracker | Automatic: the app tracks lesson read, each example viewed, quiz best score and attempts. You only need accurate section titles and objectives in the front matter. |
| Capstone | One per track (`kind: capstone`). A realistic deal or situation worked end to end in 3 stages (as the "examples"), with 5-8 decision questions. Lesson is the case briefing (900+ words). |

Tracks have 10-15 modules plus the capstone.

## Non-negotiables, and why

- **Numbers must be internally consistent and arithmetically right.** The learner will check them, and the value of the whole app is that the numbers are trustworthy. Show the arithmetic in tables.
- **Stories are composites, never presented as sourced fact.** Write "a buyer I'll call Dale" with invented details, never real named people, firms, or deals. Don't invent statistics and attribute them to a source. Market-dependent figures (rates, cap rates, SDE multiples, budgets) are given as ranges with the era stated ("in the mid-2020s...") so the learner knows to refresh them.
- **No personalized legal, tax, or securities advice.** Teach the mechanics and the judgment, and name where a CPA, attorney, or lender must be engaged. This is done in-voice ("this is where you pay a real tax attorney") rather than with boilerplate disclaimers.
- **Opinions are allowed; false certainty is not.** A veteran says "I'd walk" and also says "reasonable people disagree here, and here's what would change my mind."
- **Quiz answers can't be gameable.** One clearly best answer; distractors are mistakes real people actually make, not strawmen; no "all of the above"; the correct option is not systematically the longest. The app shuffles option order, so never refer to options by letter or position.

## Adapting to other tracks

The structure is identical across tracks; the *kind of number* changes. For the Real Estate, Acquisition, and HoldCo tracks, examples are financial models. For the MBK Productions film track, "real numbers" means page counts, shooting-day math, shooting ratios, schedule and budget lines, camera/sound/location costs, and scene-level craft examples (an actual scene beat broken down, a line of dialogue before and after a rewrite). See `references/tracks.md` for per-track guidance.
