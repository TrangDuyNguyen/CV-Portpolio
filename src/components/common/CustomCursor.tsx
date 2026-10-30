import React, { useEffect, useRef, useState } from 'react';
import { usePointerFine } from '../../hooks/usePointerFine';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type CursorMode = 'default' | 'interactive' | 'view' | 'lens';

export const CustomCursor: React.FC = () => {
  const isPointerFine = usePointerFine();
  const isReducedMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<CursorMode>('default');
  const [customLabel, setCustomLabel] = useState<string>('');
  const [isClicking, setIsClicking] = useState<boolean>(false);

  useEffect(() => {
    if (!isPointerFine || isReducedMotion) return;

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (containerRef.current && containerRef.current.style.opacity !== '1') {
        containerRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Check hover context
      const target = e.target as HTMLElement | null;
      if (target) {
        const viewEl = target.closest('[data-cursor="view"], [data-cursor-view]');
        const lensEl = target.closest('[data-cursor="lens"]');
        const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        const interactiveEl = target.closest('a, button, [role="button"], [data-cursor="pointer"]');
        const isInput = target.closest('input, textarea, select, [contenteditable="true"]');

        if (isInput) {
          setMode('default');
          setCustomLabel('');
        } else if (viewEl) {
          setMode('view');
          setCustomLabel(customText || 'VIEW');
        } else if (lensEl) {
          setMode('lens');
          setCustomLabel('');
        } else if (interactiveEl) {
          setMode('interactive');
          setCustomLabel(customText || '');
        } else {
          setMode('default');
          setCustomLabel('');
        }
      }
    };

    const onMouseDown = () => {
      setIsClicking(true);
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

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

    const render = () => {
      // Responsive rapid-follow lerp
      const ease = 0.52;
      ringX += (targetX - ringX) * ease;
      ringY += (targetY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isPointerFine, isReducedMotion]);

  if (!isPointerFine || isReducedMotion) {
    return null;
  }

  const isView = mode === 'view';
  const isLens = mode === 'lens';
  const isInteractive = mode === 'interactive';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ opacity: 0 }}
      className="custom-cursor-layer fixed inset-0 pointer-events-none z-[70] transition-opacity duration-300"
    >
      {/* Precision Dot: 2px with difference blend */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full pointer-events-none transition-opacity duration-200 ${
          isView ? 'opacity-0' : 'bg-[#F4F2EA] mix-blend-difference'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer Ring / Flare Lens */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full flex items-center justify-center transition-all duration-200 ${
          isClicking ? 'scale-75' : 'scale-100'
        } ${
          isView
            ? '-ml-7 -mt-7 w-14 h-14 bg-[#FF6417] text-[#08090A] shadow-[0_0_24px_rgba(255,100,23,0.5)] border-transparent mix-blend-normal'
            : isLens
            ? '-ml-3 -mt-3 w-6 h-6 border border-[#FFB648] bg-[#FFB648]/20 mix-blend-difference'
            : isInteractive
            ? '-ml-6 -mt-6 w-12 h-12 border border-[#F4F2EA]/80 bg-[#F4F2EA]/10 mix-blend-difference'
            : '-ml-4 -mt-4 w-8 h-8 border border-[#F4F2EA]/60 bg-transparent mix-blend-difference'
        }`}
        style={{ willChange: 'transform' }}
      >
        {isView && (
          <span className="text-[10px] font-mono font-black tracking-widest uppercase select-none">
            {customLabel || 'VIEW'}
          </span>
        )}
      </div>
    </div>
  );
};
