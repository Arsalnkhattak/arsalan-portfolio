import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Badge from './ui/Badge';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'KP Information Technology Board (KP-ITPB)',
    companyUrl: 'https://kpitb.gov.pk',
    period: '2 Months (Recent)',
    duration: '2 months',
    location: 'Khyber Pakhtunkhwa, Pakistan',
    type: 'Internship',
    description:
      'Worked with the provincial IT board on government technology initiatives. Gained hands-on experience in professional web development workflows, collaborative coding practices, and real-world project deployment.',
    achievements: [
      'Collaborated with senior developers on provincial IT projects',
      'Learned professional Git workflow and code review processes',
      'Participated in daily standups and sprint planning meetings',
      'Assisted in frontend development tasks using React and modern JavaScript',
      'Gained exposure to government sector technology standards and security practices',
    ],
    tags: ['React', 'JavaScript', 'Git', 'Team Collaboration', 'Government IT'],
    color: 'emerald',
    dotColor: 'bg-emerald-400',
    borderColor: 'border-emerald-500/30',
    current: false,
  },
];

const colorBadge = { emerald: 'emerald', cyan: 'cyan', teal: 'teal' };

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        eyebrow="Experience"
        EyebrowIcon={Briefcase}
        title="Professional Experience"
        subtitle="Hands-on internship experience working on real-world IT projects with government technology initiatives."
      />

      {/* Timeline */}
      <div className="relative space-y-8 before:absolute before:left-5
        before:top-0 before:bottom-0 before:w-px
        before:bg-gradient-to-b before:from-emerald-500/60
        before:via-cyan-500/40 before:to-transparent">

        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className="relative flex gap-6 sm:gap-8">

            {/* Timeline dot */}
            <div className="relative flex-none mt-1">
              <div className={`w-10 h-10 rounded-2xl bg-slate-900
                border-2 ${exp.borderColor}
                flex items-center justify-center z-10 relative
                shadow-lg`}>
                <Briefcase className="w-4 h-4 text-slate-300" />
              </div>
            </div>

            {/* Card */}
            <article
              className="flex-1 glass rounded-2xl p-5 sm:p-7
                hover:border-emerald-500/25 card-hover transition-all"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start
                sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold
                      text-emerald-400 hover:text-emerald-300 transition-colors mt-0.5"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3
                  text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-600" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-600" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge color={colorBadge[exp.color]}>{exp.type}</Badge>
                <Badge color="slate">{exp.duration}</Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2.5 mb-5">
                <p className="text-[11px] font-mono uppercase tracking-wider
                  text-slate-500">
                  Key learnings & contributions
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400
                        shrink-0 mt-0.5" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(tag => (
                  <span key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-mono
                      bg-slate-900/80 border border-slate-800 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Currently learning section */}
      <div className="mt-12 glass rounded-2xl p-6 border-emerald-500/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/30
            flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Currently Open to Opportunities</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Actively seeking <span className="text-emerald-400 font-semibold">Junior / Mid-level Full-Stack Developer</span> roles
              where I can contribute to building impactful web applications with the MERN stack. 
              Open to remote, hybrid, or on-site positions in Pakistan or internationally.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
