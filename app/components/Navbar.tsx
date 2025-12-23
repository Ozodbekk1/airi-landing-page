/** @format */

import React from "react";
import { Menu, X, Sun, Moon, Brain } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { t } = useLanguage();
  const navBgClass = darkMode ? "bg-slate-950/95" : "bg-white/95";
  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.research"), href: "#research" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.publications"), href: "#publications" },
    { label: t("nav.news"), href: "#news" },
    { label: t("nav.partners"), href: "#partners" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const handleGetStarted = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `${navBgClass} backdrop-blur-lg shadow-lg ${
              darkMode ? "shadow-blue-500/10" : "shadow-gray-200"
            }`
          : "bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <a
            href='#about'
            onClick={(e) => smoothScroll(e, "#about")}
            className='flex items-center space-x-3 cursor-pointer'>
            <div className='w-12 h-12  from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg'>
              <Image
                alt='hero'
                src={"https://server.airi.uz/public_media/img/logo.png"}
                width={50}
                height={50}
              />
            </div>
            <div>
              <h1
                className={`text-xl ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                AIRI.UZ
              </h1>
              <p className={`text-xs ${textSecondaryClass}`}>
                AI Research Institute
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`${
                  darkMode
                    ? "text-slate-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors relative group`}>
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300'></span>
              </a>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher darkMode={darkMode} />

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-lg ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition-colors`}
              aria-label='Toggle theme'>
              {darkMode ? (
                <Sun size={20} className='text-yellow-400' />
              ) : (
                <Moon size={20} className='text-blue-600' />
              )}
            </button>

            <button
              onClick={handleGetStarted}
              className='px-6 py-2.5 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300'>
              {t("nav.getStarted")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center gap-2'>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-slate-800" : "bg-gray-200"
              } transition-colors`}
              aria-label='Toggle theme'>
              {darkMode ? (
                <Sun size={20} className='text-yellow-400' />
              ) : (
                <Moon size={20} className='text-blue-600' />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
              } transition-colors`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-slate-900/95" : "bg-white/95"
          } backdrop-blur-lg border-t ${
            darkMode ? "border-slate-800" : "border-gray-200"
          }`}>
          <div className='px-4 py-6 space-y-4'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`block ${
                  darkMode
                    ? "text-slate-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors py-2`}>
                {item.label}
              </a>
            ))}
            <div className='pt-2'>
              <LanguageSwitcher darkMode={darkMode} />
            </div>
            <button
              onClick={handleGetStarted}
              className='w-full px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg'>
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
