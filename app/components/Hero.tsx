/** @format */

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

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
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id='about'
      className='relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Background Decorative Orbs */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none'>
        <div
          className={`absolute top-24 left-[15%] w-64 h-64 rounded-full blur-[100px] opacity-20 ${
            darkMode ? "bg-blue-600" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute bottom-20 right-[15%] w-80 h-80 rounded-full blur-[120px] opacity-15 ${
            darkMode ? "bg-cyan-500" : "bg-cyan-200"
          }`}
        />
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          {/* 1. Badge Animation */}
          <div className='animate-reveal'>
            <div
              className={`inline-flex items-center px-4 py-2 ${
                darkMode
                  ? "bg-blue-500/10 border-blue-500/20"
                  : "bg-blue-50 border-blue-200"
              } border rounded-full mb-8 backdrop-blur-sm`}>
              <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse'></span>
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-blue-300" : "text-blue-700"
                }`}>
                {t("hero.badge")}
              </span>
            </div>
          </div>

          {/* 2. Main Title - Split for sequential animation */}
          <h1 className='text-5xl md:text-7xl mb-6 leading-tight font-bold tracking-tight'>
            <div className='animate-reveal delay-100'>
              <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
                {t("hero.title1")}
              </span>
            </div>
            <div className='animate-reveal delay-200'>
              <span className='bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>
                {t("hero.title2")}
              </span>
            </div>
            <div className='animate-reveal delay-300'>
              <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
                {t("hero.title3")}
              </span>
            </div>
          </h1>

          {/* 3. Description Animation */}
          <div className='animate-reveal delay-400'>
            <p
              className={`text-xl ${textSecondaryClass} max-w-3xl mx-auto mb-10 leading-relaxed`}>
              {t("hero.description")}
            </p>
          </div>

          {/* 4. Buttons Animation */}
          <div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-reveal delay-400'
            style={{ animationDelay: "750ms" }}>
            <button
              onClick={() => handleScroll("#research")}
              className='group px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
              {t("hero.exploreResearch")}
              <ArrowRight
                size={20}
                className='group-hover:translate-x-1 transition-transform'
              />
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className={`group px-8 py-4 border-2 ${
                darkMode
                  ? "border-blue-500/50 hover:bg-blue-500/10 text-blue-400"
                  : "border-blue-200 hover:bg-blue-50 text-blue-700"
              } rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2`}>
              <Mail
                size={20}
                className='group-hover:scale-110 transition-transform'
              />
              {t("hero.contactUs")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
