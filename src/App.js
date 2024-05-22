import React from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import './App.scss';
import About from './containers/about';
import Home from './containers/home';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Projects from './containers/projects';
import Contact from './containers/contact';
import Profiles from './containers/profiles';
import Navbar from './components/navBar';
import Back from './utils/particles';
function App() {
  const location=useLocation();
  const ren=location.pathname==='/gayathri/';
  return (
    <div className="App">
      {/* Particle.js */}
      {ren &&<Back />}
       
      {/* Navbar */}
      <Navbar />
      {/* Main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/gayathri/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
