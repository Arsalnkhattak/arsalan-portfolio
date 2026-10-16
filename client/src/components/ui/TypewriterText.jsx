import React, { useEffect, useState } from 'react';

/**
 * TypewriterText
 * Cycles through an array of strings with a typewriter effect.
 */
export default function TypewriterText({
  strings = [],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1800,
  className = '',
}) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    if (!strings.length) return;
    const current = strings[index % strings.length];

    let timer;

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timer = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed
        );
      } else {
        timer = setTimeout(() => setPhase('pausing'), pauseMs);
      }
    } else if (phase === 'pausing') {
      setPhase('deleting');
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timer = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          deletingSpeed
        );
      } else {
        setIndex((i) => i + 1);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, phase, index, strings, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      {displayed}
      <span className="cursor-blink text-emerald-400 ml-0.5">|</span>
    </span>
  );
}
