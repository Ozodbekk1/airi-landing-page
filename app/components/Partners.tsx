/** @format */

import React from "react";
import { Building } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface PartnersProps {
  darkMode: boolean;
}

interface Partner {
  name: string;
  type: string;
}

export const Partners: React.FC<PartnersProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-slate-900/50 border-slate-800"
    : "bg-white border-gray-200";
  const hoverBorderClass = darkMode
    ? "hover:border-blue-500/50"
    : "hover:border-blue-400/50";

  const partners: Partner[] = [
    { name: "Ministry of Digital Technologies", type: "Government" },
    { name: "Tashkent International University", type: "Education" },
    { name: "TUIT", type: "Education" },
    { name: "Leading Foreign Institutes", type: "Research" },
    { name: "Industry Partners", type: "Private Sector" },
    { name: "Global AI Community", type: "International" },
  ];

  return (
    <section id='partners' className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl mb-4'>
            <span className='bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>
              {t("partners.title")}
            </span>
          </h2>
          <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
            {t("partners.subtitle")}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${cardBgClass} backdrop-blur-sm border rounded-2xl p-8 ${hoverBorderClass} transition-all duration-300 text-center group cursor-pointer`}>
              <Building className='w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform' />
              <p
                className={`${
                  darkMode
                    ? "text-slate-300 group-hover:text-white"
                    : "text-gray-700 group-hover:text-gray-900"
                } transition-colors mb-2`}>
                {partner.name}
              </p>
              <span
                className={`text-sm ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
