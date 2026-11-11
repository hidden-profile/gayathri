import React, { useState } from 'react';
import { profile, stats, experience, projects, skills, education, achievements } from '../data';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, CodeChefIcon, MailIcon, ArrowIcon } from './Icons';
import photo from '../assets/photo.jpg';
import codechefLogo from '../assets/codechef.png';
import leetcodeLogo from '../assets/leetcode.jpeg';
import hackerrankLogo from '../assets/hackerrank.png';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const Chips = ({ items }) => (
  <ul className="chips">{items.map((t) => <li key={t}>{t}</li>)}</ul>
);

export function Hero() {
  const socials = [
    [profile.github, 'GitHub', GitHubIcon],
    [profile.linkedin, 'LinkedIn', LinkedInIcon],
    [profile.leetcode, 'LeetCode', LeetCodeIcon],
    [profile.codechef, 'CodeChef', CodeChefIcon],
  ];
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" /> {profile.role}</p>
          <h1>Hi, I'm Gayathri.<br /><span className="accent">I build storefronts people buy from.</span></h1>
          <p className="lead">
            I'm the front end developer behind <strong>DistaUSA</strong>, a Shopify store under Distacart.
            Since I took over its UI, daily orders have gone from around 50 to around 200.
            I'm also doing an MTech in Artificial Intelligence, because ML is where I want to grow next.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={profile.resume} {...ext}>Download resume</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
          <ul className="socials" aria-label="Profiles">
            {socials.map(([href, label, Icon]) => (
              <li key={label}><a href={href} {...ext} aria-label={label}><Icon /></a></li>
            ))}
            <li><a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a></li>
          </ul>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img src={photo} alt="Portrait of Gayathri Karri" width="420" height="420" />
          </div>
          <div className="floating-card fc-1">
            <span className="fc-num">~4x</span>
            <span className="fc-label">daily orders on DistaUSA</span>
          </div>
          <div className="floating-card fc-2">
            <span className="fc-num">9.56</span>
            <span className="fc-label">BTech CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats-band" aria-label="Highlights">
      <div className="container stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <p className="section-kicker">About</p>
          <h2>A front end developer with one foot in AI.</h2>
        </div>
        <div className="about-text">
          <p>
            I joined Distacart as an intern in January 2025 and learned on a live store from day one:
            Shopify themes, store management, building Shopify apps and the front end basics that hold it all together.
            In August 2025 I moved to full time and was handed DistaUSA.
          </p>
          <p>
            On DistaUSA I own everything the customer sees. The backend comes from the Apploy app; the design,
            the theme code and most of the ideas are mine. I spend a lot of time studying other stores, picking out what
            actually helps people shop, and turning that into features on our site. A big part of the job is also
            working with the teams behind every third-party app that plugs into the store and getting those
            integrations to behave.
          </p>
          <p>
            Outside work I'm doing an MTech in Artificial Intelligence at Vignan's Institute of Information Technology.
            I've been learning prompt engineering and the basics of building agents, and my final year BTech project
            was an ML model for predicting wind turbine failures.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <p className="section-kicker">Experience</p>
        <h2>Where I've worked</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="tl-item" key={job.title + job.date}>
              <div className="tl-meta">
                <span className="tl-date">{job.date}</span>
                <span className="tl-place">{job.place}</span>
              </div>
              <div className="tl-body">
                <h3>{job.title} {job.badge && <span className="badge">{job.badge}</span>}</h3>
                {job.sub && <p className="tl-sub">{job.sub}</p>}
                <ul>{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-kicker">Projects</p>
        <h2>Things I've built</h2>
        <p className="section-intro">
          A few picks from my <a href={profile.github} {...ext}>GitHub</a>, from ML work to full web apps.
        </p>
        <div className="project-grid">
          {projects.map((p) => (
            <article className={`project${p.featured ? ' featured' : ''}`} key={p.title}>
              <div className="project-top">
                <span className="project-tag">{p.tag}</span>
                <a className="project-link" href={p.url} {...ext} aria-label={`View ${p.title} on GitHub`}><ArrowIcon /></a>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Chips items={p.tech} />
            </article>
          ))}
        </div>
        <div className="center">
          <a className="btn btn-ghost" href={`${profile.github}?tab=repositories`} {...ext}>See all repositories</a>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <p className="section-kicker">Skills</p>
        <h2>What I work with</h2>
        <div className="skill-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.title}>
              <h3>{s.title}</h3>
              <Chips items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-kicker">Education</p>
        <h2>Where I studied</h2>
        <div className="edu-grid">
          {education.map((e) => (
            <article className={`edu-card${e.current ? ' current' : ''}`} key={e.title}>
              <span className="edu-date">{e.date}</span>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              <span className="edu-score">{e.score}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  const profiles = [
    [profile.codechef, codechefLogo, 'CodeChef', '3-star, highest rating 1642'],
    [profile.leetcode, leetcodeLogo, 'LeetCode', 'Highest contest rating 1575'],
    [profile.hackerrank, hackerrankLogo, 'HackerRank', '3-star in SQL and Problem Solving'],
  ];
  return (
    <section className="section section-alt" id="achievements">
      <div className="container two-col">
        <div>
          <p className="section-kicker">Achievements</p>
          <h2>Wins &amp; certifications</h2>
          <ul className="check-list">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
        <div>
          <p className="section-kicker">Coding profiles</p>
          <h2>Where I practise</h2>
          <div className="profile-list">
            {profiles.map(([href, logo, name, note]) => (
              <a className="profile" href={href} {...ext} key={name}>
                <img src={logo} alt="" width="48" height="48" loading="lazy" />
                <span><strong>{name}</strong><small>{note}</small></span>
                <ArrowIcon className="arrow" />
              </a>
            ))}
            <a className="profile" href={profile.github} {...ext}>
              <span className="profile-icon"><GitHubIcon /></span>
              <span><strong>GitHub</strong><small>25+ public repositories</small></span>
              <ArrowIcon className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [invalid, setInvalid] = useState({});
  const [note, setNote] = useState('This opens your email app with the message filled in.');

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const bad = {
      name: !form.name.trim(),
      email: !/^\S+@\S+\.\S+$/.test(form.email),
      message: !form.message.trim(),
    };
    setInvalid(bad);
    if (bad.name || bad.email || bad.message) {
      setNote('Please fill in your name, a valid email and a message.');
      return;
    }
    const subject = form.subject.trim() || 'Hello from your portfolio';
    const body = `${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNote('Opening your email app...');
  };

  const cls = (n) => (invalid[n] ? 'invalid' : undefined);

  return (
    <section className="section" id="contact">
      <div className="container contact-wrap">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Let's talk.</h2>
          <p>Open to front end, Shopify and AI/ML roles. The quickest way to reach me is email.</p>
          <ul className="contact-list">
            <li><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span>Phone</span><a href={profile.phoneHref}>{profile.phone}</a></li>
            <li><span>Location</span><p>{profile.location}</p></li>
            <li><span>LinkedIn</span><a href={profile.linkedin} {...ext}>gayathri-karri</a></li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="field-row">
            <label className="field">
              <span>Name</span>
              <input className={cls('name')} type="text" name="name" autoComplete="name" required placeholder="Your name" value={form.name} onChange={update} />
            </label>
            <label className="field">
              <span>Email</span>
              <input className={cls('email')} type="email" name="email" autoComplete="email" required placeholder="you@example.com" value={form.email} onChange={update} />
            </label>
          </div>
          <label className="field">
            <span>Subject</span>
            <input type="text" name="subject" placeholder="What's this about?" value={form.subject} onChange={update} />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea className={cls('message')} name="message" rows="5" required placeholder="Write your message" value={form.message} onChange={update} />
          </label>
          <button className="btn btn-primary btn-block" type="submit">Send message</button>
          <p className="form-note" aria-live="polite">{note}</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top &uarr;</a>
      </div>
    </footer>
  );
}
