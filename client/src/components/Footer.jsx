import React from 'react';
import { Terminal, ArrowUp, Heart, Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const NAV_SECTIONS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/Arsalnkhattak' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arsalankhattak1' },
  { icon: Mail,     label: 'Email',    href: 'mailto:arsalantec149@gmail.com' },
];

const TECH_BADGES = [
  { label: 'React 19',     color: 'text-cyan-400' },
  { label: 'Node.js v22',  color: 'text-emerald-400' },
  { label: 'MongoDB 7',    color: 'text-green-400' },
  { label: 'Redis 7',      color: 'text-red-400' },
  { label: 'Firebase 10',  color: 'text-amber-400' },
  { label: 'TypeScript 5', color: 'text-blue-400' },
];

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      className="glass-panel border-t border-white/[0.06] mt-20 relative z-10"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600
                flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Terminal className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-sm tracking-widest text-white font-mono uppercase">
                  Alex<span className="text-emerald-400">.</span>dev
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Full-Stack MERN Developer
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Undergraduate Computer Science student at Kohat University of Science & Technology 
              specialising in React, Node.js, MongoDB, and full-stack web development with the MERN stack.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5">
              {TECH_BADGES.map(({ label, color }) => (
                <span key={label}
                  className={`text-[11px] font-mono ${color} flex items-center gap-1`}>
                  <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                  {label}
                </span>
              ))}
            </div>

            {/* Résumé download */}
            <a
              href="/resume-muhammad-arsalan.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                bg-slate-900 border border-slate-800 hover:border-emerald-500/30
                text-slate-300 hover:text-white text-xs font-medium transition-colors
                w-fit"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              Download Résumé
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400
              font-bold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_SECTIONS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="text-xs text-slate-400 hover:text-emerald-400
                      transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400
              font-bold mb-5">
              Connect
            </h4>

            <div className="flex gap-3 mb-5">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800
                    text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Availability dot */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full
                  rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-300">Available · Immediate start</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-1.5 text-xs font-mono
                text-slate-500 hover:text-emerald-400 transition-colors group"
              aria-label="Back to top"
            >
              <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800
                flex items-center justify-center group-hover:border-emerald-500/40
                transition-colors">
                <ArrowUp className="w-3 h-3" />
              </div>
              Back to top
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-white/[0.05]
          flex flex-col sm:flex-row items-center justify-between gap-4
          text-xs text-slate-600 font-mono">

          <p>
            &copy; {new Date().getFullYear()} Muhammad Arsalan. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with
            <span className="text-cyan-500">React</span>
            <span className="text-slate-700">·</span>
            <span className="text-emerald-500">Node.js</span>
            <span className="text-slate-700">·</span>
            <span className="text-green-500">MongoDB</span>
            <Heart className="w-3 h-3 text-red-500 fill-current mx-0.5" />
          </p>
        </div>
      </div>
    </footer>
  );
}
