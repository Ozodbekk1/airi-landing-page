/** @format */

"use client";
import React, { useState } from "react";
import { Newspaper, Calendar, ArrowRight, X, Tag } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface NewsProps {
  darkMode: boolean;
}

interface NewsArticle {
  id: number;
  title: { en: string; uz: string; ru: string };
  excerpt: { en: string; uz: string; ru: string };
  content: { en: string; uz: string; ru: string };
  date: string;
  category: string;
  image: string;
  author: string;
}

export const News: React.FC<NewsProps> = ({ darkMode }) => {
  const language = "en";
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [displayCount, setDisplayCount] = useState(6);

  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-slate-900/50 border-slate-800"
    : "bg-white border-gray-200";
  const hoverBorderClass = darkMode
    ? "hover:border-blue-500/50"
    : "hover:border-blue-400/50";

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: {
        en: "AIRI Partners with MIT for Joint AI Research Initiative",
        uz: "AIRI MIT bilan Qo'shma AI Tadqiqot Tashabbusi uchun Hamkorlik Qiladi",
        ru: "AIRI Сотрудничает с MIT в Совместной Инициативе по Исследованиям ИИ",
      },
      excerpt: {
        en: "Historic partnership to advance AI research in Central Asia through knowledge exchange and collaborative projects.",
        uz: "Markaziy Osiyoda AI tadqiqotlarini bilim almashinuvi va hamkorlikdagi loyihalar orqali rivojlantirish uchun tarixiy hamkorlik.",
        ru: "Историческое партнерство для продвижения исследований ИИ в Центральной Азии через обмен знаниями и совместные проекты.",
      },
      content: {
        en: 'The AI Research Institute of Uzbekistan (AIRI) has announced a groundbreaking partnership with Massachusetts Institute of Technology (MIT) to establish a joint research initiative focused on advancing artificial intelligence applications in Central Asia. This collaboration will bring together leading researchers from both institutions to work on projects addressing regional challenges in healthcare, agriculture, and education. The partnership includes student exchange programs, joint publications, and shared access to cutting-edge research facilities. Dr. Ahmed Karimov, Director of AIRI, stated: "This partnership marks a significant milestone in our mission to position Uzbekistan as a regional hub for AI innovation." The initiative will launch with three major projects focusing on natural language processing for Turkic languages, AI-powered agricultural optimization, and telemedicine solutions for rural areas.',
        uz: "O'zbekiston Sun'iy Intellekt Tadqiqot Instituti (AIRI) Massachusets Texnologiya Instituti (MIT) bilan Markaziy Osiyoda sun'iy intellekt ilovalarini rivojlantirish uchun qo'shma tadqiqot tashabbusini tashkil etish bo'yicha tarixiy hamkorlikni e'lon qildi. Bu hamkorlik sog'liqni saqlash, qishloq xo'jaligi va ta'limdagi mintaqaviy muammolarni hal qilish bo'yicha loyihalar ustida ishlash uchun ikkala muassasa etakchi tadqiqotchilarini birlashtiradi. Hamkorlik talabalar almashinuvi dasturlari, qo'shma nashrlar va ilg'or tadqiqot ob'ektlariga umumiy kirishni o'z ichiga oladi. AIRI direktori doktor Ahmad Karimov shunday dedi: \"Bu hamkorlik O'zbekistonni AI innovatsiyalari uchun mintaqaviy markaz sifatida joylashtirish missiyamizda muhim bosqichni belgilaydi.\" Tashabbis turkiy tillar uchun tabiiy tilni qayta ishlash, AI tomonidan quvvatlanadigan qishloq xo'jaligini optimallashtirish va qishloq joylari uchun telemeditsina yechimlari bo'yicha uchta asosiy loyiha bilan boshlanadi.",
        ru: 'Институт исследований искусственного интеллекта Узбекистана (AIRI) объявил о прорывном партнерстве с Массачусетским технологическим институтом (MIT) для создания совместной исследовательской инициативы, направленной на развитие применения искусственного интеллекта в Центральной Азии. Это сотрудничество объединит ведущих исследователей из обоих учреждений для работы над проектами, решающими региональные проблемы в области здравоохранения, сельского хозяйства и образования. Партнерство включает программы студенческого обмена, совместные публикации и общий доступ к передовым исследовательским объектам. Доктор Ахмед Каримов, директор AIRI, заявил: "Это партнерство знаменует важную веху в нашей миссии позиционировать Узбекистан как региональный центр инноваций в области ИИ." Инициатива начнется с трех крупных проектов, сосредоточенных на обработке естественного языка для тюркских языков, оптимизации сельского хозяйства на базе ИИ и телемедицинских решениях для сельских районов.',
      },
      date: "2024-12-15",
      category: "Partnership",
      image:
        "https://lottie.host/246e32db-587c-4aee-9cd2-4a5f997c7dcc/IGwNtpYusm.lottie",
      author: "Dr. A. Karimov",
    },
    {
      id: 2,
      title: {
        en: "Breakthrough in Uzbek Language AI: New Model Achieves 95% Accuracy",
        uz: "O'zbek Tili AI da Yutuq: Yangi Model 95% Aniqlikka Erishdi",
        ru: "Прорыв в ИИ Узбекского Языка: Новая Модель Достигает 95% Точности",
      },
      excerpt: {
        en: "AIRI researchers develop state-of-the-art language model specifically trained for Uzbek, outperforming all previous models.",
        uz: "AIRI tadqiqotchilari o'zbek tili uchun maxsus o'rgatilgan, barcha oldingi modellardan ustun bo'lgan ilg'or til modelini ishlab chiqdilar.",
        ru: "Исследователи AIRI разработали современную языковую модель, специально обученную для узбекского языка, превосходящую все предыдущие модели.",
      },
      content: {
        en: 'In a major breakthrough for natural language processing, AIRI researchers have successfully developed and deployed a new AI language model specifically designed for the Uzbek language. The model, named "O\'zbekAI-1", demonstrates unprecedented accuracy of 95% in various NLP tasks including sentiment analysis, named entity recognition, and machine translation. This achievement represents a significant leap forward for Uzbek language technology, which has historically been underrepresented in AI research due to its status as a low-resource language.',
        uz: "Tabiiy tilni qayta ishlashda katta yutuq sifatida, AIRI tadqiqotchilari o'zbek tili uchun maxsus ishlab chiqilgan yangi AI til modelini muvaffaqiyatli ishlab chiqdilar va joyladilar.",
        ru: "В результате крупного прорыва в обработке естественного языка исследователи AIRI успешно разработали и внедрили новую языковую модель ИИ, специально разработанную для узбекского языка.",
      },
      date: "2024-12-10",
      category: "Research",
      image:
        "https://lottie.host/bb9bb5a1-0683-4ad2-a23c-6f6e5ff8bfa2/Wsv3fFloLj.lottie",
      author: "Dr. S. Rashidov",
    },
    {
      id: 3,
      title: {
        en: "AI-Powered Medical Diagnosis System Launches in 50 Hospitals",
        uz: "AI Asosidagi Tibbiy Diagnostika Tizimi 50 Kasalxonada Ishga Tushirildi",
        ru: "Система Медицинской Диагностики на Базе ИИ Запускается в 50 Больницах",
      },
      excerpt: {
        en: "Revolutionary diagnostic tool developed by AIRI now operational across major healthcare facilities nationwide.",
        uz: "AIRI tomonidan ishlab chiqilgan inqilobiy diagnostika vositasi endi butun mamlakat bo'ylab asosiy sog'liqni saqlash muassasalarida ishlaydi.",
        ru: "Революционный диагностический инструмент, разработанный AIRI, теперь работает в крупных медицинских учреждениях по всей стране.",
      },
      content: {
        en: "The Ministry of Health has officially launched AIRI's AI-powered medical diagnosis system in 50 hospitals across Uzbekistan, marking a transformative moment in the country's healthcare sector. The system, which specializes in cardiovascular disease detection, has demonstrated 94% accuracy in clinical trials.",
        uz: "Sog'liqni saqlash vazirligi rasman O'zbekiston bo'ylab 50 ta kasalxonada AIRI ning AI asosidagi tibbiy diagnostika tizimini ishga tushirdi.",
        ru: "Министерство здравоохранения официально запустило систему медицинской диагностики на базе ИИ от AIRI в 50 больницах по всему Узбекистану.",
      },
      date: "2024-12-05",
      category: "Innovation",
      image:
        "https://lottie.host/ca634754-aa18-468f-9ff9-663ebb11fdc7/9T6G1AAkS0.lottie",
      author: "Ministry of Health",
    },
    {
      id: 4,
      title: {
        en: "AIRI Hosts International AI Conference with 500+ Participants",
        uz: "AIRI 500+ Ishtirokchi bilan Xalqaro AI Konferensiyasini O'tkazadi",
        ru: "AIRI Проводит Международную Конференцию по ИИ с 500+ Участниками",
      },
      excerpt: {
        en: "Leading AI researchers from 30 countries gather in Tashkent to discuss future of artificial intelligence.",
        uz: "30 mamlakatdan etakchi AI tadqiqotchilari sun'iy intellektning kelajagini muhokama qilish uchun Toshkentda yig'ilishdi.",
        ru: "Ведущие исследователи ИИ из 30 стран собираются в Ташкенте для обсуждения будущего искусственного интеллекта.",
      },
      content: {
        en: 'AIRI successfully hosted the "Central Asia AI Summit 2024", bringing together over 500 participants from 30 countries for three days of presentations, workshops, and networking.',
        uz: 'AIRI "Markaziy Osiyo AI Sammiti 2024" ni muvaffaqiyatli o\'tkazdi.',
        ru: 'AIRI успешно провел "Саммит по ИИ Центральной Азии 2024".',
      },
      date: "2024-11-28",
      category: "Event",
      image:
        "https://lottie.host/d397eed2-4f41-49d5-bf8b-5fa5366fd8c5/adqhlDz3TU.lottie",
      author: "AIRI Events Team",
    },
    {
      id: 5,
      title: {
        en: "New AI Training Program Graduates First 100 Specialists",
        uz: "Yangi AI O'rgatish Dasturi Birinchi 100 Mutaxassisni Tayyorladi",
        ru: "Новая Программа Обучения ИИ Выпускает Первых 100 Специалистов",
      },
      excerpt: {
        en: "AIRI's intensive six-month AI training program produces highly skilled professionals ready for the industry.",
        uz: "AIRI ning intensiv olti oylik AI o'rgatish dasturi sanoat uchun tayyor yuqori malakali mutaxassislarni tayyorlaydi.",
        ru: "Интенсивная шестимесячная программа обучения ИИ от AIRI готовит высококвалифицированных специалистов для промышленности.",
      },
      content: {
        en: "The first cohort of AIRI's Advanced AI Training Program graduated this week, marking a milestone in the institute's mission to build local AI talent.",
        uz: "AIRI ning Ilg'or AI O'rgatish Dasturining birinchi guruhi shu hafta bitirdi.",
        ru: "Первая когорта Программы повышения квалификации по ИИ от AIRI окончила обучение на этой неделе.",
      },
      date: "2024-11-20",
      category: "Education",
      image:
        "https://lottie.host/7e3a9baa-edd7-4e26-9f54-8f70fa23a1cb/rL9IlW4am4.lottie",
      author: "Education Department",
    },
    {
      id: 6,
      title: {
        en: "AIRI Wins National Innovation Award for Environmental Monitoring System",
        uz: "AIRI Ekologik Monitoring Tizimi uchun Milliy Innovatsiya Mukofotini Qo'lga Kiritdi",
        ru: "AIRI Получает Национальную Премию за Инновации в Системе Экологического Мониторинга",
      },
      excerpt: {
        en: "Institute's Aral Sea monitoring project recognized as year's most impactful technological innovation.",
        uz: "Institutning Orol dengizi monitoring loyihasi yilning eng ta'sirli texnologik innovatsiyasi sifatida tan olindi.",
        ru: "Проект мониторинга Аральского моря института признан самой значимой технологической инновацией года.",
      },
      content: {
        en: "AIRI's Environmental Monitoring System for the Aral Sea region has been awarded the prestigious National Innovation Award 2024 by the Ministry of Innovation.",
        uz: "AIRI ning Orol dengizi mintaqasi uchun Ekologik Monitoring Tizimi Innovatsiyalar vazirligi tomonidan nufuzli Milliy Innovatsiya Mukofoti 2024 ni oldi.",
        ru: "Система экологического мониторинга AIRI для региона Аральского моря была удостоена престижной Национальной премии за инновации 2024 от Министерства инноваций.",
      },
      date: "2024-11-15",
      category: "Award",
      image:
        "https://lottie.host/41612b20-6561-42f7-8fd6-b0c17190a923/Wqr2SO6vtu.lottie",
      author: "Ministry of Innovation",
    },
  ];

  const displayedNews = newsArticles.slice(0, displayCount);

  return (
    <>
      <section id='news' className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
                Latest News & Updates
              </span>
            </h2>
            <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
              Stay informed about our latest achievements, partnerships, and
              innovations
            </p>
          </div>

          {/* News Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            {displayedNews.map((article) => (
              <div
                key={article.id}
                className={`${cardBgClass} backdrop-blur-sm border rounded-2xl overflow-hidden ${hoverBorderClass} hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1`}
                onClick={() => setSelectedNews(article)}>
                {/* Lottie Container - Fixed and Flexible */}
                <div
                  className={`relative h-48 overflow-hidden ${
                    darkMode
                      ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                      : "bg-gradient-to-br from-blue-50 to-purple-50"
                  } flex items-center justify-center`}>
                  <div className='w-full h-full flex items-center justify-center p-4'>
                    <DotLottieReact
                      src={article.image}
                      loop
                      autoplay
                      className='w-full h-full max-w-[160px] max-h-[160px] object-contain group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-3 flex-wrap'>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        darkMode
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                      {article.category}
                    </span>
                    <span
                      className={`text-xs ${textSecondaryClass} flex items-center gap-1`}>
                      <Calendar size={14} />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    } mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors`}>
                    {article.title[language]}
                  </h3>
                  <p
                    className={`${textSecondaryClass} text-sm mb-4 line-clamp-3 leading-relaxed`}>
                    {article.excerpt[language]}
                  </p>
                  <div className='flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700'>
                    <span
                      className={`text-xs font-medium ${textSecondaryClass}`}>
                      {article.author}
                    </span>
                    <button className='text-blue-500 hover:text-blue-400 flex items-center gap-1 text-sm font-medium transition-colors'>
                      Read More
                      <ArrowRight
                        size={16}
                        className='group-hover:translate-x-1 transition-transform'
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {displayCount < newsArticles.length && (
            <div className='text-center'>
              <button
                onClick={() => setDisplayCount(displayCount + 3)}
                className='px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 font-medium'>
                Load More News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'>
          <div
            className={`relative ${cardBgClass} border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
            <div className='sticky top-0 bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-t-3xl z-10'>
              <button
                onClick={() => setSelectedNews(null)}
                className='absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors'>
                <X size={24} />
              </button>

              {/* Modal Lottie - Centered and Properly Sized */}
              <div className='flex justify-center mb-4'>
                <div className='w-24 h-24 flex items-center justify-center'>
                  <DotLottieReact
                    src={selectedNews.image}
                    loop
                    autoplay
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>

              <div className='flex items-center gap-3 mb-4 flex-wrap'>
                <span className='px-3 py-1 bg-white/20 rounded-full text-sm font-medium flex items-center gap-1'>
                  <Tag size={14} />
                  {selectedNews.category}
                </span>
                <span className='px-3 py-1 bg-white/20 rounded-full text-sm font-medium flex items-center gap-1'>
                  <Calendar size={14} />
                  {new Date(selectedNews.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className='text-3xl font-bold mb-2 pr-12'>
                {selectedNews.title[language]}
              </h2>
              <p className='text-white/80 text-sm'>By {selectedNews.author}</p>
            </div>

            <div className='p-8'>
              <p className={`${textSecondaryClass} leading-relaxed text-lg`}>
                {selectedNews.content[language]}
              </p>

              <div className='mt-8 pt-6 border-t border-gray-200 dark:border-slate-700'>
                <button
                  onClick={() => setSelectedNews(null)}
                  className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 font-medium'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
