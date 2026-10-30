import React, { useEffect, useRef, useState } from 'react';
import { usePointerFine } from '../../hooks/usePointerFine';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const isPointerFine = usePointerFine();
  const isReducedMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string>('');

  useEffect(() => {
    // Only run on fine pointer (desktop mouse/trackpad) and when reduced motion is not requested
    if (!isPointerFine || isReducedMotion) return;

    let targetX = -100;
    let targetY = -100;
    let currentRingX = -100;
    let currentRingY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (containerRef.current && containerRef.current.style.opacity !== '1') {
        containerRef.current.style.opacity = '1';
      }

      // Dot follows immediately without lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Check if hovering over interactive element or custom cursor target
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
        const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

        if (customText) {
          setCursorLabel(customText);
        } else {
          setCursorLabel('');
        }

        const isInput = target.closest('input, textarea, select, [contenteditable="true"]');
        if (isInput) {
          // Keep native cursor for inputs
          setIsHoveringInteractive(false);
        } else if (interactiveEl) {
          setIsHoveringInteractive(true);
        } else {
          setIsHoveringInteractive(false);
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    const onMouseEnter = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    };

    // Smooth lerp loop for the outer ring
    const render = () => {
      const ease = 0.16;
      currentRingX += (targetX - currentRingX) * ease;
      currentRingY += (targetY - currentRingY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentRingX}px, ${currentRingY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPointerFine, isReducedMotion]);

  if (!isPointerFine || isReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ opacity: 0 }}
      className="custom-cursor-layer fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300"
    >
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-sky-400 dark:bg-cyan-300 pointer-events-none transition-transform duration-75"
        style={{ willChange: 'transform' }}
      />

      {/* Fluid Following Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full flex items-center justify-center transition-all duration-200 border ${
          isClicking
            ? '-ml-3 -mt-3 w-6 h-6 border-cyan-400 bg-cyan-400/20 scale-90'
            : isHoveringInteractive
            ? cursorLabel
              ? '-ml-7 -mt-7 w-14 h-14 border-cyan-400/80 bg-sky-500/15 backdrop-blur-[1px]'
              : '-ml-6 -mt-6 w-12 h-12 border-sky-400/80 bg-sky-400/10'
            : '-ml-4 -mt-4 w-8 h-8 border-sky-400/40 dark:border-cyan-300/40 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorLabel && (
          <span
            ref={labelRef}
            className="text-[9px] font-mono font-bold tracking-widest text-sky-400 uppercase select-none"
          >
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
};
