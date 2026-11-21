import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
import { getAstrobiteScreenshots } from '../../data/astrobiteData';
import { ScreenshotItem } from '../../types';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { GridCrosshairs } from '../common/KineticPrimitives';

export const GalleryLightbox: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const screenshots = getAstrobiteScreenshots(language);
  const isVi = language === 'vi';
  const isReducedMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const filteredScreenshots = screenshots.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const shouldLoop = filteredScreenshots.length > 3;
  const displayScreenshots = shouldLoop
    ? [...filteredScreenshots, ...filteredScreenshots]
    : filteredScreenshots;

  const selectedItem: ScreenshotItem | null =
    selectedScreenIndex !== null && filteredScreenshots[selectedScreenIndex]
      ? filteredScreenshots[selectedScreenIndex]
      : null;

  const handleOpen = (index: number, e?: React.MouseEvent<HTMLDivElement>) => {
    if (hasDraggedRef.current) return;
    if (e) triggerRef.current = e.currentTarget;
    setSelectedScreenIndex(index % filteredScreenshots.length);
  };

  const handleClose = () => {
    setSelectedScreenIndex(null);
    triggerRef.current?.focus();
  };

  const handlePrev = useCallback(() => {
    if (selectedScreenIndex === null) return;
    setSelectedScreenIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredScreenshots.length - 1
    );
  }, [selectedScreenIndex, filteredScreenshots.length]);

  const handleNext = useCallback(() => {
    if (selectedScreenIndex === null) return;
    setSelectedScreenIndex((prev) =>
      prev! < filteredScreenshots.length - 1 ? prev! + 1 : 0
    );
  }, [selectedScreenIndex, filteredScreenshots.length]);

  useEffect(() => {
    setSelectedScreenIndex(null);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedScreenIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (selectedScreenIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedScreenIndex, handlePrev, handleNext]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isReducedMotion || !shouldLoop) return;

    let animId: number;
    let lastTime = performance.now();
    const speed = 0.6;

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 40);
      lastTime = now;

      if (!isHoveredRef.current && !isDraggingRef.current && selectedScreenIndex === null) {
        container.scrollLeft += (speed * delta) / 16.6;
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0) {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isReducedMotion, selectedScreenIndex, shouldLoop, filteredScreenshots.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const scrollLeftManual = () => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRightManual = () => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const categories = [
    { id: 'all', label: t.catAll },
    { id: 'cockpit', label: t.catCockpit },
    { id: 'ai', label: t.catAi },
    { id: 'genui', label: t.catGenui },
    { id: 'features', label: t.catFeatures },
    { id: 'widgets', label: t.catWidgets },
  ];

  return (
    <section id="gallery" className="border-b border-[var(--line)] bg-[var(--bg)] relative overflow-hidden">
      <div className="swiss-frame relative">
        <GridCrosshairs corners={['bl', 'br']} />

        {/* Filmstrip Header */}
        <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12 border-b border-[var(--line)] reveal">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="px-2 py-0.5 bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold">03</span>
            <span className="text-[var(--accent)] font-bold">// {t.badge}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading font-bold uppercase text-[clamp(2rem,4.5vw,3.8rem)] leading-[0.95] tracking-[-0.03em] text-[var(--text-primary)]">
                {t.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2.5 max-w-2xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Category Bar + Manual Arrows */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap border border-[var(--line-strong)]">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    data-cursor="pointer"
                    className={`px-3 py-2 text-[11px] font-mono uppercase tracking-wider border-r last:border-r-0 border-[var(--line)] transition-colors cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {shouldLoop && (
                <div className="flex border border-[var(--line-strong)]">
                  <button
                    type="button"
                    onClick={scrollLeftManual}
                    data-cursor="pointer"
                    className="p-2 bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white border-r border-[var(--line)] transition-colors cursor-pointer"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={scrollRightManual}
                    data-cursor="pointer"
                    className="p-2 bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Architectural Filmstrip Track */}
        <div className="relative bg-[var(--bg-elevated)]">
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => {
              isHoveredRef.current = true;
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
              setIsPaused(false);
              isDraggingRef.current = false;
            }}
            onTouchStart={() => {
              isHoveredRef.current = true;
              setIsPaused(true);
            }}
            onTouchEnd={() => {
              isHoveredRef.current = false;
              setIsPaused(false);
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`flex overflow-x-auto scrollbar-none select-none ${
              shouldLoop ? 'cursor-grab active:cursor-grabbing' : 'justify-start sm:justify-center'
            }`}
            style={{ scrollBehavior: 'auto' }}
          >
            {displayScreenshots.map((item, idx) => {
              const originalIndex = idx % filteredScreenshots.length;
              const frameCode = String(originalIndex + 1).padStart(2, '0');

              return (
                <div
                  key={`${item.id}-${idx}`}
                  tabIndex={0}
                  role="button"
                  onClick={(e) => handleOpen(originalIndex, e)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpen(originalIndex);
                    }
                  }}
                  data-cursor="view"
                  data-cursor-text="VIEW"
                  className="shrink-0 w-[230px] sm:w-[260px] md:w-[278px] border-r border-[var(--line)] p-5 group cursor-pointer hover:bg-[var(--bg-subtle)] transition-colors focus:outline-none"
                >
                  {/* Frame Header */}
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3 pb-2 border-b border-[var(--line)]">
                    <span className="text-[var(--accent)] font-bold">FRAME {frameCode}</span>
                    <span>{item.tag}</span>
                  </div>

                  {/* Device Frame */}
                  <div className="relative aspect-[9/18.6] w-full rounded-[1.5rem] p-1.5 bg-[#0D1017] border border-white/15 group-hover:border-[var(--accent)] group-hover:-translate-y-1 shadow-xl transition-all duration-300">
                    <div className="relative w-full h-full rounded-[1.15rem] overflow-hidden bg-black">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        draggable={false}
                        className="w-full h-full object-cover object-top select-none"
                      />
                    </div>
                  </div>

                  {/* Frame Caption */}
                  <div className="pt-3.5">
                    <p className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                      {item.title}
                    </p>
                    <p className="text-[10px] font-mono text-[var(--text-muted)] truncate mt-0.5">
                      {item.techSpecs.join(' · ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Filmstrip Status Bar */}
        <div className="px-5 sm:px-8 lg:px-10 py-3 border-t border-[var(--line)] bg-[var(--bg-subtle)] flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            {shouldLoop ? (
              isPaused ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{isVi ? 'TẠM DỪNG CUỘN (RÊ CHUỘT)' : 'REEL PAUSED ON HOVER'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{isVi ? 'BĂNG PHIM TỰ CHẠY · BẤM PHÓNG TO' : 'AUTO REEL · CLICK TO INSPECT'}</span>
                </>
              )
            ) : (
              <span>{isVi ? 'BẤM VÀO KHUNG HÌNH ĐỂ XEM CHI TIẾT' : 'CLICK ANY FRAME TO INSPECT'}</span>
            )}
          </div>
          <span className="font-bold text-[var(--text-primary)]">
            [{filteredScreenshots.length} / 10 FRAMES]
          </span>
        </div>
      </div>

      {/* Sharp Brutalist Fullscreen Lightbox */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/88 backdrop-blur-md"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[var(--bg)] border border-[var(--line-strong)] overflow-hidden shadow-2xl animate-stage-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              data-cursor="pointer"
              className="absolute top-0 right-0 z-20 p-3 bg-[var(--bg-invert)] text-[var(--text-invert)] hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
              aria-label={t.closeTooltip}
              title={t.closeTooltip}
            >
              <X className="w-5 h-5" />
            </button>

            {filteredScreenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  data-cursor="pointer"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[var(--bg-invert)] text-[var(--text-invert)] hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer hidden sm:block"
                  aria-label={t.prevTooltip}
                  title={t.prevTooltip}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  data-cursor="pointer"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[var(--bg-invert)] text-[var(--text-invert)] hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer hidden sm:block"
                  aria-label={t.nextTooltip}
                  title={t.nextTooltip}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Preview Frame */}
            <div className="w-full md:w-1/2 h-[48vh] md:h-[76vh] bg-[var(--bg-subtle)] md:border-r border-[var(--line)] flex items-center justify-center p-6">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-full max-w-full object-contain shadow-2xl rounded-xl"
              />
            </div>

            {/* Metadata */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:pr-16 flex flex-col justify-center space-y-4">
              <div className="text-xs font-mono text-[var(--accent)] font-bold uppercase tracking-widest">
                FRAME {String((selectedScreenIndex || 0) + 1).padStart(2, '0')} / {String(filteredScreenshots.length).padStart(2, '0')} // {selectedItem.tag}
              </div>

              <h3 className="font-heading font-bold uppercase text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                {selectedItem.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.techSpecs && (
                <div className="pt-4 border-t border-[var(--line)]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-2.5">
                    // {t.techSpecsLabel}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.techSpecs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono uppercase px-2.5 py-1 bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--line)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
