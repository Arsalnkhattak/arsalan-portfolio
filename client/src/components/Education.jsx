import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Badge from './ui/Badge';

const EDUCATION = [
  {
    id: 1,
    degree: 'B.Sc. Computer Science',
    institution: 'Kohat University of Science & Technology (KUST)',
    period: 'Ongoing (Undergraduate)',
    location: 'Kohat, Khyber Pakhtunkhwa, Pakistan',
    gpa: 'In Progress',
    type: 'Bachelor\'s Degree',
    description:
      'Undergraduate Computer Science student learning software engineering fundamentals, programming, data structures, algorithms, database systems, and web technologies.',
    highlights: [
      'Coursework: Data Structures, Algorithms, Database Systems, Web Programming',
      'Focus on MERN stack development and full-stack web applications',
      'Completed 2-month internship at KP Information Technology Board',
      'Active participation in coding clubs and technical societies',
    ],
    badgeColor: 'emerald',
  },
];

const CERTIFICATIONS = [
  {
    id: 1,
    name: 'HTML, CSS, and Javascript for Web Developers',
    issuer: 'Johns Hopkins University',
    platform: 'Coursera',
    date: 'Sep 2025',
    credentialId: 'D481WG6ZYYNW',
    icon: '🎓',
    badgeColor: 'blue',
    verifyUrl: 'https://coursera.org/verify/D481WG6ZYYNW',
  },
  {
    id: 2,
    name: 'Build a free website with WordPress',
    issuer: 'Coursera Project Network',
    platform: 'Coursera',
    date: 'Oct 2025',
    credentialId: 'YVVS1M282JLL',
    icon: '🌐',
    badgeColor: 'cyan',
    verifyUrl: 'https://coursera.org/verify/YVVS1M282JLL',
  },
  {
    id: 3,
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    platform: 'Cisco',
    date: 'Jan 2026',
    credentialId: 'Cisco Verified',
    icon: '🔐',
    badgeColor: 'red',
    verifyUrl: '#',
  },
  {
    id: 4,
    name: 'Affiliate Marketing',
    issuer: 'DigiSkills Pakistan',
    platform: 'Ministry of IT & Telecom',
    date: 'Oct 2023',
    credentialId: 'FVYJGJ4MK',
    icon: '💼',
    badgeColor: 'emerald',
    verifyUrl: 'https://digiskills.pk/verify',
  },
];

/* small amber badge colour not in Badge component — map it */
const BADGE_COLOR_MAP = { orange: 'amber', blue: 'cyan', red: 'red' };
const safeBadge = c => BADGE_COLOR_MAP[c] ?? c;

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        eyebrow="Education & Certifications"
        EyebrowIcon={GraduationCap}
        title="Academic Background & Credentials"
        subtitle="Formal computer science education combined with industry-recognized certifications in web development and cybersecurity."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* ── Degree(s) ── */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Formal Education
          </h3>

          {EDUCATION.map(edu => (
            <article
              key={edu.id}
              className="glass rounded-3xl p-6 sm:p-7 space-y-5
                hover:border-emerald-500/30 card-hover transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800
                  flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-base leading-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-emerald-400 font-semibold text-sm mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2
                    text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge color={edu.badgeColor}>{edu.type}</Badge>
                <Badge color="slate">Undergraduate</Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Professional Certifications
          </h3>

          <div className="space-y-4">
            {CERTIFICATIONS.map(cert => (
              <article
                key={cert.id}
                className="glass rounded-2xl p-4 sm:p-5 flex items-center gap-4
                  hover:border-emerald-500/25 card-hover transition-all"
              >
                {/* Emoji icon */}
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800
                  flex items-center justify-center text-2xl shrink-0">
                  {cert.icon}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-sm leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cert.issuer} · {cert.platform}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Badge color={safeBadge(cert.badgeColor)}>{cert.date}</Badge>
                    <span className="text-[10px] font-mono text-slate-600">
                      {cert.credentialId}
                    </span>
                  </div>
                  {cert.verifyUrl !== '#' && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] text-emerald-400 hover:text-emerald-300
                        font-mono mt-1 inline-block"
                    >
                      Verify →
                    </a>
                  )}
                </div>

                {/* Verified badge */}
                <div className="shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-950/60
                    border border-emerald-500/30 flex items-center justify-center"
                    title="Verified credential">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Continuing education note */}
          <div className="glass rounded-2xl p-5 border-glow">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-200">
                  Continuous Learning
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Actively learning advanced{' '}
                  <span className="text-emerald-400">React patterns, Node.js best practices,</span>{' '}
                  and database optimisation techniques. Participating in online coding challenges
                  and contributing to open-source projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
