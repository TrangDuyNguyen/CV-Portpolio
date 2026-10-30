import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
import { getAstrobiteScreenshots } from '../../data/astrobiteData';
import { ScreenshotItem } from '../../types';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';

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
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const filteredScreenshots = screenshots.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Duplicate items for infinite seamless scroll reel
  const loopScreenshots = [...filteredScreenshots, ...filteredScreenshots];

  const selectedItem: ScreenshotItem | null =
    selectedScreenIndex !== null ? filteredScreenshots[selectedScreenIndex] : null;

  const handleOpen = (index: number, e?: React.MouseEvent) => {
    if (hasDraggedRef.current) return;
    if (e) triggerRef.current = e.currentTarget as HTMLButtonElement;
    setSelectedScreenIndex(index % filteredScreenshots.length);
  };

  const handleClose = () => {
    setSelectedScreenIndex(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
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

  // Keyboard navigation & Focus management
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

  // Smooth Infinite Auto-Scroll RAF Loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isReducedMotion) return;

    let animId: number;
    let lastTime = performance.now();
    const speed = 0.55; // Pixels per frame (~33px/s) for silky gentle auto-scroll

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 40);
      lastTime = now;

      if (!isHoveredRef.current && !isDraggingRef.current && selectedScreenIndex === null) {
        container.scrollLeft += (speed * delta) / 16.6;

        // Infinite loop seamless wrap
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isReducedMotion, selectedScreenIndex, filteredScreenshots.length]);

  // Manual Drag to Scroll Handling
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
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const scrollLeftManual = () => {
    scrollContainerRef.current?.scrollBy({ left: -280, behavior: 'smooth' });
  };

  const scrollRightManual = () => {
    scrollContainerRef.current?.scrollBy({ left: 280, behavior: 'smooth' });
  };

  const categories = [
    { id: 'all', label: t.catAll },
    { id: 'cockpit', label: t.catCockpit },
    { id: 'ai', label: t.catAi },
    { id: 'features', label: t.catFeatures },
    { id: 'genui', label: t.catGenui },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6417] animate-pulse" />
              <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648]">
                {isVi ? '// Giao Diện CH Play / App Store' : '// App Store & Play Store Screens'}
              </p>
            </div>
            <h3 className="font-display italic text-3xl sm:text-5xl text-[#F4F2EA]">
              {t.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#8E96A4] mt-2 max-w-xl">
              {isVi 
                ? 'Các màn hình thực tế của ứng dụng AstroBite. Cuộn ngang tự động hoặc nhấn vào ảnh để xem chi tiết.' 
                : 'Real production interfaces from AstroBite. Auto-scrolls horizontally or click any screen to enlarge.'}
            </p>
          </div>

          {/* Controls: Category Tabs + Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Minimal Category Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  data-cursor="pointer"
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#141C2E] text-[#FFF4DE] border border-[#FF6417]/50 shadow-[0_0_12px_rgba(255,100,23,0.15)] font-semibold'
                      : 'text-[#8E96A4] hover:text-[#F4F2EA] bg-[#0E131F]/50 border border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Prev / Next Manual Nav Buttons */}
            <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
              <button
                onClick={scrollLeftManual}
                data-cursor="pointer"
                className="p-2 rounded-full bg-[#141C2E] text-[#8E96A4] hover:text-[#F4F2EA] hover:border-[#FF6417] border border-[rgba(244,242,234,0.1)] transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRightManual}
                data-cursor="pointer"
                className="p-2 rounded-full bg-[#141C2E] text-[#8E96A4] hover:text-[#F4F2EA] hover:border-[#FF6417] border border-[rgba(244,242,234,0.1)] transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal Carousel Track (CH Play style) with gradient edge fades */}
      <div className="relative w-full">
        {/* Left Gradient Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#08090A] to-transparent z-10" />
        
        {/* Right Gradient Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#08090A] to-transparent z-10" />

        {/* Scrollable Container */}
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
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none py-4 px-6 sm:px-12 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollBehavior: 'auto' }}
        >
          {loopScreenshots.map((item, idx) => {
            const originalIndex = idx % filteredScreenshots.length;

            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={(e) => handleOpen(originalIndex, e)}
                data-cursor="view"
                data-cursor-text="VIEW"
                className="shrink-0 w-[145px] sm:w-[170px] md:w-[195px] group cursor-pointer"
              >
                {/* Smartphone Mockup Frame */}
                <div className="relative aspect-[9/19] w-full rounded-2xl overflow-hidden bg-[#0E131F] border border-[rgba(244,242,234,0.12)] group-hover:border-[#FF6417] group-hover:shadow-[0_12px_32px_rgba(255,100,23,0.2)] group-hover:-translate-y-1.5 transition-all duration-300">
                  
                  {/* Phone Screen Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover object-top select-none"
                  />

                  {/* Glass Reflection Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-40 group-hover:opacity-10 transition-opacity" />

                  {/* Corner Badge */}
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-black/60 backdrop-blur-md text-[#FFB648] border border-[rgba(244,242,234,0.1)]">
                    {item.category}
                  </div>
                </div>

                {/* Caption Underneath */}
                <div className="pt-2 text-center">
                  <p className="text-[11px] sm:text-xs font-medium text-[#F4F2EA] group-hover:text-[#FFB648] transition-colors truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] font-mono text-[#8E96A4]/60 truncate">
                    {item.tag || item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Cue beneath Carousel */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex items-center justify-between text-[11px] font-mono text-[#8E96A4]/60">
          <div className="flex items-center gap-2">
            {isPaused ? (
              <>
                <Pause className="w-3 h-3 text-[#FFB648]" />
                <span>{isVi ? 'Đang tạm dừng tự động cuộn (Rê chuột)' : 'Auto-scroll paused'}</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span>{isVi ? 'Đang tự động cuộn nhẹ · Rê chuột để giữ xem' : 'Auto-scrolling · Hover to pause'}</span>
              </>
            )}
          </div>
          <span>{filteredScreenshots.length} {isVi ? 'màn hình' : 'screens'}</span>
        </div>

      </div>

      {/* Fullscreen Modal Lightbox */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row items-center bg-[#0E131F] border border-[rgba(244,242,234,0.12)] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              data-cursor="pointer"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#141C2E] text-[#F4F2EA] hover:text-[#FF6417] border border-[rgba(244,242,234,0.1)] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next controls */}
            <button
              onClick={handlePrev}
              data-cursor="pointer"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[#141C2E]/80 text-[#F4F2EA] hover:text-[#FF6417] border border-[rgba(244,242,234,0.1)] transition-colors cursor-pointer hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              data-cursor="pointer"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[#141C2E]/80 text-[#F4F2EA] hover:text-[#FF6417] border border-[rgba(244,242,234,0.1)] transition-colors cursor-pointer hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Preview */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-[75vh] bg-black/60 flex items-center justify-center p-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Caption & Technical Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-4">
              <div className="text-xs font-mono text-[#FFB648] uppercase tracking-wider">
                {selectedItem.category} · Screen {(selectedScreenIndex || 0) + 1} / {filteredScreenshots.length}
              </div>

              <h3 className="font-display italic text-2xl sm:text-3xl text-[#F4F2EA]">
                {selectedItem.title}
              </h3>

              <p className="text-sm text-[#8E96A4] leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.techSpecs && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(244,242,234,0.08)]">
                  {selectedItem.techSpecs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#141C2E] text-[#8E96A4] border border-[rgba(244,242,234,0.06)]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
