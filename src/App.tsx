import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AstroBiteSection } from './components/sections/AstroBiteSection';
import { CareerSection } from './components/sections/CareerSection';
import { GalleryLightbox } from './components/sections/GalleryLightbox';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CustomCursor } from './components/common/CustomCursor';

export const App: React.FC = () => {
  useSmoothScroll();
  useScrollReveal();

  return (
    <div className="u-grain min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-200 relative overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main className="overflow-x-hidden">
        <HeroSection />
        <AstroBiteSection />
        <CareerSection />
        <GalleryLightbox />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
