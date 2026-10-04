"""Parse and validate module markdown files (format documented in references/format.md)."""
import re
from pathlib import Path

REQUIRED_META = ["id", "track", "kind", "number", "title", "subtitle", "minutes", "objectives"]
OPT_RE = re.compile(r"^- \[( |x|X)\] (.*?) :: (.*)$")
Q_RE = re.compile(r"^##\s+Q(\d+)\s*\|\s*(multiple_choice|scenario)\s*$")
FILLER = [
    "it's important to note", "it is important to note", "in today's market", "delve",
    "navigate the landscape", "in conclusion", "game-changer", "unlock the",
]
BAD_OPTIONS = ["all of the above", "none of the above", "both a and b"]


def parse_front_matter(text):
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        raise ValueError("missing front matter (--- block at top of file)")
    meta, key = {}, None
    for line in m.group(1).split("\n"):
        if not line.strip():
            continue
        if line.startswith("  - ") or line.startswith("- "):
            if key is None or not isinstance(meta.get(key), list):
                raise ValueError(f"list item without a list key: {line!r}")
            meta[key].append(line.split("- ", 1)[1].strip())
            continue
        k, _, v = line.partition(":")
        key, v = k.strip(), v.strip()
        if len(v) >= 2 and v[0] == v[-1] and v[0] in "\"'":
            v = v[1:-1]
        meta[key] = [] if v == "" else v
    for k in ("number", "minutes"):
        if k in meta:
            meta[k] = int(meta[k])
    return meta, text[m.end():]


def split_sections(body):
    """Return list of (title, text) for top-level '# ' sections."""
    sections, cur_title, cur = [], None, []
    for line in body.split("\n"):
        if re.match(r"^#\s+\S", line):
            if cur_title is not None:
                sections.append((cur_title, "\n".join(cur).strip()))
            cur_title, cur = line[2:].strip(), []
        else:
            cur.append(line)
    if cur_title is not None:
        sections.append((cur_title, "\n".join(cur).strip()))
    return sections


def parse_quiz(text, errors):
    questions, cur = [], None
    for line in text.split("\n"):
        qm = Q_RE.match(line.strip())
        if qm:
            cur = {"n": int(qm.group(1)), "type": qm.group(2), "prompt_lines": [], "options": [], "takeaway_lines": []}
            questions.append(cur)
            continue
        if cur is None:
            if line.strip():
                errors.append(f"quiz: text before first question header: {line[:60]!r}")
            continue
        om = OPT_RE.match(line)
        if om:
            cur["options"].append({"text": om.group(2).strip(), "correct": om.group(1).lower() == "x", "why": om.group(3).strip()})
        elif line.startswith("- ["):
            errors.append(f"Q{cur['n']}: malformed option (need '- [ ] text :: why' on one line): {line[:70]!r}")
        elif line.startswith(">"):
            cur["takeaway_lines"].append(line.lstrip(">").strip())
        elif not cur["options"]:
            cur["prompt_lines"].append(line)
        elif line.strip():
            errors.append(f"Q{cur['n']}: unexpected text after options: {line[:70]!r}")
    out = []
    for q in questions:
        out.append({
            "n": q["n"], "type": q["type"],
            "prompt": "\n".join(q["prompt_lines"]).strip(),
            "options": q["options"],
            "takeaway": " ".join(l for l in q["takeaway_lines"] if l).strip(),
        })
    return out


def parse_module(path):
    """Return (module_dict, errors, warnings)."""
    errors, warnings = [], []
    text = Path(path).read_text(encoding="utf-8")
    try:
        meta, body = parse_front_matter(text)
    except ValueError as e:
        return None, [str(e)], []
    for k in REQUIRED_META:
        if k not in meta or meta[k] in ("", []):
            errors.append(f"front matter: missing '{k}'")
    if meta.get("kind") not in ("module", "capstone"):
        errors.append("front matter: kind must be 'module' or 'capstone'")
    sections = split_sections(body)
    titles = [t for t, _ in sections]
    lesson = next((s for t, s in sections if t.lower() == "lesson"), None)
    quiz_text = next((s for t, s in sections if t.lower() == "quiz"), None)
    if lesson is None:
        errors.append("missing '# Lesson' section")
    if quiz_text is None:
        errors.append("missing '# Quiz' section")
    # examples keep their original headings (e.g. 'Stage 1: ...') for capstones
    examples = [{"title": t, "body": s} for t, s in sections if re.match(r"^(Example|Stage)\s*\d+", t)]
    for e in examples:
        e["title"] = re.sub(r"^Example\s*\d+\s*:\s*", "", e["title"])
    quiz = parse_quiz(quiz_text, errors) if quiz_text is not None else []
    mod = dict(meta)
    mod.update({"lesson": lesson or "", "examples": examples, "quiz": quiz})
    validate(mod, titles, errors, warnings)
    return mod, errors, warnings


def words(s):
    return len(re.findall(r"\b[\w'$%.,-]+\b", s))


def validate(mod, titles, errors, warnings):
    cap = mod.get("kind") == "capstone"
    lw = words(mod["lesson"])
    lo, hi = (900, 3500) if cap else (1800, 3200)
    if lw < lo:
        errors.append(f"lesson is {lw} words; need at least {lo}")
    elif lw > hi:
        warnings.append(f"lesson is {lw} words; over {hi} may be too long to finish in one sitting")
    n_ex = len(mod["examples"])
    if not (2 <= n_ex <= 3):
        errors.append(f"{n_ex} worked examples; need 2-3")
    if cap and n_ex != 3:
        errors.append("capstone needs exactly 3 stages")
    for e in mod["examples"]:
        ew = words(e["body"])
        if ew < 300:
            errors.append(f"example '{e['title']}' is {ew} words; need at least 300")
        if "|---" not in e["body"].replace(" ", "") and "|:--" not in e["body"].replace(" ", ""):
            warnings.append(f"example '{e['title']}' has no table; worked examples should show numbers in a table")
        for h in ("The setup", "The numbers", "What the veteran sees"):
            if h.lower() not in e["body"].lower() and not cap:
                warnings.append(f"example '{e['title']}' lacks a '{h}' section")
    q = mod["quiz"]
    qlo, qhi = (5, 8) if cap else (4, 6)
    if not (qlo <= len(q) <= qhi):
        errors.append(f"{len(q)} quiz questions; need {qlo}-{qhi}")
    ns = [x["n"] for x in q]
    if ns != list(range(1, len(q) + 1)):
        errors.append(f"question numbers must run 1..N in order, got {ns}")
    if sum(1 for x in q if x["type"] == "scenario") < 2:
        errors.append("quiz needs at least 2 scenario questions")
    if not any(x["type"] == "multiple_choice" for x in q) and not cap:
        errors.append("quiz needs at least 1 multiple_choice question")
    longest_correct = 0
    for x in q:
        tag = f"Q{x['n']}"
        if not x["prompt"]:
            errors.append(f"{tag}: empty prompt")
        if not (3 <= len(x["options"]) <= 5):
            errors.append(f"{tag}: needs 3-5 options, has {len(x['options'])}")
        if sum(o["correct"] for o in x["options"]) != 1:
            errors.append(f"{tag}: needs exactly one [x] option")
        for o in x["options"]:
            if len(o["why"]) < 25:
                errors.append(f"{tag}: explanation too thin for option {o['text'][:40]!r}")
            if any(b in o["text"].lower() for b in BAD_OPTIONS):
                errors.append(f"{tag}: avoid '{o['text'][:40]}' style options (app shuffles order)")
            if re.search(r"\b(option|answer|choice) [a-e]\b|\([a-e]\)", o["why"].lower()):
                errors.append(f"{tag}: explanation refers to an option by letter (options are shuffled)")
        if not x["takeaway"]:
            errors.append(f"{tag}: missing '>' takeaway")
        if x["options"]:
            lens = [len(o["text"]) for o in x["options"]]
            correct = [o for o in x["options"] if o["correct"]]
            if correct and len(correct[0]["text"]) == max(lens) and len(set(lens)) > 1:
                longest_correct += 1
    if q and longest_correct / len(q) > 0.6:
        warnings.append(f"correct option is the longest in {longest_correct}/{len(q)} questions; vary option length")
    full = (mod["lesson"] + " ".join(e["body"] for e in mod["examples"])).lower()
    for f in FILLER:
        if f in full:
            warnings.append(f"filler phrase: {f!r}")
    digits = len(re.findall(r"\d", mod["lesson"]))
    if digits < 60:
        warnings.append(f"lesson has few numbers ({digits} digits); add concrete figures")
    for needed in ("if you remember nothing else", "this week"):
        if needed not in mod["lesson"].lower() and not cap:
            warnings.append(f"lesson lacks closer: '{needed}'")
    if titles[:1] != ["Lesson"]:
        errors.append("first top-level section must be '# Lesson'")
    if titles[-1:] != ["Quiz"]:
        errors.append("last top-level section must be '# Quiz'")
