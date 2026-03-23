import React from 'react';

// Styles
import './styles/variables.css';
import './styles/globals.css';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

// UI / Effects
import Aurora from './components/ui/Aurora';
import Background3D from './components/ui/Background3D';
import CustomCursor from './components/ui/CustomCursor';

// Hooks
import useScrollReveal from './hooks/useScrollReveal';

/**
 * App
 * Root component that assembles the entire portfolio.
 * Layout order mirrors the original HTML exactly.
 */
const App = () => {
  // Activate scroll-triggered reveal animations
  useScrollReveal();

  return (
    <>
      {/* ── CANVAS & BACKGROUND EFFECTS ── */}
      <canvas
        id="bg3d"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
        }}
      />
      <Background3D />

      {/* DOM nodes for the custom cursor */}
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <CustomCursor />

      {/* Aurora gradient orbs */}
      <Aurora />

      {/* Subtle grid overlay */}
      <div className="grid-bg" />

      {/* ── NAVIGATION ── */}
      <Navbar />

      {/* ── MAIN CONTENT ── */}
      <div className="wrapper">
        <Hero />

        <div className="divider" />
        <About />

        <div className="divider" />
        <Skills />

        <div className="divider" />
        <Experience />

        <div className="divider" />
        <Projects />

        <div className="divider" />
        <Education />

        <div className="divider" />
        <Achievements />

        <div className="divider" />
        <Contact />

        <Footer />
      </div>

      {/* Toast notification */}
      <div id="toast" />
    </>
  );
};

export default App;
