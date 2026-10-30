import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getAstrobiteScreenshots } from '../../data/astrobiteData';
import { ScreenshotItem } from '../../types';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const GalleryLightbox: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const screenshots = getAstrobiteScreenshots(language);
  const isVi = language === 'vi';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredScreenshots = screenshots.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const selectedItem: ScreenshotItem | null =
    selectedScreenIndex !== null ? filteredScreenshots[selectedScreenIndex] : null;

  const handleOpen = (index: number, e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) triggerRef.current = e.currentTarget;
    setSelectedScreenIndex(index);
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

  const categories = [
    { id: 'all', label: t.catAll },
    { id: 'cockpit', label: t.catCockpit },
    { id: 'ai', label: t.catAi },
    { id: 'features', label: t.catFeatures },
    { id: 'genui', label: t.catGenui },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-2">
              {isVi ? '// Giao Diện Thực Tế' : '// Production Interface'}
            </p>
            <h3 className="font-display italic text-3xl sm:text-5xl text-[#F4F2EA]">
              {t.title}
            </h3>
            <p className="text-sm text-[#8E96A4] mt-2 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          {/* Minimal Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="pointer"
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#141C2E] text-[#FFF4DE] border border-[#FF6417]/50 shadow-[0_0_12px_rgba(255,100,23,0.15)] font-semibold'
                    : 'text-[#8E96A4] hover:text-[#F4F2EA] bg-[#0E131F]/50 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with [VIEW] Contextual Cursor */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 reveal">
          {filteredScreenshots.map((item, idx) => (
            <button
              key={item.id}
              onClick={(e) => handleOpen(idx, e)}
              data-cursor="view"
              data-cursor-text="VIEW"
              className="group relative rounded-xl overflow-hidden bg-[#0E131F] border border-[rgba(244,242,234,0.06)] hover:border-[#FF6417]/50 transition-all text-left flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#FF6417]"
            >
              <div className="aspect-[9/18] w-full overflow-hidden bg-black/40 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-3.5 bg-[#0E131F]/90 border-t border-[rgba(244,242,234,0.06)]">
                <div className="text-[10px] font-mono text-[#FFB648] uppercase tracking-wider mb-0.5">
                  {item.category}
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#F4F2EA] truncate">
                  {item.title}
                </h4>
              </div>
            </button>
          ))}
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

      </div>
    </section>
  );
};
