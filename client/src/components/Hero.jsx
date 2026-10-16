import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Download, Mail, MapPin, Briefcase,
  Code2, Server, Database, Zap
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import TypewriterText from './ui/TypewriterText';
import Button from './ui/Button';

const TYPEWRITER_STRINGS = [
  'MERN Stack Developer',
  'React & Node.js Developer',
  'MongoDB & Mongoose Specialist',
  'Web Application Developer',
  'REST API Builder',
];

const STATS = [
  { value: '1+',    label: 'Year Experience',      sub: 'Web development' },
  { value: '5+',    label: 'Projects Completed',   sub: 'Full-stack applications' },
  { value: '2 mo',  label: 'KP-ITPB Internship',   sub: 'Provincial IT Board' },
  { value: '4',     label: 'Certifications',       sub: 'Web & Cybersecurity' },
];

const TECH_PILLS = [
  { icon: Code2,    label: 'React + JavaScript',     color: 'text-cyan-400' },
  { icon: Server,   label: 'Node · Express · REST',  color: 'text-emerald-400' },
  { icon: Database, label: 'MongoDB · Mongoose',     color: 'text-teal-400' },
  { icon: Zap,      label: 'HTML · CSS · WordPress', color: 'text-amber-400' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20
        px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Ambient glow orbs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80
          bg-teal-400/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64
          bg-cyan-500/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT — Text content ── */}
          <div
            className="space-y-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
              bg-emerald-950/70 border border-emerald-500/35 text-xs font-mono
              text-slate-300 shadow-lg shadow-emerald-950/40">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full
                  rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-300 font-semibold">Open to Junior / Mid-level roles</span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                Kohat, Pakistan
              </span>
            </div>

            {/* Greeting & name */}
            <div>
              <p className="text-sm font-mono text-slate-400 mb-1.5 tracking-wider">
                Hi there, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight
                text-white leading-[1.05] mb-4">
                Muhammad{' '}
                <span className="text-gradient-emerald">Arsalan</span>
              </h1>

              {/* Typewriter role */}
              <div className="h-9 flex items-center">
                <TypewriterText
                  strings={TYPEWRITER_STRINGS}
                  className="text-xl sm:text-2xl font-semibold text-slate-300 font-mono"
                />
              </div>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
              I'm an undergraduate Computer Science student at{' '}
              <span className="text-emerald-400 font-semibold">Kohat University of Science & Technology</span>{' '}
              building modern web applications with the MERN stack —
              from responsive React frontends to RESTful Node.js backends
              powered by MongoDB and Mongoose.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2.5">
              {TECH_PILLS.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                    glass text-xs font-mono text-slate-300 border-white/[0.07]"
                >
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                as="a"
                href="#projects"
                size="lg"
                variant="primary"
                onClick={e => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                as="a"
                href="#contact"
                size="lg"
                variant="ghost"
                onClick={e => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                Hire Me
              </Button>

              <Button
                as="a"
                href="/resume-alex-vance.pdf"
                download
                size="lg"
                variant="outline"
              >
                <Download className="w-4 h-4" />
                Résumé
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs text-slate-600 font-mono">Find me on</span>
              <a
                href="https://github.com/Arsalnkhattak"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white
                  transition-colors text-xs font-mono group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arsalankhattak1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400
                  transition-colors text-xs font-mono group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a
                href="mailto:arsalantec149@gmail.com"
                className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400
                  transition-colors text-xs font-mono group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </div>
          </div>

          {/* ── RIGHT — Avatar / visual card ── */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr
                from-emerald-500/30 via-teal-500/20 to-cyan-500/10
                blur-2xl scale-110 animate-pulse-slow" aria-hidden="true" />

              {/* Avatar container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-3xl overflow-hidden
                border border-emerald-500/25 shadow-2xl shadow-black/50 animate-float">
                {/* Profile Image */}
                <img
                  src="/profile.jpeg"
                  alt="Muhammad Arsalan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient with initials if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Gradient fallback (shown if image doesn't load) */}
                <div className="absolute inset-0 bg-gradient-to-br
                  from-slate-800 via-slate-900 to-slate-950
                  flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr
                      from-emerald-500 to-teal-600 mx-auto flex items-center
                      justify-center shadow-xl shadow-emerald-500/30">
                      <span className="text-4xl font-black text-white">MA</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Muhammad Arsalan</p>
                      <p className="text-emerald-400 text-xs font-mono">MERN Stack Developer</p>
                    </div>
                    <div className="flex items-center justify-center gap-1.5
                      text-emerald-400 text-xs font-mono">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>1+ Year Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — React */}
              <div className="absolute -top-4 -right-4 glass-panel rounded-2xl
                p-3 border border-white/[0.08] shadow-xl animate-float"
                style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="font-bold text-xs">React</div>
                    <div className="text-[10px] text-cyan-400">v19</div>
                  </div>
                </div>
              </div>

              {/* Floating badge — MongoDB */}
              <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl
                p-3 border border-white/[0.08] shadow-xl animate-float"
                style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Database className="w-4 h-4 text-teal-400" />
                  <div>
                    <div className="font-bold text-xs">MongoDB</div>
                    <div className="text-[10px] text-teal-400">Mongoose</div>
                  </div>
                </div>
              </div>

              {/* Floating badge — Node.js */}
              <div className="absolute top-1/2 -left-12 glass-panel rounded-2xl
                p-3 border border-white/[0.08] shadow-xl animate-float"
                style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <Server className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-bold text-xs">Node.js</div>
                    <div className="text-[10px] text-emerald-400">Express</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.7s ease 0.35s',
          }}
        >
          {STATS.map(({ value, label, sub }) => (
            <div
              key={label}
              className="glass rounded-2xl p-5 text-left
                hover:border-emerald-500/30 transition-colors card-hover"
            >
              <div className="text-2xl sm:text-3xl font-black font-mono
                text-gradient-emerald mb-1">
                {value}
              </div>
              <div className="text-sm font-semibold text-slate-200">{label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>

        {/* ── Scroll indicator ── */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() =>
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex flex-col items-center gap-2 text-slate-500
              hover:text-emerald-400 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-slate-700
              group-hover:border-emerald-500/50 flex items-start justify-center pt-1.5
              transition-colors">
              <div className="w-1 h-2 bg-slate-500 group-hover:bg-emerald-400
                rounded-full animate-bounce transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
