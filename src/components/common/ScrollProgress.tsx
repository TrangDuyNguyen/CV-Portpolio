import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ScrollProgress: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion) return;

    let ticking = false;

    const updateScrollProgress = () => {
      const el = progressBarRef.current;
      if (!el) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

      el.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isReducedMotion]);

  if (isReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-slate-200/20 dark:bg-slate-800/30 pointer-events-none"
    >
      <div
        ref={progressBarRef}
        className="h-full w-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500 origin-left scale-x-0 will-change-transform"
      />
    </div>
  );
};
