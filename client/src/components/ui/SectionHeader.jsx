import React from 'react';

/**
 * SectionHeader
 * Consistent eyebrow label + headline + subtext for every section.
 */
export default function SectionHeader({
  eyebrow,
  EyebrowIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl ${alignClass} mb-14 ${className}`}>
      {(eyebrow || EyebrowIcon) && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
            bg-emerald-950/60 border border-emerald-500/30 text-emerald-300
            text-xs font-mono uppercase tracking-wider mb-4`}
        >
          {EyebrowIcon && <EyebrowIcon className="w-3.5 h-3.5" />}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}

      <h2
        className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight
          leading-tight"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
