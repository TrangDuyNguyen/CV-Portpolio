import React, { useRef, useState } from 'react';
import { usePointerFine } from '../../hooks/usePointerFine';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * GridCrosshairs
 * Renders crisp Swiss Brutalist `+` intersection marks at grid corners.
 */
export const GridCrosshairs: React.FC<{
  corners?: ('tl' | 'tr' | 'bl' | 'br')[];
  className?: string;
}> = ({ corners = ['tl', 'tr', 'bl', 'br'], className = '' }) => {
  const posMap: Record<'tl' | 'tr' | 'bl' | 'br', string> = {
    tl: '-top-[7px] -left-[5px]',
    tr: '-top-[7px] -right-[5px]',
    bl: '-bottom-[8px] -left-[5px]',
    br: '-bottom-[8px] -right-[5px]',
  };

  return (
    <>
      {corners.map((corner) => (
        <span
          key={corner}
          aria-hidden="true"
          className={`pointer-events-none select-none absolute z-20 font-mono text-[11px] leading-none text-[var(--text-muted)] ${posMap[corner]} ${className}`}
        >
          +
        </span>
      ))}
    </>
  );
};

/**
 * Magnetic
 * Subtle cursor-attracted magnetic pull for CTAs and brutalist action controls.
 */
interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.24,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isPointerFine = usePointerFine();
  const isReducedMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  if (!isPointerFine || isReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: dx * strength, y: dy * strength });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </div>
  );
};

/**
 * TiltStage3D
 * Mouse-reactive 3D hardware perspective tilt with specular glass sheen.
 */
interface TiltStage3DProps {
  children: React.ReactNode;
  maxTilt?: number;
  glowColor?: string;
  className?: string;
}

export const TiltStage3D: React.FC<TiltStage3DProps> = ({
  children,
  maxTilt = 9,
  glowColor = '#FF4D00',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPointerFine = usePointerFine();
  const isReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || isReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 2 * maxTilt;
    const rx = -(py - 0.5) * 2 * maxTilt;
    setTilt({ rx, ry, gx: px * 100, gy: py * 100, active: true });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative [perspective:1100px] ${className}`}
    >
      {/* Dynamic color-matched ambient backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full blur-[64px] transition-all duration-500 opacity-30 dark:opacity-40"
        style={{
          background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, ${glowColor} 0%, transparent 72%)`,
        }}
      />

      <div
        className="relative transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform:
            isPointerFine && !isReducedMotion
              ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
              : undefined,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}

        {/* Subtle specular highlight across device glass */}
        {isPointerFine && !isReducedMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2.6rem] transition-opacity duration-300"
            style={{
              opacity: tilt.active ? 0.22 : 0,
              background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.65) 0%, transparent 55%)`,
            }}
          />
        )}
      </div>
    </div>
  );
};
