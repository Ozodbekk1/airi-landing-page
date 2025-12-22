/** @format */

"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Users,
  ExternalLink,
  Filter,
  X,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface PublicationsProps {
  darkMode: boolean;
}

interface Publication {
  id: number;
  title: { en: string; uz: string; ru: string };
  authors: string[];
  category: string;
  year: number;
  journal: string;
  abstract: { en: string; uz: string; ru: string };
  link: string;
  citations: number;
}

export const Publications: React.FC<PublicationsProps> = ({ darkMode }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-slate-900/50 border-slate-800"
    : "bg-white border-gray-200";
  const hoverBorderClass = darkMode
    ? "hover:border-blue-500/50"
    : "hover:border-blue-400/50";

  const publications: Publication[] = [
    {
      id: 1,
      title: {
        en: "Deep Learning Approaches for Uzbek Language Processing",
        uz: "O'zbek Tilini Qayta Ishlash uchun Chuqur O'rganish Yondashuvlari",
        ru: "Подходы Глубокого Обучения для Обработки Узбекского Языка",
      },
      authors: ["A. Karimov", "S. Rashidova", "M. Abdullayev"],
      category: "Natural Language Processing",
      year: 2024,
      journal: "International Journal of AI Research",
      abstract: {
        en: "This paper presents novel deep learning architectures specifically designed for processing the Uzbek language, addressing unique linguistic challenges and improving NLP performance for low-resource languages.",
        uz: "Ushbu maqola o'zbek tilini qayta ishlash uchun maxsus ishlab chiqilgan yangi chuqur o'rganish arxitekturalarini taqdim etadi, o'ziga xos lingvistik muammolarni hal qiladi va kam resursli tillar uchun NLP samaradorligini yaxshilaydi.",
        ru: "В этой статье представлены новые архитектуры глубокого обучения, специально разработанные для обработки узбекского языка, решающие уникальные лингвистические проблемы и повышающие производительность NLP для низкоресурсных языков.",
      },
      link: "#",
      citations: 45,
    },
    {
      id: 2,
      title: {
        en: "AI-Powered Medical Diagnosis System for Cardiovascular Diseases",
        uz: "Yurak-Qon Tomir Kasalliklari uchun AI Asosidagi Tibbiy Diagnostika Tizimi",
        ru: "Система Медицинской Диагностики на Основе ИИ для Сердечно-Сосудистых Заболеваний",
      },
      authors: ["D. Tursunov", "N. Yusupova", "R. Alimov", "L. Sharipova"],
      category: "Healthcare AI",
      year: 2024,
      journal: "Medical AI Quarterly",
      abstract: {
        en: "We introduce an advanced AI system for early detection and diagnosis of cardiovascular diseases, utilizing deep neural networks and medical imaging analysis to achieve 94% accuracy in clinical trials.",
        uz: "Biz klinik sinovlarda 94% aniqlikka erishish uchun chuqur neyron tarmoqlar va tibbiy tasvirlarni tahlil qilishdan foydalangan holda, yurak-qon tomir kasalliklarini erta aniqlash va diagnostika qilish uchun ilg'or AI tizimini taqdim etamiz.",
        ru: "Мы представляем передовую систему ИИ для ранней диагностики сердечно-сосудистых заболеваний, использующую глубокие нейронные сети и анализ медицинских изображений для достижения точности 94% в клинических испытаниях.",
      },
      link: "#",
      citations: 78,
    },
    {
      id: 3,
      title: {
        en: "Computer Vision for Smart Agriculture in Central Asia",
        uz: "Markaziy Osiyoda Aqlli Qishloq Xo'jaligi uchun Kompyuter Ko'rishi",
        ru: "Компьютерное Зрение для Умного Сельского Хозяйства в Центральной Азии",
      },
      authors: ["F. Nazarov", "G. Khamidova"],
      category: "Computer Vision",
      year: 2023,
      journal: "Agricultural Technology Review",
      abstract: {
        en: "This research presents a computer vision-based system for crop disease detection and yield prediction, specifically adapted for Central Asian agricultural conditions and local crop varieties.",
        uz: "Ushbu tadqiqot Markaziy Osiyo qishloq xo'jaligi sharoitlari va mahalliy ekin navlari uchun maxsus moslashtirilgan, ekin kasalliklarini aniqlash va hosilni bashorat qilish uchun kompyuter ko'rishiga asoslangan tizimni taqdim etadi.",
        ru: "Это исследование представляет систему на основе компьютерного зрения для обнаружения болезней растений и прогнозирования урожайности, специально адаптированную для условий сельского хозяйства Центральной Азии и местных сортов культур.",
      },
      link: "#",
      citations: 32,
    },
    {
      id: 4,
      title: {
        en: "Reinforcement Learning for Traffic Optimization in Tashkent",
        uz: "Toshkentda Yo'l Harakatini Optimallashtirish uchun Mustahkamlangan O'rganish",
        ru: "Обучение с Подкреплением для Оптимизации Трафика в Ташкенте",
      },
      authors: ["B. Ergashev", "K. Islamova", "V. Petrov"],
      category: "Machine Learning",
      year: 2023,
      journal: "Smart Cities Journal",
      abstract: {
        en: "We apply reinforcement learning algorithms to optimize traffic flow in Tashkent, reducing congestion by 27% during peak hours through intelligent traffic light control and route recommendations.",
        uz: "Biz Toshkentda yo'l harakatini optimallashtirish uchun mustahkamlangan o'rganish algoritmlarini qo'llaymiz, aqlli svetofor boshqaruvi va marshrut tavsiyalari orqali eng ko'p yuklanish vaqtida tirbandlikni 27% ga kamaytiramiz.",
        ru: "Мы применяем алгоритмы обучения с подкреплением для оптимизации транспортного потока в Ташкенте, сокращая заторы на 27% в часы пик благодаря интеллектуальному управлению светофорами и рекомендациям маршрутов.",
      },
      link: "#",
      citations: 56,
    },
    {
      id: 5,
      title: {
        en: "Neural Networks for Aral Sea Environmental Monitoring",
        uz: "Orol Dengizi Ekologik Monitoringi uchun Neyron Tarmoqlar",
        ru: "Нейронные Сети для Экологического Мониторинга Аральского Моря",
      },
      authors: ["A. Mirzayev", "S. Nurmatova", "T. Kamilov"],
      category: "Environmental Science",
      year: 2024,
      journal: "Environmental Monitoring & Assessment",
      abstract: {
        en: "Novel neural network approaches for analyzing satellite imagery and environmental data to monitor ecological changes in the Aral Sea region, enabling early warning systems for environmental hazards.",
        uz: "Orol dengizi mintaqasidagi ekologik o'zgarishlarni kuzatish, ekologik xavflar uchun erta ogohlantirish tizimlarini yoqish uchun sun'iy yo'ldosh tasvirlari va ekologik ma'lumotlarni tahlil qilish uchun yangi neyron tarmoq yondashuvlari.",
        ru: "Новые подходы нейронных сетей для анализа спутниковых снимков и экологических данных для мониторинга экологических изменений в регионе Аральского моря, обеспечивая системы раннего предупреждения об экологических опасностях.",
      },
      link: "#",
      citations: 41,
    },
    {
      id: 6,
      title: {
        en: "Federated Learning for Privacy-Preserving Healthcare Analytics",
        uz: "Maxfiylikni Saqlash Sog'liqni Saqlash Analitikasi uchun Federativ O'rganish",
        ru: "Федеративное Обучение для Сохранения Конфиденциальности в Медицинской Аналитике",
      },
      authors: ["Z. Rakhimov", "M. Safarova"],
      category: "Healthcare AI",
      year: 2023,
      journal: "Privacy-Preserving AI Conference",
      abstract: {
        en: "Implementation of federated learning techniques for collaborative healthcare analytics while maintaining patient data privacy, demonstrating applications in multi-hospital settings across Uzbekistan.",
        uz: "Bemor ma'lumotlarining maxfiyligini saqlab, hamkorlikdagi sog'liqni saqlash analitikasi uchun federativ o'rganish usullarini joriy etish, O'zbekiston bo'ylab ko'p kasalxonali sharoitlarda qo'llanmalarni namoyish etish.",
        ru: "Внедрение методов федеративного обучения для совместной медицинской аналитики с сохранением конфиденциальности данных пациентов, демонстрация применений в многобольничных условиях по всему Узбекистану.",
      },
      link: "#",
      citations: 29,
    },
  ];

  const categories = [
    "all",
    ...Array.from(new Set(publications.map((p) => p.category))),
  ];
  const years = [
    "all",
    ...Array.from(new Set(publications.map((p) => p.year))).sort(
      (a, b) => b - a
    ),
  ];

  const filteredPublications = publications.filter((pub) => {
    const categoryMatch =
      selectedCategory === "all" || pub.category === selectedCategory;
    const yearMatch =
      selectedYear === "all" || pub.year.toString() === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <>
      <section
        id='publications'
        className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl mb-4'>
              <span className='bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>
                {t("publications.title")}
              </span>
            </h2>
            <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
              {t("publications.subtitle")}
            </p>
          </div>

          {/* Filters */}
          <div className='flex flex-col sm:flex-row gap-4 mb-12'>
            <div className='flex-1'>
              <div className='flex items-center gap-2 mb-2'>
                <Filter size={18} className='text-blue-500' />
                <label className={`text-sm ${textSecondaryClass}`}>
                  Category
                </label>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  darkMode
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                <option value='all'>{t("publications.filterAll")}</option>
                {categories
                  .filter((c) => c !== "all")
                  .map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>

            <div className='flex-1'>
              <div className='flex items-center gap-2 mb-2'>
                <Calendar size={18} className='text-blue-500' />
                <label className={`text-sm ${textSecondaryClass}`}>Year</label>
              </div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  darkMode
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                <option value='all'>{t("publications.filterYear")}</option>
                {years
                  .filter((y) => y !== "all")
                  .map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Publications Grid */}
          <div className='grid md:grid-cols-2 gap-6'>
            {filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className={`${cardBgClass} backdrop-blur-sm border rounded-2xl p-6 ${hoverBorderClass} transition-all duration-300`}>
                <div className='flex items-start gap-3 mb-4'>
                  <BookOpen className='w-6 h-6 text-blue-500 flex-shrink-0 mt-1' />
                  <div className='flex-1'>
                    <h3
                      className={`text-xl ${
                        darkMode ? "text-white" : "text-gray-900"
                      } mb-2`}>
                      {pub.title[language]}
                    </h3>
                    <div className='flex flex-wrap items-center gap-3 mb-3'>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          darkMode
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                        {pub.category}
                      </span>
                      <span className={`text-sm ${textSecondaryClass}`}>
                        {pub.year}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className={`${textSecondaryClass} text-sm mb-4 line-clamp-3`}>
                  {pub.abstract[language]}
                </p>

                <div className='flex items-center gap-2 mb-4'>
                  <Users size={16} className='text-blue-500' />
                  <p className={`text-sm ${textSecondaryClass}`}>
                    {pub.authors.join(", ")}
                  </p>
                </div>

                <div className='flex items-center justify-between'>
                  <span className={`text-sm ${textSecondaryClass}`}>
                    {pub.citations} citations
                  </span>
                  <button
                    onClick={() => setSelectedPublication(pub)}
                    className='px-4 py-2 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 text-sm'>
                    {t("publications.readMore")}
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className='text-center py-12'>
              <p className={`${textSecondaryClass} text-lg`}>
                No publications found for the selected filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Publication Detail Modal */}
      {selectedPublication && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'>
          <div
            className={`relative ${cardBgClass} border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            <div className='sticky top-0 bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-t-3xl'>
              <button
                onClick={() => setSelectedPublication(null)}
                className='absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors'>
                <X size={24} />
              </button>
              <BookOpen className='w-12 h-12 mb-4' />
              <h2 className='text-3xl mb-4 pr-12'>
                {selectedPublication.title[language]}
              </h2>
              <div className='flex flex-wrap gap-3'>
                <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
                  {selectedPublication.category}
                </span>
                <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
                  {selectedPublication.year}
                </span>
                <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
                  {selectedPublication.citations} citations
                </span>
              </div>
            </div>

            <div className='p-8'>
              <div className='mb-6'>
                <h3
                  className={`text-lg ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-2 flex items-center gap-2`}>
                  <Users size={20} className='text-blue-500' />
                  {t("publications.authors")}
                </h3>
                <p className={textSecondaryClass}>
                  {selectedPublication.authors.join(", ")}
                </p>
              </div>

              <div className='mb-6'>
                <h3
                  className={`text-lg ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-2`}>
                  {t("publications.published")} in
                </h3>
                <p className={`${textSecondaryClass} italic`}>
                  {selectedPublication.journal}, {selectedPublication.year}
                </p>
              </div>

              <div className='mb-8'>
                <h3
                  className={`text-lg ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  Abstract
                </h3>
                <p className={`${textSecondaryClass} leading-relaxed`}>
                  {selectedPublication.abstract[language]}
                </p>
              </div>

              <div className='pt-6 border-t border-gray-200 dark:border-slate-700'>
                <button
                  onClick={() => setSelectedPublication(null)}
                  className='w-full px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300'>
                  {t("research.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
