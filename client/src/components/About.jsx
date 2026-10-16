import React from 'react';
import {
  User, MapPin, Mail, Calendar, Coffee,
  CheckCircle2, Heart, Code2, Zap, Globe
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Badge from './ui/Badge';
import Button from './ui/Button';

const CORE_VALUES = [
  { icon: Code2,  label: 'Clean, maintainable code over clever hacks' },
  { icon: Zap,    label: 'Performance-first architecture decisions' },
  { icon: Globe,  label: 'Accessible, inclusive UI for every user' },
  { icon: Heart,  label: 'Collaborative, feedback-driven development' },
];

const TECH_HIGHLIGHTS = [
  'React', 'JavaScript', 'Node.js', 'Express',
  'MongoDB', 'Mongoose', 'HTML5', 'CSS3',
  'WordPress', 'REST APIs', 'Git / GitHub', 'Cybersecurity Basics',
];

const INFO_ITEMS = [
  { icon: MapPin,   label: 'Location',      value: 'Kohat, Khyber Pakhtunkhwa, Pakistan' },
  { icon: Mail,     label: 'Email',         value: 'arsalantec149@gmail.com' },
  { icon: Calendar, label: 'Experience',    value: '1+ Year of Web Development' },
  { icon: Coffee,   label: 'Coffee intake', value: '2–3 cups / day ☕' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        eyebrow="About Me"
        EyebrowIcon={User}
        title="Passionate about building things that scale"
        subtitle="A brief background on who I am, what I value, and how I work."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ── Left — Bio ── */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-7 sm:p-8 space-y-5">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I'm an undergraduate{' '}
              <span className="text-emerald-400 font-semibold">Computer Science student</span>{' '}
              at Kohat University of Science & Technology with 1+ year of experience building web applications.
              I specialise in the MERN stack — creating responsive React interfaces,
              building RESTful APIs with Node.js and Express, and designing MongoDB databases with Mongoose.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              During my{' '}
              <span className="text-teal-400 font-medium">2-month internship at KP Information Technology Board (KP-ITPB)</span>,
              I worked on real provincial IT projects and learned professional development workflows.
              I've completed certifications in Web Development (Johns Hopkins University),
              WordPress, Affiliate Marketing, and Cisco Introduction to Cybersecurity.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              When I'm not coding, I'm learning new web technologies, contributing to open-source projects,
              and exploring cybersecurity fundamentals.
            </p>
          </div>

          {/* Core values */}
          <div className="glass rounded-3xl p-6 sm:p-7">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
              What I stand by
            </h3>
            <ul className="space-y-3">
              {CORE_VALUES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/60
                    border border-emerald-500/25 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Button
              as="a"
              href="/resume-alex-vance.pdf"
              download
              size="md"
              variant="primary"
            >
              Download Résumé
            </Button>
            <Button
              as="a"
              href="#contact"
              size="md"
              variant="ghost"
              onClick={e => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              Get in Touch
            </Button>
          </div>
        </div>

        {/* ── Right — Info card + tech highlights ── */}
        <div className="space-y-6">

          {/* Personal info grid */}
          <div className="glass rounded-3xl p-6 sm:p-7">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-5">
              Quick info
            </h3>
            <dl className="space-y-4">
              {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <dt className="flex items-center gap-2 text-xs text-slate-500 w-28 shrink-0">
                    <Icon className="w-3.5 h-3.5 text-emerald-500" />
                    {label}
                  </dt>
                  <dd className="text-sm text-slate-200 font-medium">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 pt-5 border-t border-white/[0.06] flex gap-3">
              <a
                href="https://github.com/Arsalnkhattak"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-slate-900 hover:bg-slate-800 border border-slate-700
                  text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arsalankhattak1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-slate-900 hover:bg-slate-800 border border-slate-700
                  text-slate-300 hover:text-sky-400 text-xs font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Tech highlights */}
          <div className="glass rounded-3xl p-6 sm:p-7">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-5">
              Tech I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {TECH_HIGHLIGHTS.map(tech => (
                <Badge key={tech} color="emerald">{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Availability card */}
          <div className="rounded-3xl p-5 border border-emerald-500/30
            bg-emerald-950/20 border-glow">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping
                relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-300">
                  Available for Junior / Mid-level roles · Immediate start
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-mono">
                  Open to full-time, remote, or on-site opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
