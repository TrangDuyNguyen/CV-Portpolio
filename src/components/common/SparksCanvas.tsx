import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  width: number;
}

interface Flash {
  x: number;
  y: number;
  age: number;
}

/**
 * SparksCanvas
 * Pure 2D canvas physics sparks engine inspired by richabh.com.
 * Spawns blackbody cooling sparks and a radial anvil flash on click.
 * Auto-stops the RAF animation loop when idle to consume 0% CPU.
 * Adheres strictly to the Ponytail mindset: native Canvas 2D, zero dependencies.
 */
export const SparksCanvas: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let sparks: Spark[] = [];
    let flashes: Flash[] = [];
    let isRunning = false;
    let dpr = 1;
    let lastTime = 0;
    let animId: number;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const render = (time: number) => {
      if (!lastTime) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.048);
      lastTime = time;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';

      // 1. Draw radial impact flashes
      for (let i = flashes.length - 1; i >= 0; i--) {
        const flash = flashes[i];
        flash.age += dt;
        const progress = 1 - flash.age / 0.32;
        if (progress <= 0) {
          flashes.splice(i, 1);
          continue;
        }

        const radius = 8 + (1 - progress) * 36;
        const grad = ctx.createRadialGradient(flash.x, flash.y, 0, flash.x, flash.y, radius);
        grad.addColorStop(0, `rgba(255, 236, 200, ${0.55 * progress})`);
        grad.addColorStop(0.4, `rgba(255, 120, 40, ${0.25 * progress})`);
        grad.addColorStop(1, 'rgba(255, 80, 20, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(flash.x, flash.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw flying sparks with physics & thermal color cooling
      const drag = Math.exp(-2.2 * dt);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.age += dt;
        const progress = 1 - s.age / s.life;
        if (progress <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        // Velocity drag & gravity pull (+1400px/s^2)
        s.vx *= drag;
        s.vy = s.vy * drag + 1400 * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;

        // Blackbody temperature color ramp
        const [r, g, b] =
          progress > 0.7
            ? [255, 244, 222] // White-hot
            : progress > 0.4
            ? [255, 182, 72]  // Hot amber
            : progress > 0.2
            ? [255, 100, 23]  // Flame orange
            : [194, 43, 13];   // Dull red ember

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, 1.6 * progress)})`;
        ctx.lineWidth = s.width * (0.4 + 0.6 * progress);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - 0.02 * s.vx, s.y - 0.02 * s.vy);
        ctx.stroke();
      }

      // Stop loop if all particles are dead (0% Idle CPU)
      if (sparks.length === 0 && flashes.length === 0) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isRunning = false;
        lastTime = 0;
        return;
      }

      animId = requestAnimationFrame(render);
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Left click only
      if (e.button !== 0) return;

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest('a, button, input, textarea, select');
      const count = isInteractive ? 14 : 26;

      flashes.push({ x: e.clientX, y: e.clientY, age: 0 });

      for (let i = 0; i < count; i++) {
        // Fountain arc pointing upwards (-PI/2 ± 0.65 rad)
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.35;
        const speed = 220 + Math.pow(Math.random(), 1.6) * 780;

        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          age: 0,
          life: 0.45 + 0.75 * Math.random(),
          width: 1.0 + 1.4 * Math.random(),
        });
      }

      if (!isRunning) {
        isRunning = true;
        lastTime = 0;
        animId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [isReducedMotion]);

  if (isReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[65] h-full w-full"
    />
  );
};
