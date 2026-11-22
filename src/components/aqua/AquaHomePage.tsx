import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  AquaProjectItem,
  getAquaProjects,
  getAquaServices,
} from '../../data/aquaPortfolioData';
import { AquaRoute, DualRollLink } from './AquaChrome';
import { AquaProjectCard, AquaProjectModal } from './AquaProjectList';
import { AquaContactFooter } from './AquaContactFooter';

interface AquaHomePageProps {
  onNavigate: (route: AquaRoute) => void;
}

const ScrollScrubParagraph: React.FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');
  const [activeCount, setActiveCount] = useState<number>(0);

  useEffect(() => {
    let rafId: number;
    const updateScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const start = vh * 0.85;
      const end = vh * 0.2;
      const progress = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, progress));
      setActiveCount(Math.round(clamped * words.length));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [words.length]);

  return (
    <p
      ref={containerRef}
      className="mx-auto max-w-[1152px] font-montreal uppercase text-[22px] leading-[26px] md:text-3xl md:leading-[36px] lg:text-[40px] lg:leading-[1.25] tracking-[-0.01em] text-black flex flex-wrap gap-x-[0.3em] gap-y-1"
    >
      {words.map((word, idx) => {
        const isLit = idx < activeCount;
        return (
          <span key={idx} className="relative inline-block">
            <span className="opacity-[0.3]">{word}</span>
            <span
              className="absolute inset-0 transition-opacity duration-200"
              style={{ opacity: isLit ? 1 : 0 }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </p>
  );
};

export const AquaHomePage: React.FC<AquaHomePageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
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

  const aboutParagraphText =
    language === 'en'
      ? 'WELL ESTEEMED MOBILE ENGINEER AND SYSTEM ARCHITECT WITH 5+ YEARS HELPING COMPANIES SHIP HIGH-SCALE FLUTTER, NATIVE IOS SWIFT, AND ANDROID APPLICATIONS. BLENDING CLEAN ARCHITECTURE WITH TACTILE 60 FPS UI — 1M+ DOWNLOAD SOCIAL APPS SHIPPED, RUST FFI RETAIL POS TERMINALS OPTIMIZED, MULTIMODAL GEMINI AI ENGINEERED — I CONSTANTLY WEAVE ENGINEERING RIGOR INTO EVERY FRAME.'
      : 'KỸ SƯ DI ĐỘNG VÀ KIẾN TRÚC SƯ HỆ THỐNG VỚI HƠN 5 NĂM ĐỒNG HÀNH CÙNG DOANH NGHIỆP XÂY DỰNG ỨNG DỤNG FLUTTER, NATIVE IOS SWIFT VÀ ANDROID QUY MÔ LỚN. KẾT HỢP CLEAN ARCHITECTURE VỚI GIAO DIỆN 60 FPS MƯỢT MÀ — TỪ SIÊU ỨNG DỤNG 1M+ LƯỢT TẢI, MÁY POS BÁN LẺ RUST FFI ĐẾN TRÍ TUỆ NHÂN TẠO GEMINI ĐA PHƯƠNG THỨC — LUÔN ĐẶT KỶ LUẬT KỸ THUẬT VÀO TỪNG KHUNG HÌNH.';

  return (
    <div className="bg-white text-black min-h-screen">
      {/* ============================================================
          SECTION 1: HERO (.landing_main__6aiEQ.heroupgrade) — 1:1 EXACT REPLICA
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

        {/* Hidden Mask-Reveal Black Layer (.landing_mask__ur_og) — Exact 1:1 DOM & Offsets */}
        <div
          ref={maskLayerRef}
          className="aqua-hero-mask hidden md:flex absolute inset-0 z-[300] pointer-events-none w-full h-full items-center justify-center"
          style={{
            WebkitMaskSize: '40px',
            maskSize: '40px',
            WebkitMaskPosition: '-100px -100px',
            maskPosition: '-100px -100px',
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

        {/* Foreground Default White Layer (.landing_body__Lt8sp) — Exact 1:1 DOM & Offsets */}
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

        {/* Bottom-Center Circular Scroll Down Button (.circouttercnt — 120x120 SVG circle r=40 stroke-width=1.8) */}
        <div className="w-full flex items-center justify-center absolute bottom-5 sm:bottom-8 left-0 right-0 z-[500] circouttercnt pointer-events-none">
          <button
            type="button"
            aria-label="Scroll down to About section"
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
          SECTION 2: ABOUT INTRO (Dual-Layer Word Opacity Scroll Scrub)
         ============================================================ */}
      <section
        id="about-intro"
        className="px-5 sm:px-[45px] lg:px-[70px] mt-[60px] lg:mt-[73px] mb-[120px] lg:mb-[300px]"
      >
        <ScrollScrubParagraph text={aboutParagraphText} />
      </section>

      {/* ============================================================
          SECTION 3: PORTFOLIO / SELECTED WORKS (7 Staggered 20vw Cards)
         ============================================================ */}
      <section
        id="portfolio"
        className="px-5 sm:px-[45px] lg:px-[70px] mb-[120px] lg:mb-[300px]"
      >
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-montreal text-[18px] uppercase tracking-[0.02em] text-black">
              PORTFOLIO
            </h2>
            <DualRollLink
              text={language === 'en' ? 'SEE ALL PROJECTS' : 'XEM TẤT CẢ DỰ ÁN'}
              href="/works"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              showArrow
              className="text-[16px] sm:text-[18px] text-black"
            />
          </div>
          <div className="projectLine w-full h-[1.5px] bg-black mt-[22px]" />
        </div>

        <div className="mt-10 mb-6 text-center">
          <h2 className="font-montreal text-[16px] sm:text-[18px] uppercase tracking-[0.14em] text-black">
            SELECTED WORKS
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-black/10 lg:divide-y-0 lg:gap-[110px]">
          {projects.map((proj, idx) => (
            <AquaProjectCard
              key={proj.id}
              project={proj}
              index={idx}
              cursorLabel="View more"
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 4: SERVICES (4 Staggered Kinetic Rows)
         ============================================================ */}
      <section
        id="services"
        className="px-5 sm:px-[45px] lg:px-[70px] mb-[100px] lg:mb-[220px]"
      >
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-montreal text-[18px] uppercase tracking-[0.02em] text-black">
              SERVICES
            </h2>
            <DualRollLink
              text={language === 'en' ? 'MORE ABOUT ME' : 'VỀ BẢN THÂN TÔI'}
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              showArrow
              className="text-[16px] sm:text-[18px] text-black"
            />
          </div>
          <div className="projectLine w-full h-[1.5px] bg-black mt-[22px]" />
        </div>

        <div className="mt-14 lg:mt-24 flex flex-col gap-[34px] md:gap-[67px]">
          {services.map((srv, idx) => (
            <div
              key={srv.title}
              onClick={() => {
                onNavigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group w-fit flex flex-col ${
                srv.align === 'right' ? 'self-end text-right items-end' : 'self-start text-left items-start'
              }`}
            >
              <h3 className="font-montreal font-normal uppercase text-[7.5vw] sm:text-[6.1vw] lg:text-[5.2vw] leading-[1.04] tracking-[-0.02em] text-black flex flex-wrap gap-x-[0.28em]">
                {srv.title.split(' ').map((word, wIdx) => (
                  <span key={wIdx} className="inline-flex whitespace-nowrap">
                    {word.split('').map((ch, cIdx) => {
                      const tilt = ((cIdx + wIdx + idx) % 5) - 2;
                      return (
                        <span
                          key={cIdx}
                          className="inline-block transition-transform duration-300 group-hover:rotate-[var(--char-tilt)] group-hover:-translate-y-1"
                          style={
                            {
                              '--char-tilt': `${tilt * 2.5}deg`,
                            } as React.CSSProperties
                          }
                        >
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </h3>
              <p className="mt-1.5 font-montreal text-[12px] sm:text-[14px] uppercase tracking-[0.12em] text-[#666] group-hover:text-black transition-colors">
                0{idx + 1} // {srv.sub}
              </p>
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
