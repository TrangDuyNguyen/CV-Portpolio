import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getAstroContent } from '../../data/aquaAstrobiteData';

export const AquaAstroBiteSection: React.FC = () => {
  const { language } = useLanguage();
  const c = getAstroContent(language);

  return (
    <section id="astrobite" className="mt-24">
      {/* Header: label left, version right, 1.5px line */}
      <div className="flex items-center justify-between">
        <h2 className="font-montreal text-[18px] uppercase tracking-[0.02em]">
          {language === 'en' ? 'PERSONAL PROJECT' : 'DỰ ÁN CÁ NHÂN'}
        </h2>
        <span className="font-montreal text-[14px] uppercase text-[#666]">{c.version}</span>
      </div>
      <div className="w-full h-[1.5px] bg-black mt-4 mb-10" />

      {/* Title + pitch */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <h3 className="lg:col-span-7 font-clash-bold uppercase text-[20vw] sm:text-[14vw] lg:text-[11vw] leading-[0.9] tracking-[-0.03em]">
          <span className="block">ASTRO</span>
          <span className="block">BITE</span>
        </h3>
        <div className="lg:col-span-5 pb-2">
          <p className="font-montreal text-[15px] sm:text-[17px] uppercase leading-[1.4]">{c.tagline}</p>
          <p className="mt-3 font-montreal text-[12px] uppercase tracking-[0.14em] text-[#666]">{c.role}</p>
          <p className="mt-4 font-montreal text-[15px] leading-[1.65] text-[#1e2022]">{c.description}</p>
        </div>
      </div>

      {/* 4 verified metrics */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-black">
        {c.metrics.map((m) => (
          <div key={m.label} className="p-5 border-r border-b border-black">
            <div className="font-montreal text-[11px] uppercase tracking-[0.16em] text-[#666]">{m.label}</div>
            <div className="mt-2 font-clash-bold text-[20px] sm:text-[24px] uppercase leading-tight">{m.value}</div>
          </div>
        ))}
      </div>

      {/* 5 pillars, alternating left/right; image is optional */}
      <div className="mt-16 flex flex-col gap-16 lg:gap-24">
        {c.pillars.map((p, i) => (
          <article
            key={p.number}
            className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              i % 2 && p.image ? 'lg:[&>div:first-child]:order-2' : ''
            }`}
          >
            {p.image && (
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-[240px] sm:w-[280px] aspect-[9/19] rounded-[7px] overflow-hidden bg-black transition-transform duration-500 group-hover:-translate-y-2">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            <div className={p.image ? 'lg:col-span-7' : 'lg:col-span-12 lg:pl-[calc(41.666%+1rem)]'}>
              <div className="flex items-baseline gap-4">
                <span className="font-clash-bold text-[40px] sm:text-[56px] leading-none">{p.number}</span>
                <span className="px-2.5 py-0.5 border border-black font-montreal text-[11px] uppercase tracking-wider">
                  {p.badge}
                </span>
              </div>
              <h4 className="mt-3 font-clash-medium text-[24px] sm:text-[32px] uppercase leading-[1.1]">{p.title}</h4>
              <p className="mt-1 font-montreal text-[12px] uppercase tracking-[0.14em] text-[#666]">{p.tag}</p>
              <p className="mt-4 font-montreal text-[15px] leading-[1.65] text-[#1e2022]">{p.description}</p>
              <ul className="mt-4 space-y-2">
                {p.highlights.map((h, k) => (
                  <li key={k} className="flex items-start gap-2.5 font-montreal text-[14px] leading-[1.55] text-[#1e2022]">
                    <span className="font-clash-bold text-[12px] mt-0.5">0{k + 1}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 bg-black text-white font-montreal text-[11px] uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Engineering & Release */}
      <div className="mt-20">
        <h4 className="font-montreal text-[18px] uppercase tracking-[0.02em]">
          {language === 'en' ? 'ENGINEERING & RELEASE' : 'KỸ THUẬT & PHÁT HÀNH'}
        </h4>
        <div className="w-full h-[1.5px] bg-black mt-4" />
        <dl className="divide-y divide-black/20">
          {c.engineering.map((r) => (
            <div key={r.label} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-4">
              <dt className="md:col-span-3 font-montreal text-[13px] uppercase tracking-[0.14em] text-[#666]">{r.label}</dt>
              <dd className="md:col-span-9 font-montreal text-[15px] leading-[1.6] text-[#1e2022]">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
