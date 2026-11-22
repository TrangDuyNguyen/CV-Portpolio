import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  AquaProjectItem,
  getAquaProducts,
  getAquaProjects,
} from '../../data/aquaPortfolioData';
import { AquaProjectCard, AquaProjectModal } from './AquaProjectList';
import { AquaContactFooter } from './AquaContactFooter';

export const AquaWorksPage: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'project' | 'products'>('project');
  const [selectedItem, setSelectedItem] = useState<AquaProjectItem | null>(null);

  const projects = getAquaProjects(language);
  const products = getAquaProducts(language);
  const currentList = activeTab === 'project' ? projects : products;

  return (
    <div className="bg-white text-black min-h-screen pt-28 sm:pt-36">
      {/* Top Tab Bar: Project vs Products (1:1 with aquadev.site/works) */}
      <section className="px-5 sm:px-[45px] lg:px-[70px]">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <div className="flex items-baseline gap-8 sm:gap-14">
            <button
              type="button"
              onClick={() => setActiveTab('project')}
              className={`font-clash-bold uppercase text-[13vw] sm:text-[8.5vw] leading-none tracking-[-0.03em] transition-colors ${
                activeTab === 'project' ? 'text-black' : 'text-[#cccccc] hover:text-black/60'
              }`}
            >
              Project
              <sup className="ml-1 font-montreal text-[16px] sm:text-[22px] align-top">
                0{projects.length}
              </sup>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`font-clash-bold uppercase text-[13vw] sm:text-[8.5vw] leading-none tracking-[-0.03em] transition-colors ${
                activeTab === 'products' ? 'text-black' : 'text-[#cccccc] hover:text-black/60'
              }`}
            >
              Products
              <sup className="ml-1 font-montreal text-[16px] sm:text-[22px] align-top">
                0{products.length}
              </sup>
            </button>
          </div>

          <p className="max-w-[380px] font-montreal uppercase text-[14px] sm:text-[15px] leading-[1.4] text-black">
            {activeTab === 'project'
              ? language === 'en'
                ? 'PRODUCTION MOBILE APPLICATIONS SHIPPED ACROSS CONSUMER SOCIAL (1M+ DOWNLOADS), RETAIL POS HARDWARE & ON-DEVICE AI.'
                : 'CÁC ỨNG DỤNG DI ĐỘNG THƯƠNG MẠI ĐÃ PHÁT HÀNH TỪ MẠNG XÃ HỘI 1M+ LƯỢT TẢI, MÁY POS BÁN LẺ ĐẾN AI ĐA PHƯƠNG THỨC.'
              : language === 'en'
              ? 'CORE ARCHITECTURAL ENGINES, RUST FFI BRIDGES, GENUI CATALOGS & NATIVE OS WIDGETS ENGINEERED FROM SCRATCH.'
              : 'CÁC ENGINE KIẾN TRÚC LÕI, CẦU NỐI RUST FFI, BỘ WIDGET GENUI & TIỆN ÍCH HỆ ĐIỀU HÀNH TỰ THIẾT KẾ TỪ ĐẦU.'}
          </p>
        </div>

        {/* Full-Width Black Hairline Divider */}
        <div className="w-full h-[1.5px] bg-black mt-6 mb-12 lg:mb-20" />

        {/* Project / Products Cards List */}
        <div className="flex flex-col divide-y divide-black/10 lg:divide-y-0 lg:gap-[110px] mb-[120px] lg:mb-[240px]">
          {currentList.map((item, idx) => (
            <AquaProjectCard
              key={item.id}
              project={item}
              index={idx}
              cursorLabel="View Works"
              onSelect={(p) => setSelectedItem(p)}
            />
          ))}
        </div>
      </section>

      <AquaContactFooter />

      <AquaProjectModal
        project={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};
