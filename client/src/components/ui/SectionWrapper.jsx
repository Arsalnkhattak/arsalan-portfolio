import React, { useEffect, useRef, useState } from 'react';

/**
 * SectionWrapper
 * Wraps each portfolio section with:
 * - consistent max-width, padding, id anchor
 * - intersection-observer fade-in-up entrance animation
 */
export default function SectionWrapper({
  id,
  children,
  className = '',
  innerClassName = '',
  fullWidth = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
      }}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={`max-w-7xl mx-auto ${innerClassName}`}>
          {children}
        </div>
      )}
    </section>
  );
}
