import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import {
  Hero, Stats, About, Experience, Projects, Skills, Education, Achievements, Contact, Footer,
} from './components/Sections';

function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const els = document.querySelectorAll('.tl-item, .project, .skill-card, .edu-card, .profile, .stat');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
      }),
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => { el.classList.add('reveal'); obs.observe(el); });
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
