/** @format */

"use client";
import React, { useState } from "react";
import { Newspaper, Calendar, ArrowRight, X, Tag } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

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
  const { language, t } = useLanguage();
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
      image: "🤝",
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
        en: 'In a major breakthrough for natural language processing, AIRI researchers have successfully developed and deployed a new AI language model specifically designed for the Uzbek language. The model, named "O\'zbekAI-1", demonstrates unprecedented accuracy of 95% in various NLP tasks including sentiment analysis, named entity recognition, and machine translation. This achievement represents a significant leap forward for Uzbek language technology, which has historically been underrepresented in AI research due to its status as a low-resource language. The research team, led by Dr. Sardor Rashidov, utilized innovative transfer learning techniques and created a comprehensive Uzbek language corpus of over 10 billion tokens. "This is a game-changer for digital services in Uzbekistan," said Dr. Rashidov. "Our model will enable more accurate voice assistants, better translation services, and improved accessibility of government digital platforms for Uzbek speakers." The model is now being integrated into various government services and will be made available to researchers and developers through an open API.',
        uz: "Tabiiy tilni qayta ishlashda katta yutuq sifatida, AIRI tadqiqotchilari o'zbek tili uchun maxsus ishlab chiqilgan yangi AI til modelini muvaffaqiyatli ishlab chiqdilar va joyladilar. \"O'zbekAI-1\" deb nomlangan model sentiment tahlili, nomlangan ob'ektlarni aniqlash va mashinali tarjima kabi turli NLP vazifalarida 95% misli ko'rilmagan aniqlikni namoyish etadi. Bu yutuq o'zbek tili texnologiyasi uchun muhim sakrashni anglatadi, u tarixan kam resursli til maqomi tufayli AI tadqiqotlarida kam ifodalangan. Doktor Sardor Rashidov boshchiligidagi tadqiqot guruhi innovatsion transfer o'rganish usullaridan foydalandi va 10 milliarddan ortiq tokendan iborat keng qamrovli o'zbek tili korpusini yaratdi. \"Bu O'zbekistondagi raqamli xizmatlar uchun o'yin o'zgartiruvchi,\" dedi doktor Rashidov. \"Bizning modelimiz yanada aniqroq ovozli yordamchilarni, yaxshi tarjima xizmatlarini va o'zbek tilida so'zlashuvchilar uchun davlat raqamli platformalariga qulayroq kirishni ta'minlaydi.\" Model hozirda turli davlat xizmatlariga integratsiya qilinmoqda va ochiq API orqali tadqiqotchilar va ishlab chiquvchilarga taqdim etiladi.",
        ru: 'В результате крупного прорыва в обработке естественного языка исследователи AIRI успешно разработали и внедрили новую языковую модель ИИ, специально разработанную для узбекского языка. Модель под названием "O\'zbekAI-1" демонстрирует беспрецедентную точность 95% в различных задачах NLP, включая анализ тональности, распознавание именованных сущностей и машинный перевод. Это достижение представляет собой значительный скачок вперед для узбекской языковой технологии, которая исторически была недостаточно представлена в исследованиях ИИ из-за своего статуса низкоресурсного языка. Исследовательская группа под руководством доктора Сардора Рашидова использовала инновационные методы трансферного обучения и создала всеобъемлющий корпус узбекского языка объемом более 10 миллиардов токенов. "Это меняет правила игры для цифровых услуг в Узбекистане," сказал доктор Рашидов. "Наша модель позволит создать более точных голосовых помощников, лучшие услуги перевода и улучшенную доступность государственных цифровых платформ для узбекоязычных пользователей." Модель в настоящее время интегрируется в различные государственные службы и будет доступна исследователям и разработчикам через открытый API.',
      },
      date: "2024-12-10",
      category: "Research",
      image: "🔬",
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
        en: 'The Ministry of Health has officially launched AIRI\'s AI-powered medical diagnosis system in 50 hospitals across Uzbekistan, marking a transformative moment in the country\'s healthcare sector. The system, which specializes in cardiovascular disease detection, has demonstrated 94% accuracy in clinical trials, matching or exceeding the performance of experienced cardiologists in certain diagnostic tasks. Developed over three years by a team of 25 AI specialists and medical professionals, the system analyzes ECG data, cardiac imaging, and patient history to provide real-time diagnostic support and risk assessments. "Early results have been exceptional," reported Dr. Nigora Yusupova, lead medical advisor for the project. "We\'re seeing earlier detection of critical conditions, reduced diagnostic errors, and more efficient use of specialist time." The system is designed to assist, not replace, medical professionals, providing them with advanced analytical tools and evidence-based recommendations. Plans are underway to expand the system to cover additional medical specialties including radiology and pathology, with a goal of reaching 200 hospitals by 2026.',
        uz: "Sog'liqni saqlash vazirligi rasman O'zbekiston bo'ylab 50 ta kasalxonada AIRI ning AI asosidagi tibbiy diagnostika tizimini ishga tushirdi, bu mamlakat sog'liqni saqlash sektorida transformatsion lahzani belgiladi. Yurak-qon tomir kasalliklarini aniqlashga ixtisoslashgan tizim klinik sinovlarda 94% aniqlikni namoyish etdi, ma'lum diagnostika vazifalarida tajribali kardiologlarning ishlashiga mos keladi yoki undan oshadi. 25 ta AI mutaxassislari va tibbiyot mutaxassislari jamoasi tomonidan uch yil davomida ishlab chiqilgan tizim real vaqtda diagnostika yordam va xavf baholashlarini taqdim etish uchun EKG ma'lumotlari, yurak tasvirlari va bemor tarixini tahlil qiladi. \"Dastlabki natijalar ajoyib bo'ldi,\" deb xabar berdi loyihaning etakchi tibbiy maslahatchisi doktor Nigora Yusupova. \"Biz kritik holatlarni erta aniqlash, diagnostika xatolarini kamaytirish va mutaxassis vaqtidan samaraliroq foydalanishni ko'rmoqdamiz.\" Tizim tibbiyot mutaxassislarini almashtirish uchun emas, balki ularga ilg'or tahliliy vositalar va dalillarga asoslangan tavsiyalar bilan yordam berish uchun mo'ljallangan. Tizimni radiologiya va patologiyani o'z ichiga olgan qo'shimcha tibbiy mutaxassisliklarni qamrab olish uchun kengaytirish rejalari amalga oshirilmoqda, maqsad 2026 yilga qadar 200 ta kasalxonaga yetishdir.",
        ru: 'Министерство здравоохранения официально запустило систему медицинской диагностики на базе ИИ от AIRI в 50 больницах по всему Узбекистану, что стало переломным моментом в секторе здравоохранения страны. Система, которая специализируется на обнаружении сердечно-сосудистых заболеваний, продемонстрировала точность 94% в клинических испытаниях, соответствуя или превосходя работу опытных кардиологов в определенных диагностических задачах. Разработанная за три года командой из 25 специалистов по ИИ и медицинских работников, система анализирует данные ЭКГ, изображения сердца и историю пациента для предоставления диагностической поддержки и оценки рисков в реальном времени. "Первые результаты были исключительными," сообщила доктор Нигора Юсупова, ведущий медицинский консультант проекта. "Мы видим более раннее выявление критических состояний, сокращение диагностических ошибок и более эффективное использование времени специалистов." Система разработана для помощи, а не замены медицинских работников, предоставляя им передовые аналитические инструменты и рекомендации на основе доказательств. Ведутся планы по расширению системы для охвата дополнительных медицинских специальностей, включая радиологию и патологию, с целью охвата 200 больниц к 2026 году.',
      },
      date: "2024-12-05",
      category: "Innovation",
      image: "🏥",
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
        en: "AIRI successfully hosted the \"Central Asia AI Summit 2024\", bringing together over 500 participants from 30 countries for three days of presentations, workshops, and networking. The conference featured keynote speeches from renowned AI researchers, panel discussions on ethical AI development, and technical workshops on cutting-edge technologies. Topics ranged from large language models and computer vision to AI governance and sustainable development. The event showcased AIRI's latest research achievements and facilitated valuable collaborations between regional and international institutions. Several bilateral research agreements were signed during the summit, strengthening Uzbekistan's position as an emerging AI hub in Central Asia.",
        uz: "AIRI \"Markaziy Osiyo AI Sammiti 2024\" ni muvaffaqiyatli o'tkazdi, 30 mamlakatdan 500 dan ortiq ishtirokchilarni uch kunlik taqdimotlar, seminarlar va tarmoq aloqalari uchun birlashtirdi. Konferensiya taniqli AI tadqiqotchilari tomonidan asosiy nutqlar, axloqiy AI rivojlanishi bo'yicha panel muhokamalar va ilg'or texnologiyalar bo'yicha texnik seminarlarni o'z ichiga oldi. Mavzular katta til modellaridan va kompyuter ko'rishidan AI boshqaruvi va barqaror rivojlanishgacha bo'lgan. Tadbir AIRI ning so'nggi tadqiqot yutuqlarini namoyish etdi va mintaqaviy va xalqaro muassasalar o'rtasida qimmatli hamkorliklarni osonlashtirdi. Sammit davomida bir nechta ikki tomonlama tadqiqot shartnomalari imzolandi, bu O'zbekistonning Markaziy Osiyoda rivojlanayotgan AI markazi sifatidagi mavqeini mustahkamladi.",
        ru: 'AIRI успешно провел "Саммит по ИИ Центральной Азии 2024", собрав более 500 участников из 30 стран на три дня презентаций, семинаров и нетворкинга. На конференции прозвучали программные выступления известных исследователей ИИ, панельные дискуссии по этическому развитию ИИ и технические семинары по передовым технологиям. Темы варьировались от больших языковых моделей и компьютерного зрения до управления ИИ и устойчивого развития. Мероприятие продемонстрировало последние исследовательские достижения AIRI и способствовало ценному сотрудничеству между региональными и международными учреждениями. Во время саммита было подписано несколько двусторонних исследовательских соглашений, укрепляющих позицию Узбекистана как развивающегося центра ИИ в Центральной Азии.',
      },
      date: "2024-11-28",
      category: "Event",
      image: "🎤",
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
        en: "The first cohort of AIRI's Advanced AI Training Program graduated this week, marking a milestone in the institute's mission to build local AI talent. The 100 graduates, selected from over 1,000 applicants, completed an intensive six-month program covering machine learning, deep learning, computer vision, and natural language processing. The curriculum combined theoretical foundations with hands-on projects addressing real-world challenges in Uzbekistan. All graduates have already received job offers from leading tech companies and government agencies, with average starting salaries 3x higher than the national average for new graduates. The program will expand to accept 200 students in the next cohort, with scholarships available for talented applicants from underrepresented regions.",
        uz: "AIRI ning Ilg'or AI O'rgatish Dasturining birinchi guruhi shu hafta bitirdi, bu institutning mahalliy AI iste'dodlarini yaratish missiyasida muhim bosqich bo'ldi. 1000 dan ortiq arizachilardan tanlangan 100 ta bitiruvchi mashina o'rganish, chuqur o'rganish, kompyuter ko'rishi va tabiiy tilni qayta ishlashni o'z ichiga olgan intensiv olti oylik dasturni tugatdilar. O'quv dasturi nazariy asoslarni O'zbekistondagi real muammolarni hal qiluvchi amaliy loyihalar bilan birlashtirdi. Barcha bitiruvchilar allaqachon yetakchi texnologiya kompaniyalari va davlat idoralaridan ish takliflarini olishdi, yangi bitiruvchilar uchun milliy o'rtachadan 3 baravar yuqori boshlang'ich maoshlar bilan. Dastur keyingi guruhda 200 talabani qabul qilish uchun kengaytiriladi, kam vakillik qilingan mintaqalardan iste'dodli arizachilar uchun stipendiyalar mavjud.",
        ru: "Первая когорта Программы повышения квалификации по ИИ от AIRI окончила обучение на этой неделе, что стало важной вехой в миссии института по развитию местных талантов в области ИИ. 100 выпускников, отобранных из более чем 1000 заявителей, завершили интенсивную шестимесячную программу, охватывающую машинное обучение, глубокое обучение, компьютерное зрение и обработку естественного языка. Учебная программа сочетала теоретические основы с практическими проектами, решающими реальные проблемы в Узбекистане. Все выпускники уже получили предложения о работе от ведущих технологических компаний и государственных учреждений, со средними начальными зарплатами в 3 раза выше национального среднего для новых выпускников. Программа расширится для приема 200 студентов в следующей когорте, со стипендиями, доступными для талантливых заявителей из недостаточно представленных регионов.",
      },
      date: "2024-11-20",
      category: "Education",
      image: "🎓",
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
        en: "AIRI's Environmental Monitoring System for the Aral Sea region has been awarded the prestigious National Innovation Award 2024 by the Ministry of Innovation. The AI-powered system, which uses satellite imagery and IoT sensors to track ecological changes, has been instrumental in providing early warnings for environmental hazards and informing policy decisions. The award recognizes the system's significant impact on environmental protection efforts and its potential for application in other regions facing similar ecological challenges. The prize includes funding for further development and expansion of the monitoring network. Minister of Innovation Dr. Alisher Sultanov praised AIRI's work: \"This project exemplifies how artificial intelligence can be leveraged to address critical environmental challenges and support sustainable development goals.\"",
        uz: "AIRI ning Orol dengizi mintaqasi uchun Ekologik Monitoring Tizimi Innovatsiyalar vazirligi tomonidan nufuzli Milliy Innovatsiya Mukofoti 2024 ni oldi. Ekologik o'zgarishlarni kuzatish uchun sun'iy yo'ldosh tasvirlari va IoT sensorlaridan foydalanadigan AI tomonidan quvvatlanadigan tizim ekologik xavflar uchun erta ogohlantirishlarni taqdim etish va siyosat qarorlarini ma'lumot berish uchun muhim ahamiyatga ega bo'ldi. Mukofot tizimning atrof-muhitni muhofaza qilish sa'y-harakatlari va shunga o'xshash ekologik muammolarga duch kelgan boshqa hududlarda qo'llash potentsialiga sezilarli ta'sirini tan oladi. Mukofot monitoring tarmog'ini yanada rivojlantirish va kengaytirish uchun mablag'ni o'z ichiga oladi. Innovatsiyalar vaziri doktor Alisher Sultonov AIRI ishini maqtadi: \"Ushbu loyiha sun'iy intellektni muhim ekologik muammolarni hal qilish va barqaror rivojlanish maqsadlarini qo'llab-quvvatlash uchun qanday foydalanish mumkinligini ko'rsatadi.\"",
        ru: 'Система экологического мониторинга AIRI для региона Аральского моря была удостоена престижной Национальной премии за инновации 2024 от Министерства инноваций. Система на базе ИИ, использующая спутниковые снимки и датчики IoT для отслеживания экологических изменений, сыграла важную роль в предоставлении ранних предупреждений об экологических опасностях и информировании политических решений. Награда признает значительное влияние системы на усилия по охране окружающей среды и ее потенциал для применения в других регионах, сталкивающихся с аналогичными экологическими проблемами. Премия включает финансирование дальнейшей разработки и расширения сети мониторинга. Министр инноваций доктор Алишер Султанов похвалил работу AIRI: "Этот проект является примером того, как искусственный интеллект может быть использован для решения критических экологических проблем и поддержки целей устойчивого развития."',
      },
      date: "2024-11-15",
      category: "Award",
      image: "🏆",
      author: "Ministry of Innovation",
    },
  ];

  const displayedNews = newsArticles.slice(0, displayCount);

  return (
    <>
      <section id='news' className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl mb-4'>
              <span className='bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
                {t("news.title")}
              </span>
            </h2>
            <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
              {t("news.subtitle")}
            </p>
          </div>

          {/* News Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            {displayedNews.map((article) => (
              <div
                key={article.id}
                className={`${cardBgClass} backdrop-blur-sm border rounded-2xl overflow-hidden ${hoverBorderClass} transition-all duration-300 group cursor-pointer`}
                onClick={() => setSelectedNews(article)}>
                <div
                  className={`h-48 ${
                    darkMode
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                      : "bg-gradient-to-br from-blue-100 to-purple-100"
                  } flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}>
                  {article.image}
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-3 flex-wrap'>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                      {article.category}
                    </span>
                    <span
                      className={`text-xs ${textSecondaryClass} flex items-center gap-1`}>
                      <Calendar size={14} />
                      {new Date(article.date).toLocaleDateString(
                        language === "en"
                          ? "en-US"
                          : language === "ru"
                          ? "ru-RU"
                          : "uz-UZ",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <h3
                    className={`text-xl ${
                      darkMode ? "text-white" : "text-gray-900"
                    } mb-3 group-hover:text-blue-500 transition-colors`}>
                    {article.title[language]}
                  </h3>
                  <p
                    className={`${textSecondaryClass} text-sm mb-4 line-clamp-3`}>
                    {article.excerpt[language]}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className={`text-xs ${textSecondaryClass}`}>
                      {article.author}
                    </span>
                    <button className='text-blue-500 hover:text-blue-400 flex items-center gap-1 text-sm'>
                      {t("news.readMore")}
                      <ArrowRight size={16} />
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
                className='px-8 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300'>
                {t("news.allNews")}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'>
          <div
            className={`relative ${cardBgClass} border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            <div className='sticky top-0 bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-t-3xl'>
              <button
                onClick={() => setSelectedNews(null)}
                className='absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors'>
                <X size={24} />
              </button>
              <div className='text-6xl mb-4'>{selectedNews.image}</div>
              <div className='flex items-center gap-3 mb-4 flex-wrap'>
                <span className='px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1'>
                  <Tag size={14} />
                  {selectedNews.category}
                </span>
                <span className='px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1'>
                  <Calendar size={14} />
                  {new Date(selectedNews.date).toLocaleDateString(
                    language === "en"
                      ? "en-US"
                      : language === "ru"
                      ? "ru-RU"
                      : "uz-UZ",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              <h2 className='text-3xl mb-2 pr-12'>
                {selectedNews.title[language]}
              </h2>
              <p className='text-white/80'>By {selectedNews.author}</p>
            </div>

            <div className='p-8'>
              <p className={`${textSecondaryClass} leading-relaxed text-lg`}>
                {selectedNews.content[language]}
              </p>

              <div className='mt-8 pt-6 border-t border-gray-200 dark:border-slate-700'>
                <button
                  onClick={() => setSelectedNews(null)}
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
