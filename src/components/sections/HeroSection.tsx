import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Copy,
  Check,
  Play,
  Camera,
  Sparkles,
  LayoutDashboard,
  Smartphone,
} from 'lucide-react';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { GridCrosshairs, Magnetic, TiltStage3D } from '../common/KineticPrimitives';

interface StageTab {
  id: 'dashboard' | 'scanner' | 'genui' | 'widget' | 'video';
  code: string;
  label: string;
  title: string;
  spec: string;
  hud: string;
  glow: string;
  image?: string;
  isVideo?: boolean;
  icon: React.ReactNode;
}

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);
  const isVi = language === 'vi';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeStage, setActiveStage] = useState<StageTab['id']>('dashboard');

  const stageTabs: StageTab[] = [
    {
      id: 'dashboard',
      code: '01',
      label: 'COCKPIT',
      title: isVi ? 'Cockpit Dinh Dưỡng 1 Giây' : '1-Second Nutrition Cockpit',
      spec: 'Flutter 3.x · Riverpod 2.6 · 60 FPS',
      hud: '60 FPS · CLAY UI',
      glow: '#FF4D00',
      image: '/screenshots/clay/cockpit_dashboard.png',
      icon: <LayoutDashboard className="w-3 h-3" />,
    },
    {
      id: 'scanner',
      code: '02',
      label: isVi ? 'AI VISION' : 'AI VISION',
      title: isVi ? 'Quét ảnh & Tách nước dùng <2.5s' : 'Meal Scan & Broth Switch <2.5s',
      spec: 'Gemini 3.8 Flash · Buffer Dispose',
      hud: '< 2.5s LATENCY',
      glow: '#1CB0F6',
      image: '/screenshots/clay/ar_camera_scanner.png',
      icon: <Camera className="w-3 h-3" />,
    },
    {
      id: 'genui',
      code: '03',
      label: 'GENUI',
      title: isVi ? 'Thẻ món ăn tương tác trong Chat' : 'Interactive GenUI Chat Cards',
      spec: 'A2UI Protocol · +/-20g 1-Tap Log',
      hud: 'A2UI PROTOCOL',
      glow: '#FFB238',
      image: '/screenshots/clay/genui_astrocoach_chat.png',
      icon: <Sparkles className="w-3 h-3" />,
    },
    {
      id: 'widget',
      code: '04',
      label: 'WIDGET',
      title: isVi ? 'Widget Màn Hình Khóa & Chính' : 'Native iOS & Android Widgets',
      spec: 'Swift WidgetKit · Kotlin AppWidget',
      hud: '< 300ms LAUNCH',
      glow: '#10B981',
      image: '/screenshots/clay/widget_home_screen.png',
      icon: <Smartphone className="w-3 h-3" />,
    },
    {
      id: 'video',
      code: '05',
      label: 'VIDEO',
      title: isVi ? 'Video Chạy Thực Tế AstroBite' : 'AstroBite Live Walkthrough',
      spec: 'Real Capture · Voice + Vision + GenUI',
      hud: 'LIVE DEMO MP4',
      glow: '#FF5C8D',
      isVideo: true,
      icon: <Play className="w-3 h-3" />,
    },
  ];

  const currentStage = stageTabs.find((item) => item.id === activeStage) || stageTabs[0];

  const marqueeItems = [
    'FLUTTER 3.X',
    'NATIVE iOS SWIFT',
    'ANDROID KOTLIN',
    '1M+ DOWNLOADS',
    '99.5% CRASH-FREE',
    '-30% POS CHECKOUT',
    '277/277 AUTOMATED TESTS',
    '<2.5S GEMINI VISION',
    'CLEAN ARCHITECTURE',
    'ZERO MEMORY LEAK',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="pt-14 bg-[var(--bg)] relative">
      {/* 1. Exposed Telemetry Strip */}
      <div className="border-b border-[var(--line)]">
        <div className="swiss-frame px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent)] font-bold">[SYS.01]</span>
            <span>{t.eyebrow}</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>HCMC // 10.7769°N, 106.7009°E</span>
            <span className="text-[var(--line-strong)]">|</span>
            <span>TARGET: 60.0 FPS · 0 MEMORY LEAK</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
            <span>{profile.status}</span>
          </div>
        </div>
      </div>

      {/* 2. Asymmetric Swiss Brutalist Poster Grid */}
      <div className="swiss-frame relative">
        <GridCrosshairs corners={['bl', 'br']} />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT 8 COLUMNS: Monumental Typography + Raw Portrait + Magnetic CTAs */}
          <div className="lg:col-span-8 lg:border-r border-[var(--line)] flex flex-col justify-between">
            {/* Upper Poster Headline */}
            <div className="px-5 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-6 relative">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4">
                <span>// FLUTTER · SWIFT · KOTLIN</span>
                <span className="text-[var(--accent)] font-bold">EDITION 2026</span>
              </div>

              <h1 className="font-heading font-bold uppercase text-[clamp(2.8rem,7.2vw,6.8rem)] leading-[0.87] tracking-[-0.045em] text-[var(--text-primary)] select-none">
                <span className="block">{isVi ? 'NGUYỄN' : 'NGUYEN'}</span>
                <span className="flex items-baseline flex-wrap gap-x-4">
                  <span>{isVi ? 'DUY TRÁNG' : 'DUY TRANG'}</span>
                  <span className="text-[var(--accent)] font-display italic font-normal lowercase text-[clamp(1.5rem,3.4vw,3.1rem)] tracking-tight">
                    (mobile)
                  </span>
                </span>
              </h1>

              <p className="mt-4 font-display italic text-[clamp(1.25rem,2.4vw,2.2rem)] leading-[1.15] text-[var(--text-primary)] max-w-3xl">
                {t.headline}
              </p>
            </div>

            {/* Lower Split Row: Raw Avatar Crop + Authentic Bio & Magnetic Controls */}
            <div className="border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-12 relative">
              <GridCrosshairs corners={['tl', 'tr']} />

              {/* Portrait Cell (4 cols) */}
              <div className="sm:col-span-4 border-b sm:border-b-0 sm:border-r border-[var(--line)] p-4 sm:p-5 flex flex-col justify-between bg-[var(--bg-elevated)]">
                <div className="relative overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-subtle)] aspect-square group">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale-[18%] contrast-[1.04] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                  />
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/75 text-white text-[9px] font-mono uppercase tracking-widest">
                    NDT // 2000
                  </span>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono uppercase text-[var(--text-muted)]">
                  <span>{profile.location}</span>
                  <span className="text-[var(--accent)] font-bold">5+ YRS</span>
                </div>
              </div>

              {/* Bio & Magnetic Action Dock (8 cols) */}
              <div className="sm:col-span-8 p-5 sm:p-6 flex flex-col justify-between gap-4">
                <div className="space-y-3.5">
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {profile.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {['Flutter 3.x', 'iOS Swift', 'Android Kotlin', 'Clean Architecture', 'Riverpod / BLoC', 'Platform Channels'].map(
                      (stack) => (
                        <span
                          key={stack}
                          className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--line)]"
                        >
                          {stack}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Magnetic Brutalist CTAs */}
                <div className="flex flex-wrap items-center gap-2.5 pt-3.5 border-t border-[var(--line)]">
                  <Magnetic>
                    <a
                      href={profile.cvViewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[var(--accent)] text-white hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] font-mono font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>{t.viewPrintableCv}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <a
                      href="#projects"
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--line-strong)] hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] font-mono font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>{isVi ? 'THỬ LIVE LAB' : 'TRY LIVE LAB'}</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[var(--text-secondary)] border border-[var(--line)] hover:border-[var(--accent)] hover:text-[var(--accent)] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{t.copiedLabel}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{t.copyEmailLabel}</span>
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: 3D Tilt Hardware Showcase Stage */}
          <div className="lg:col-span-4 border-t lg:border-t-0 border-[var(--line)] bg-[var(--bg-elevated)] flex flex-col justify-between relative overflow-hidden">
            {/* Stage Bar */}
            <div className="px-5 py-3 border-b border-[var(--line)] flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
              <span className="text-[var(--accent)] font-bold">STAGE.01 // 3D DEVICE</span>
              <span className="text-[var(--text-muted)]">{currentStage.code} / 05</span>
            </div>

            {/* Switcher Grid */}
            <div className="grid grid-cols-5 border-b border-[var(--line)]">
              {stageTabs.map((tab) => {
                const active = activeStage === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveStage(tab.id)}
                    data-cursor="pointer"
                    className={`py-2.5 px-1 flex flex-col items-center justify-center gap-1 text-[9px] font-mono uppercase tracking-wider border-r last:border-r-0 border-[var(--line)] transition-colors cursor-pointer ${
                      active
                        ? 'bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold'
                        : 'text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {tab.icon}
                    <span className="truncate max-w-full">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 3D Tilt Phone */}
            <div className="px-6 py-8 flex items-center justify-center relative flex-1">
              <TiltStage3D glowColor={currentStage.glow} maxTilt={11}>
                <div className="relative w-[228px] sm:w-[244px] rounded-[2.45rem] p-2.5 bg-[#0D1017] border border-white/20 shadow-[0_28px_60px_-14px_rgba(0,0,0,0.6)]">
                  {/* Floating Hardware Telemetry HUD */}
                  <div
                    className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[var(--bg-invert)] text-[var(--text-invert)] text-[10px] font-mono font-bold uppercase tracking-wider border border-[var(--line-strong)] shadow-xl absolute -right-8 top-12 z-30"
                    style={{ transform: 'translateZ(35px)' }}
                  >
                    <span className="w-1.5 h-1.5" style={{ backgroundColor: currentStage.glow }} />
                    <span>{currentStage.hud}</span>
                  </div>

                  {/* Top Bezel */}
                  <div className="flex items-center justify-between px-4 py-1 text-[9px] font-mono text-white/60 mb-1 select-none">
                    <span>9:41</span>
                    <div className="w-14 h-2.5 rounded-full bg-black border border-white/10" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Viewport */}
                  <div
                    key={currentStage.id}
                    className="animate-stage-enter relative rounded-[1.85rem] overflow-hidden bg-black aspect-[9/18.2]"
                  >
                    {currentStage.isVideo ? (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        poster="/screenshots/clay/cockpit_dashboard.png"
                        className="w-full h-full object-cover"
                      >
                        <source src="/astrobite-demo.mp4" type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={currentStage.image}
                        alt={currentStage.title}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>

                  {/* Home Indicator */}
                  <div className="pt-2 pb-0.5 flex justify-center">
                    <div className="w-20 h-1 rounded-full bg-white/25" />
                  </div>
                </div>
              </TiltStage3D>
            </div>

            {/* Active Hardware Telemetry Footer */}
            <div className="px-5 py-3.5 border-t border-[var(--line)] bg-[var(--bg-subtle)] flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs font-heading font-bold uppercase tracking-tight text-[var(--text-primary)] truncate">
                  {currentStage.title}
                </p>
                <p className="text-[11px] font-mono text-[var(--accent)] truncate">
                  {currentStage.spec}
                </p>
              </div>
              <a
                href="#projects"
                data-cursor="pointer"
                className="shrink-0 px-2.5 py-1.5 bg-[var(--bg-invert)] text-[var(--text-invert)] hover:bg-[var(--accent)] hover:text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-colors"
              >
                LAB →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Full-Bleed Inverted Kinetic Marquee */}
      <div className="marquee-wrap border-y border-[var(--line-strong)] bg-[var(--bg-invert)] text-[var(--text-invert)] overflow-hidden py-3 select-none">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-6 px-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.18em]"
            >
              <span>{item}</span>
              <span className="text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* 4. 4-Column Exposed Oversized Brutalist Metrics Strip */}
      <div className="border-b border-[var(--line)]">
        <div className="swiss-frame grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
          <GridCrosshairs corners={['bl', 'br']} />
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`brutalist-invert p-6 sm:p-7 border-b sm:border-b-0 border-[var(--line)] ${
                idx < 3 ? 'lg:border-r' : ''
              } ${idx % 2 === 0 ? 'sm:border-r' : ''} ${
                idx < 2 ? 'sm:border-b lg:border-b-0' : ''
              } flex flex-col justify-between gap-4 reveal stagger-${idx + 1}`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                <span className="invert-accent text-[var(--accent)] font-bold">
                  [M.0{idx + 1}] {stat.metricTag}
                </span>
                <span className="invert-muted text-[var(--text-muted)]">VERIFIED</span>
              </div>

              <div>
                <div className="font-heading font-bold text-3xl sm:text-4xl xl:text-[2.65rem] leading-none tracking-[-0.03em]">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider mt-2 invert-accent text-[var(--accent-amber)]">
                  {stat.label}
                </div>
              </div>

              <p className="text-xs leading-relaxed invert-muted text-[var(--text-muted)]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
