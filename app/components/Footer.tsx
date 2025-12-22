import React from 'react';
import { Brain, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const textSecondaryClass = darkMode ? 'text-slate-400' : 'text-gray-600';

  const quickLinks = [
    { label: t('footer.aboutUs'), href: '#about' },
    { label: t('nav.research'), href: '#research' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.publications'), href: '#' },
    { label: t('footer.careers'), href: 'mailto:careers@airi.uz' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/airi-uz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/airi-uz', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/airi_uz', label: 'Twitter' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      id="contact"
      className={`relative z-10 ${
        darkMode
          ? 'bg-slate-900/50 border-slate-800'
          : 'bg-white/50 border-gray-200'
      } backdrop-blur-sm border-t py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1
                  className={`text-xl ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  AIRI.UZ
                </h1>
                <p className={`text-xs ${textSecondaryClass}`}>
                  AI Research Institute
                </p>
              </div>
            </div>
            <p className={`${textSecondaryClass} leading-relaxed mb-6`}>
              Digital Technologies and Artificial Intelligence Research
              Institute - Leading AI research and development in Uzbekistan.
              Established by Presidential Resolution No. PP-4996.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 ${
                      darkMode
                        ? 'bg-slate-800 hover:bg-blue-600'
                        : 'bg-gray-200 hover:bg-blue-500'
                    } rounded-lg flex items-center justify-center transition-colors ${
                      darkMode ? '' : 'hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`${
                darkMode ? 'text-white' : 'text-gray-900'
              } mb-4`}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`${textSecondaryClass} hover:text-blue-500 transition-colors flex items-center gap-2`}
                  >
                    <ChevronRight size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className={`${
                darkMode ? 'text-white' : 'text-gray-900'
              } mb-4`}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li className={`flex items-start gap-3 ${textSecondaryClass}`}>
                <Mail
                  size={20}
                  className="text-blue-500 mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@airi.uz"
                  className="hover:text-blue-500 transition-colors"
                >
                  info@airi.uz
                </a>
              </li>
              <li className={`flex items-start gap-3 ${textSecondaryClass}`}>
                <Phone
                  size={20}
                  className="text-blue-500 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+998712634198"
                  className="hover:text-blue-500 transition-colors"
                >
                  +998 71 263 41 98
                </a>
              </li>
              <li className={`flex items-start gap-3 ${textSecondaryClass}`}>
                <MapPin
                  size={20}
                  className="text-blue-500 mt-1 flex-shrink-0"
                />
                <span>Tashkent, Uzbekistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t ${
            darkMode ? 'border-slate-800' : 'border-gray-200'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`${textSecondaryClass} text-sm text-center md:text-left`}
            >
              © 2025 AIRI.UZ. All rights reserved. Republic of Uzbekistan
              Government Institute
            </p>
            <div className={`flex gap-6 text-sm ${textSecondaryClass}`}>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};