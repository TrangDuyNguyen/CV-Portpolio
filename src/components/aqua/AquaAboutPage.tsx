import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  getAquaHobbies,
  getAquaServices,
  getAquaTechQAs,
} from '../../data/aquaPortfolioData';
import { getCareerData } from '../../data/careerData';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { AquaContactFooter } from './AquaContactFooter';
import { AquaAstroBiteSection } from './AquaAstroBiteSection';

/**
 * Top-down minimalist desk photography SVG/Canvas replica of aquadev.site/about hero:
 * Silver Apple Magic Keyboard & dark trackpad resting diagonally on a split white & mustard-yellow surface.
 */
const KeyboardDeskHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[460px] h-[480px] sm:h-[600px] overflow-hidden select-none bg-[#bda329]">
      <svg
        viewBox="0 0 460 600"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="yellowSurface" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9c861e" />
            <stop offset="55%" stopColor="#c7ab28" />
            <stop offset="100%" stopColor="#826f16" />
          </linearGradient>
          <linearGradient id="whiteMat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b8b8b8" />
            <stop offset="100%" stopColor="#8e8e8e" />
          </linearGradient>
          <linearGradient id="aluBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d2d4d8" />
            <stop offset="100%" stopColor="#9fa3aa" />
          </linearGradient>
          <linearGradient id="darkPad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#141820" />
            <stop offset="100%" stopColor="#232833" />
          </linearGradient>
        </defs>

        {/* Mustard yellow desk background */}
        <rect width="460" height="600" fill="url(#yellowSurface)" />

        {/* Left white angled surface */}
        <polygon points="0,0 165,0 45,600 0,600" fill="url(#whiteMat)" />

        {/* Bottom-left dark drawing tablet / trackpad angled */}
        <g transform="translate(-45, 220) rotate(42)">
          <rect
            x="0"
            y="0"
            width="360"
            height="270"
            rx="22"
            fill="url(#darkPad)"
            stroke="#0e1117"
            strokeWidth="3"
          />
          <rect
            x="22"
            y="24"
            width="285"
            height="220"
            rx="6"
            fill="#0d1016"
          />
        </g>

        {/* Top-right diagonal Silver Magic Keyboard */}
        <g transform="translate(155, -85) rotate(44)">
          {/* Keyboard chassis */}
          <rect
            x="0"
            y="0"
            width="380"
            height="195"
            rx="12"
            fill="url(#aluBody)"
            stroke="#75787d"
            strokeWidth="2"
          />
          {/* Key rows */}
          {[0, 1, 2, 3, 4].map((row) =>
            Array.from({ length: 11 }).map((_, col) => {
              const kx = 14 + col * 32;
              const ky = 16 + row * 34;
              const kw = row === 4 && col >= 3 && col <= 7 ? 32 : 27;
              return (
                <g key={`${row}-${col}`}>
                  <rect
                    x={kx}
                    y={ky}
                    width={kw}
                    height="27"
                    rx="3.5"
                    fill="#cfd1d4"
                    stroke="#6b6e73"
                    strokeWidth="1.1"
                  />
                </g>
              );
            })
          )}
        </g>

        {/* Subtle ambient vignette matching the original photo */}
        <rect
          width="460"
          height="600"
          fill="black"
          opacity="0.14"
        />
      </svg>
    </div>
  );
};

/**
 * Dual-monitor coding workspace visual matching step_82_media_0.jpg on aquadev.site/about
 */
const DualMonitorWorkspaceVisual: React.FC = () => {
  return (
    <div className="about-cover relative w-full aspect-[16/10] bg-[#050608] overflow-hidden select-none">
      <svg
        viewBox="0 0 960 600"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Pure dark studio backdrop */}
        <rect width="960" height="600" fill="#040507" />

        {/* Desk surface at bottom */}
        <rect x="0" y="545" width="960" height="55" fill="#1b140e" />

        {/* Left iMac 27" angled perspective */}
        <g>
          {/* iMac Stand */}
          <polygon points="240,460 285,460 305,550 215,550" fill="#8e9299" />
          {/* iMac Outer Bezel */}
          <polygon points="75,35 455,105 462,455 75,465" fill="#101318" stroke="#2a2f37" strokeWidth="2" />
          {/* iMac Silver Chin */}
          <polygon points="75,408 460,404 462,455 75,465" fill="#a5a9b0" />
          {/* Apple Logo on Chin */}
          <circle cx="285" cy="432" r="8" fill="#111" />

          {/* Split Screen on iMac: Left IDE Code (Dark), Right Portfolio Preview (White) */}
          <polygon points="88,52 252,80 255,398 88,398" fill="#0d131f" />
          <polygon points="252,80 444,115 447,396 255,398" fill="#e6ecf2" />

          {/* Code lines on Left IDE */}
          {Array.from({ length: 24 }).map((_, i) => (
            <rect
              key={i}
              x={102 + (i % 3) * 12}
              y={72 + i * 13}
              width={45 + ((i * 19) % 75)}
              height="4"
              rx="1.5"
              fill={i % 4 === 0 ? '#60a5fa' : i % 3 === 0 ? '#facc15' : '#64748b'}
              opacity="0.85"
            />
          ))}

          {/* Right White Browser Preview inside iMac */}
          <text x="275" y="165" fill="#111" fontFamily="sans-serif" fontSize="9.5" fontWeight="bold">
            Nguyen Duy Trang — Mobile
          </text>
          <text x="275" y="220" fill="#cfd6df" fontFamily="sans-serif" fontSize="34" fontWeight="bold">
            WORK
          </text>
          <rect x="275" y="245" width="140" height="125" fill="#93b4d4" />
        </g>

        {/* Right External Monitor (Mountain & Clouds Wallpaper) */}
        <g>
          {/* Stand */}
          <rect x="615" y="455" width="24" height="80" fill="#1c2026" />
          <ellipse cx="627" cy="538" rx="58" ry="10" fill="#16191f" />
          {/* Monitor Frame */}
          <rect x="468" y="218" width="320" height="240" fill="#0c0f14" stroke="#22262e" strokeWidth="4" />
          {/* Screen Content: Misty Mountain Peak */}
          <rect x="476" y="226" width="304" height="224" fill="#c7d8e8" />
          <polygon points="540,450 645,295 755,450" fill="#2b394a" />
          <polygon points="476,450 565,335 660,450" fill="#47596e" />
          <ellipse cx="620" cy="435" rx="150" ry="30" fill="#e2ecf5" opacity="0.85" />
        </g>

        {/* Right Warm Desk Lamp */}
        <g>
          <line x1="785" y1="365" x2="808" y2="545" stroke="#c89d66" strokeWidth="10" />
          <polygon points="755,275 805,275 845,355 735,345" fill="#141414" />
          <ellipse cx="790" cy="350" rx="52" ry="14" fill="#fff7d6" />
        </g>
      </svg>
    </div>
  );
};

const Interactive3DCanvas: React.FC<{ modelType: 'phone' | 'terminal' | 'guitar' }> = ({
  modelType,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotRef = useRef({ y: 0.4, x: 0.18, dragging: false, lastX: 0, lastY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;

    const project = (
      x: number,
      y: number,
      z: number,
      w: number,
      h: number,
      rx: number,
      ry: number
    ) => {
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const fov = 420;
      const scale = fov / (fov + z2 + 260);
      return {
        px: w / 2 + x1 * scale,
        py: h / 2 + y2 * scale,
        scale,
      };
    };

    const drawBox = (
      w: number,
      h: number,
      rx: number,
      ry: number,
      bx: number,
      by: number,
      bz: number,
      ox = 0,
      oy = 0,
      oz = 0,
      fillFace = false
    ) => {
      const verts = [
        [-bx + ox, -by + oy, -bz + oz],
        [bx + ox, -by + oy, -bz + oz],
        [bx + ox, by + oy, -bz + oz],
        [-bx + ox, by + oy, -bz + oz],
        [-bx + ox, -by + oy, bz + oz],
        [bx + ox, -by + oy, bz + oz],
        [bx + ox, by + oy, bz + oz],
        [-bx + ox, by + oy, bz + oz],
      ].map(([vx, vy, vz]) => project(vx, vy, vz, w, h, rx, ry));

      if (fillFace) {
        ctx.fillStyle = '#2b0904';
        ctx.beginPath();
        ctx.moveTo(verts[0].px, verts[0].py);
        ctx.lineTo(verts[1].px, verts[1].py);
        ctx.lineTo(verts[2].px, verts[2].py);
        ctx.lineTo(verts[3].px, verts[3].py);
        ctx.closePath();
        ctx.fill();
      }

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.6;
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(verts[a].px, verts[a].py);
        ctx.lineTo(verts[b].px, verts[b].py);
        ctx.stroke();
      });
    };

    const render = () => {
      if (!rotRef.current.dragging) {
        rotRef.current.y += 0.008;
      }
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const { x: rx, y: ry } = rotRef.current;

      if (modelType === 'phone') {
        drawBox(w, h, rx, ry, 58, 115, 8, 0, 0, 0, true);
        drawBox(w, h, rx, ry, 48, 92, 2, 0, 0, -18, false);
        drawBox(w, h, rx, ry, 42, 35, 2, 0, -35, -34, false);
        drawBox(w, h, rx, ry, 42, 42, 2, 0, 30, -34, false);
      } else if (modelType === 'terminal') {
        drawBox(w, h, rx, ry, 72, 95, 22, 0, 15, 0, true);
        drawBox(w, h, rx, ry, 62, 30, 26, 0, -75, 8, false);
        drawBox(w, h, rx, ry, 54, 58, 3, 0, 20, -26, false);
      } else {
        drawBox(w, h, rx, ry, 14, 95, 7, 0, -75, 0, true);
        drawBox(w, h, rx, ry, 18, 22, 9, 0, -175, 0, true);
        drawBox(w, h, rx, ry, 54, 48, 18, 0, 22, 0, true);
        drawBox(w, h, rx, ry, 68, 56, 20, 0, 95, 0, true);
        for (let s = -6; s <= 6; s += 4) {
          const p1 = project(s, -165, -10, w, h, rx, ry);
          const p2 = project(s, 115, -21, w, h, rx, ry);
          ctx.strokeStyle = '#afa18f';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }
      }

      ctx.restore();
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [modelType]);

  return (
    <div
      className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center select-none"
      onMouseDown={(e) => {
        rotRef.current.dragging = true;
        rotRef.current.lastX = e.clientX;
        rotRef.current.lastY = e.clientY;
      }}
      onMouseMove={(e) => {
        if (!rotRef.current.dragging) return;
        const dx = e.clientX - rotRef.current.lastX;
        const dy = e.clientY - rotRef.current.lastY;
        rotRef.current.y += dx * 0.01;
        rotRef.current.x = Math.max(-0.8, Math.min(0.8, rotRef.current.x + dy * 0.01));
        rotRef.current.lastX = e.clientX;
        rotRef.current.lastY = e.clientY;
      }}
      onMouseUp={() => {
        rotRef.current.dragging = false;
      }}
      onMouseLeave={() => {
        rotRef.current.dragging = false;
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export const AquaAboutPage: React.FC = () => {
  const { language } = useLanguage();
  const profile = getProfileData(language);
  const services = getAquaServices(language);
  const stats = getVerifiedStats(language);
  const career = getCareerData(language);
  const hobbies = getAquaHobbies(language);
  const techQAs = getAquaTechQAs(language);

  const [activeHobbyIdx, setActiveHobbyIdx] = useState(2);
  const [openQaIdx, setOpenQaIdx] = useState<number | null>(0);
  const [scrolledHero, setScrolledHero] = useState(false);
  const activeHobby = hobbies[activeHobbyIdx] || hobbies[0];

  useEffect(() => {
    const onScroll = () => {
      setScrolledHero(window.scrollY > 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ============================================================
          PART 1: BLACK SPLIT-SCREEN HERO — 1:1 EXACT REPLICA OF step_80_media_0.png
          (NO AVATAR — Top-down Magic Keyboard on Yellow/White Desk + 4 Underlined Rows + Centered White Pill Dome)
         ============================================================ */}
      <section className="relative bg-black text-white min-h-screen pt-[150px] md:pt-[180px] pb-[180px] px-5 sm:px-[45px] lg:px-[70px] overflow-hidden">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: (Scroll) label + Top-down Keyboard & Trackpad Desk Visual (NO AVATAR) */}
          <div className="md:col-span-5 lg:pl-12">
            <span className="font-montreal text-[14px] text-[#888888] mb-3 block">
              (Scroll)
            </span>
            <KeyboardDeskHeroVisual />
          </div>

          {/* Right Column: 4 Clean Uppercase Discipline Rows with Bottom Hairline Only */}
          <div className="md:col-span-7 md:pt-[95px] lg:pt-[115px] lg:pr-12 flex flex-col">
            {services.map((srv) => (
              <div
                key={srv.title}
                className="py-5 sm:py-6 border-b border-white/25 transition-colors duration-500"
              >
                <h2
                  className={`font-montreal font-normal uppercase text-[22px] sm:text-[30px] xl:text-[34px] leading-[1.15] tracking-[-0.01em] transition-colors duration-500 ${
                    scrolledHero ? 'text-white' : 'text-white/45 hover:text-white'
                  }`}
                >
                  {srv.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-Center White Pill Dome (Exact match to step_80_media_0.png) */}
        <div
          className={`
            pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 bg-white transition-all duration-700 ease-out ${
              scrolledHero
                ? 'w-full h-[36px] rounded-t-none'
                : 'w-[84vw] max-w-[930px] h-[115px] sm:h-[135px] rounded-t-[135px]'
            }
          `}
        />
      </section>

      {/* ============================================================
          PART 2: WHITE EDITORIAL BIO (1:1 Match with step_81_media_0.png & step_82_media_0.jpg)
         ============================================================ */}
      <section className="px-5 sm:px-[45px] lg:px-[70px] pt-16 sm:pt-24 pb-20">
        {/* Left slash mark `/` + Indented Giant 3-Line Display: TALENTED / CREATIVE / DEVELOPER */}
        <div className="relative">
          <span className="hidden lg:inline-block absolute left-0 top-10 font-montreal text-[18px] text-black">
            /
          </span>

          <div className="lg:ml-[16%]">
            <h1 className="font-montreal font-normal uppercase text-[13vw] sm:text-[10vw] lg:text-[8.6vw] leading-[0.94] tracking-[-0.025em]">
              <span
                className={`block transition-colors duration-700 ${
                  scrolledHero ? 'text-black' : 'text-[#cccccc]'
                }`}
              >
                TALENTED
              </span>
              <span className="block text-black">CREATIVE</span>
              <span className="block text-black">DEVELOPER</span>
            </h1>

            {/* Single Large Dark Dual-Monitor Workspace Visual directly under DEVELOPER (step_82_media_0.jpg) */}
            <div className="mt-8 w-full lg:w-[66%]">
              <DualMonitorWorkspaceVisual />
            </div>

            <div className="mt-8 max-w-[680px]">
              <p className="font-montreal text-[15px] sm:text-[17px] uppercase tracking-[0.03em] text-black">
                {language === 'en'
                  ? 'A 5+ YEAR JOURNEY IN THE REALM OF MOBILE ENGINEERING & CLEAN ARCHITECTURE'
                  : 'HÀNH TRÌNH HƠN 5 NĂM TRONG LĨNH VỰC KỸ THUẬT DI ĐỘNG & KIẾN TRÚC SẠCH'}
              </p>
              <p className="mt-3 font-montreal text-[15px] leading-[1.65] text-[#1e2022]">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Domain Row (1:1 match with final_step_97.png: EXPERIENCED DEVELOPER | FINTECH | E-COMMERCE | EDU-TECH | AGENCY) */}
        <div className="mt-20 pt-6 flex flex-wrap items-center justify-between gap-4 font-montreal text-[14px] sm:text-[16px] uppercase tracking-[0.03em] text-black lg:ml-[16%]">
          <span>EXPERIENCED DEVELOPER</span>
          <div className="flex flex-wrap items-center gap-8 sm:gap-14">
            <span>FINTECH</span>
            <span>E-COMMERCE &amp; POS</span>
            <span>SOCIAL &amp; OTT</span>
            <span>AI HEALTH-TECH</span>
          </div>
        </div>

        {/* Verified Production Numbers Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black">
          {stats.map((st) => (
            <div key={st.label} className="p-6 border-r border-b border-black">
              <div className="font-montreal text-[11px] uppercase tracking-[0.16em] text-[#666]">
                {st.metricTag}
              </div>
              <div className="mt-2 font-clash-bold text-[34px] sm:text-[40px] uppercase leading-none">
                {st.value}
              </div>
              <div className="mt-2 font-montreal font-medium text-[14px] uppercase">
                {st.label}
              </div>
              <p className="mt-1.5 font-montreal text-[13px] leading-[1.45] text-[#1e2022]">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Commercial Career Timeline (Finviet & Hahalolo & Education) */}
        <div className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="font-montreal text-[18px] uppercase tracking-[0.02em]">
              {language === 'en' ? 'COMMERCIAL EXPERIENCE' : 'KINH NGHIỆM LÀM VIỆC THƯƠNG MẠI'}
            </h2>
            <span className="font-montreal text-[14px] uppercase text-[#666]">
              2021 — 2026 (5+ YEARS)
            </span>
          </div>
          <div className="w-full h-[1.5px] bg-black mt-4 mb-10" />

          <div className="space-y-14">
            {career.map((job) => (
              <div
                key={job.company}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 border-b border-black/15"
              >
                <div className="lg:col-span-4">
                  <span className="font-montreal text-[13px] uppercase tracking-[0.14em] text-[#666]">
                    {job.period}
                  </span>
                  <h3 className="mt-1 font-clash-bold text-[28px] sm:text-[34px] uppercase leading-tight">
                    {job.company}
                  </h3>
                  <p className="font-montreal text-[15px] uppercase font-medium text-[#1e2022]">
                    {job.role} · {job.type}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <h4 className="font-clash-medium text-[20px] sm:text-[22px] uppercase mb-3">
                    {job.project}
                  </h4>
                  <p className="font-montreal text-[15px] leading-[1.6] text-[#1e2022] mb-4">
                    {job.summary}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {job.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="font-montreal text-[14px] leading-[1.55] text-[#1e2022] flex items-start gap-2.5"
                      >
                        <span className="font-clash-bold text-[12px] mt-0.5">
                          0{i + 1}
                        </span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {job.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 border border-black font-montreal text-[11px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-black/15">
              <div className="lg:col-span-4">
                <span className="font-montreal text-[13px] uppercase tracking-[0.14em] text-[#666]">
                  EDUCATION
                </span>
                <h3 className="mt-1 font-clash-bold text-[26px] uppercase leading-tight">
                  FPT POLYTECHNIC
                </h3>
              </div>
              <div className="lg:col-span-8">
                <h4 className="font-clash-medium text-[20px] uppercase">
                  {language === 'en'
                    ? 'Associate Degree in Software Development / Information Technology'
                    : 'Cử nhân Thực hành Công nghệ Thông tin — Phát triển Phần mềm'}
                </h4>
                <p className="mt-1 font-montreal text-[14px] text-[#1e2022]">
                  {language === 'en'
                    ? 'English: Working Proficiency (Technical documentation, architectural specs & team communication).'
                    : 'Ngoại ngữ: Tiếng Anh (Working Proficiency — Đọc tài liệu kỹ thuật, viết ADR/spec và giao tiếp công việc).'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <AquaAstroBiteSection />

        {/* Architecture Deep-Dive Q&A (From PORTFOLIO_PROFILE.md Section 8) */}
        <div className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="font-montreal text-[18px] uppercase tracking-[0.02em]">
              {language === 'en'
                ? 'ARCHITECTURE DECISIONS (TECH LEAD Q&A)'
                : 'QUYẾT ĐỊNH KIẾN TRÚC (TECH LEAD Q&A)'}
            </h2>
            <span className="font-montreal text-[14px] uppercase text-[#666]">
              ADR-01 — ADR-06
            </span>
          </div>
          <div className="w-full h-[1.5px] bg-black mt-4 mb-6" />

          <div className="divide-y divide-black">
            {techQAs.map((qa, idx) => {
              const isOpen = openQaIdx === idx;
              return (
                <div key={qa.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenQaIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-clash-medium text-[18px] sm:text-[22px] uppercase"
                  >
                    <span>{qa.question}</span>
                    <span className="font-montreal text-[22px]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 max-w-[920px] font-montreal text-[15px] leading-[1.65] text-[#1e2022]">
                      {qa.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PART 3: // HOBBIES INTERACT (1:1 match with final_step_97.png)
         ============================================================ */}
      <section className="px-5 sm:px-[45px] lg:px-[70px] pt-16 pb-20">
        <div className="grid grid-cols-3 items-center font-montreal text-[16px] sm:text-[18px] uppercase tracking-[0.02em] text-black mb-10">
          <span>//</span>
          <span className="text-center">HOBBIES</span>
          <span className="text-right">INTERACT</span>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 overflow-hidden">
          <div className="flex flex-wrap items-baseline gap-4 sm:gap-10">
            {hobbies.map((h, idx) => {
              const isActive = idx === activeHobbyIdx;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setActiveHobbyIdx(idx)}
                  className={`font-montreal font-normal uppercase text-[12vw] sm:text-[8.5vw] leading-[0.9] tracking-[-0.03em] transition-colors ${
                    isActive
                      ? 'text-black z-10'
                      : 'text-[#c8c8c8] hover:text-black/50'
                  }`}
                >
                  {h.tabLabel}
                </button>
              );
            })}
          </div>

          <span className="hidden lg:inline-block w-[22px] h-[22px] rounded-full bg-black shrink-0 mr-24" />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h3 className="font-montreal font-semibold text-[16px] sm:text-[18px] uppercase tracking-[0.03em] text-black">
              {activeHobby.roleTitle}
            </h3>
            <p className="mt-4 font-montreal text-[15px] sm:text-[16px] leading-[1.65] text-[#1e2022]">
              {activeHobby.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeHobby.highlights.map((hl) => (
                <span
                  key={hl}
                  className="px-3 py-1 border border-black font-montreal text-[11px] uppercase tracking-wider"
                >
                  {hl}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Interactive3DCanvas modelType={activeHobby.modelType} />
          </div>
        </div>
      </section>

      <AquaContactFooter />
    </div>
  );
};
