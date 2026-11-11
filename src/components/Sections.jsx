import React, { useState } from 'react';
import { profile, emailjs, experience, projects, skills, education, achievements } from '../data';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, CodeChefIcon, MailIcon, ArrowIcon } from './Icons';
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
          <h1>Hi, I'm Gayathri.<br /><span className="accent">I'm a front end developer.</span></h1>
          <p className="lead">
            I work at Distacart on <strong>DistaUSA</strong>, our Shopify store. Most of my day goes
            into its design and theme code, and into trying out new ideas to make the store easier to shop on.
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

        <div className="hero-code">
          <div className="code-frame">
            <div className="code-window">
              <div className="code-bar" aria-hidden="true">
                <span className="d r" /><span className="d y" /><span className="d g" />
                <span className="code-file">gayathri.js</span>
              </div>
              <pre><code>
<span className="k">const</span> <span className="p">gayathri</span> <span className="u">= {'{'}</span>{'\n'}
<span className="in"><span className="p">role</span><span className="u">:</span> <span className="s">'Front End Developer'</span><span className="u">,</span></span>{'\n'}
<span className="in"><span className="p">workingOn</span><span className="u">:</span> <span className="s">'DistaUSA'</span><span className="u">,</span></span>{'\n'}
<span className="in"><span className="p">platform</span><span className="u">:</span> <span className="s">'Shopify'</span><span className="u">,</span></span>{'\n'}
<span className="in"><span className="p">stack</span><span className="u">: [</span><span className="s">'HTML'</span><span className="u">,</span> <span className="s">'CSS'</span><span className="u">,</span> <span className="s">'JavaScript'</span><span className="u">,</span> <span className="s">'Liquid'</span><span className="u">,</span> <span className="s">'React'</span><span className="u">],</span></span>{'\n'}
<span className="in"><span className="p">learning</span><span className="u">: [</span><span className="s">'Machine Learning'</span><span className="u">,</span> <span className="s">'AI Agents'</span><span className="u">],</span></span>{'\n'}
<span className="in"><span className="p">likes</span><span className="u">:</span> <span className="s">'turning ideas into UI'</span><span className="u">,</span></span>{'\n'}
<span className="u">{'};'}</span>{'\n\n'}
<span className="c">{'// thanks for stopping by'}</span><span className="cursor" aria-hidden="true" />
              </code></pre>
            </div>
          </div>
        </div>
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
          <h2>A little about me</h2>
        </div>
        <div className="about-text">
          <p>
            I joined Distacart as an intern in January 2025. That's where I learned Shopify properly, on a live store:
            managing it, editing themes, building Shopify apps and the front end basics behind all of it.
            In August 2025 I joined full time and started working on DistaUSA.
          </p>
          <p>
            The store's backend runs on the Apploy app, and I take care of the front end on top of it. I like looking
            at how other online stores do things and trying the good ideas out on ours. I also work with the teams
            behind the apps we use on the store whenever something needs fixing.
          </p>
          <p>
            I've been interested in machine learning since college, and my final year project was about predicting
            wind turbine failures. These days I'm learning prompt engineering and how AI agents are built, alongside
            my MTech at Vignan's Institute of Information Technology.
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
            <article className="edu-card" key={e.title}>
              <span className="edu-date">{e.date}</span>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              {e.score && <span className="edu-score">{e.score}</span>}
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
  const empty = { name: '', email: '', subject: '', message: '' };
  const [form, setForm] = useState(empty);
  const [invalid, setInvalid] = useState({});
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
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
    setSending(true);
    setNote('');
    const subject = form.subject.trim();
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailjs.serviceId,
          template_id: emailjs.templateId,
          user_id: emailjs.publicKey,
          template_params: {
            name: form.name.trim(),
            email: form.email.trim(),
            subject,
            message: subject ? `${subject}\n\n${form.message.trim()}` : form.message.trim(),
          },
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setForm(empty);
      setNote("Thanks! Your message has been sent and I'll get back to you soon.");
    } catch (err) {
      setNote(`Sorry, that didn't go through. You can email me directly at ${profile.email}.`);
    } finally {
      setSending(false);
    }
  };

  const cls = (n) => (invalid[n] ? 'invalid' : undefined);

  return (
    <section className="section" id="contact">
      <div className="container contact-wrap">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Let's talk.</h2>
          <p>If you'd like to talk about a role or anything else, send me a message here or drop me an email.</p>
          <ul className="contact-list">
            <li><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span>Phone</span><a href={profile.phoneHref}>{profile.phone}</a></li>
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
          <button className="btn btn-primary btn-block" type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send message'}
          </button>
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
