import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight, X, Sparkles, Filter } from 'lucide-react';
import { getAstrobiteScreenshots } from '../../data/astrobiteData';
import { ScreenshotItem } from '../../types';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const GalleryLightbox: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const screenshots = getAstrobiteScreenshots(language);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
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
    <section id="gallery" className="py-20 border-t border-slate-300/70 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 reveal">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold">
                {t.badge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0E131F] border border-[rgba(244,242,234,0.08)] overflow-x-auto shadow-sm">
            <Filter className="w-3.5 h-3.5 text-[#FFB648] ml-1.5 mr-0.5 hidden sm:block shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedScreenIndex(null);
                }}
                data-cursor="pointer"
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer font-mono ${
                  activeCategory === cat.id
                    ? 'bg-[#FF6417] text-[#FFF4DE] shadow-sm'
                    : 'text-[#8E96A4] hover:text-[#F4F2EA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredScreenshots.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={(e) => handleOpen(index, e)}
              data-cursor="view"
              data-cursor-text="VIEW"
              className="text-left bg-[#0E131F]/90 rounded-2xl overflow-hidden border border-[rgba(244,242,234,0.08)] hover:border-[#FF6417]/50 hover:shadow-[0_0_24px_rgba(255,100,23,0.2)] transition-all group flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF6417]"
              aria-label={`${item.title} - ${language === 'en' ? 'Click to inspect' : 'Nhấp để xem chi tiết'}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[9/16] bg-[#141C2E] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#08090A]/0 group-hover:bg-[#08090A]/40 transition-colors flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#FF6417] text-[#FFF4DE] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FFB648] font-semibold block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="text-xs font-bold text-[#F4F2EA] line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal Lightbox Dialog */}
        {selectedItem && (
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          >
            {/* Click-outside Backdrop */}
            <div className="absolute inset-0" onClick={handleClose} aria-hidden="true" />

            {/* Modal Content Box */}
            <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row">
              
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer shadow-md"
                aria-label={t.closeTooltip}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 shadow-lg cursor-pointer"
                aria-label={t.prevTooltip}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 md:right-auto md:left-[54%] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 shadow-lg cursor-pointer"
                aria-label={t.nextTooltip}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Preview Container (Left) */}
              <div className="md:w-7/12 bg-slate-100 dark:bg-slate-950 p-6 flex items-center justify-center">
                <div className="max-h-[60vh] md:max-h-[75vh] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-slate-800">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Details Sidebar (Right) */}
              <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="cyan" size="sm">
                      {selectedItem.tag}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      {selectedScreenIndex! + 1} / {filteredScreenshots.length}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {selectedItem.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-wider font-mono text-slate-500 font-bold block">
                      {t.techSpecsLabel}
                    </span>
                    <ul className="space-y-2">
                      {selectedItem.techSpecs.map((spec, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 font-mono"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono">
                  <span>AstroBite • Flutter & Riverpod Case Study</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
