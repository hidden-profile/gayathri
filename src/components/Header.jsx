import React, { useEffect, useRef, useState } from 'react';
import { profile } from '../data';
import { SunIcon, MoonIcon } from './Icons';

const LINKS = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

function currentTheme() {
  const set = document.documentElement.getAttribute('data-theme');
  if (set) return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const navRef = useRef(null);

  // Header border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on Escape, outside click, or resize to desktop
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => navRef.current && !navRef.current.contains(e.target) && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Highlight the section in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <nav className="nav container" aria-label="Main" ref={navRef}>
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
          <span className="brand-mark">GK</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <div className="nav-actions">
          <button className="icon-btn theme-toggle" type="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
            <SunIcon className="i-sun" />
            <MoonIcon className="i-moon" />
          </button>
          <button
            className="icon-btn menu-toggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

        <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : undefined} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li className="nav-cta">
            <a className="btn btn-primary btn-sm" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
