import React, { useState, useEffect, useCallback } from 'react';
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

  const filteredScreenshots = screenshots.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const selectedItem: ScreenshotItem | null =
    selectedScreenIndex !== null ? filteredScreenshots[selectedScreenIndex] : null;

  const handleOpen = (index: number) => {
    setSelectedScreenIndex(index);
  };

  const handleClose = () => {
    setSelectedScreenIndex(null);
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

  // Keyboard navigation
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
    { id: 'ai', label: t.catAi },
    { id: 'genui', label: t.catGenui },
    { id: 'features', label: t.catFeatures },
    { id: 'widgets', label: t.catWidgets },
  ];

  return (
    <section id="gallery" className="py-24 border-t border-slate-300/70 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#0B1120] relative">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Category Filter Tabs - Iconic Neumorphic Segmented Control */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 overflow-x-auto max-w-full">
            <Filter className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 ml-1.5 mr-0.5 hidden sm:block shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedScreenIndex(null);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E8ECF2] dark:bg-[#151F32] text-sky-700 dark:text-sky-400 shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] border border-sky-300/80 dark:border-sky-700/60'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredScreenshots.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpen(index)}
              className="group bg-[#E8ECF2] dark:bg-[#151F32] rounded-3xl p-4 sm:p-5 shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] dark:shadow-[8px_8px_18px_#050811,-8px_-8px_18px_#1E2D44] hover:shadow-[12px_12px_24px_#bed0e2,-12px_-12px_24px_#ffffff] dark:hover:shadow-[12px_12px_24px_#04060d,-12px_-12px_24px_#22344f] border border-white/80 dark:border-slate-800 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Sunken Bezel Container with Screenshot */}
                <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-[#DCE2EA] dark:bg-[#0D1524] shadow-[inset_4px_4px_8px_#c5d1e2,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#050811,inset_-4px_-4px_8px_#1A283E] p-2 mb-4 border border-white/60 dark:border-slate-800">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <div className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-lg text-slate-800 dark:text-white flex items-center gap-2 text-xs font-semibold">
                        <ZoomIn className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <span>Zoom</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="cyan" size="sm">
                    {item.tag}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    #{index + 1}
                  </span>
                </div>

                <h3 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-2 line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-300/60 dark:border-slate-800">
                {item.techSpecs.slice(0, 2).map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[#E8ECF2] dark:bg-[#0D1524] text-slate-600 dark:text-slate-400 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] dark:shadow-[inset_1.5px_1.5px_3px_#050811,inset_-1.5px_-1.5px_3px_#1A283E] border border-white/60 dark:border-slate-800 truncate max-w-full"
                  >
                    {spec}
                  </span>
                ))}
                {item.techSpecs.length > 2 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500 dark:text-slate-400">
                    +{item.techSpecs.length - 2}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            {/* Backdrop click */}
            <div className="absolute inset-0" onClick={handleClose} />

            <div className="relative z-10 max-w-4xl w-full max-h-[92vh] flex flex-col md:flex-row bg-[#E8ECF2] dark:bg-[#151F32] rounded-3xl overflow-hidden shadow-2xl border border-white/80 dark:border-slate-800">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1E2D44] border border-white/80 dark:border-slate-700 cursor-pointer"
                title={t.closeTooltip}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left / Prev Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-xl bg-[#E8ECF2]/90 dark:bg-[#151F32]/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] border border-white/80 dark:border-slate-700 cursor-pointer"
                title={t.prevTooltip}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right / Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 md:right-auto md:left-[52%] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-xl bg-[#E8ECF2]/90 dark:bg-[#151F32]/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] border border-white/80 dark:border-slate-700 cursor-pointer"
                title={t.nextTooltip}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Preview Container (Left Half) */}
              <div className="md:w-7/12 bg-[#DCE2EA] dark:bg-[#0D1524] p-6 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="max-h-[65vh] md:max-h-[80vh] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#E8ECF2] dark:border-[#151F32]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Sidebar Info (Right Half) */}
              <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="cyan" size="sm">
                      {selectedItem.tag}
                    </Badge>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {selectedScreenIndex! + 1} / {filteredScreenshots.length}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    {selectedItem.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-bold block">
                      {t.techSpecsLabel}
                    </span>
                    <ul className="space-y-2">
                      {selectedItem.techSpecs.map((spec, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2 p-2 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1A283E] border border-white/60 dark:border-slate-800 font-mono"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-300/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span>AstroBite v2.0.0</span>
                  <span>Flutter + Riverpod</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
