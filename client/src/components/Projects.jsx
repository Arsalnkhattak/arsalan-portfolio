import React, { useState } from 'react';
import {
  FolderGit2, ExternalLink, Code2, Globe,
  ShoppingCart, BookOpen, GraduationCap, User
} from 'lucide-react';
import { Github } from './BrandIcons';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Badge from './ui/Badge';

/* ── Static project data ────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    tagline: 'Modern, responsive portfolio showcasing projects and skills',
    category: 'Frontend Development',
    description:
      'A fully responsive personal portfolio website built with React and Tailwind CSS. Features smooth scroll navigation, dark theme with glassmorphism effects, animated sections, and optimised performance.',
    highlights: [
      'Built with React 19 + Vite for fast development and builds',
      'Responsive design with Tailwind CSS — works on all screen sizes',
      'Intersection Observer API for scroll-triggered entrance animations',
      'SEO-optimised with meta tags and semantic HTML structure',
    ],
    metrics: { Stack: 'React', Styling: 'Tailwind', Build: 'Vite' },
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Responsive Design'],
    gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    iconColor: 'text-cyan-400',
    Icon: User,
    githubUrl: 'https://github.com/Arsalnkhattak',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'School Monitoring System',
    tagline: 'Full-stack management system for school administration',
    category: 'Full-Stack Application',
    description:
      'A comprehensive school management web application with student attendance tracking, grade management, and teacher dashboards. Built with MERN stack featuring authentication, role-based access, and MongoDB database.',
    highlights: [
      'Student attendance system with date-wise records and reports',
      'Grade management module for teachers to input and track student performance',
      'Role-based authentication (Admin, Teacher, Student) with JWT tokens',
      'MongoDB database with Mongoose schemas for students, teachers, and classes',
    ],
    metrics: { Backend: 'Node.js', Database: 'MongoDB', Auth: 'JWT' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    iconColor: 'text-emerald-400',
    Icon: GraduationCap,
    githubUrl: 'https://github.com/Arsalnkhattak',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'E-Commerce Website',
    tagline: 'Online shopping platform with cart and checkout functionality',
    category: 'Full-Stack Application',
    description:
      'An e-commerce web application featuring product catalogues, shopping cart, user authentication, and order management. Built with MERN stack with RESTful API design and responsive frontend.',
    highlights: [
      'Product listing with search, filtering, and category-based navigation',
      'Shopping cart functionality with add/remove items and quantity control',
      'User authentication and registration with encrypted passwords',
      'RESTful API endpoints for products, users, orders, and cart operations',
    ],
    metrics: { API: 'REST', Products: '50+ items', Users: 'Multi-user' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'E-commerce'],
    gradient: 'from-amber-600/20 via-orange-600/10 to-transparent',
    iconColor: 'text-amber-400',
    Icon: ShoppingCart,
    githubUrl: 'https://github.com/Arsalnkhattak',
    liveUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Blog Website',
    tagline: 'Content management system for publishing articles and blogs',
    category: 'Full-Stack Application',
    description:
      'A blogging platform where users can create, edit, and publish articles. Features rich text editing, comment system, user profiles, and MongoDB-powered content storage.',
    highlights: [
      'Article creation with WYSIWYG editor for rich text formatting',
      'Comment system allowing readers to engage with blog posts',
      'User profiles with author bio and published articles listing',
      'MongoDB collections for posts, comments, and user data',
    ],
    metrics: { CMS: 'Custom', Editor: 'Rich Text', Database: 'Mongo' },
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CMS', 'Blog'],
    gradient: 'from-violet-600/20 via-purple-600/10 to-transparent',
    iconColor: 'text-violet-400',
    Icon: BookOpen,
    githubUrl: 'https://github.com/Arsalnkhattak',
    liveUrl: '#',
    featured: false,
  },
];

const CATEGORIES = ['All', 'Frontend Development', 'Full-Stack Application'];

/* ── Project card ───────────────────────────────────────────── */
function ProjectCard({ project }) {
  const {
    title, tagline, category, description, highlights,
    metrics, tags, gradient, iconColor, Icon,
    githubUrl, liveUrl, featured,
  } = project;

  return (
    <article
      className="relative rounded-3xl glass overflow-hidden flex flex-col
        hover:border-emerald-500/30 card-hover transition-all group"
    >
      {/* Top gradient band */}
      <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${gradient} pointer-events-none`} />

      {/* Featured ribbon */}
      {featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5
          px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40
          text-amber-300 text-[10px] font-mono backdrop-blur-sm z-10">
          ⭐ Featured
        </div>
      )}

      <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-5 flex-1">

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800
            flex items-center justify-center shrink-0">
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400
              transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-0.5 line-clamp-2">
              {tagline}
            </p>
          </div>
        </div>

        {/* Category badge */}
        <Badge color="cyan">{category}</Badge>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl
          bg-slate-900/70 border border-slate-800 font-mono text-center">
          {Object.entries(metrics).map(([key, val]) => (
            <div key={key}>
              <div className="text-[10px] text-slate-500 mb-0.5 truncate">{key}</div>
              <div className="text-xs font-bold text-slate-100 truncate">{val}</div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-mono
                bg-slate-900/80 border border-slate-800 text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div className="relative z-10 px-6 sm:px-7 py-4 border-t border-white/[0.06]
        flex items-center justify-between">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-400
            hover:text-white transition-colors"
          aria-label={`GitHub repository for ${title}`}
        >
          <Github className="w-4 h-4" />
          View Source
        </a>
        {liveUrl !== '#' && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold
              text-emerald-400 hover:text-emerald-300 transition-colors"
            aria-label={`Live demo for ${title}`}
          >
            <Globe className="w-3.5 h-3.5" />
            Live Demo
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        )}
      </div>
    </article>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active);

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        eyebrow="My Projects"
        EyebrowIcon={FolderGit2}
        title="Featured Web Applications"
        subtitle="Real-world MERN stack projects showcasing full-stack development skills, from responsive frontends to RESTful backends."
      />

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10"
        role="tablist" aria-label="Project categories">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/Arsalnkhattak"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
            glass border-white/[0.08] hover:border-emerald-500/30
            text-slate-300 hover:text-white text-sm font-medium
            transition-all card-hover"
        >
          <Github className="w-4.5 h-4.5 w-[18px] h-[18px]" />
          View all projects on GitHub
          <ExternalLink className="w-3.5 h-3.5 opacity-50" />
        </a>
      </div>
    </SectionWrapper>
  );
}
