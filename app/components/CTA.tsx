/** @format */

import React from "react";
import { ArrowRight, FileText, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface CTAProps {
  darkMode: boolean;
}

export const CTA: React.FC<CTAProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";

  const handleJoinTeam = () => {
    window.open(
      "mailto:careers@airi.uz?subject=Career Inquiry - Join AIRI Team",
      "_blank"
    );
  };

  const handleViewOpportunities = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='relative'>
          <div className='absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20'></div>
          <div
            className={`relative ${
              darkMode
                ? "bg-linear-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                : "bg-linear-to-r from-blue-50 to-purple-50 border-blue-200"
            } border rounded-3xl p-12 md:p-16 text-center backdrop-blur-sm`}>
            <GraduationCap className='w-16 h-16 text-blue-500 mx-auto mb-6' />
            <h2 className='text-4xl md:text-5xl mb-6'>
              <span className='bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>
                {t("cta.title")}
              </span>
            </h2>
            <p
              className={`${textSecondaryClass} text-lg mb-8 max-w-2xl mx-auto`}>
              {t("cta.description")}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button
                onClick={handleJoinTeam}
                className='px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2'>
                {t("cta.joinTeam")}
                <ArrowRight size={20} />
              </button>
              <button
                onClick={handleViewOpportunities}
                className={`px-8 py-4 border-2 ${
                  darkMode
                    ? "border-blue-500/50 hover:bg-blue-500/10"
                    : "border-blue-400 hover:bg-blue-50"
                } rounded-xl transition-all duration-300 flex items-center justify-center gap-2`}>
                <FileText size={20} />
                {t("cta.viewOpportunities")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
