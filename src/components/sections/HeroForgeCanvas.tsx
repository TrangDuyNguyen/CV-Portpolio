import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface HeroForgeCanvasProps {
  onIntroComplete?: () => void;
  scrollProgress: number; // 0 (top) to 1 (scrolled past hero)
}

/**
 * HeroForgeCanvas
 * High-performance forge light shader & physics canvas.
 * - Single initialization on mount (DOES NOT re-initialize on scroll).
 * - scrollProgress and onIntroComplete are read from stable refs inside the RAF loop.
 * - Validates shader COMPILE_STATUS and program LINK_STATUS with proper error reporting.
 * - Comprehensive cleanup of RAF, buffers, shaders, and event listeners.
 * - Zero WebGL/2D context collisions.
 */
export const HeroForgeCanvas: React.FC<HeroForgeCanvasProps> = ({
  onIntroComplete,
  scrollProgress,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isReducedMotion = useReducedMotion();
  const [introFinished, setIntroFinished] = useState(isReducedMotion);

  // Keep latest props in refs to prevent animation loop teardown during scroll
  const scrollProgressRef = useRef(scrollProgress);
  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  const onIntroCompleteRef = useRef(onIntroComplete);
  useEffect(() => {
    onIntroCompleteRef.current = onIntroComplete;
  }, [onIntroComplete]);

  useEffect(() => {
    if (isReducedMotion) {
      setIntroFinished(true);
      onIntroCompleteRef.current?.();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = (canvas.width = Math.round(canvas.offsetWidth * dpr));
    let height = (canvas.height = Math.round(canvas.offsetHeight * dpr));

    // Try WebGL2 first
    let gl: WebGL2RenderingContext | null = null;
    let ctx2d: CanvasRenderingContext2D | null = null;

    try {
      gl = canvas.getContext('webgl2', {
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
    } catch {
      gl = null;
    }

    let useWebGL = !!gl;

    // Mouse coordinates (normalized 0 to 1)
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    const shockwaves: { x: number; y: number; progress: number }[] = [];

    const startTime = performance.now();
    let animId: number = 0;
    let notified = false;

    // WebGL resources to clean up on unmount
    let program: WebGLProgram | null = null;
    let vs: WebGLShader | null = null;
    let fs: WebGLShader | null = null;
    let posBuffer: WebGLBuffer | null = null;

    let uTimeLoc: WebGLUniformLocation | null = null;
    let uResolutionLoc: WebGLUniformLocation | null = null;
    let uMouseLoc: WebGLUniformLocation | null = null;
    let uIntroLoc: WebGLUniformLocation | null = null;
    let uScrollLoc: WebGLUniformLocation | null = null;
    let uShockLoc: WebGLUniformLocation | null = null;

    if (useWebGL && gl) {
      const vsSource = `#version 300 es
        in vec2 position;
        out vec2 vUv;
        void main() {
          vUv = (position + 1.0) * 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      const fsSource = `#version 300 es
        precision highp float;
        in vec2 vUv;
        out vec4 fragColor;

        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uIntro;
        uniform float uScroll;
        uniform vec4 uShock;

        vec3 blackbody(float t) {
          t = clamp(t, 0.0, 1.0);
          vec3 c1 = vec3(0.03, 0.03, 0.04);
          vec3 c2 = vec3(0.65, 0.12, 0.03); // ember ruby
          vec3 c3 = vec3(1.00, 0.38, 0.08); // forge orange
          vec3 c4 = vec3(1.00, 0.72, 0.28); // amber gold
          vec3 c5 = vec3(1.00, 0.96, 0.88); // incandescent white

          if (t < 0.25) return mix(c1, c2, t * 4.0);
          if (t < 0.55) return mix(c2, c3, (t - 0.25) / 0.3);
          if (t < 0.85) return mix(c3, c4, (t - 0.55) / 0.3);
          return mix(c4, c5, (t - 0.85) / 0.15);
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
          vec2 mouseUv = (uMouse - 0.5) * vec2(uResolution.x / min(uResolution.x, uResolution.y), uResolution.y / min(uResolution.x, uResolution.y));

          float heat = 0.0;
          if (uIntro < 0.45) {
            float slitP = uIntro / 0.45;
            float slitWidth = 0.02 + slitP * 1.6;
            float slitHeight = 0.003 + 0.005 * sin(slitP * 3.14159);
            float dX = abs(uv.x);
            float dY = abs(uv.y);
            float inSlit = smoothstep(slitWidth, slitWidth * 0.7, dX) * smoothstep(slitHeight * 4.0, 0.0, dY);
            float glow = (0.015 / (dY + 0.02)) * smoothstep(slitWidth * 1.2, 0.0, dX);
            heat = inSlit * 1.2 + glow * 0.8;
          } else if (uIntro < 0.75) {
            float flashP = (uIntro - 0.45) / 0.3;
            float flash = (1.0 - flashP) * 1.4;
            float dCenter = length(uv);
            heat = flash + (0.4 / (dCenter + 0.4)) * (1.0 - flashP);
          } else {
            float settleP = (uIntro - 0.75) / 0.25;
            float dCenter = length(uv - vec2(0.0, -0.05));
            float baseAmbient = 0.28 / (dCenter * 1.8 + 0.55);
            
            float dMouse = length(uv - mouseUv);
            float mouseHeat = (0.24 / (dMouse * 3.2 + 0.45)) * 0.85;
            float scrollHeat = uScroll * (0.55 / (dCenter * 1.5 + 0.35));

            heat = mix(0.7, baseAmbient + mouseHeat + scrollHeat, settleP);
          }

          if (uShock.w > 0.01) {
            float shockDist = length(uv - (uShock.xy - 0.5) * 1.5);
            float ring = abs(shockDist - uShock.z * 1.4);
            float ringIntensity = smoothstep(0.08, 0.0, ring) * uShock.w * (1.0 - uShock.z);
            heat += ringIntensity * 0.9;
          }

          vec3 color = blackbody(heat);
          float alpha = clamp(heat * 0.85, 0.0, 0.92);
          fragColor = vec4(color, alpha);
        }
      `;

      const createShader = (type: number, src: string) => {
        const s = gl!.createShader(type);
        if (!s) return null;
        gl!.shaderSource(s, src);
        gl!.compileShader(s);
        if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
          console.warn('HeroForge WebGL shader compile failed:', gl!.getShaderInfoLog(s));
          gl!.deleteShader(s);
          return null;
        }
        return s;
      };

      vs = createShader(gl.VERTEX_SHADER, vsSource);
      fs = createShader(gl.FRAGMENT_SHADER, fsSource);

      if (vs && fs) {
        program = gl.createProgram();
        if (program) {
          gl.attachShader(program, vs);
          gl.attachShader(program, fs);
          gl.linkProgram(program);

          if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.warn('HeroForge WebGL program link failed:', gl.getProgramInfoLog(program));
            useWebGL = false;
          } else {
            gl.useProgram(program);
            posBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
              -1, -1,  1, -1, -1,  1,
              -1,  1,  1, -1,  1,  1,
            ]), gl.STATIC_DRAW);

            const posLoc = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(posLoc);
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

            uTimeLoc = gl.getUniformLocation(program, 'uTime');
            uResolutionLoc = gl.getUniformLocation(program, 'uResolution');
            uMouseLoc = gl.getUniformLocation(program, 'uMouse');
            uIntroLoc = gl.getUniformLocation(program, 'uIntro');
            uScrollLoc = gl.getUniformLocation(program, 'uScroll');
            uShockLoc = gl.getUniformLocation(program, 'uShock');
          }
        }
      } else {
        useWebGL = false;
      }
    }

    // Only attempt 2D if WebGL was not created at all
    if (!useWebGL && !gl) {
      try {
        ctx2d = canvas.getContext('2d');
      } catch {
        ctx2d = null;
      }
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = Math.round(canvas.offsetWidth * dpr);
      height = canvas.height = Math.round(canvas.offsetHeight * dpr);
      if (useWebGL && gl) {
        gl.viewport(0, 0, width, height);
      }
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouse.targetX = (e.clientX - rect.left) / rect.width;
        mouse.targetY = 1.0 - (e.clientY - rect.top) / rect.height;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        shockwaves.push({ x, y, progress: 0 });
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    // Main 60 FPS animation loop
    const render = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const introProgress = Math.min(elapsed / 1.85, 1.0);

      if (introProgress >= 1.0 && !notified) {
        notified = true;
        setIntroFinished(true);
        onIntroCompleteRef.current?.();
      }

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Update shockwaves
      let currentShock = [0, 0, 0, 0];
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.progress += 0.024;
        if (sw.progress >= 1.0) {
          shockwaves.splice(i, 1);
        } else {
          currentShock = [sw.x, sw.y, sw.progress, 1.0 - sw.progress];
        }
      }

      // Read latest scroll progress from ref without re-triggering useEffect
      const currentScroll = scrollProgressRef.current;

      if (useWebGL && gl && program) {
        gl.useProgram(program);
        gl.uniform1f(uTimeLoc, elapsed);
        gl.uniform2f(uResolutionLoc, width, height);
        gl.uniform2f(uMouseLoc, mouse.x, mouse.y);
        gl.uniform1f(uIntroLoc, introProgress);
        gl.uniform1f(uScrollLoc, currentScroll);
        gl.uniform4f(uShockLoc, currentShock[0], currentShock[1], currentShock[2], currentShock[3]);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      } else if (ctx2d) {
        ctx2d.clearRect(0, 0, width, height);
        const cx = width * 0.5;
        const cy = height * 0.45;
        const radius = Math.min(width, height) * (0.4 + currentScroll * 0.35);

        const grad = ctx2d.createRadialGradient(
          cx + (mouse.x - 0.5) * 80,
          cy - (mouse.y - 0.5) * 80,
          0,
          cx,
          cy,
          radius
        );

        if (introProgress < 0.5) {
          const slitW = width * (introProgress * 2);
          ctx2d.fillStyle = 'rgba(255, 244, 222, 0.9)';
          ctx2d.fillRect(cx - slitW * 0.5, cy - 2, slitW, 4);
        } else {
          grad.addColorStop(0, 'rgba(255, 244, 222, 0.28)');
          grad.addColorStop(0.3, 'rgba(255, 182, 72, 0.20)');
          grad.addColorStop(0.7, 'rgba(255, 100, 23, 0.12)');
          grad.addColorStop(1, 'rgba(8, 9, 10, 0)');
          ctx2d.fillStyle = grad;
          ctx2d.fillRect(0, 0, width, height);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Thorough cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);

      if (gl) {
        if (posBuffer) gl.deleteBuffer(posBuffer);
        if (program) {
          if (vs) {
            gl.detachShader(program, vs);
            gl.deleteShader(vs);
          }
          if (fs) {
            gl.detachShader(program, fs);
            gl.deleteShader(fs);
          }
          gl.deleteProgram(program);
        }
      }
    };
  }, [isReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-10"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          opacity: introFinished ? 1 : 0.95,
          transition: 'opacity 0.6s ease',
        }}
      />
    </div>
  );
};
