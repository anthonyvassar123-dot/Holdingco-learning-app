#!/usr/bin/env python3
"""Validate one or more module markdown files. Usage: validate_module.py FILE [FILE ...]"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from modulelib import parse_module, words  # noqa: E402


def main(paths):
    bad = 0
    for p in paths:
        mod, errors, warnings = parse_module(p)
        name = Path(p).name
        if mod:
            ex = sum(words(e["body"]) for e in mod["examples"])
            print(f"{name}: lesson {words(mod['lesson'])}w, {len(mod['examples'])} examples ({ex}w), {len(mod['quiz'])} questions")
        for e in errors:
            print(f"  ERROR   {e}")
        for w in warnings:
            print(f"  warning {w}")
        bad += bool(errors)
    return 1 if bad else 0


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    sys.exit(main(sys.argv[1:]))
