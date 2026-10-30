import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { CareerSection } from './components/sections/CareerSection';
import { AstroBiteSection } from './components/sections/AstroBiteSection';
import { GalleryLightbox } from './components/sections/GalleryLightbox';
import { SkillsSection } from './components/sections/SkillsSection';
import { EngineeringSection } from './components/sections/EngineeringSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CustomCursor } from './components/common/CustomCursor';
import { SparksCanvas } from './components/common/SparksCanvas';

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="u-grain min-h-screen bg-[#08090A] text-[#F4F2EA] selection:bg-[#FF6417]/30 selection:text-[#FFF4DE] transition-colors duration-250 relative">
      {/* 2px Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Full-screen Physics Sparks Engine on click */}
      <SparksCanvas />

      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Cinematic Editorial Showcase */}
        <HeroSection />

        {/* 2. Professional Commercial Experience (Finviet & Hahalolo) */}
        <CareerSection />

        {/* 3. Selected Projects: AstroBite Case Study & Architecture */}
        <AstroBiteSection />

        {/* 4. AstroBite Production UI Screenshots & Lightbox */}
        <GalleryLightbox />

        {/* 5. Technical Skills & Architecture Competencies */}
        <SkillsSection />

        {/* 6. Engineering Approach & Principles */}
        <EngineeringSection />

        {/* 7. Contact & Resume Download */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
