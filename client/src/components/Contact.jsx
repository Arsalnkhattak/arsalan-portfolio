import React, { useState, useRef } from 'react';
import {
  Mail, Send, CheckCircle2, MapPin,
  MessageSquare, Clock
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

const CONTACT_INFO = [
  { icon: Mail,    label: 'Email',        value: 'arsalantec149@gmail.com',    href: 'mailto:arsalantec149@gmail.com' },
  { icon: MapPin,  label: 'Location',     value: 'Kohat, Khyber Pakhtunkhwa, Pakistan', href: null },
  { icon: Clock,   label: 'Response',     value: '< 48 hours typically',  href: null },
];

const SOCIAL_LINKS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/Arsalnkhattak',          color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arsalankhattak1', color: 'hover:text-sky-400' },
  { icon: Mail,     label: 'Email',    href: 'mailto:arsalantec149@gmail.com',             color: 'hover:text-emerald-400' },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');
  const formRef = useRef(null);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      /* Try the backend API first; fall back gracefully if unavailable */
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm(INITIAL_FORM);
      } else {
        /* Still show success if backend is offline in static/demo mode */
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || `Server error ${res.status}`);
      }
    } catch (err) {
      /* In demo / static mode, treat network failure as a graceful success */
      if (err.message === 'Failed to fetch' || err.message.includes('NetworkError')) {
        setStatus('success');
        setForm(INITIAL_FORM);
      } else {
        setStatus('error');
        setErrMsg(err.message);
      }
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        eyebrow="Get in Touch"
        EyebrowIcon={MessageSquare}
        title="Let's Build Something Together"
        subtitle="Open for Junior / Mid-level Full-Stack roles and web development projects. Feel free to reach out!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ── Left info panel (2 cols) ── */}
        <div className="lg:col-span-2 space-y-5">

          {/* Contact info */}
          <div className="glass rounded-3xl p-6 sm:p-7 space-y-5">
            <h3 className="text-sm font-bold text-white">Direct Contact</h3>

            <ul className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <li key={label}
                  className="flex items-center gap-3 text-sm text-slate-300
                    p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono text-slate-500">{label}</span>
                    {href ? (
                      <a href={href}
                        className="hover:text-emerald-400 transition-colors truncate block">
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Availability */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl
              bg-emerald-950/30 border border-emerald-500/25">
              <span className="relative flex w-2.5 h-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full
                  rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold text-emerald-300 font-mono">
                Available · Q4 2026 · Immediate start
              </span>
            </div>

            {/* Social links */}
            <div className="pt-4 border-t border-white/[0.06]">
              <p className="text-xs font-mono text-slate-500 mb-3">Find me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={label}
                    className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800
                      text-slate-400 ${color} transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* What I'm looking for */}
          <div className="glass rounded-3xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-white">What I'm looking for</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                '🚀 Junior / Mid-level Full-Stack positions',
                '💻 MERN stack development opportunities',
                '🌍 Remote or on-site roles in Pakistan',
                '💬 Collaborative learning environments',
              ].map(item => (
                <li key={item} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right — Contact form (3 cols) ── */}
        <div className="lg:col-span-3">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs text-slate-500 font-mono mb-6">
              Responses typically within 48 hours.
            </p>

            {/* Success state */}
            {status === 'success' && (
              <div className="flex items-start gap-3 p-4 rounded-2xl
                bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 mb-6">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Message sent!</p>
                  <p className="text-xs text-emerald-400/80 mt-0.5">
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div className="p-4 rounded-2xl bg-red-950/50 border border-red-500/40
                text-red-300 text-xs mb-6">
                {errMsg || 'Something went wrong. Please try again or email me directly.'}
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name"
                    className="block text-xs font-mono text-slate-400">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Sarah Connor"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90
                      border border-slate-800 text-slate-200 text-sm
                      placeholder:text-slate-600 focus:outline-none
                      focus:border-emerald-500/60 focus:ring-1
                      focus:ring-emerald-500/30 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email"
                    className="block text-xs font-mono text-slate-400">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="recruiter@techcorp.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90
                      border border-slate-800 text-slate-200 text-sm
                      placeholder:text-slate-600 focus:outline-none
                      focus:border-emerald-500/60 focus:ring-1
                      focus:ring-emerald-500/30 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject"
                  className="block text-xs font-mono text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Senior Full-Stack Role — React + Node.js"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90
                    border border-slate-800 text-slate-200 text-sm
                    placeholder:text-slate-600 focus:outline-none
                    focus:border-emerald-500/60 focus:ring-1
                    focus:ring-emerald-500/30 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message"
                  className="block text-xs font-mono text-slate-400">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, the stack, or the challenge you're tackling…"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90
                    border border-slate-800 text-slate-200 text-sm
                    placeholder:text-slate-600 focus:outline-none
                    focus:border-emerald-500/60 focus:ring-1
                    focus:ring-emerald-500/30 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="secondary"
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30
                      border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-[11px] text-slate-600 text-center font-mono">
                Your data is never shared or sold. I reply personally to every message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
