import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown, Mail, FileText } from 'lucide-react';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { HeroForgeCanvas } from './HeroForgeCanvas';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);
  const isReducedMotion = useReducedMotion();

  const heroRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHammerActive, setIsHammerActive] = useState(false);
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    if (isReducedMotion) {
      setIntroReady(true);
      return;
    }

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRef.current.offsetHeight || window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion]);

  const handleNameClick = (e: React.MouseEvent) => {
    setIsHammerActive(true);
    setTimeout(() => setIsHammerActive(false), 450);

    const sparkEvent = new PointerEvent('pointerdown', {
      clientX: e.clientX,
      clientY: e.clientY,
      button: 0,
      bubbles: true,
    });
    window.dispatchEvent(sparkEvent);
  };

  const typographyStyle: React.CSSProperties = isReducedMotion
    ? {}
    : {
        transform: `translate3d(0, ${scrollProgress * 65}px, 0) scale(${1 + scrollProgress * 0.28})`,
        opacity: Math.max(1 - scrollProgress * 1.35, 0),
        visibility: scrollProgress > 0.8 ? 'hidden' : 'visible',
        pointerEvents: scrollProgress > 0.6 ? 'none' : 'auto',
        willChange: 'transform, opacity',
      };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* 1. Cinematic Forge Shader Background */}
      <HeroForgeCanvas
        scrollProgress={scrollProgress}
        onIntroComplete={() => setIntroReady(true)}
      />

      {/* 2. Main Hero Editorial Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div
          style={typographyStyle}
          className={`transition-all duration-700 ${
            introReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase text-[#FFB648] mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6417] animate-pulse shrink-0" />
            <span>{t.hero.eyebrow}</span>
          </div>

          {/* Large Expressive Serif Name Centerpiece */}
          <div className="relative select-none mb-6 max-w-full overflow-hidden">
            <h1
              onClick={handleNameClick}
              data-cursor="pointer"
              title={language === 'vi' ? 'Chạm để tạo xung kích nhiệt' : 'Click for thermal strike'}
              className={`font-display italic text-[clamp(1.85rem,6.5vw,6.8rem)] leading-[1.06] tracking-[-0.02em] font-normal cursor-pointer transition-all duration-300 break-words ${
                isHammerActive ? 'hammer-strike text-[#FFF4DE]' : 'text-[#F4F2EA]'
              }`}
            >
              {profile.name}
            </h1>

            <p className="mt-3 text-[11px] sm:text-xs font-mono text-[#8E96A4] tracking-wide">
              {language === 'vi'
                ? '✦ Di chuyển để khuấy động ánh sáng lò rèn. Chạm để tạo tia lửa.'
                : '✦ Move to stir the forge light. Click or tap to strike it.'}
            </p>
          </div>

          {/* Headline & Concise Description */}
          <div className="max-w-2xl space-y-4 mb-8" data-cursor="lens">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-[#F4F2EA]">
              {t.hero.headline}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#8E96A4]">
              {t.hero.description}
            </p>
          </div>

          {/* Action CTAs: Xem CV, Xem dự án, Liên hệ */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA: Xem CV (Mở tab mới xem trực tiếp) */}
            <a
              href={profile.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#F4F2EA] text-[#08090A] hover:bg-[#FFF4DE] hover:shadow-[0_0_24px_rgba(255,182,72,0.4)] font-medium text-xs sm:text-sm transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF6417]" />
              <span>{language === 'vi' ? 'Xem CV' : 'View CV'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#08090A]/70" />
            </a>

            {/* Secondary CTA: Xem dự án */}
            <a
              href="#projects"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#141C2E] text-[#F4F2EA] hover:text-[#FFF4DE] hover:border-[#FF6417] border border-[rgba(244,242,234,0.12)] font-medium text-xs sm:text-sm transition-all duration-200"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Subtle Link: Liên hệ */}
            <a
              href="#contact"
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm text-[#8E96A4] hover:text-[#F4F2EA] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.hero.ctaContact}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. Bottom Proof Points (Typographic, Non-card layout) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16 pt-8 border-t border-[rgba(244,242,234,0.08)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-2xl sm:text-3xl font-sans font-semibold text-[#F4F2EA] tracking-tight group-hover:text-[#FFB648] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-[#FFB648] mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#8E96A4]/70 mt-1 line-clamp-2">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Unified Scroll Cue Indicator */}
        <div className="mt-10 flex items-center justify-between text-xs font-mono text-[#8E96A4]">
          <span className="tracking-widest uppercase text-[10px] text-[#8E96A4]/50">
            // 01 / 07
          </span>
          <a
            href="#about"
            aria-label={t.hero.scrollCue}
            data-cursor="pointer"
            className="flex items-center gap-2 hover:text-[#FF6417] transition-colors"
          >
            <span>{t.hero.scrollCue}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FF6417]" />
          </a>
        </div>
      </div>
    </section>
  );
};
