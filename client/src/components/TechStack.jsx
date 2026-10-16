import React, { useState, useRef, useEffect } from 'react';
import {
  Cpu, Server, Database, Code2, Palette, Layers, ShieldCheck
} from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';

/* ── Static skills data ─────────────────────────────────────── */
const SKILLS = [
  // ─ Frontend ──────────────────────────────────────────────────
  {
    id: 1, category: 'Frontend',
    name: 'React',
    icon: Code2, iconColor: 'text-cyan-400', barColor: 'from-cyan-500 to-blue-500',
    proficiency: 85,
    description: 'Component architecture, hooks, state management, React Router, responsive design.',
    tags: ['React 19', 'JSX', 'Hooks', 'React Router', 'Vite'],
  },
  {
    id: 2, category: 'Frontend',
    name: 'HTML & CSS',
    icon: Code2, iconColor: 'text-orange-400', barColor: 'from-orange-500 to-red-500',
    proficiency: 90,
    description: 'Semantic HTML5, CSS3 animations, Flexbox, Grid, responsive layouts, accessibility.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive', 'Accessibility'],
  },
  {
    id: 3, category: 'Frontend',
    name: 'Tailwind CSS',
    icon: Palette, iconColor: 'text-sky-400', barColor: 'from-sky-500 to-indigo-500',
    proficiency: 88,
    description: 'Utility-first CSS, custom configurations, responsive design, dark mode, animations.',
    tags: ['Tailwind CSS', 'JIT', 'Custom Themes', 'Dark Mode'],
  },
  {
    id: 4, category: 'Frontend',
    name: 'JavaScript',
    icon: Code2, iconColor: 'text-yellow-400', barColor: 'from-yellow-500 to-amber-500',
    proficiency: 82,
    description: 'ES6+ syntax, async/await, Promises, DOM manipulation, event handling, fetch API.',
    tags: ['ES6+', 'Async/Await', 'DOM', 'Fetch', 'Events'],
  },
  // ─ Backend ───────────────────────────────────────────────────
  {
    id: 5, category: 'Backend',
    name: 'Node.js & Express',
    icon: Server, iconColor: 'text-emerald-400', barColor: 'from-emerald-500 to-teal-500',
    proficiency: 80,
    description: 'RESTful APIs, middleware, routing, error handling, async operations.',
    tags: ['Node.js', 'Express', 'REST', 'Middleware', 'Async'],
  },
  {
    id: 6, category: 'Backend',
    name: 'Authentication',
    icon: ShieldCheck, iconColor: 'text-violet-400', barColor: 'from-violet-500 to-purple-500',
    proficiency: 75,
    description: 'JWT tokens, session management, password hashing, role-based access control.',
    tags: ['JWT', 'Sessions', 'bcrypt', 'RBAC'],
  },
  // ─ Database ────────────────────────────────────────────
  {
    id: 7, category: 'Database',
    name: 'MongoDB & Mongoose',
    icon: Database, iconColor: 'text-green-400', barColor: 'from-green-500 to-emerald-500',
    proficiency: 85,
    description: 'NoSQL database design, Mongoose schemas, CRUD operations, relationships, validation.',
    tags: ['MongoDB', 'Mongoose', 'NoSQL', 'CRUD', 'Schemas'],
  },
  // ─ CMS & Tools ──────────────────────────────────────────────
  {
    id: 8, category: 'CMS & Tools',
    name: 'WordPress',
    icon: Layers, iconColor: 'text-blue-400', barColor: 'from-blue-500 to-cyan-500',
    proficiency: 70,
    description: 'Website building, theme customisation, plugin usage, content management.',
    tags: ['WordPress', 'CMS', 'Themes', 'Plugins', 'Content'],
  },
  {
    id: 9, category: 'CMS & Tools',
    name: 'Git & GitHub',
    icon: Code2, iconColor: 'text-slate-300', barColor: 'from-slate-500 to-gray-500',
    proficiency: 78,
    description: 'Version control, branching, merging, pull requests, repository management.',
    tags: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
  },
  // ─ Cybersecurity ──────────────────────────────────────────────
  {
    id: 10, category: 'Cybersecurity',
    name: 'Cybersecurity Basics',
    icon: ShieldCheck, iconColor: 'text-red-400', barColor: 'from-red-500 to-orange-500',
    proficiency: 65,
    description: 'Online safety, common threats, vulnerabilities, protection strategies, secure coding.',
    tags: ['Cisco Certified', 'Security', 'Threats', 'Best Practices'],
  },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'CMS & Tools', 'Cybersecurity'];

/* ── Animated skill bar ─────────────────────────────────────── */
function SkillBar({ proficiency, colorClass }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(proficiency);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [proficiency]);

  return (
    <div ref={ref} className="w-full bg-slate-900 rounded-full h-2
      overflow-hidden border border-slate-800">
      <div
        className={`bg-gradient-to-r ${colorClass} h-2 rounded-full`}
        style={{
          width: `${width}%`,
          transition: 'width 1.2s cubic-bezier(0.22,1,0.36,1)',
        }}
      />
    </div>
  );
}

/* ── Skill card ─────────────────────────────────────────────── */
function SkillCard({ skill }) {
  const { name, icon: Icon, iconColor, barColor, proficiency, description, tags } = skill;
  return (
    <div className="glass rounded-2xl p-5 sm:p-6 flex flex-col gap-4
      hover:border-emerald-500/30 card-hover transition-all">

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800
            flex items-center justify-center shrink-0">
            <Icon className={`w-4.5 h-4.5 ${iconColor} w-[18px] h-[18px]`} />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">{name}</h3>
            <span className="text-[10px] font-mono text-slate-500">{skill.category}</span>
          </div>
        </div>
        <span className={`text-xs font-mono font-bold bg-gradient-to-r
          ${barColor} bg-clip-text text-transparent`}>
          {proficiency}%
        </span>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>

      <SkillBar proficiency={proficiency} colorClass={barColor} />

      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span key={tag}
            className="px-2 py-0.5 rounded-md text-[10px] font-mono
              bg-slate-900/80 border border-slate-800 text-slate-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function TechStack() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === active);

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        eyebrow="Skills & Technologies"
        EyebrowIcon={Cpu}
        title="Technical Skill Set"
        subtitle="Proficient in MERN stack development — from crafting responsive frontends to building robust RESTful backends."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10"
        role="tablist" aria-label="Skill categories">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              active === cat
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'glass text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}
