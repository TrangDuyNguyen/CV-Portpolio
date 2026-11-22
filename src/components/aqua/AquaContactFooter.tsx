import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getProfileData } from '../../data/profileData';
import { DualRollLink } from './AquaChrome';

export const AquaContactFooter: React.FC = () => {
  const { language } = useLanguage();
  const profile = getProfileData(language);

  return (
    <section
      id="contact"
      className="px-5 sm:px-[45px] lg:px-[70px] mt-[100px] md:mt-[200px] pb-10"
    >
      {/* Section Header: CONTACT + 2px full-width black line (.projectLinewannawork) */}
      <div>
        <h2 className="font-montreal text-[18px] uppercase tracking-[0.02em] text-black">
          CONTACT
        </h2>
        <div className="projectLinewannawork w-full h-[2px] bg-black mt-[18px]" />
      </div>

      {/* Main CTA Block (lg:mt-[200px] mt-[40px]) */}
      <div className="mt-[48px] lg:mt-[180px] text-center">
        <p className="wannaworksubheading font-montreal text-[16px] sm:text-[18px] uppercase tracking-[0.04em] text-black">
          {language === 'en' ? 'WANT TO WORK TOGETHER?' : 'SẴN SÀNG HỢP TÁC CHO DỰ ÁN MỚI?'}
        </p>

        <h3 className="sayhi font-clash-bold text-[13vw] sm:text-[11vw] leading-[11vw] uppercase text-center my-6 sm:my-9 tracking-tight text-black">
          SAY HI!
        </h3>

        <div className="mx-auto w-fit overflow-hidden">
          <a
            href={`mailto:${profile.email}`}
            className="block font-clash-medium text-[5.1vw] sm:text-[5.4vw] leading-normal uppercase text-center text-black hover:opacity-70 transition-opacity"
          >
            {profile.email.toUpperCase()}
          </a>
        </div>

        {/* Direct Phone & Printable CV quick links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-montreal text-[14px] sm:text-[15px] uppercase tracking-wider text-[#1e2022]">
          <a
            href={`tel:${profile.phone}`}
            className="border-b border-black pb-0.5 hover:opacity-65"
          >
            TEL: +84 {profile.phone.replace(/^0/, '')}
          </a>
          <span>·</span>
          <a
            href={profile.cvViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black pb-0.5 hover:opacity-65"
          >
            {language === 'en' ? 'VIEW PRINTABLE CV ↗' : 'XEM BẢN IN CV ATS ↗'}
          </a>
          <span>·</span>
          <a
            href={profile.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black pb-0.5 hover:opacity-65"
          >
            {language === 'en' ? 'DOWNLOAD PDF ↗' : 'TẢI CV PDF ↗'}
          </a>
        </div>
      </div>

      {/* Footer (1:1 with aquadev.site: Left label + Middle U-shaped bottom bracket + Right social links & copyright) */}
      <footer className="mt-[90px] lg:mt-[150px] pt-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-[16px] sm:text-[18px] font-montreal text-black">
        {/* Left */}
        <a
          href={profile.cvViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-black hover:opacity-70 transition-opacity"
        >
          Mobile Engineer (Flutter · iOS · Android)
        </a>

        {/* Middle decorative U-shaped bottom-bracket line (lg:flex hidden w-full h-[14px] border-r border-b border-l rounded-b-lg border-[#000] self-end) */}
        <div className="hidden lg:flex w-full h-[14px] border-r border-b border-l rounded-b-lg rounded-bl-lg border-[#000000] self-end mx-6" />

        {/* Right: Social links (#link-parent-3/4/5) + Copyright */}
        <div className="shrink-0 flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-[#100d25]">
          <DualRollLink
            text="Github"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] sm:text-[18px] normal-case"
          />
          <DualRollLink
            text="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] sm:text-[18px] normal-case"
          />
          <DualRollLink
            text="CV PDF"
            href={profile.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] sm:text-[18px] normal-case"
          />
          <span className="text-black">Nguyen Duy Trang ©2026</span>
        </div>
      </footer>
    </section>
  );
};
