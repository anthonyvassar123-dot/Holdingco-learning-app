(() => {
  'use strict';
  const COURSE = window.COURSE || { tracks: [] };
  const KEY = 'holdco.learning.v1';
  const PASS = 0.75; // quiz fraction needed to count a module's quiz as passed
  const app = document.getElementById('app');

  // ---------- storage ----------
  let memory = null;
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) { const s = JSON.parse(raw); if (s && s.modules) return s; }
    } catch (e) { /* storage unavailable: fall back to memory */ }
    return memory || { modules: {}, last: null };
  }
  let state = load();
  function persist() {
    memory = state;
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { toast('Could not save to this browser. Progress will be lost on close; try Export.'); }
  }
  function rec(id) {
    if (!state.modules[id]) state.modules[id] = { lessonRead: false, examples: {}, quiz: { best: 0, total: 0, attempts: 0, history: [] }, notes: '' };
    return state.modules[id];
  }

  // ---------- helpers ----------
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const tracks = COURSE.tracks;
  const trackById = id => tracks.find(t => t.id === id);
  function findModule(id) {
    for (const t of tracks) { const m = t.modules.find(m => m.id === id); if (m) return { track: t, mod: m }; }
    return null;
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  let toastTimer;
  function toast(msg) {
    const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
  }

  // progress: lesson + each example + quiz passed
  function progress(mod) {
    const r = state.modules[mod.id] || null;
    const exDone = mod.examples.map((_, i) => !!(r && r.examples[i]));
    const quizPassed = !!(r && r.quiz.total && r.quiz.best / r.quiz.total >= PASS);
    const parts = [!!(r && r.lessonRead), ...exDone, quizPassed];
    const done = parts.filter(Boolean).length;
    const active = !!(r && (done || r.quiz.attempts));
    return { parts, exDone, quizPassed, done, total: parts.length, pct: Math.round(100 * done / parts.length),
      status: done === parts.length ? 'done' : (active ? 'prog' : 'new') };
  }
  function trackStats(t) {
    const mods = t.modules; let done = 0, steps = 0, stepsDone = 0;
    mods.forEach(m => { const p = progress(m); if (p.status === 'done') done++; steps += p.total; stepsDone += p.done; });
    const totalMods = t.syllabus.length + 1;
    return { done, built: mods.length, totalMods, pct: steps ? Math.round(100 * stepsDone / steps) : 0 };
  }

  // ---------- markdown ----------
  function inline(s) {
    s = esc(s);
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
    return s;
  }
  function splitRow(line) {
    let l = line.trim(); if (l.startsWith('|')) l = l.slice(1); if (l.endsWith('|')) l = l.slice(0, -1);
    return l.split('|').map(c => c.trim());
  }
  function md(src) {
    const lines = src.replace(/\r/g, '').split('\n'); const out = []; let i = 0;
    const isSep = l => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l) && l.includes('-');
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      let m;
      if ((m = line.match(/^(#{1,4})\s+(.*)$/))) { const lvl = Math.min(m[1].length + 1, 4); out.push(`<h${lvl}>${inline(m[2])}</h${lvl}>`); i++; continue; }
      if (/^\s*(---+|\*\*\*+)\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
      if (line.trim().startsWith('|') && i + 1 < lines.length && isSep(lines[i + 1])) {
        const head = splitRow(line); const aligns = splitRow(lines[i + 1]).map(c => c.endsWith(':') ? 'r' : '');
        i += 2; const rows = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) { rows.push(splitRow(lines[i])); i++; }
        const cell = (tag, c, k) => `<${tag}${aligns[k] ? ' class="r"' : ''}>${inline(c)}</${tag}>`;
        out.push(`<div class="tablewrap"><table><thead><tr>${head.map((c, k) => cell('th', c, k)).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, k) => cell('td', c, k)).join('')}</tr>`).join('')}</tbody></table></div>`);
        continue;
      }
      if (line.startsWith('>')) {
        const buf = []; while (i < lines.length && lines[i].startsWith('>')) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
        out.push(`<blockquote>${md(buf.join('\n'))}</blockquote>`); continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
        const ordered = /^\s*\d+\./.test(line); const items = [];
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          let t = lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ''); i++;
          while (i < lines.length && lines[i].trim() && /^\s{2,}\S/.test(lines[i])) { t += ' ' + lines[i].trim(); i++; }
          items.push(t);
        }
        const tag = ordered ? 'ol' : 'ul';
        out.push(`<${tag}>${items.map(t => `<li>${inline(t)}</li>`).join('')}</${tag}>`); continue;
      }
      const buf = [];
      while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|\s*(---+)\s*$)/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i]) && !lines[i].trim().startsWith('|')) { buf.push(lines[i].trim()); i++; }
      if (buf.length) out.push(`<p>${inline(buf.join(' '))}</p>`); else i++;
    }
    return out.join('\n');
  }

  // ---------- views ----------
  function setTitle(t) { document.title = t ? `${t} · HoldCo Learning` : 'HoldCo Learning'; }
  function renderNav(active) {
    document.getElementById('topnav').innerHTML = tracks.map(t => `<a href="#/t/${t.id}" class="${t.id === active ? 'on' : ''}">${esc(t.name.split(':')[0])}</a>`).join('');
  }
  function bar(pct) { return `<div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>`; }

  function viewHome() {
    setTitle(''); renderNav(null); app.style.removeProperty('--accent');
    let resume = '';
    const last = state.last && findModule(state.last);
    if (last) {
      const p = progress(last.mod);
      resume = `<div class="resume"><div><strong>Pick up where you left off</strong><br><span class="muted">${esc(last.track.name)} · Module ${last.mod.kind === 'capstone' ? 'Capstone' : last.mod.number}: ${esc(last.mod.title)} (${p.pct}% done)</span></div><a class="btn" href="#/m/${last.mod.id}">Continue</a></div>`;
    }
    app.innerHTML = `<h1>Your learning tracks</h1><p class="muted">Each module is a lesson, worked examples with real numbers, and a short quiz. Your progress saves automatically in this browser.</p>${resume}
      <div class="grid">${tracks.map(t => {
        const s = trackStats(t);
        return `<div class="card" style="--accent:${t.accent}"><a class="stretch" href="#/t/${t.id}"><h3>${esc(t.name)}</h3><p>${esc(t.tagline)}</p>${bar(s.pct)}
          <div class="stats"><span>${s.done} of ${s.totalMods} modules complete</span><span>${s.built} of ${s.totalMods} written</span></div></a></div>`;
      }).join('')}</div>`;
  }

  function viewTrack(id) {
    const t = trackById(id); if (!t) return notFound();
    setTitle(t.name); renderNav(t.id); app.style.setProperty('--accent', t.accent);
    const s = trackStats(t);
    const byNum = n => t.modules.find(m => m.number === n);
    const row = (num, label, item, summary, cap) => {
      const m = item;
      if (!m) return `<div class="modrow soon ${cap ? 'cap' : ''}"><span class="num">${cap ? '★' : num}</span><div><div class="modtitle">${esc(label)}</div><div class="modsub">${esc(summary)}</div></div><span class="chip">Coming soon</span></div>`;
      const p = progress(m); const r = state.modules[m.id];
      const chip = p.status === 'done' ? '<span class="chip done">Complete</span>' : p.status === 'prog' ? `<span class="chip prog">${p.pct}%</span>` : `<span class="chip">${m.minutes} min</span>`;
      const quiz = r && r.quiz.total ? ` · quiz best ${r.quiz.best}/${r.quiz.total}` : '';
      return `<a class="modrow ${p.status === 'done' ? 'done' : ''} ${cap ? 'cap' : ''}" href="#/m/${m.id}"><span class="num">${p.status === 'done' ? '✓' : cap ? '★' : num}</span><div><div class="modtitle">${esc(m.title)}</div><div class="modsub">${esc(m.subtitle)}${quiz}</div></div>${chip}</a>`;
    };
    app.innerHTML = `<div class="crumbs"><a href="#/">All tracks</a></div><h1>${esc(t.name)}</h1><p class="muted">${esc(t.description)}</p>
      ${bar(s.pct)}<div class="stats"><span>${s.done} of ${s.totalMods} modules complete</span><span>${s.built} of ${s.totalMods} written</span></div>
      <h2>Modules</h2><div class="modlist">${t.syllabus.map(sy => row(sy.number, sy.title, byNum(sy.number), sy.summary, false)).join('')}
      ${row(0, t.capstone.title, t.modules.find(m => m.kind === 'capstone'), t.capstone.summary, true)}</div>`;
  }

  function stepsFor(mod) {
    const p = progress(mod);
    const steps = [{ key: 'lesson', label: 'Lesson', href: `#/m/${mod.id}/lesson`, done: p.parts[0] }];
    mod.examples.forEach((e, i) => steps.push({ key: 'ex' + (i + 1), label: mod.kind === 'capstone' ? `Stage ${i + 1}` : `Example ${i + 1}`, href: `#/m/${mod.id}/ex/${i + 1}`, done: p.exDone[i] }));
    steps.push({ key: 'quiz', label: 'Quiz', href: `#/m/${mod.id}/quiz`, done: p.quizPassed });
    return { steps, p };
  }

  function viewModule(id, section, idx) {
    const f = findModule(id); if (!f) return notFound();
    const { track, mod } = f; const r = rec(id);
    state.last = id; persist();
    setTitle(mod.title); renderNav(track.id); app.style.setProperty('--accent', track.accent);
    const { steps, p } = stepsFor(mod);
    const key = section === 'ex' ? 'ex' + (idx || 1) : (section || 'lesson');
    const curIdx = Math.max(0, steps.findIndex(s => s.key === key));
    const cur = steps[curIdx];
    const label = mod.kind === 'capstone' ? 'Capstone' : `Module ${mod.number}`;
    const q = r.quiz;
    let body = '';
    if (cur.key === 'lesson') {
      body = `<div class="objectives"><h4>By the end of this module</h4><ul>${mod.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul></div>
        <article class="prose">${md(mod.lesson)}</article>
        <div class="donebox"><span>${p.parts[0] ? 'You marked this lesson as read.' : 'Finished reading?'}</span><button class="btn" id="mark">${p.parts[0] ? 'Continue to ' + steps[1].label : 'Mark as read & continue'}</button></div>`;
    } else if (cur.key.startsWith('ex')) {
      const e = mod.examples[Number(cur.key.slice(2)) - 1];
      body = `<article class="example prose"><span class="example-tag">${mod.kind === 'capstone' ? '' : 'Worked example ' + cur.key.slice(2)}</span><h3 style="margin-top:.2rem">${esc(e.title)}</h3>${md(e.body)}</article>
        <div class="donebox"><span>${cur.done ? 'You marked this as studied.' : 'Work the numbers yourself first, then check.'}</span><button class="btn" id="mark">${cur.done ? 'Continue' : 'Mark as studied & continue'}</button></div>`;
    } else {
      body = `<div class="quiz" id="quiz"></div>`;
    }
    const prev = steps[curIdx - 1], next = steps[curIdx + 1];
    const idxInTrack = track.modules.findIndex(m => m.id === id);
    const nextMod = track.modules[idxInTrack + 1];
    app.innerHTML = `<div class="crumbs"><a href="#/">All tracks</a> › <a href="#/t/${track.id}">${esc(track.name)}</a> › ${label}</div>
      <div class="modhead"><h1>${esc(mod.title)}</h1><p class="sub">${esc(mod.subtitle)}</p></div>
      <div class="tracker" aria-label="Module progress"><div class="tracker-top"><span><strong>${p.done} of ${p.total}</strong> steps complete · about ${mod.minutes} min</span><span>${q.total ? `Quiz best: ${q.best}/${q.total} (${q.attempts} attempt${q.attempts === 1 ? '' : 's'})` : 'Quiz not taken yet'}</span></div>${bar(p.pct)}
      <div class="steps">${steps.map(s => `<a class="step ${s.done ? 'done' : ''} ${s.key === cur.key ? 'on' : ''}" href="${s.href}" ${s.key === cur.key ? 'aria-current="step"' : ''}>${s.label}</a>`).join('')}</div></div>
      ${body}
      <div class="pager">${prev ? `<a class="btn secondary" href="${prev.href}">← ${prev.label}</a>` : '<span></span>'}${next ? `<a class="btn secondary" href="${next.href}">${next.label} →</a>` : (nextMod ? `<a class="btn secondary" href="#/m/${nextMod.id}">Next module: ${esc(nextMod.title)} →</a>` : `<a class="btn secondary" href="#/t/${track.id}">Back to track</a>`)}</div>
      <details class="notes"><summary>Your notes for this module</summary><textarea id="notes" placeholder="Numbers to remember, questions to chase down, how this applies to a real deal…">${esc(r.notes || '')}</textarea></details>`;

    const mark = document.getElementById('mark');
    if (mark) mark.onclick = () => {
      if (cur.key === 'lesson') r.lessonRead = true; else r.examples[Number(cur.key.slice(2)) - 1] = true;
      persist(); location.hash = next.href;
    };
    let nt; const notes = document.getElementById('notes');
    notes.oninput = () => { clearTimeout(nt); nt = setTimeout(() => { r.notes = notes.value; persist(); }, 400); };
    if (cur.key === 'quiz') runQuiz(mod, r);
  }

  function runQuiz(mod, r) {
    const box = document.getElementById('quiz'); const Q = mod.quiz;
    let qi = 0; const results = []; let order = Q.map(q => shuffle(q.options.map((_, i) => i)));
    function ask() {
      if (qi >= Q.length) return finish();
      const q = Q[qi];
      box.innerHTML = `<div class="qmeta"><span><span class="qtype">${q.type === 'scenario' ? 'Scenario' : 'Question'}</span> · ${qi + 1} of ${Q.length}</span><span>Passing: ${Math.ceil(PASS * Q.length)} of ${Q.length}</span></div>
        <div class="qprompt">${md(q.prompt)}</div>
        <ul class="opts" id="opts">${order[qi].map(oi => `<li><button class="opt" data-i="${oi}">${esc(q.options[oi].text)}</button></li>`).join('')}</ul><div id="fb" aria-live="polite"></div>`;
      box.querySelectorAll('button.opt').forEach(b => b.onclick = () => answer(Number(b.dataset.i)));
      box.scrollIntoView({ block: 'nearest' });
    }
    function answer(choice) {
      const q = Q[qi]; const ok = q.options[choice].correct; results.push(ok);
      document.getElementById('opts').innerHTML = order[qi].map(oi => {
        const o = q.options[oi]; const picked = oi === choice;
        const cls = o.correct ? 'correct' : picked ? 'wrong' : 'dim';
        const badge = o.correct ? (picked ? 'Your answer · Correct' : 'Correct answer') : picked ? 'Your answer · Not quite' : 'Not this one';
        return `<li><div class="opt ${cls}"><span class="badge">${badge}</span>${esc(o.text)}<span class="why">${inline(o.why)}</span></div></li>`;
      }).join('');
      document.getElementById('fb').innerHTML = `<div class="mentor"><b>${ok ? 'Right.' : 'Here’s the thing.'} The judgment call</b>${inline(q.takeaway)}</div>
        <button class="btn" id="next">${qi + 1 < Q.length ? 'Next question' : 'See results'}</button>`;
      const n = document.getElementById('next'); n.focus(); n.onclick = () => { qi++; ask(); };
    }
    function finish() {
      const score = results.filter(Boolean).length; const passed = score / Q.length >= PASS;
      const qz = r.quiz; qz.attempts++; qz.total = Q.length; qz.best = Math.max(qz.best || 0, score);
      qz.history = (qz.history || []).concat({ score, total: Q.length, at: new Date().toISOString() }).slice(-10);
      persist();
      box.innerHTML = `<h2 style="margin-top:0">Quiz results</h2><div class="score">${score} / ${Q.length}</div>
        <p>${passed ? 'Solid. This module’s quiz is counted as passed.' : `You need ${Math.ceil(PASS * Q.length)} of ${Q.length} to count it as passed. Re-read the lesson sections behind the questions you missed, then retake.`}</p>
        <ul class="review">${Q.map((q, k) => `<li><span class="${results[k] ? 'ok' : 'no'}">${results[k] ? '✓' : '✗'}</span><span>${esc(q.prompt.split('\n').filter(Boolean).pop().replace(/\*\*/g, ''))}</span></li>`).join('')}</ul>
        <p><button class="btn" id="retake">Retake quiz</button> <a class="btn secondary" href="#/t/${mod.track}">Back to track</a></p>`;
      document.getElementById('retake').onclick = () => { qi = 0; results.length = 0; order = Q.map(q => shuffle(q.options.map((_, i) => i))); ask(); };
      // refresh the tracker shown above without leaving the quiz
      const top = document.querySelector('.tracker'); if (top) { const f = stepsFor(mod); top.querySelector('.tracker-top').innerHTML = `<span><strong>${f.p.done} of ${f.p.total}</strong> steps complete · about ${mod.minutes} min</span><span>Quiz best: ${qz.best}/${qz.total} (${qz.attempts} attempt${qz.attempts === 1 ? '' : 's'})</span>`; top.querySelector('.bar').outerHTML = bar(f.p.pct); top.querySelector('.steps').innerHTML = f.steps.map(s => `<a class="step ${s.done ? 'done' : ''} ${s.key === 'quiz' ? 'on' : ''}" href="${s.href}">${s.label}</a>`).join(''); }
    }
    ask();
  }

  function notFound() { renderNav(null); app.innerHTML = '<h1>Not found</h1><p><a href="#/">Back to all tracks</a></p>'; }

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    window.scrollTo(0, 0);
    if (!COURSE.tracks.length) { app.innerHTML = '<h1>No content found</h1><p>Run <code>python3 .claude/skills/module-writer/scripts/build_content.py</code> to build <code>app/content.js</code>.</p>'; return; }
    if (parts[0] === 't' && parts[1]) return viewTrack(parts[1]);
    if (parts[0] === 'm' && parts[1]) return viewModule(parts[1], parts[2], Number(parts[3]) || 1);
    viewHome();
  }
  window.addEventListener('hashchange', route);

  // ---------- backup ----------
  document.getElementById('export-btn').onclick = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = `holdco-learning-progress-${new Date().toISOString().slice(0, 10)}.json`; a.click(); URL.revokeObjectURL(a.href);
  };
  document.getElementById('import-file').onchange = e => {
    const file = e.target.files[0]; if (!file) return;
    const rd = new FileReader();
    rd.onload = () => {
      try { const s = JSON.parse(rd.result); if (!s || typeof s.modules !== 'object') throw new Error('bad'); state = s; persist(); toast('Progress imported.'); route(); }
      catch (err) { toast('That file is not a valid progress export.'); }
    };
    rd.readAsText(file); e.target.value = '';
  };
  document.getElementById('reset-btn').onclick = () => {
    if (confirm('Erase all progress, quiz scores, and notes in this browser? Export first if unsure.')) { state = { modules: {}, last: null }; persist(); route(); toast('Progress reset.'); }
  };

  route();
})();
