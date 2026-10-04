#!/usr/bin/env python3
"""Validate every module under content/ and bundle them into app/content.js.

Run from the repo root:  python3 .claude/skills/module-writer/scripts/build_content.py
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from modulelib import parse_module  # noqa: E402

ROOT = Path(__file__).resolve().parents[4]
CONTENT = ROOT / "content"
OUT = ROOT / "app" / "content.js"


def main():
    tracks = json.loads((CONTENT / "tracks.json").read_text(encoding="utf-8"))["tracks"]
    failed = False
    seen_ids = set()
    for t in tracks:
        t["modules"] = []
        tdir = CONTENT / t["id"]
        for f in sorted(tdir.glob("*.md")) if tdir.exists() else []:
            mod, errors, warnings = parse_module(f)
            for w in warnings:
                print(f"warning {f.name}: {w}")
            if errors:
                failed = True
                for e in errors:
                    print(f"ERROR   {f.name}: {e}")
                continue
            if mod["track"] != t["id"]:
                print(f"ERROR   {f.name}: track '{mod['track']}' != folder '{t['id']}'")
                failed = True
            if mod["id"] in seen_ids:
                print(f"ERROR   {f.name}: duplicate id {mod['id']}")
                failed = True
            seen_ids.add(mod["id"])
            t["modules"].append(mod)
        t["modules"].sort(key=lambda m: m["number"])
        print(f"{t['id']}: {len(t['modules'])} module file(s) built, syllabus has {len(t['syllabus'])} + capstone")
    if failed:
        sys.exit("build failed: fix errors above")
    payload = json.dumps({"tracks": tracks}, ensure_ascii=False)
    OUT.write_text("window.COURSE = " + payload + ";\n", encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
