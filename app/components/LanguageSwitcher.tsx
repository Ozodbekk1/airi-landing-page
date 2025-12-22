/** @format */

"use client";
import React, { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage, Language } from "../contexts/LanguageContext";

interface LanguageSwitcherProps {
  darkMode: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  darkMode,
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "uz", name: "Uzbek", nativeName: "O'zbekcha" },
    { code: "ru", name: "Russian", nativeName: "Русский" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
          darkMode
            ? "bg-slate-800 hover:bg-slate-700 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-900"
        } transition-colors`}
        aria-label='Select language'>
        <Globe size={18} />
        <span className='text-sm font-medium'>
          {currentLanguage?.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full right-0 mt-2 w-48 rounded-xl shadow-xl border ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-gray-200"
          } overflow-hidden z-50`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between ${
                darkMode
                  ? "hover:bg-slate-800 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              } transition-colors`}>
              <div>
                <div
                  className={`text-sm font-medium ${
                    language === lang.code ? "text-blue-500" : ""
                  }`}>
                  {lang.nativeName}
                </div>
                <div
                  className={`text-xs ${
                    darkMode ? "text-slate-400" : "text-gray-500"
                  }`}>
                  {lang.name}
                </div>
              </div>
              {language === lang.code && (
                <Check size={18} className='text-blue-500' />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
