/** @format */
"use client";
import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import HeroVideoEmbed from "./hero-video";

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Video */}
      {/* <HeroVideoEmbed url='https://assets.pinterest.com/ext/embed.html?id=9499849210213939' /> */}

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          {/* 1. Badge Animation */}
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm text-blue-400 animate-fade-in'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
            </span>
            {t("hero.badge")}
          </div>

          {/* 2. Main Title - Split for sequential animation */}
          <div className='space-y-2'>
            <h1 className='text-5xl md:text-7xl font-bold animate-slide-up'>
              <span className={darkMode ? "text-white" : "text-gray-900"}>
                {t("hero.title1")}
              </span>
            </h1>
            <h1 className='text-5xl md:text-7xl font-bold animate-slide-up animation-delay-100'>
              <span className='bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>
                {t("hero.title2")}
              </span>
            </h1>
            <h1 className='text-5xl md:text-7xl font-bold animate-slide-up animation-delay-200'>
              <span className={darkMode ? "text-white" : "text-gray-900"}>
                {t("hero.title3")}
              </span>
            </h1>
          </div>

          {/* 3. Description Animation */}
          <p
            className={`text-xl md:text-2xl ${textSecondaryClass} max-w-2xl mx-auto animate-fade-in animation-delay-300`}>
            {t("hero.description")}
          </p>

          {/* 4. Buttons Animation */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400'>
            <button
              onClick={() => handleScroll("#research")}
              className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
              {t("hero.exploreResearch")}
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className={`group px-8 py-4 border-2 ${
                darkMode
                  ? "border-blue-500/50 hover:bg-blue-500/10 text-blue-400"
                  : "border-blue-200 hover:bg-blue-50 text-blue-700"
              } rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 backdrop-blur-sm`}>
              <Mail className='w-5 h-5' />
              {t("hero.contactUs")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
