import { useEffect } from 'react';

/**
 * useScrollReveal
 * A lightweight, zero-dependency hook that reveals elements with the .reveal class
 * as they enter the viewport using the native browser IntersectionObserver.
 * Adheres to the strict Ponytail mindset: native API, zero bloat, 60 FPS performance.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Check for browser support
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve once revealed for optimal performance and zero memory retention
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
};
