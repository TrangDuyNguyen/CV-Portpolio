import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowUpRight, ArrowDown, Mail } from 'lucide-react';
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

    // Dispatch synthetic pointerdown to trigger SparksCanvas
    const sparkEvent = new PointerEvent('pointerdown', {
      clientX: e.clientX,
      clientY: e.clientY,
      button: 0,
      bubbles: true,
    });
    window.dispatchEvent(sparkEvent);
  };

  const fullName = language === 'vi' ? 'Nguyễn Duy Trang' : 'Nguyen Duy Trang';

  // Dynamic scroll-driven hero styles (reversibly scales & dissolves into the forge)
  const typographyStyle = isReducedMotion
    ? {}
    : {
        transform: `translate3d(0, ${scrollProgress * 65}px, 0) scale(${1 + scrollProgress * 0.28})`,
        opacity: Math.max(1 - scrollProgress * 1.35, 0),
        willChange: 'transform, opacity',
      };

  return (
    <section
      ref={heroRef}
      id="about"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* 1. Cinematic WebGL2 / Canvas2D Forge Light Background */}
      <HeroForgeCanvas
        scrollProgress={scrollProgress}
        onIntroComplete={() => setIntroReady(true)}
      />

      {/* 2. Main Hero Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div
          style={typographyStyle}
          className={`transition-all duration-700 ${
            introReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono tracking-wider mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/90 border border-[rgba(244,242,234,0.12)] text-[#FFB648] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6417] animate-pulse" />
              <span>{language === 'vi' ? 'SẴN SÀNG CHO CƠ HỘI MỚI' : 'OPEN TO MOBILE OPPORTUNITIES'}</span>
            </span>

            <span className="text-[#8E96A4] font-medium hidden sm:inline-block">
              {language === 'vi' ? 'Hồ sơ năng lực, 2026 · TP. Hồ Chí Minh' : 'Portfolio, 2026 · Ho Chi Minh City'}
            </span>
          </div>

          {/* Large Expressive Serif Name Centerpiece */}
          <div className="relative select-none mb-6">
            <h1
              onClick={handleNameClick}
              data-cursor="pointer"
              title={language === 'vi' ? 'Click để tạo xung kích nhiệt' : 'Click for thermal strike'}
              className={`font-display italic text-[clamp(2.75rem,8.5vw,7.8rem)] leading-[1.02] tracking-[-0.03em] font-normal cursor-pointer transition-transform ${
                isHammerActive ? 'hammer-strike' : ''
              }`}
              style={{
                color: '#F4F2EA',
                textShadow: '0 0 30px rgba(255, 182, 72, 0.75), 0 0 70px rgba(255, 100, 23, 0.45)',
              }}
            >
              {fullName}
            </h1>

            {/* Interaction Prompt Cue */}
            <p className="mt-3 text-[11px] sm:text-xs font-mono text-[#8E96A4] tracking-wide">
              {language === 'vi'
                ? '✦ Di chuyển chuột để khuấy động ánh sáng lò rèn. Chạm hoặc click để phóng tia lửa.'
                : '✦ Move to stir the forge light. Click or tap to strike it.'}
            </p>
          </div>

          {/* Headline & Concise Value Proposition */}
          <div className="max-w-2xl space-y-4 mb-8" data-cursor="lens">
            <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-[#F4F2EA]">
              {language === 'vi'
                ? 'Xây dựng ứng dụng di động bền vững từ kiến trúc đến trải nghiệm.'
                : 'Building dependable mobile experiences from architecture to craft.'}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#8E96A4]">
              {language === 'vi' ? (
                <>
                  <span className="thermal-word text-[#F4F2EA] font-medium">Mobile Engineer</span> với hơn{' '}
                  <span className="thermal-word text-[#F4F2EA] font-medium">5 năm kinh nghiệm</span> thực chiến trên{' '}
                  <span className="thermal-word text-[#FFB648]">Flutter</span>,{' '}
                  <span className="thermal-word text-[#FFB648]">iOS Swift</span> và{' '}
                  <span className="thermal-word text-[#FFB648]">Android Kotlin</span>. Trực tiếp tham gia phát triển hệ sinh thái mạng xã hội du lịch 1M+ downloads, hệ thống POS/Kiosk phần cứng thương mại và ứng dụng dinh dưỡng AI.
                </>
              ) : (
                <>
                  <span className="thermal-word text-[#F4F2EA] font-medium">Mobile Engineer</span> with{' '}
                  <span className="thermal-word text-[#F4F2EA] font-medium">5+ years of production experience</span> across{' '}
                  <span className="thermal-word text-[#FFB648]">Flutter</span>,{' '}
                  <span className="thermal-word text-[#FFB648]">iOS Swift</span>, and{' '}
                  <span className="thermal-word text-[#FFB648]">Android Kotlin</span>. Contributed to a 1M+ downloads social travel platform, commercial POS/Kiosk hardware integrations, and an AI nutrition engine.
                </>
              )}
            </p>
          </div>

          {/* Minimal Editorial Actions */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={profile.cvPdfUrl}
              download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4F2EA] text-[#08090A] hover:bg-[#FFF4DE] hover:shadow-[0_0_24px_rgba(255,182,72,0.4)] font-medium text-xs sm:text-sm transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.hero.ctaDownloadCv}</span>
            </a>

            <a
              href="#projects"
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#F4F2EA] hover:text-[#FF6417] transition-colors group"
            >
              <span>{language === 'vi' ? 'Xem các dự án chọn lọc' : 'Explore Selected Work'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#8E96A4] hover:text-[#F4F2EA] transition-colors ml-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Liên hệ trực tiếp' : 'Write to me'}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. Bottom Verified Track Record (Typographic, Non-card layout) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16 pt-8 border-t border-[rgba(244,242,234,0.08)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-2xl sm:text-3xl font-mono font-medium text-[#F4F2EA] tracking-tight group-hover:text-[#FFB648] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-[#8E96A4] mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#8E96A4]/70 mt-1 line-clamp-2">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Cue Indicator */}
        <div className="mt-10 flex items-center justify-between text-xs font-mono text-[#8E96A4]">
          <span className="tracking-widest uppercase text-[10px]">
            {language === 'vi' ? 'Cuộn xuống để khám phá' : 'Scroll to explore'}
          </span>
          <a
            href="#manifesto"
            aria-label={t.hero.scrollCue}
            data-cursor="pointer"
            className="flex items-center gap-1.5 hover:text-[#FF6417] transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
