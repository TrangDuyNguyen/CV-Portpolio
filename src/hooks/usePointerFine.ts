import { useState, useEffect } from 'react';

/**
 * Hook to detect whether the primary pointer device is fine (e.g. mouse, trackpad)
 * and supports hover. Returns false on mobile touch screens and tablets.
 */
export const usePointerFine = (): boolean => {
  const [isPointerFine, setIsPointerFine] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const handleChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return isPointerFine;
};

