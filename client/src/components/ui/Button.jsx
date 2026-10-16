import React from 'react';

/**
 * Button
 * variant: 'primary' | 'secondary' | 'ghost' | 'outline'
 * size:    'sm' | 'md' | 'lg'
 */
const variants = {
  primary:
    'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25',
  secondary:
    'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25',
  ghost:
    'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700',
  outline:
    'bg-transparent border border-emerald-500/60 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200',
};

const sizes = {
  sm: 'px-4 py-2 text-xs rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-sm rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-200 active:scale-95 focus-visible:ring-2
        focus-visible:ring-emerald-500 focus-visible:ring-offset-2
        focus-visible:ring-offset-slate-950 disabled:opacity-50
        disabled:pointer-events-none
        ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
