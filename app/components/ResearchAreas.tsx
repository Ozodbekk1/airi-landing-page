/** @format */

"use client";
import React, { useState } from "react";
import {
  Microscope,
  BookOpen,
  Brain,
  Target,
  ChevronRight,
  X,
  LucideIcon,
} from "lucide-react";

interface ResearchAreasProps {
  darkMode: boolean;
}

interface ResearchArea {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  fullDescription: string;
  keyFocus: string[];
  applications: string[];
}

export const ResearchAreas: React.FC<ResearchAreasProps> = ({ darkMode }) => {
  const [selectedArea, setSelectedArea] = useState<ResearchArea | null>(null);
  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-slate-900/50 border-slate-800"
    : "bg-white border-gray-200";
  const hoverBorderClass = darkMode
    ? "hover:border-blue-500/50"
    : "hover:border-blue-400/50";

  const researchAreas: ResearchArea[] = [
    {
      title: "Computer Vision",
      description:
        "Advanced image recognition, object detection, and visual AI solutions for security, healthcare, and public administration.",
      icon: Microscope,
      gradient: "from-blue-500 to-cyan-500",
      fullDescription:
        "Our Computer Vision research focuses on developing state-of-the-art algorithms for image and video analysis. We work on cutting-edge projects that enhance national security, improve healthcare diagnostics, and modernize public services through visual intelligence.",
      keyFocus: [
        "Object Detection & Recognition",
        "Facial Recognition Systems",
        "Medical Image Analysis",
        "Video Surveillance & Analytics",
        "Document Processing",
      ],
      applications: [
        "Traffic Monitoring Systems",
        "Security & Border Control",
        "Healthcare Diagnostics",
        "Document Digitization",
      ],
    },
    {
      title: "Natural Language Processing",
      description:
        "Speech processing, language understanding, and text analysis for Uzbek and multilingual government applications.",
      icon: BookOpen,
      gradient: "from-purple-500 to-pink-500",
      fullDescription:
        "We develop advanced NLP solutions tailored for Uzbek and other regional languages. Our research enables machines to understand, interpret, and generate human language, supporting government services, education, and communication.",
      keyFocus: [
        "Uzbek Language Processing",
        "Machine Translation",
        "Speech Recognition & Synthesis",
        "Text Analysis & Summarization",
        "Sentiment Analysis",
      ],
      applications: [
        "Government Service Automation",
        "Education & E-Learning",
        "Customer Service Bots",
        "Legal Document Analysis",
      ],
    },
    {
      title: "Machine Learning",
      description:
        "Cutting-edge ML algorithms, deep learning models, and intelligent automation for digital transformation.",
      icon: Brain,
      gradient: "from-green-500 to-emerald-500",
      fullDescription:
        "Our Machine Learning division pioneers innovative algorithms and neural network architectures. We develop solutions that learn from data, adapt to new situations, and make intelligent decisions to support Uzbekistan's digital transformation.",
      keyFocus: [
        "Deep Learning Architectures",
        "Predictive Analytics",
        "Reinforcement Learning",
        "Transfer Learning",
        "AutoML Solutions",
      ],
      applications: [
        "Economic Forecasting",
        "Resource Optimization",
        "Fraud Detection",
        "Predictive Maintenance",
      ],
    },
    {
      title: "Applied AI Solutions",
      description:
        "Practical AI implementations for healthcare, agriculture, education, and public sector modernization.",
      icon: Target,
      gradient: "from-orange-500 to-red-500",
      fullDescription:
        "We bridge the gap between research and real-world applications. Our team develops practical AI solutions that address specific challenges in healthcare, agriculture, education, and government services, creating tangible impact for citizens.",
      keyFocus: [
        "Healthcare AI Applications",
        "Smart Agriculture Systems",
        "Educational Technology",
        "E-Government Solutions",
        "Smart City Initiatives",
      ],
      applications: [
        "Medical Diagnosis Support",
        "Crop Disease Detection",
        "Personalized Learning",
        "Public Service Automation",
      ],
    },
  ];

  return (
    <>
      <section
        id='research'
        className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl mb-4'>
              <span className='bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
                Research Areas
              </span>
            </h2>
            <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
              Cutting-edge AI research across multiple domains, driving
              innovation and practical solutions for national development
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className='group relative'
                  style={{ animationDelay: `${index * 150}ms` }}>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      area.gradient
                    } ${
                      darkMode
                        ? "opacity-0 group-hover:opacity-10"
                        : "opacity-0 group-hover:opacity-5"
                    } rounded-3xl blur-xl transition-all duration-500`}></div>
                  <div
                    className={`relative ${cardBgClass} backdrop-blur-sm border rounded-3xl p-8 ${hoverBorderClass} transition-all duration-300 h-full`}>
                    <Icon className='w-12 h-12 text-blue-500 mb-4' />
                    <h3
                      className={`text-2xl ${
                        darkMode ? "text-white" : "text-gray-900"
                      } mb-3`}>
                      {area.title}
                    </h3>
                    <p className={`${textSecondaryClass} leading-relaxed mb-4`}>
                      {area.description}
                    </p>
                    <button
                      onClick={() => setSelectedArea(area)}
                      className='text-blue-500 hover:text-blue-400 flex items-center gap-2 group-hover:gap-4 transition-all'>
                      Learn More
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedArea && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'>
          <div
            className={`relative ${cardBgClass} border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto`}>
            <div className='sticky top-0 bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-t-3xl'>
              <button
                onClick={() => setSelectedArea(null)}
                className='absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors'>
                <X size={24} />
              </button>
              <div className='flex items-center gap-4'>
                {React.createElement(selectedArea.icon, {
                  className: "w-12 h-12",
                })}
                <h2 className='text-3xl'>{selectedArea.title}</h2>
              </div>
            </div>

            <div className='p-8'>
              <div className='mb-8'>
                <h3
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  Overview
                </h3>
                <p className={`${textSecondaryClass} leading-relaxed`}>
                  {selectedArea.fullDescription}
                </p>
              </div>

              <div className='mb-8'>
                <h3
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4`}>
                  Key Focus Areas
                </h3>
                <ul className='space-y-2'>
                  {selectedArea.keyFocus.map((focus, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 ${textSecondaryClass}`}>
                      <ChevronRight
                        size={20}
                        className='text-blue-500 mt-0.5 flex-shrink-0'
                      />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4`}>
                  Applications
                </h3>
                <div className='grid md:grid-cols-2 gap-3'>
                  {selectedArea.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className={`${
                        darkMode ? "bg-blue-500/10" : "bg-blue-50"
                      } border ${
                        darkMode ? "border-blue-500/20" : "border-blue-200"
                      } rounded-lg p-4`}>
                      <p
                        className={`${
                          darkMode ? "text-blue-300" : "text-blue-700"
                        }`}>
                        {app}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-8 pt-6 border-t border-gray-200 dark:border-slate-700'>
                <button
                  onClick={() => setSelectedArea(null)}
                  className='w-full px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300'>
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
