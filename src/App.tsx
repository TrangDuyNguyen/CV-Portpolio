import React, { useEffect, useState } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import {
  AquaChrome,
  AquaCursor,
  AquaPreloader,
  AquaRoute,
} from './components/aqua/AquaChrome';
import { AquaHomePage } from './components/aqua/AquaHomePage';
import { AquaWorksPage } from './components/aqua/AquaWorksPage';
import { AquaAboutPage } from './components/aqua/AquaAboutPage';

const normalizePathname = (pathname: string): AquaRoute => {
  if (pathname.startsWith('/work')) return '/works';
  if (pathname.startsWith('/about')) return '/about';
  return '/';
};

export const App: React.FC = () => {
  useSmoothScroll();
  const [route, setRoute] = useState<AquaRoute>(() =>
    normalizePathname(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => {
      setRoute(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = (nextRoute: AquaRoute) => {
    if (nextRoute !== route) {
      window.history.pushState({}, '', nextRoute);
      setRoute(nextRoute);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      <AquaPreloader />
      <AquaCursor />
      <AquaChrome currentRoute={route} onNavigate={handleNavigate} />

      <main>
        {route === '/' && <AquaHomePage onNavigate={handleNavigate} />}
        {route === '/works' && <AquaWorksPage />}
        {route === '/about' && <AquaAboutPage />}
      </main>
    </div>
  );
};

export default App;
