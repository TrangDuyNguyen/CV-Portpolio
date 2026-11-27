import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getProfileData } from '../../data/profileData';

export type AquaRoute = '/' | '/works' | '/about';

interface DualRollLinkProps {
  text: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  showArrow?: boolean;
  target?: string;
  rel?: string;
}

export const DualRollLink: React.FC<DualRollLinkProps> = ({
  text,
  href = '#',
  onClick,
  className = '',
  showArrow = false,
  target,
  rel,
}) => {
  const arrowSvg = showArrow ? (
    <svg
      width="24"
      height="16"
      viewBox="0 0 28 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block ml-1.5 shrink-0"
    >
      <path
        d="M1 9.5H26.5M26.5 9.5L18 1M26.5 9.5L18 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : null;

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`roll-link font-montreal uppercase tracking-[0.02em] ${className}`}
    >
      <span className="roll-link-upper">
        <span>{text}</span>
        {arrowSvg}
      </span>
      <span className="roll-link-lower" aria-hidden="true">
        <span>{text}</span>
        {arrowSvg}
      </span>
    </a>
  );
};

export const AquaPreloader: React.FC = () => {
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'done'>(() => {
    try {
      return sessionStorage.getItem('dt_preloader_seen') === '1' ? 'done' : 'visible';
    } catch {
      return 'visible';
    }
  });

  useEffect(() => {
    if (phase === 'done') return;
    try {
      sessionStorage.setItem('dt_preloader_seen', '1');
    } catch {
      // ignore storage restrictions
    }
    const t1 = window.setTimeout(() => setPhase('exiting'), 520);
    const t2 = window.setTimeout(() => setPhase('done'), 960);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      onClick={() => setPhase('done')}
      className={`fixed inset-0 z-[99999] bg-black text-white flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'exiting' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-5 font-clash-bold uppercase text-[9vw] sm:text-[5.5vw] tracking-tight select-none">
        <span>TRANG</span>
        <span className="inline-flex items-center justify-center w-[10vw] h-[10vw] sm:w-[5.2vw] sm:h-[5.2vw] border border-white/30 rounded-full">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="w-[55%] h-[55%]"
          >
            <rect x="3" y="4" width="18" height="12" rx="1.5" />
            <path d="M2 19h20" strokeLinecap="round" />
          </svg>
        </span>
        <span>DEV</span>
      </div>
      <p className="mt-3 font-montreal text-[11px] uppercase tracking-[0.28em] text-white/50">
        MOBILE ENGINEER · FLUTTER · IOS · ANDROID
      </p>
    </div>
  );
};

export const AquaCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currX = -100;
    let currY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target as HTMLElement | null;
      const projCard = target?.closest('[data-cursor-label]') as HTMLElement | null;
      if (projCard) {
        setHoverLabel(projCard.getAttribute('data-cursor-label'));
      } else {
        setHoverLabel(null);
      }
    };

    const render = () => {
      currX += (mouseX - currX) * 0.22;
      currY += (mouseY - currY) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currX}px, ${currY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(render);
    };

    const onReset = () => setHoverLabel(null);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('keydown', onReset);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('keydown', onReset);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const isExpanded = Boolean(hoverLabel);

  return (
    <div
      ref={cursorRef}
      className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference items-center justify-center transition-[width,height] duration-250 ease-in-out"
      style={{
        width: isExpanded ? 104 : 30,
        height: isExpanded ? 104 : 30,
      }}
    >
      {hoverLabel && (
        <span className="text-black font-montreal font-black text-[11px] uppercase tracking-[0.08em] text-center leading-none select-none">
          {hoverLabel}
        </span>
      )}
    </div>
  );
};

interface AquaChromeProps {
  currentRoute: AquaRoute;
  onNavigate: (route: AquaRoute) => void;
}

export const AquaChrome: React.FC<AquaChromeProps> = ({ currentRoute, onNavigate }) => {
  const { language, setLanguage } = useLanguage();
  const profile = getProfileData(language);
  const [timeStr, setTimeStr] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setTimeStr(`${hours}:${minutes}: ${ampm}`);
    };
    updateClock();
    const timer = window.setInterval(updateClock, 15000);
    return () => window.clearInterval(timer);
  }, []);

  const playSubtleTone = (freq = 440) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // ignore audio context restrictions
    }
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    if (next) {
      playSubtleTone(528);
    }
  };

  const handleNav = (route: AquaRoute, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (soundOn) playSubtleTone(660);
    setMenuOpen(false);
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Top Fixed Navigation Bar — Blend-mode at top of Hero, crisp solid bar on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-[400] px-5 sm:px-[45px] lg:px-[70px] flex items-center justify-between transition-colors duration-200 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-sm border-b border-black/15 text-black'
            : 'pt-5 pb-3 pointer-events-none mix-blend-difference text-white'
        }`}
      >
        {/* Left: Monogram + Name */}
        <a
          href="/"
          onClick={(e) => handleNav('/', e)}
          className="pointer-events-auto flex items-center gap-2.5 select-none"
        >
          <span className="text-[19px] font-clash-bold tracking-tight">DT</span>
          <span className="hidden xl:inline font-montreal text-[13px] uppercase tracking-[0.12em] opacity-85">
            · NGUYEN DUY TRANG
          </span>
        </a>

        {/* Center: Unhidden Primary Navigation Links (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 pointer-events-auto">
          {[
            { label: language === 'en' ? 'Home' : 'Trang chủ', route: '/' as AquaRoute },
            { label: language === 'en' ? 'Works (07)' : 'Dự án (07)', route: '/works' as AquaRoute },
            { label: language === 'en' ? 'About & Exp' : 'Kinh nghiệm', route: '/about' as AquaRoute },
          ].map((nav) => {
            const active = currentRoute === nav.route;
            return (
              <a
                key={nav.route}
                href={nav.route}
                onClick={(e) => handleNav(nav.route, e)}
                className="relative flex items-center gap-1.5 font-montreal text-[13px] uppercase tracking-[0.1em] hover:opacity-70 transition-opacity"
              >
                {active && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      scrolled ? 'bg-black' : 'bg-white'
                    }`}
                  />
                )}
                <span className={active ? 'font-semibold' : 'opacity-85'}>{nav.label}</span>
              </a>
            );
          })}
          <a
            href={profile.cvViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-montreal text-[13px] uppercase tracking-[0.1em] border-b pb-0.5 hover:opacity-70 transition-opacity ${
              scrolled ? 'border-black/70' : 'border-white/70'
            }`}
          >
            {language === 'en' ? 'Resume CV ↗' : 'Xem CV ↗'}
          </a>
        </nav>

        {/* Right: Mobile Quick Nav + Language Switch + Live Local Clock Badge */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <a
            href="/about"
            onClick={(e) => handleNav(currentRoute === '/about' ? '/works' : '/about', e)}
            className={`md:hidden px-2.5 py-1.5 text-[12px] font-montreal uppercase tracking-wider border ${
              scrolled ? 'border-black/40 text-black' : 'border-white/60 text-white'
            }`}
          >
            {currentRoute === '/about'
              ? language === 'en'
                ? 'Works'
                : 'Dự án'
              : language === 'en'
              ? 'About'
              : 'Hồ sơ'}
          </a>
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
            className={`px-2.5 py-1.5 text-[12px] sm:text-[13px] font-montreal uppercase tracking-wider border transition-colors ${
              scrolled
                ? 'border-black/40 text-black hover:bg-black hover:text-white'
                : 'border-white/60 text-white hover:bg-white hover:text-black'
            }`}
            title="Switch Language (EN / VI)"
          >
            {language === 'en' ? 'VI' : 'EN'}
          </button>
          <div
            className={`hidden xs:block w-[96px] sm:w-[100px] px-2.5 py-1.5 text-[13px] sm:text-[14px] text-center font-montreal font-medium select-none ${
              scrolled ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {timeStr || '8:27: PM'}
          </div>
        </div>
      </header>

      {/* 2. Bottom-Left Fixed Vertical Sound Toggle */}
      <button
        type="button"
        onClick={toggleSound}
        className="fixed bottom-14 left-1 sm:left-5 z-[500] -rotate-90 origin-left text-[13px] font-montreal uppercase tracking-[0.08em] text-white mix-blend-difference select-none"
      >
        <span className="opacity-65">SOUND </span>
        <span className="font-bold">{soundOn ? 'ON' : 'OFF'}</span>
      </button>

      {/* 3. Right-Edge Fixed Printable ATS CV Ribbon */}
      <a
        href={profile.cvViewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed right-0 top-[40%] z-[500] w-[42px] h-[160px] bg-black text-white border-l border-y border-white/15 flex-col items-center justify-between pt-3.5 pb-8 hover:w-[48px] transition-all"
        title={language === 'en' ? 'Open Printable ATS CV' : 'Mở bản in CV ATS'}
      >
        <span className="font-clash-bold text-[15px] tracking-tight">CV.</span>
        <span className="-rotate-90 font-montreal text-[11px] uppercase tracking-[0.12em] whitespace-nowrap">
          Resume ↗
        </span>
      </a>

      {/* 4. Bottom-Right Floating Hamburger Button (.styles_header__wy7V7) */}
      <button
        type="button"
        aria-label="Toggle Navigation Drawer"
        onClick={() => {
          if (soundOn) playSubtleTone(480);
          setMenuOpen((prev) => !prev);
        }}
        className={`aqua-burger-btn ${menuOpen ? 'aqua-burger-active' : ''}`}
      >
        <span className="aqua-burger-lines" />
      </button>

      {/* 5. Slide-Out Navigation Drawer (.style_menu__BOloa) with Left SVG Bezier Curve */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[690] bg-black/25 transition-opacity"
        />
      )}
      <aside
        className={`fixed top-0 right-0 z-[700] h-screen w-full sm:w-[50vw] lg:w-[40vw] bg-black text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between px-10 sm:px-16 lg:px-[100px] py-20 ${
          menuOpen ? 'translate-x-0' : 'translate-x-[calc(100%+100px)]'
        }`}
      >
        {/* Left Edge SVG Bezier Curve (.styles_svgCurve__EsZUC) */}
        <svg
          className="absolute top-0 -left-[99px] w-[100px] h-full fill-black pointer-events-none"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
        >
          <path
            d={
              menuOpen
                ? 'M100 0 L100 1000 Q100 500 100 0 Z'
                : 'M100 0 L100 1000 Q-40 500 100 0 Z'
            }
            className="transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
          />
        </svg>

        {/* Top: NAVIGATION Block */}
        <div className="mt-6">
          <div className="text-[11px] font-montreal uppercase tracking-[0.14em] text-[#999999] border-b border-[#999999]/50 pb-3 mb-8">
            NAVIGATION
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Home', route: '/' as AquaRoute },
              { label: 'Work', route: '/works' as AquaRoute },
              { label: 'About', route: '/about' as AquaRoute },
            ].map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <li key={item.route} className="relative flex items-center group">
                  <span
                    className={`absolute -left-7 w-[10px] h-[10px] rounded-full bg-white transition-transform duration-300 ${
                      isActive ? 'scale-100' : 'scale-0 group-hover:scale-75'
                    }`}
                  />
                  <a
                    href={item.route}
                    onClick={(e) => handleNav(item.route, e)}
                    className="text-[44px] sm:text-[56px] font-montreal font-light leading-[1.15] text-white hover:translate-x-2 transition-transform"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="relative flex items-center group mt-2">
              <a
                href={profile.cvViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[24px] sm:text-[28px] font-montreal font-light text-[#999999] hover:text-white transition-colors"
              >
                {language === 'en' ? 'Printable CV ↗' : 'Xem & Tải CV PDF ↗'}
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom: GET IN TOUCH Block */}
        <div>
          <div className="text-[11px] font-montreal uppercase tracking-[0.14em] text-[#999999] border-b border-[#999999]/50 pb-3 mb-5">
            GET IN TOUCH
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[16px] font-montreal text-white">
            <DualRollLink
              text="Github"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            />
            <DualRollLink
              text="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            />
            <DualRollLink
              text="Email"
              href={`mailto:${profile.email}`}
            />
            <DualRollLink
              text="CV PDF"
              href={profile.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </aside>
    </>
  );
};
