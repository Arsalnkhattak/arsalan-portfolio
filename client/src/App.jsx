import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import About             from './components/About';
import TechStack         from './components/TechStack';
import Projects          from './components/Projects';
import Experience        from './components/Experience';
import Education         from './components/Education';
import Contact           from './components/Contact';
import Footer            from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 relative
      selection:bg-emerald-500 selection:text-white">

      {/* ── Animated constellation background ── */}
      <ParticleBackground />

      {/* ── Dot-grid texture overlay ── */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40"
        aria-hidden="true" />

      {/* ── Sticky nav ── */}
      <Navbar />

      {/* ── Main content ── */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
