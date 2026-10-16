import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, Menu, X, Download, ChevronRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeHash,  setActiveHash]  = useState('');

  /* ── scroll state ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveHash('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── close mobile menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel border-b border-white/[0.06] shadow-2xl shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={e => handleNavClick(e, '#')}
            className="flex items-center gap-2.5 group"
            aria-label="Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500
              flex items-center justify-center shadow-lg shadow-emerald-500/30
              group-hover:shadow-emerald-500/50 transition-shadow">
              <Terminal className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-sm tracking-widest text-white
                group-hover:text-emerald-400 transition-colors font-mono uppercase">
                Muhammad<span className="text-emerald-400">.</span>A
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                MERN Stack Dev
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors
                  ${activeHash === link.href
                    ? 'text-emerald-400'
                    : 'text-slate-400 hover:text-slate-100'
                  }`}
              >
                {link.label}
                {activeHash === link.href && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2
                    w-4 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Arsalnkhattak"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <Github className="w-4.5 h-4.5 w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/arsalankhattak1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 transition-colors"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="/resume-muhammad-arsalan.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold
                bg-gradient-to-r from-emerald-500 to-teal-600
                hover:from-emerald-400 hover:to-teal-500
                text-white shadow-lg shadow-emerald-500/20 transition-all
                hover:shadow-emerald-500/40 hover:-translate-y-px active:translate-y-0"
            >
              <Download className="w-3.5 h-3.5" />
              Résumé
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white
              hover:bg-slate-800/60 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-panel border-t border-white/[0.06] px-4 py-5 space-y-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm
                font-medium transition-colors
                ${activeHash === link.href
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/25'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
          ))}

          <div className="pt-3 border-t border-white/[0.06] flex items-center gap-3">
            <a
              href="https://github.com/Arsalnkhattak"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/arsalankhattak1"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/resume-muhammad-arsalan.pdf"
              download
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
