import { useEffect } from 'react';

/**
 * useScrollReveal
 * Lightweight IntersectionObserver + MutationObserver hook that reveals
 * elements with `.reveal` as they enter the viewport, including elements
 * re-rendered dynamically on language or tab changes.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'));
      return;
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const observePending = () => {
      document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
        intersectionObserver.observe(el);
      });
    };

    observePending();

    const mutationObserver = new MutationObserver(() => {
      observePending();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
