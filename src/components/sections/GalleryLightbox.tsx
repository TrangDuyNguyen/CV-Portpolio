import React, { useState, useEffect, useCallback } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight, X, Sparkles, Filter } from 'lucide-react';
import { astrobiteScreenshots } from '../../data/astrobiteData';
import { ScreenshotItem } from '../../types';
import { Badge } from '../common/Badge';

export const GalleryLightbox: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);

  const filteredScreenshots = astrobiteScreenshots.filter((item) => {
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
    { id: 'all', label: 'Tất cả màn hình' },
    { id: 'ai', label: 'AI Vision Scanner' },
    { id: 'genui', label: 'GenUI & Chat' },
    { id: 'features', label: 'Dashboard & Features' },
    { id: 'widgets', label: 'OS Home Widgets' },
  ];

  return (
    <section id="gallery" className="py-24 border-t border-slate-300/70 bg-[#E8ECF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 reveal">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                Visual Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Showcase Gallery & UI Walkthrough
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Bộ sưu tập ảnh chụp màn hình ứng dụng AstroBite v2.0 thực tế trên thiết bị di động. Nhấp vào bất kỳ ảnh nào để xem kích thước lớn kèm thông số kỹ thuật chi tiết.
            </p>
          </div>

          {/* Category Filter Tabs - Iconic Neumorphic Segmented Control */}
          <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] border border-white/60">
            <Filter className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedScreenIndex(null);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E8ECF2] text-sky-700 shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] border border-sky-300/60 font-semibold'
                    : 'bg-[#E8ECF2] text-slate-600 hover:text-slate-900 shadow-[2px_2px_5px_#c5d1e2,-2px_-2px_5px_#ffffff] hover:shadow-[3px_3px_6px_#bed0e2,-3px_-3px_6px_#ffffff] border border-white/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot Grid with Smooth Tab Switch Animation */}
        <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInScale">
          {filteredScreenshots.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpen(index)}
              className={`bg-[#E8ECF2] rounded-3xl overflow-hidden group cursor-pointer shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] hover:shadow-[12px_12px_24px_#bed0e2,-12px_-12px_24px_#ffffff] border border-white/80 transition-all duration-300 flex flex-col justify-between reveal stagger-${(index % 4) + 1}`}
            >
              {/* Phone Frame Preview - Sunken Screen Bezel */}
              <div className="relative bg-[#DDE4EE] p-4 flex items-center justify-center overflow-hidden aspect-[9/16] shadow-[inset_4px_4px_8px_#c0cdda,inset_-4px_-4px_8px_#ffffff]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#E8ECF2] text-sky-700 font-bold shadow-[4px_4px_10px_rgba(0,0,0,0.25)] transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6">
                  <Badge variant="cyan" size="sm">
                    {item.tag}
                  </Badge>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 border-t border-slate-300/60 bg-[#E8ECF2] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.techSpecs.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[#E8ECF2] text-slate-700 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] border border-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.techSpecs.length > 2 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-lg bg-[#E8ECF2] text-slate-500 shadow-[inset_1px_1px_2px_#c5d1e2,inset_-1px_-1px_2px_#ffffff]">
                      +{item.techSpecs.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-2xl bg-[#E8ECF2] text-slate-700 hover:text-slate-900 shadow-[4px_4px_8px_#c2cee0,-4px_-4px_8px_#ffffff] active:shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] border border-white/80 transition-all cursor-pointer"
              aria-label="Đóng (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-2xl bg-[#E8ECF2] text-slate-700 hover:text-sky-600 shadow-[4px_4px_10px_#c2cee0,-4px_-4px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] border border-white/80 transition-all cursor-pointer"
              aria-label="Ảnh trước (ArrowLeft)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-2xl bg-[#E8ECF2] text-slate-700 hover:text-sky-600 shadow-[4px_4px_10px_#c2cee0,-4px_-4px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] border border-white/80 transition-all cursor-pointer"
              aria-label="Ảnh kế tiếp (ArrowRight)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Body Container */}
            <div
              className="relative max-w-5xl w-full max-h-[92vh] bg-[#E8ECF2] border border-white/90 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[18px_18px_36px_#a8b8c8,-18px_-18px_36px_#ffffff]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Preview Container */}
              <div className="md:w-1/2 bg-[#DDE4EE] p-4 flex items-center justify-center max-h-[50vh] md:max-h-full overflow-hidden shadow-[inset_4px_4px_10px_#bfcddc,inset_-4px_-4px_10px_#ffffff]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[82vh] w-auto object-contain rounded-xl shadow-md border border-white/60"
                />
              </div>

              {/* Details & Specs Sidebar */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="cyan" size="sm">
                      {selectedItem.tag}
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">
                      {selectedScreenIndex! + 1} / {filteredScreenshots.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                    {selectedItem.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5 font-semibold">
                      Đặc tả Kỹ thuật (Technical Specs):
                    </h4>
                    <div className="space-y-2">
                      {selectedItem.techSpecs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-[#E8ECF2] p-2.5 rounded-xl shadow-[inset_2px_2px_5px_#c5d1e2,inset_-2px_-2px_5px_#ffffff] border border-white/60"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-300/60 text-xs text-slate-500 flex items-center justify-between font-mono">
                  <span>Dùng phím ← → để chuyển ảnh</span>
                  <span>Esc để đóng</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
