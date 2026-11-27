import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  AquaProjectItem,
  getAquaProjects,
  getAquaServices,
} from '../../data/aquaPortfolioData';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { AquaRoute, DualRollLink } from './AquaChrome';
import { AquaProjectCard, AquaProjectModal } from './AquaProjectList';
import { AquaContactFooter } from './AquaContactFooter';

interface AquaHomePageProps {
  onNavigate: (route: AquaRoute) => void;
}

export const AquaHomePage: React.FC<AquaHomePageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);
  const projects = getAquaProjects(language);
  const services = getAquaServices(language);
  const [selectedProject, setSelectedProject] = useState<AquaProjectItem | null>(null);

  // Hero Spotlight SVG Mask State (.landing_mask__ur_og)
  const heroRef = useRef<HTMLElement>(null);
  const maskLayerRef = useRef<HTMLDivElement>(null);
  const isHoveringTextRef = useRef(false);

  useEffect(() => {
    let targetX = -200;
    let targetY = -200;
    let currX = -200;
    let currY = -200;
    let currSize = 0;
    let hasMoved = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!hasMoved) {
        currX = targetX;
        currY = targetY;
        hasMoved = true;
      }
    };

    const tick = () => {
      const targetSize = !hasMoved ? 0 : isHoveringTextRef.current ? 330 : 40;
      currX += (targetX - currX) * 0.16;
      currY += (targetY - currY) * 0.16;
      currSize += (targetSize - currSize) * 0.14;

      if (maskLayerRef.current) {
        const half = currSize / 2;
        const pos = `${currX - half}px ${currY - half}px`;
        const size = `${currSize}px`;
        maskLayerRef.current.style.webkitMaskPosition = pos;
        maskLayerRef.current.style.maskPosition = pos;
        maskLayerRef.current.style.webkitMaskSize = size;
        maskLayerRef.current.style.maskSize = size;
      }
      rafId = requestAnimationFrame(tick);
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', onMouseMove, { passive: true });
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', onMouseMove);
      }
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ============================================================
          SECTION 1: HERO — Minimalist Monochrome with Cursor Spotlight Mask
         ============================================================ */}
      <section
        ref={heroRef}
        className="landing_main heroupgrade relative w-full h-screen select-none overflow-hidden"
      >
        {/* Left Margin Index Pointer: 01//04 — HOVER -> */}
        <p className="text-[15px] font-montreal flex flex-row items-center uppercase justify-center gap-[5px] left-0 absolute md:top-[335px] top-56 px-5 lg:px-[70px] sm:px-[45px] z-[350] pointer-events-none text-black">
          <span className="hidden md:inline">01//04 — HOVER</span>
          <span className="md:hidden">01//04 — SCROLL</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="hidden md:inline-block"
          >
            <path
              d="M1 5.5H10M10 5.5L6 1.5M10 5.5L6 9.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="md:hidden inline-block"
          >
            <path
              d="M5.5 1V10M5.5 10L1.5 6M5.5 10L9.5 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>

        {/* Hidden Mask-Reveal Black Layer */}
        <div
          ref={maskLayerRef}
          className="aqua-hero-mask hidden md:flex absolute inset-0 z-[300] pointer-events-none w-full h-full items-center justify-center"
          style={{
            WebkitMaskSize: '0px',
            maskSize: '0px',
            WebkitMaskPosition: '-200px -200px',
            maskPosition: '-200px -200px',
          }}
        >
          <div className="relative -left-[2%] h-fit px-5 lg:px-[70px] sm:px-[45px]">
            <p className="text-[13px] w-fit font-montreal font-bold tracking-[3px] uppercase relative md:left-48 lg:left-64 self-center md:self-auto text-white mb-1">
              Trang_dev
            </p>
            <h1 className="flex items-center font-montreal font-bold uppercase xl:text-[120px] lg:text-[90px] md:text-[72px] sm:text-[64px] xs:text-[52px] text-[42px] w-fit xl:leading-[100px] lg:leading-[84px] md:leading-[68px] sm:leading-[60px] xs:leading-[46px] leading-[40px] tracking-[-0.03em] text-white sm:relative sm:left-[18%]">
              TALENTED
            </h1>
            <h1 className="whitespace-nowrap uppercase flex text-center items-center font-montreal font-bold xl:text-[120px] lg:text-[90px] md:text-[72px] sm:text-[64px] xs:text-[52px] text-[42px] w-fit xl:leading-[100px] lg:leading-[84px] md:leading-[68px] sm:leading-[60px] xs:leading-[46px] leading-[40px] tracking-[-0.03em] text-white">
              INNOVATIVE
            </h1>
            <h1 className="text-white relative sm:left-[18%] w-fit md:flex md:flex-row md:items-center">
              <span className="font-montreal font-bold uppercase xl:text-[120px] lg:text-[90px] md:text-[72px] sm:text-[64px] xs:text-[52px] text-[42px] w-fit xl:leading-[100px] lg:leading-[84px] md:leading-[68px] sm:leading-[60px] xs:leading-[46px] leading-[40px] tracking-[-0.03em] text-white">
                DEVELOPER
              </span>
              <span className="text-[13px] lg:text-[15px] font-montreal font-medium uppercase ml-[22px] lg:ml-[27px] md:block hidden text-white tracking-[0.02em] whitespace-nowrap">
                IF THE PAY IS HONEST
              </span>
            </h1>
          </div>
        </div>

        {/* Foreground Default White Layer */}
        <div className="landing_body w-full h-full flex items-center justify-center">
          <div
            onMouseEnter={() => {
              isHoveringTextRef.current = true;
            }}
            onMouseLeave={() => {
              isHoveringTextRef.current = false;
            }}
            className="relative"
          >
            <p className="text-[13px] w-fit font-montreal font-bold tracking-[3px] uppercase relative md:left-[130px] lg:left-[152px] px-5 lg:px-[70px] sm:px-[45px] self-center md:self-auto text-black mb-1">
              DT
            </p>
            <h1 className="flex items-center font-montreal font-bold uppercase xl:text-[120px] lg:text-[90px] md:text-[72px] sm:text-[64px] xs:text-[52px] text-[42px] w-fit xl:leading-[100px] lg:leading-[84px] md:leading-[68px] sm:leading-[60px] xs:leading-[46px] leading-[40px] tracking-[-0.03em] text-black sm:relative sm:left-[18%]">
              MULTI–
            </h1>
            <h1 className="whitespace-nowrap uppercase flex text-center items-center font-montreal font-bold xl:text-[120px] lg:text-[90px] md:text-[72px] sm:text-[64px] xs:text-[52px] text-[42px] w-fit xl:leading-[100px] lg:leading-[84px] md:leading-[68px] sm:leading-[60px] xs:leading-[46px] leading-[40px] tracking-[-0.03em] text-black">
              DISCIPLINED
            </h1>
            <h1 className="text-black relative sm:left-[18%] w-fit md:flex md:flex-row md:items-center">
              <span className="font-montreal font-bold uppercase xl:text-[120px] lg:text-[90px] md:text-[72px] sm:text-[64px] xs:text-[52px] text-[42px] w-fit xl:leading-[100px] lg:leading-[84px] md:leading-[68px] sm:leading-[60px] xs:leading-[46px] leading-[40px] tracking-[-0.03em] text-black">
                DEVELOPER
              </span>
              <span className="text-[13px] lg:text-[15px] font-montreal font-medium uppercase ml-[22px] lg:ml-[27px] md:block hidden text-black tracking-[0.02em] whitespace-nowrap">
                GOOD DESIGN IS HONEST
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom-Center Circular Scroll Down Button */}
        <div className="w-full flex items-center justify-center absolute bottom-5 sm:bottom-8 left-0 right-0 z-[500] circouttercnt pointer-events-none">
          <button
            type="button"
            aria-label="Scroll down to Profile section"
            onClick={() => {
              const el = document.getElementById('about-intro');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="pointer-events-auto flex self-center flex-row relative h-[120px] w-[120px] justify-center items-center group"
          >
            <svg
              className="absolute transition-transform duration-300 group-hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 100 100"
            >
              <circle
                stroke="black"
                strokeWidth="1.8"
                fill="none"
                cx="50"
                cy="50"
                r="40"
              />
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              className="xs:w-[29px] w-[35px]"
            >
              <path
                d="M17.5 7V28M17.5 28L9.5 20M17.5 28L25.5 20"
                stroke="#000000"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: SWISS PROFILE & VERIFIED IMPACT STRIP
         ============================================================ */}
      <section
        id="about-intro"
        className="px-5 sm:px-[45px] lg:px-[70px] pt-16 lg:pt-24 mb-[100px] lg:mb-[160px]"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-montreal text-[15px] sm:text-[17px] uppercase tracking-[0.06em] text-black">
            01 // {language === 'en' ? 'PROFILE' : 'TỔNG QUAN'}
          </h2>
          <span className="font-montreal text-[13px] uppercase tracking-[0.12em] text-[#666]">
            {profile.location}
          </span>
        </div>
        <div className="w-full h-[1.5px] bg-black mt-4" />

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (4 cols): Positioning & Quick Actions */}
          <div className="lg:col-span-4">
            <p className="font-clash-bold text-[22px] sm:text-[26px] uppercase leading-tight">
              {profile.name}
            </p>
            <p className="mt-1 font-montreal text-[13px] uppercase tracking-[0.1em] text-[#555]">
              {profile.levelTag}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-black text-white font-montreal text-[12px] uppercase tracking-[0.12em] hover:bg-[#222] transition-colors"
              >
                {language === 'en' ? 'More About Me →' : 'Chi tiết Hồ sơ →'}
              </a>
              <a
                href={profile.cvViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-black text-black font-montreal text-[12px] uppercase tracking-[0.12em] hover:bg-black hover:text-white transition-colors"
              >
                {language === 'en' ? 'Printable CV ↗' : 'Xem CV ATS ↗'}
              </a>
            </div>
          </div>

          {/* Right Column (8 cols): Clean Editorial Bio */}
          <div className="lg:col-span-8">
            <p className="font-montreal text-[20px] sm:text-[25px] lg:text-[28px] leading-[1.45] tracking-[-0.01em] text-[#111]">
              {profile.bio}
            </p>
          </div>
        </div>

        {/* 4 Verified Production Metrics Strip */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-black">
          {stats.map((st) => (
            <div key={st.label} className="p-4 sm:p-6 border-r border-b border-black min-w-0">
              <div className="font-montreal text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#666] truncate">
                {st.metricTag}
              </div>
              <div className="mt-2 font-clash-bold text-[19px] xs:text-[23px] sm:text-[32px] uppercase leading-tight">
                {st.value}
              </div>
              <div className="mt-1.5 font-montreal font-medium text-[12px] sm:text-[13px] uppercase text-black">
                {st.label}
              </div>
              <p className="mt-1 hidden sm:block font-montreal text-[13px] leading-[1.45] text-[#444]">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 3: SELECTED WORKS — Dennis Snellenberg Editorial Table
         ============================================================ */}
      <section
        id="portfolio"
        className="px-5 sm:px-[45px] lg:px-[70px] mb-[110px] lg:mb-[180px]"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-montreal text-[14px] sm:text-[17px] uppercase tracking-[0.06em] text-black">
            02 // SELECTED WORKS (0{projects.length})
          </h2>
          <DualRollLink
            text={language === 'en' ? 'ALL WORKS' : 'XEM TẤT CẢ'}
            href="/works"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            showArrow
            className="text-[13px] sm:text-[17px] text-black shrink-0"
          />
        </div>
        <div className="w-full h-[1.5px] bg-black mt-4" />

        {/* Desktop Table Column Header */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 px-5 py-3.5 border-b border-black/20 font-montreal text-[11px] uppercase tracking-[0.16em] text-[#777]">
          <span className="lg:col-span-5">
            {language === 'en' ? 'PROJECT / CONTEXT' : 'DỰ ÁN / BỐI CẢNH'}
          </span>
          <span className="lg:col-span-4">
            {language === 'en' ? 'SCOPE & CORE STACK' : 'PHẠM VI & CÔNG NGHỆ CHÍNH'}
          </span>
          <span className="lg:col-span-3 text-right">
            {language === 'en' ? 'KEY IMPACT / PERIOD' : 'CHỈ SỐ CHÍNH / THỜI GIAN'}
          </span>
        </div>

        {/* 7 Interactive Editorial Rows */}
        <div className="flex flex-col">
          {projects.map((proj, idx) => (
            <AquaProjectCard
              key={proj.id}
              project={proj}
              index={idx}
              cursorLabel="View Case"
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 4: CORE CAPABILITIES / SERVICES — Swiss Architectural Grid
         ============================================================ */}
      <section
        id="services"
        className="px-5 sm:px-[45px] lg:px-[70px] mb-[100px] lg:mb-[160px]"
      >
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-montreal text-[14px] sm:text-[17px] uppercase tracking-[0.06em] text-black">
            03 // {language === 'en' ? 'CAPABILITIES' : 'NĂNG LỰC'}
          </h2>
          <DualRollLink
            text={language === 'en' ? 'ABOUT & Q&A' : 'HỒ SƠ & Q&A'}
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            showArrow
            className="text-[13px] sm:text-[17px] text-black shrink-0"
          />
        </div>
        <div className="w-full h-[1.5px] bg-black mt-4" />

        <div className="divide-y divide-black/20 border-b border-black/20">
          {services.map((srv, idx) => (
            <div
              key={srv.title}
              onClick={() => {
                onNavigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group py-8 sm:py-10 px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start hover:bg-[#f7f7f7] transition-colors"
            >
              <span className="lg:col-span-1 font-clash-bold text-[18px] text-[#777] group-hover:text-black transition-colors">
                0{idx + 1}
              </span>

              <div className="lg:col-span-5">
                <h3 className="font-clash-bold text-[22px] sm:text-[28px] uppercase leading-[1.1] tracking-[-0.01em] text-black group-hover:translate-x-1 transition-transform">
                  {srv.title}
                </h3>
                <p className="mt-2 font-montreal text-[12px] uppercase tracking-[0.08em] text-[#666]">
                  {srv.proof}
                </p>
              </div>

              <div className="lg:col-span-6">
                <p className="font-montreal text-[15px] leading-[1.6] text-[#222]">
                  {srv.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 border border-black font-montreal text-[11px] uppercase tracking-[0.06em] bg-white text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 5: CONTACT & FOOTER
         ============================================================ */}
      <AquaContactFooter />

      <AquaProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
