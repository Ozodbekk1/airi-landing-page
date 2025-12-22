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

  const handleExploreResearch = () => {
    const researchSection = document.querySelector("#research");
    if (researchSection) {
      const offset = 80;
      const elementPosition = researchSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id='about'
      className='relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <div
            className={`inline-flex items-center px-4 py-2 ${
              darkMode
                ? "bg-blue-500/10 border-blue-500/20"
                : "bg-blue-50 border-blue-200"
            } border rounded-full mb-6 backdrop-blur-sm`}>
            <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse'></span>
            <span
              className={`text-sm ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}>
              {t("hero.badge")}
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl mb-6 leading-tight'>
            <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
              {t("hero.title1")}
            </span>
            <br />
            <span className='bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>
              {t("hero.title2")}
            </span>
            <br />
            <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
              {t("hero.title3")}
            </span>
          </h1>

          <p
            className={`text-xl ${textSecondaryClass} max-w-3xl mx-auto mb-10 leading-relaxed`}>
            {t("hero.description")}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              onClick={handleExploreResearch}
              className='px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
              {t("hero.exploreResearch")}
              <ArrowRight size={20} />
            </button>
            <button
              onClick={handleContactUs}
              className={`px-8 py-4 border-2 ${
                darkMode
                  ? "border-blue-500/50 hover:bg-blue-500/10"
                  : "border-blue-400 hover:bg-blue-50"
              } rounded-xl transition-all duration-300 flex items-center gap-2`}>
              <Mail size={20} />
              {t("hero.contactUs")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
