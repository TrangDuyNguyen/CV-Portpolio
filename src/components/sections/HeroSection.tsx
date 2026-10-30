import React, { useRef, useEffect } from 'react';
import { Download, ArrowUpRight, ArrowDown, Mail, Clock, Smartphone } from 'lucide-react';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { usePointerFine } from '../../hooks/usePointerFine';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { StatCard } from '../common/StatCard';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);

  const isPointerFine = usePointerFine();
  const isReducedMotion = useReducedMotion();

  const visualContainerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Subtle interactive parallax & spotlight tracking for desktop
  useEffect(() => {
    if (!isPointerFine || isReducedMotion) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const el = visualContainerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      targetX = Math.max(Math.min((e.clientX - centerX) / (rect.width / 2), 1), -1);
      targetY = Math.max(Math.min((e.clientY - centerY) / (rect.height / 2), 1), -1);

      // Position spotlight relative to cursor
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${targetX * 24}px, ${targetY * 24}px, 0)`;
      }
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (visualContainerRef.current) {
        // Subtle tilt: max 2.5 degrees, translation max 6px
        const rotateY = currentX * 2.5;
        const rotateX = -currentY * 2.5;
        const translateX = currentX * 6;
        const translateY = currentY * 6;

        visualContainerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0)`;
      }

      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      if (visualContainerRef.current) {
        visualContainerRef.current.style.transform = 'none';
      }
    };
  }, [isPointerFine, isReducedMotion]);

  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      
      {/* Background Ambient Spotlight Gradients */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/8 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Two-Column Editorial Hero Card */}
        <div className="relative w-full rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden mb-12">
          
          {/* Subtle Grid Accent Texture */}
          <div aria-hidden="true" className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-8 items-center p-6 sm:p-10 lg:p-14 z-10">
            
            {/* ══════════════════════════════════════
                Left Column: Content & Typography (7 cols)
            ══════════════════════════════════════ */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Availability & Experience Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.eyebrow}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.floatingBadge}</span>
                </div>
              </div>

              {/* Role & Name */}
              <div className="mb-4">
                <div className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-sky-600 dark:text-cyan-400 mb-2">
                  {t.roleLabel}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                  {t.fullName}
                </h1>
              </div>

              {/* Headline Statement */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight mb-3">
                {t.headline}
              </h2>

              {/* Supporting Line: Core Tech Stack */}
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                  // Stack:
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-cyan-300 border border-sky-200 dark:border-sky-800/80">
                  {t.supportingLine}
                </span>
              </div>

              {/* Bio Summary (Editorial Paragraph) */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                {t.description}
              </p>

              {/* 2 Primary CTAs + 1 Subtle Link */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                {/* Primary CTA: Download CV */}
                <a
                  href={profile.cvPdfUrl}
                  download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
                  data-cursor="pointer"
                  data-cursor-text="PDF"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md hover:shadow-sky-500/25 transition-all duration-200 group cursor-pointer"
                >
                  <span>{t.ctaDownloadCv}</span>
                  <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>

                {/* Secondary CTA: Explore Projects */}
                <a
                  href="#projects"
                  data-cursor="pointer"
                  data-cursor-text="VIEW"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm border border-slate-200 dark:border-white/10 transition-all duration-200 group cursor-pointer"
                >
                  <span>{t.ctaProjects}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sky-600 dark:text-cyan-400" />
                </a>

                {/* Subtle Link: Contact */}
                <a
                  href="#contact"
                  data-cursor="pointer"
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-300 transition-colors ml-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.ctaContact}</span>
                </a>
              </div>

            </div>

            {/* ══════════════════════════════════════
                Right Column: Cinematic Visual Composition (5 cols)
            ══════════════════════════════════════ */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              
              {/* Radial Spotlight Glow Behind Frame */}
              <div
                ref={spotlightRef}
                aria-hidden="true"
                className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-cyan-500/15 dark:bg-cyan-400/20 blur-3xl pointer-events-none -z-10 transition-transform duration-300 ease-out"
              />

              {/* Subtle Orbital Ring (Mathematical SVG Accent) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 400"
                className="absolute w-[440px] h-[440px] -z-10 pointer-events-none opacity-20 dark:opacity-30 stroke-current text-cyan-400 hidden sm:block"
              >
                <circle cx="200" cy="200" r="185" fill="none" strokeWidth="1" strokeDasharray="6 8" />
                <circle cx="200" cy="200" r="145" fill="none" strokeWidth="0.8" />
              </svg>

              {/* 3D Tilt Wrapper Container */}
              <div
                ref={visualContainerRef}
                className="relative w-full max-w-[340px] sm:max-w-[380px] transition-transform duration-100 ease-out will-change-transform"
              >
                
                {/* 1. Main Portrait Frame */}
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border-2 border-white/80 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-slate-900">
                  <picture>
                    <source srcSet="/avatar.webp" type="image/webp" />
                    <img
                      src="/avatar-opt.jpg"
                      alt={profile.name}
                      loading="eager"
                      className="w-full h-full object-cover object-top filter contrast-[1.03]"
                    />
                  </picture>

                  {/* Bottom Vignette & Gradient for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

                  {/* Frame Footer Nameplate */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white flex items-end justify-between">
                    <div>
                      <div className="font-bold text-base leading-tight drop-shadow-md">
                        {profile.name}
                      </div>
                      <div className="text-xs font-mono text-cyan-300 drop-shadow-sm mt-0.5">
                        {profile.roleTitle}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/20 text-slate-200">
                      VN (+84)
                    </span>
                  </div>
                </div>

                {/* 2. Mini Phone Mockup (Overlap Bottom-Right displaying AstroBite) */}
                <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 sm:w-44 aspect-[9/18] rounded-[22px] bg-slate-950 p-1.5 shadow-[0_16px_36px_rgba(0,0,0,0.4)] border-2 border-slate-700/80 dark:border-slate-600/80 animate-floatGentle z-20">
                  {/* Dynamic Island / Notch Pill */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-slate-800 z-30" />

                  {/* Screen Content: Real AstroBite Screenshot */}
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-slate-900 border border-slate-800/80">
                    <img
                      src="/screenshots/clay/cockpit_dashboard.png"
                      alt="AstroBite App Screenshot"
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Glass Badge Overlay */}
                    <div className="absolute bottom-1.5 inset-x-1.5 px-1.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-center">
                      <span className="text-[9px] font-mono font-bold text-cyan-300 tracking-tight block">
                        AstroBite v3.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Floating Technology Pill Badge (Top-Left) */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-5 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-lg text-slate-800 dark:text-slate-100 flex items-center gap-2 text-xs font-mono font-semibold z-20">
                  <Smartphone className="w-3.5 h-3.5 text-sky-500" />
                  <span>Flutter · Swift · Kotlin</span>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════
            Bottom Proof Points & Scroll Indicator
        ══════════════════════════════════════ */}
        <div className="pt-2 reveal">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-bold">
              {t.metricsTitle}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              {t.metricsSub}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`reveal stagger-${idx + 1} h-full`}>
                <StatCard stat={stat} />
              </div>
            ))}
          </div>

          {/* Scroll Cue Indicator */}
          <div className="mt-12 flex flex-col items-center justify-center gap-1.5 text-slate-400 dark:text-slate-500">
            <span className="text-[11px] font-mono uppercase tracking-wider">
              {t.scrollCue}
            </span>
            <a
              href="#experience"
              aria-label={t.scrollCue}
              data-cursor="pointer"
              className="p-1 rounded-full hover:text-sky-500 transition-colors"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
