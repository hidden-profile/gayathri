import React, { useCallback, useEffect, useRef, useState } from 'react';
import { profile, skills, projects } from '../data';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const QUICK = ['about', 'skills', 'projects', 'now', 'contact', 'clear'];

// Every command returns what gets printed (or a special action).
const COMMANDS = {
  help: () => (
    <>
      <div className="t-muted">Here's what you can try:</div>
      {[
        ['about', 'who I am'],
        ['skills', 'what I work with'],
        ['projects', 'things I have built'],
        ['now', 'what I am up to these days'],
        ['contact', 'how to reach me'],
        ['resume', 'open my resume'],
        ['socials', 'my profiles'],
        ['clear', 'clear the screen'],
      ].map(([c, d]) => (
        <div key={c}><span className="t-cmd">{c.padEnd(10, ' ')}</span><span className="t-muted">{d}</span></div>
      ))}
    </>
  ),
  about: () => (
    <>
      <div>Gayathri Karri, front end developer at Distacart.</div>
      <div className="t-muted">I work on DistaUSA, our Shopify store, and like turning ideas into UI people enjoy using.</div>
    </>
  ),
  skills: () => skills.map((s) => (
    <div key={s.title}><span className="t-key">{s.title}:</span> {s.items.join(', ')}</div>
  )),
  projects: () => (
    <>
      {projects.map((p, i) => (
        <div key={p.title}>
          <span className="t-muted">{String(i + 1).padStart(2, '0')}</span>{' '}
          <a href={p.url} {...ext}>{p.title}</a>
        </div>
      ))}
      <div className="t-muted">More at <a href={profile.github} {...ext}>github.com/hidden-profile</a></div>
    </>
  ),
  now: () => (
    <>
      <div><span className="t-ok">●</span> Building new sections and features for DistaUSA</div>
      <div><span className="t-ok">●</span> Learning machine learning and how AI agents work</div>
      <div><span className="t-ok">●</span> Solving a DSA problem whenever I get the time</div>
    </>
  ),
  contact: () => (
    <>
      <div>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></div>
      <div className="t-muted">or use the <a href="#contact">contact form</a> further down.</div>
    </>
  ),
  resume: () => {
    window.open(profile.resume, '_blank', 'noopener');
    return <div>Opening resume... <span className="t-muted">(or <a href={profile.resume} {...ext}>click here</a>)</span></div>;
  },
  socials: () => [
    ['GitHub', profile.github],
    ['LinkedIn', profile.linkedin],
    ['LeetCode', profile.leetcode],
    ['CodeChef', profile.codechef],
  ].map(([n, u]) => (
    <div key={n}><span className="t-key">{n.padEnd(9, ' ')}</span><a href={u} {...ext}>{u.replace(/^https?:\/\/(www\.)?/, '')}</a></div>
  )),
  'sudo hire-me': () => (
    <>
      <div className="t-ok">[sudo] permission granted ✔</div>
      <div>Great choice. Let's <a href="#contact">talk</a>!</div>
    </>
  ),
  whoami: () => COMMANDS.about(),
  ls: () => <div className="t-muted">about  skills  projects  now  contact  resume  socials</div>,
  date: () => <div>{new Date().toDateString()}</div>,
};
const NAMES = Object.keys(COMMANDS);

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState('');
  const [busy, setBusy] = useState(true);
  const [history, setHistory] = useState([]);
  const [hIndex, setHIndex] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const nextId = useRef(0);

  const run = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase().replace(/\s+/g, ' ');
    const id = () => nextId.current++;
    if (cmd === 'clear') { setLines([]); return; }
    const entry = { id: id(), cmd: raw.trim() };
    let out;
    if (!cmd) out = null;
    else if (COMMANDS[cmd]) out = COMMANDS[cmd]();
    else if (cmd.startsWith('echo ')) out = <div>{raw.trim().slice(5)}</div>;
    else if (cmd.startsWith('sudo')) out = <div className="t-err">Nice try. Maybe <span className="t-cmd">sudo hire-me</span>?</div>;
    else out = <div><span className="t-err">command not found: {cmd}</span> <span className="t-muted">Type <span className="t-cmd">help</span> to see what works.</span></div>;
    setLines((l) => [...l, { ...entry, out }]);
  }, []);

  // Type a command out letter by letter, then run it
  const typeAndRun = useCallback((cmd) => new Promise((resolve) => {
    if (reduceMotion()) { run(cmd); resolve(); return; }
    let i = 0;
    const tick = () => {
      i += 1;
      setTyping(cmd.slice(0, i));
      if (i < cmd.length) setTimeout(tick, 70 + Math.random() * 60);
      else setTimeout(() => { setTyping(''); run(cmd); resolve(); }, 250);
    };
    setTimeout(tick, 400);
  }), [run]);

  // Intro on first load
  useEffect(() => {
    let alive = true;
    typeAndRun('whoami').then(() => {
      if (!alive) return;
      setLines((l) => [...l, {
        id: nextId.current++,
        out: <div className="t-muted">Type <span className="t-cmd">help</span> or tap a command below.</div>,
      }]);
      setBusy(false);
    });
    return () => { alive = false; };
  }, [typeAndRun]);

  // Keep the newest output in view (scrolls only inside the terminal, not the page)
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  const submit = (e) => {
    e.preventDefault();
    if (busy) return;
    if (input.trim()) setHistory((h) => [input.trim(), ...h].slice(0, 30));
    setHIndex(-1);
    run(input);
    setInput('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const n = Math.min(hIndex + 1, history.length - 1);
      if (history[n] !== undefined) { setHIndex(n); setInput(history[n]); }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const n = hIndex - 1;
      setHIndex(Math.max(n, -1));
      setInput(n >= 0 ? history[n] : '');
    } else if (e.key === 'Tab') {
      const v = input.trim().toLowerCase();
      const match = v && NAMES.find((c) => c.startsWith(v));
      if (match) { e.preventDefault(); setInput(match); }
    }
  };

  const quick = async (cmd) => {
    if (busy) return;
    setBusy(true);
    await typeAndRun(cmd);
    setBusy(false);
  };

  const prompt = <span className="t-prompt">gayathri@portfolio<span className="t-muted">:</span><span className="t-path">~</span><span className="t-muted">$</span></span>;

  return (
    <div className="code-frame">
      <div className="code-window terminal">
        <div className="code-bar">
          <span className="d r" /><span className="d y" /><span className="d g" />
          <span className="code-file">gayathri@portfolio: ~</span>
        </div>

        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className="t-body"
          ref={bodyRef}
          onClick={() => { if (!window.getSelection().toString()) inputRef.current?.focus({ preventScroll: true }); }}
          aria-live="polite"
        >
          {lines.map((l) => (
            <div className="t-entry" key={l.id}>
              {l.cmd !== undefined && <div>{prompt} {l.cmd}</div>}
              {l.out && <div className="t-out">{l.out}</div>}
            </div>
          ))}

          {busy ? (
            <div>{prompt} {typing}<span className="cursor" aria-hidden="true" /></div>
          ) : (
            <form className="t-input-row" onSubmit={submit}>
              <label htmlFor="t-input">{prompt}</label>
              <input
                id="t-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                aria-label="Terminal command"
                placeholder="type help"
              />
            </form>
          )}
        </div>

        <div className="t-quick" aria-label="Quick commands">
          {QUICK.map((c) => (
            <button key={c} type="button" onClick={() => quick(c)} disabled={busy}>{c}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
