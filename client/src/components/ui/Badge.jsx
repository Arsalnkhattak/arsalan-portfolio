import React from 'react';

/**
 * Badge / tech tag pill
 * color: 'emerald' | 'cyan' | 'teal' | 'amber' | 'indigo' | 'slate'
 */
const colorMap = {
  emerald: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300',
  cyan:    'bg-cyan-950/60    border-cyan-500/30    text-cyan-300',
  teal:    'bg-teal-950/60    border-teal-500/30    text-teal-300',
  amber:   'bg-amber-950/60   border-amber-500/30   text-amber-300',
  indigo:  'bg-indigo-950/60  border-indigo-500/30  text-indigo-300',
  slate:   'bg-slate-900/80   border-slate-700      text-slate-300',
  red:     'bg-red-950/60     border-red-500/30     text-red-300',
};

export default function Badge({ children, color = 'slate', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px]
        font-mono border ${colorMap[color] ?? colorMap.slate} ${className}`}
    >
      {children}
    </span>
  );
}
