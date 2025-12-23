/** @format */
"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { ResearchAreas } from "./components/ResearchAreas";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { News } from "./components/News";
import { Partners } from "./components/Partners";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
// import LiquidCursor from "./components/liquid-cursor";
const LiquidCursor = dynamic(
  () => import("./components/liquid-cursor"),
  { ssr: false } // <- prevents server-side rendering
);

const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const bgClass = darkMode
    ? "bg-slate-950 text-white"
    : "bg-gray-50 text-gray-900";

  return (
    <div
      className={`min-h-screen ${bgClass} transition-colors duration-300 overflow-hidden`}>
      {darkMode ? (
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20'></div>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
        </div>
      ) : (
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50'></div>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl'></div>
        </div>
      )}

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <>
        <LiquidCursor />
        <Hero darkMode={darkMode} />
      </>

      <Stats darkMode={darkMode} />

      <ResearchAreas darkMode={darkMode} />

      <Projects
        darkMode={darkMode}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />

      <Publications darkMode={darkMode} />

      <News darkMode={darkMode} />

      <Partners darkMode={darkMode} />

      <CTA darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
