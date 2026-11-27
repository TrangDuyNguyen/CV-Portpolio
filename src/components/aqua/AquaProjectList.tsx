import React, { useEffect, useRef, useState } from 'react';
import { AquaProjectItem } from '../../data/aquaPortfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface AquaProjectCardProps {
  project: AquaProjectItem;
  index: number;
  cursorLabel?: string;
  onSelect: (project: AquaProjectItem) => void;
  onHoverChange?: (project: AquaProjectItem | null) => void;
}

/**
 * Dennis Snellenberg-inspired Swiss Editorial Project Row:
 * Crisp 48x48 native icon or geometric monogram badge (never stretched),
 * Commercial vs Personal Flagship tag, and full-row black/white inversion on hover.
 */
export const AquaProjectCard: React.FC<AquaProjectCardProps> = ({
  project,
  index,
  cursorLabel = 'View Case',
  onSelect,
  onHoverChange,
}) => {
  const num = String(index + 1).padStart(2, '0');
  const isFlagship = project.id === 'astrobite';

  return (
    <article
      data-cursor-label={cursorLabel}
      onClick={() => onSelect(project)}
      onMouseEnter={() => onHoverChange?.(project)}
      onMouseLeave={() => onHoverChange?.(null)}
      className="group relative border-b border-black/20 hover:border-black bg-white hover:bg-black text-black hover:text-white transition-colors duration-300 ease-out py-7 sm:py-9 px-2 sm:px-5 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-center">
        {/* Column 1 (5 cols): Index + Crisp 48x48 App Icon / Monogram + Project Title & Context */}
        <div className="lg:col-span-5 flex items-center gap-4 sm:gap-5 min-w-0">
          <span className="font-montreal text-[13px] tracking-[0.08em] text-[#777] group-hover:text-white/60 w-6 shrink-0">
            {num}
          </span>

          {project.iconUrl ? (
            <div className="w-12 h-12 rounded-[11px] overflow-hidden border border-black/15 group-hover:border-white/25 bg-white shrink-0">
              <img
                src={project.iconUrl}
                alt={project.displayTitle}
                width={48}
                height={48}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-[11px] border border-black/20 group-hover:border-white/30 bg-[#111] group-hover:bg-white text-white group-hover:text-black flex items-center justify-center font-clash-bold text-[15px] tracking-tight shrink-0 transition-colors duration-300">
              {project.monogram}
            </div>
          )}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-clash-bold text-[24px] sm:text-[31px] xl:text-[35px] uppercase leading-[1.05] tracking-[-0.02em] truncate group-hover:translate-x-1 transition-transform duration-300">
                {project.displayTitle}
              </h3>
              {project.categoryBadge && (
                <span
                  className={`px-2 py-0.5 font-montreal text-[10px] uppercase tracking-[0.12em] shrink-0 transition-colors ${
                    isFlagship
                      ? 'bg-black text-white group-hover:bg-white group-hover:text-black font-semibold'
                      : 'border border-black/25 text-[#555] group-hover:border-white/35 group-hover:text-white/80'
                  }`}
                >
                  {project.categoryBadge}
                </span>
              )}
            </div>
            <p className="mt-1 font-montreal text-[12px] uppercase tracking-[0.08em] text-[#666] group-hover:text-white/65 truncate">
              {project.companyOrContext}
            </p>
          </div>
        </div>

        {/* Column 2 (4 cols): Role & Short Summary + Top 3 Tech Pills */}
        <div className="lg:col-span-4 pl-10 sm:pl-[68px] lg:pl-0">
          <p className="font-montreal text-[14px] leading-[1.45] text-[#222] group-hover:text-white/85 line-clamp-2">
            {project.shortDesc}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 font-montreal text-[11px] uppercase tracking-[0.05em] border border-black/25 group-hover:border-white/30 text-[#333] group-hover:text-white/85 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Column 3 (3 cols): Key Verified Metric + Period + Arrow */}
        <div className="lg:col-span-3 pl-10 sm:pl-[68px] lg:pl-0 flex lg:flex-col items-center lg:items-end justify-between gap-2 text-right">
          <span className="font-clash-medium text-[15px] sm:text-[18px] uppercase tracking-[-0.01em]">
            {project.metrics[0]?.value}
          </span>
          <div className="flex items-center gap-2 font-montreal text-[12px] uppercase tracking-[0.12em] text-[#666] group-hover:text-white/70">
            <span>{project.period}</span>
            <span className="inline-block text-[15px] leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

/**
 * Shared Interactive Table with Dennis Snellenberg Floating Preview Window on Desktop Hover:
 * - Shows high-res phone screen preview when `previewSlides` exists (e.g. AstroBite)
 * - Shows crisp Swiss 4-metric telemetry preview card for commercial apps (never stretches tiny icons)
 */
export const AquaProjectTable: React.FC<{
  items: AquaProjectItem[];
  cursorLabel?: string;
  onSelect: (project: AquaProjectItem) => void;
}> = ({ items, cursorLabel = 'View Case', onSelect }) => {
  const [hovered, setHovered] = useState<AquaProjectItem | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currX = 0;
    let currY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      targetX = Math.min(window.innerWidth - 300, e.clientX + 28);
      targetY = Math.max(80, Math.min(window.innerHeight - 310, e.clientY - 120));
    };

    const loop = () => {
      currX += (targetX - currX) * 0.2;
      currY += (targetY - currY) * 0.2;
      if (floatRef.current) {
        floatRef.current.style.transform = `translate3d(${currX}px, ${currY}px, 0)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const hasHighResScreen = Boolean(hovered?.previewSlides && hovered.previewSlides.length > 0);

  return (
    <div className="relative" onMouseLeave={() => setHovered(null)}>
      <div className="flex flex-col">
        {items.map((proj, idx) => (
          <AquaProjectCard
            key={proj.id}
            project={proj}
            index={idx}
            cursorLabel={cursorLabel}
            onSelect={(p) => {
              setHovered(null);
              onSelect(p);
            }}
            onHoverChange={setHovered}
          />
        ))}
      </div>

      {/* Floating Desktop Visual Preview Hook */}
      <div
        ref={floatRef}
        className={`hidden xl:block fixed top-0 left-0 z-[600] pointer-events-none transition-opacity duration-200 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {hovered &&
          (hasHighResScreen ? (
            <div className="w-[210px] bg-black text-white p-2.5 border border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <div className="aspect-[9/16] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={hovered.previewSlides![0]}
                  alt={hovered.displayTitle}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-2 flex items-center justify-between font-montreal text-[10px] uppercase tracking-[0.12em] text-white/85">
                <span>{hovered.displayTitle}</span>
                <span>{hovered.metrics[0]?.value}</span>
              </div>
            </div>
          ) : (
            <div className="w-[276px] bg-[#0e1014] text-white p-4 border border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  {hovered.iconUrl ? (
                    <img
                      src={hovered.iconUrl}
                      alt={hovered.displayTitle}
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] rounded-[8px] object-cover bg-white shrink-0"
                    />
                  ) : (
                    <span className="w-[34px] h-[34px] rounded-[8px] bg-white text-black font-clash-bold text-[12px] flex items-center justify-center shrink-0">
                      {hovered.monogram}
                    </span>
                  )}
                  <span className="font-clash-bold text-[15px] uppercase truncate">
                    {hovered.displayTitle}
                  </span>
                </div>
                <span className="font-montreal text-[10px] uppercase tracking-widest text-white/60 shrink-0">
                  {hovered.period}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {hovered.metrics.slice(0, 4).map((m) => (
                  <div key={m.label} className="border border-white/15 p-2 bg-white/[0.03]">
                    <div className="font-montreal text-[9px] uppercase tracking-wider text-white/55 truncate">
                      {m.label}
                    </div>
                    <div className="mt-0.5 font-clash-medium text-[12px] uppercase leading-snug text-white">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

interface AquaProjectModalProps {
  project: AquaProjectItem | null;
  onClose: () => void;
}

export const AquaProjectModal: React.FC<AquaProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[850] bg-black/75 flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[1040px] max-h-[90vh] overflow-y-auto bg-white text-black border-2 border-black p-6 sm:p-10 lg:p-12"
      >
        {/* Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b-[1.5px] border-black pb-5">
          <div className="flex items-start gap-4">
            {project.iconUrl ? (
              <img
                src={project.iconUrl}
                alt={project.displayTitle}
                width={52}
                height={52}
                className="w-[52px] h-[52px] rounded-[12px] border border-black/15 object-cover shrink-0 mt-1"
              />
            ) : (
              <div className="w-[52px] h-[52px] rounded-[12px] bg-black text-white flex items-center justify-center font-clash-bold text-[16px] shrink-0 mt-1">
                {project.monogram}
              </div>
            )}
            <div>
              <p className="font-montreal text-[12px] uppercase tracking-[0.18em] text-[#666]">
                {project.companyOrContext} · {project.period}
              </p>
              <h2 className="mt-1 font-clash-bold text-[24px] sm:text-[36px] uppercase leading-[1.05]">
                {project.fullName}
              </h2>
              <p className="mt-1 font-montreal text-[14px] uppercase tracking-wider text-[#1e2022]">
                {language === 'en' ? 'Role:' : 'Vai trò:'} <strong>{project.role}</strong>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 px-4 py-2 bg-black text-white font-montreal text-[13px] uppercase tracking-widest hover:bg-[#1e2022]"
          >
            {language === 'en' ? 'CLOSE [ESC]' : 'ĐÓNG [ESC]'}
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="border border-black p-3.5">
              <div className="font-montreal text-[11px] uppercase tracking-wider text-[#666]">
                {m.label}
              </div>
              <div className="mt-1 font-clash-bold text-[17px] sm:text-[20px] uppercase leading-tight">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Contributions */}
        <div className="my-6">
          <h3 className="font-montreal text-[13px] uppercase tracking-[0.16em] text-[#666] mb-3">
            {language === 'en'
              ? '// ARCHITECTURE & PRODUCTION CONTRIBUTIONS'
              : '// ĐÓNG GÓP KỸ THUẬT & KIẾN TRÚC THỰC TẾ'}
          </h3>
          <ul className="space-y-2.5">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-montreal text-[15px] leading-[1.55] text-[#1e2022]"
              >
                <span className="font-clash-bold text-[13px] mt-0.5">
                  0{i + 1}
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="my-6">
          <h3 className="font-montreal text-[13px] uppercase tracking-[0.16em] text-[#666] mb-3">
            // TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-black text-white font-montreal text-[12px] uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* High-res Screenshots Strip (only shown when crisp screenshots exist, e.g. AstroBite) */}
        {project.previewSlides && project.previewSlides.length > 0 && (
          <div className="mt-6 pt-6 border-t border-black/20">
            <h3 className="font-montreal text-[13px] uppercase tracking-[0.16em] text-[#666] mb-3">
              // PRODUCTION SCREENS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.previewSlides.slice(0, 3).map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-[9/16] max-h-[320px] rounded-[6px] overflow-hidden border border-black/15 bg-[#f5f5f5]"
                >
                  <img
                    src={src}
                    alt={`${project.fullName} screen ${idx + 1}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.externalUrl && (
          <div className="mt-6 pt-4 border-t border-black flex justify-end">
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black text-white font-montreal text-[13px] uppercase tracking-widest hover:opacity-85"
            >
              {language === 'en' ? 'VIEW ON GOOGLE PLAY ↗' : 'XEM TRÊN GOOGLE PLAY ↗'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
