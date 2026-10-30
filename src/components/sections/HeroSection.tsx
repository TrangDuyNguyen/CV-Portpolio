import React, { useState } from 'react';
import { Download, ArrowUpRight, ArrowDown, Mail } from 'lucide-react';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);

  const [isHammerActive, setIsHammerActive] = useState(false);

  const handleNameClick = (e: React.MouseEvent) => {
    setIsHammerActive(true);
    setTimeout(() => setIsHammerActive(false), 400);

    // Dispatch a synthetic pointerdown to trigger SparksCanvas if clicked directly on name
    const sparkEvent = new PointerEvent('pointerdown', {
      clientX: e.clientX,
      clientY: e.clientY,
      button: 0,
      bubbles: true,
    });
    window.dispatchEvent(sparkEvent);
  };

  const fullName = language === 'vi' ? 'Nguyễn Duy Trang' : 'Nguyen Duy Trang';

  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Ambient Forge Warmth Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[520px] bg-gradient-to-b from-[#ff6417]/12 via-[#ffb648]/8 to-transparent blur-[140px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Header */}
        <div className="space-y-8 md:space-y-10">

          {/* 1. Meta Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono tracking-wider">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E] border border-[rgba(244,242,234,0.1)] text-[#FFB648]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6417] animate-pulse" />
              <span>{language === 'vi' ? 'SẴN SÀNG CHO CƠ HỘI MỚI' : 'OPEN TO MOBILE OPPORTUNITIES'}</span>
            </span>

            <span className="text-[#8E96A4] font-medium">
              Portfolio, 2026 · Mobile Engineer
            </span>
          </div>

          {/* 2. Full Name Centerpiece: Bodoni Moda Italic with Internal Thermal Forge Glow */}
          <div className="relative select-none">
            <h1
              onClick={handleNameClick}
              data-cursor="pointer"
              title={language === 'vi' ? 'Click để tạo xung kích nhiệt' : 'Click for thermal strike'}
              className={`font-display italic text-[clamp(2.15rem,7vw,6.4rem)] leading-[1.08] tracking-[-0.02em] font-normal cursor-pointer transition-transform ${
                isHammerActive ? 'hammer-strike' : ''
              }`}
              style={{
                color: '#F4F2EA',
                textShadow: '0 0 25px rgba(255, 182, 72, 0.8), 0 0 60px rgba(255, 100, 23, 0.5)',
              }}
            >
              {fullName}
            </h1>
            <p className="mt-2 text-xs font-mono text-[#8E96A4] tracking-wide">
              {language === 'vi'
                ? '✦ Chạm vào tên hoặc click chuột bất kỳ đâu để phóng tia lửa lò rèn'
                : '✦ Click the name or anywhere on the page to strike forge sparks'}
            </p>
          </div>

          {/* 3. Role & Specialization Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8E96A4] mr-2">
              // Stack:
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#141C2E]/80 border border-[rgba(244,242,234,0.12)] text-[#F4F2EA] hover:border-[#FF6417] hover:text-[#FFF4DE] transition-colors">
              Flutter
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#141C2E]/80 border border-[rgba(244,242,234,0.12)] text-[#F4F2EA] hover:border-[#FF6417] hover:text-[#FFF4DE] transition-colors">
              Native iOS (Swift)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#141C2E]/80 border border-[rgba(244,242,234,0.12)] text-[#F4F2EA] hover:border-[#FF6417] hover:text-[#FFF4DE] transition-colors">
              Native Android (Kotlin)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#141C2E]/80 border border-[rgba(244,242,234,0.12)] text-[#FFB648] hover:border-[#FF6417] transition-colors">
              Platform Channels & Hardware
            </span>
          </div>

          {/* 4. Editorial Headline & Thermal Narrative */}
          <div className="max-w-3xl space-y-4" data-cursor="lens">
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#F4F2EA]">
              {language === 'vi'
                ? 'Xây dựng ứng dụng di động chỉn chu từ kiến trúc đến trải nghiệm.'
                : 'Building dependable mobile experiences from architecture to craft.'}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#8E96A4]">
              {language === 'vi' ? (
                <>
                  <span className="thermal-word">Mobile</span>{' '}
                  <span className="thermal-word">Engineer</span> với hơn{' '}
                  <span className="thermal-word text-[#F4F2EA] font-medium">5 năm kinh nghiệm</span> thực chiến trên{' '}
                  <span className="thermal-word text-[#F4F2EA]">Flutter</span> và{' '}
                  <span className="thermal-word text-[#F4F2EA]">Native iOS/Android</span>. Đã trực tiếp xây dựng các sản phẩm quy mô lớn trong lĩnh vực{' '}
                  <span className="thermal-word text-[#FFB648]">mạng xã hội du lịch</span>,{' '}
                  <span className="thermal-word text-[#FFB648]">nhắn tin thời gian thực</span>,{' '}
                  <span className="thermal-word text-[#FFB648]">fintech</span> và{' '}
                  <span className="thermal-word text-[#FFB648]">hệ thống POS/Kiosk</span>. Tập trung vào kiến trúc Clean bền vững, tích hợp phần cứng và độ ổn định chuẩn Production.
                </>
              ) : (
                <>
                  <span className="thermal-word">Mobile</span>{' '}
                  <span className="thermal-word">Engineer</span> with{' '}
                  <span className="thermal-word text-[#F4F2EA] font-medium">5+ years of production experience</span> across{' '}
                  <span className="thermal-word text-[#F4F2EA]">Flutter</span> and{' '}
                  <span className="thermal-word text-[#F4F2EA]">native iOS/Android</span>. Contributed to large-scale products in{' '}
                  <span className="thermal-word text-[#FFB648]">social travel</span>,{' '}
                  <span className="thermal-word text-[#FFB648]">real-time messaging</span>,{' '}
                  <span className="thermal-word text-[#FFB648]">fintech</span>, and{' '}
                  <span className="thermal-word text-[#FFB648]">POS/Kiosk hardware systems</span>. Focused on maintainable architecture, native bridge integration, and high reliability in production.
                </>
              )}
            </p>
          </div>

          {/* 5. Minimal Editorial Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-7">
            <a
              href={profile.cvPdfUrl}
              download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
              data-cursor="pointer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F4F2EA] text-[#08090A] hover:bg-[#FFF4DE] hover:shadow-[0_0_24px_rgba(255,182,72,0.4)] font-medium text-sm transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>{t.hero.ctaDownloadCv}</span>
            </a>

            <a
              href="#projects"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#F4F2EA] hover:text-[#FF6417] transition-colors group"
            >
              <span>{language === 'vi' ? 'Xem các dự án chọn lọc' : 'Explore Selected Work'}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-sm text-[#8E96A4] hover:text-[#F4F2EA] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Liên hệ trực tiếp' : 'Get in touch'}</span>
            </a>
          </div>

        </div>

        {/* ══════════════════════════════════════
            Bottom Proof Points & Scroll Cue
        ══════════════════════════════════════ */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[rgba(244,242,234,0.08)] reveal">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono uppercase tracking-wider text-[#8E96A4]">
            <span>{t.hero.metricsTitle}</span>
            <span className="normal-case text-[11px] text-[#8E96A4]/70">
              {language === 'vi' ? 'Dữ liệu xác thực từ các hệ thống đã phát hành' : 'Verified commercial production track record'}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#0E131F]/60 border border-[rgba(244,242,234,0.06)] hover:border-[#FF6417]/40 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#F4F2EA] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-[#8E96A4] mt-1 line-clamp-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Cue Indicator */}
          <div className="mt-14 flex flex-col items-center justify-center gap-2 text-[#8E96A4]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E96A4]/80">
              {language === 'vi' ? 'Cuộn xuống xem dự án' : 'Scroll to explore'}
            </span>
            <a
              href="#experience"
              aria-label={t.hero.scrollCue}
              data-cursor="pointer"
              className="p-1.5 rounded-full hover:text-[#FF6417] transition-colors"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
