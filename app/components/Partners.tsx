/** @format */
import React, { useState } from "react";
import {
  Building,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  Users,
  X,
  ExternalLink,
} from "lucide-react";

interface PartnersProps {
  darkMode: boolean;
}

interface Partner {
  name: string;
  type: string;
  description: string;
  logo: string;
  established: string;
  projects: string[];
  impact: string;
  website?: string;
}

export const Partners: React.FC<PartnersProps> = ({ darkMode }) => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-slate-900/50 border-slate-800"
    : "bg-white border-gray-200";
  const hoverBorderClass = darkMode
    ? "hover:border-blue-500/50"
    : "hover:border-blue-400/50";

  const getIcon = (type: string) => {
    switch (type) {
      case "Government":
        return Building;
      case "Education":
        return BookOpen;
      case "Research":
        return Award;
      case "Private Sector":
        return Briefcase;
      case "International":
        return Globe;
      default:
        return Users;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Government":
        return darkMode
          ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
          : "bg-blue-100 text-blue-700 border-blue-300";
      case "Education":
        return darkMode
          ? "bg-green-500/20 text-green-300 border-green-500/30"
          : "bg-green-100 text-green-700 border-green-300";
      case "Research":
        return darkMode
          ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
          : "bg-purple-100 text-purple-700 border-purple-300";
      case "Private Sector":
        return darkMode
          ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
          : "bg-orange-100 text-orange-700 border-orange-300";
      case "International":
        return darkMode
          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
          : "bg-cyan-100 text-cyan-700 border-cyan-300";
      default:
        return darkMode
          ? "bg-gray-500/20 text-gray-300 border-gray-500/30"
          : "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const partners: Partner[] = [
    {
      name: "Ministry of Digital Technologies",
      type: "Government",
      description:
        "Strategic partnership with the Ministry of Digital Technologies to drive national digital transformation and AI policy development.",
      logo: "🏛️",
      established: "2020",
      projects: [
        "National AI Strategy Development",
        "Digital Government Services Integration",
        "Smart City Infrastructure",
        "Cybersecurity Enhancement Programs",
      ],
      impact:
        "Implemented AI solutions in 15+ government agencies, improving service delivery efficiency by 40%",
      website: "https://digital.gov.uz",
    },
    {
      name: "Tashkent International University",
      type: "Education",
      description:
        "Collaborative research and education programs fostering the next generation of AI specialists in Uzbekistan.",
      logo: "🎓",
      established: "2019",
      projects: [
        "Joint AI Master's Degree Program",
        "Research Lab Collaboration",
        "Student Exchange Programs",
        "Industry Internship Placements",
      ],
      impact:
        "Trained 500+ students in AI and data science, with 90% employment rate within 6 months of graduation",
      website: "https://tiu.uz",
    },
    {
      name: "Tashkent University of Information Technologies",
      type: "Education",
      description:
        "Leading technical university partnership focusing on advanced computing, AI research, and innovation in information technologies.",
      logo: "💻",
      established: "2018",
      projects: [
        "AI Research Center Establishment",
        "Advanced Computing Infrastructure",
        "Hackathons and Innovation Challenges",
        "Faculty Development Programs",
      ],
      impact:
        "Published 50+ joint research papers and developed 20+ AI applications for real-world problems",
      website: "https://tuit.uz",
    },
    {
      name: "Massachusetts Institute of Technology",
      type: "International",
      description:
        "Prestigious partnership with MIT for cutting-edge AI research, knowledge exchange, and collaborative innovation projects.",
      logo: "🌎",
      established: "2024",
      projects: [
        "Joint Research on Turkic Language NLP",
        "AI for Agriculture Optimization",
        "Telemedicine Solutions Development",
        "Student and Faculty Exchange Programs",
      ],
      impact:
        "Launched 3 major collaborative research initiatives with $2M in combined funding",
      website: "https://mit.edu",
    },
    {
      name: "Google AI Research",
      type: "Private Sector",
      description:
        "Technology partnership providing access to advanced AI tools, cloud infrastructure, and expertise for research acceleration.",
      logo: "🔬",
      established: "2021",
      projects: [
        "TensorFlow Implementation Support",
        "Cloud Computing Resources",
        "Machine Learning Best Practices",
        "Open Source Contributions",
      ],
      impact:
        "Accelerated research output by 60% through access to cutting-edge AI infrastructure and tools",
    },
    {
      name: "Central Asian AI Consortium",
      type: "Research",
      description:
        "Regional collaboration network connecting AI research institutions across Central Asia for knowledge sharing and joint projects.",
      logo: "🤝",
      established: "2022",
      projects: [
        "Regional AI Conference Series",
        "Cross-Border Research Initiatives",
        "Shared Dataset Development",
        "Policy Recommendations for Regional AI Development",
      ],
      impact:
        "Established collaboration with 12 institutions across 5 Central Asian countries",
    },
  ];

  return (
    <>
      <section
        id='partners'
        className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>
                Our Partners & Collaborators
              </span>
            </h2>
            <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
              Building the future of AI through strategic partnerships with
              leading institutions worldwide
            </p>
          </div>

          {/* Stats Bar */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
            {[
              { label: "Strategic Partners", value: "50+" },
              { label: "Countries", value: "15+" },
              { label: "Joint Projects", value: "100+" },
              { label: "Years of Collaboration", value: "5+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`${cardBgClass} backdrop-blur-sm border rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300`}>
                <div className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-2'>
                  {stat.value}
                </div>
                <div className={`text-sm ${textSecondaryClass}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Partners Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {partners.map((partner, index) => {
              const Icon = getIcon(partner.type);
              return (
                <div
                  key={index}
                  onClick={() => setSelectedPartner(partner)}
                  className={`${cardBgClass} backdrop-blur-sm border rounded-2xl p-6 ${hoverBorderClass} transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden`}>
                  {/* Animated Background Gradient */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  {/* Content */}
                  <div className='relative z-10'>
                    {/* Logo and Icon */}
                    <div className='flex items-start justify-between mb-4'>
                      <div className='text-5xl'>{partner.logo}</div>
                      <Icon className='w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform' />
                    </div>

                    {/* Partner Name */}
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        darkMode
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-900 group-hover:text-blue-600"
                      } transition-colors`}>
                      {partner.name}
                    </h3>

                    {/* Type Badge */}
                    <div className='mb-4'>
                      <span
                        className={`text-xs px-3 py-1.5 rounded-full border font-medium ${getTypeColor(
                          partner.type
                        )}`}>
                        {partner.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`${textSecondaryClass} text-sm mb-4 line-clamp-3 leading-relaxed`}>
                      {partner.description}
                    </p>

                    {/* Established Year */}
                    <div className='flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700'>
                      <span className={`text-xs ${textSecondaryClass}`}>
                        Since {partner.established}
                      </span>
                      <span className='text-blue-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all'>
                        Learn More
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div
            className={`${cardBgClass} backdrop-blur-sm border rounded-2xl p-8 mt-12 text-center`}>
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
              Interested in Partnership?
            </h3>
            <p className={`${textSecondaryClass} mb-6 max-w-2xl mx-auto`}>
              We're always looking for innovative partners to collaborate on
              groundbreaking AI research and applications.
            </p>
            <button className='px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 font-medium'>
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'>
          <div
            className={`relative ${cardBgClass} border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
            <div className='sticky top-0 bg-gradient-to-b from-blue-600 to-purple-500 text-white p-6 rounded-t-3xl z-10'>
              <button
                onClick={() => setSelectedPartner(null)}
                className='absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors'>
                <X size={24} />
              </button>

              <div className='flex items-center gap-4 mb-4'>
                <div className='text-6xl'>{selectedPartner.logo}</div>
                <div className='flex-1'>
                  <h2 className='text-3xl font-bold mb-2'>
                    {selectedPartner.name}
                  </h2>
                  <div className='flex gap-2 flex-wrap'>
                    <span className='px-3 py-1 bg-white/20 rounded-full text-sm font-medium'>
                      {selectedPartner.type}
                    </span>
                    <span className='px-3 py-1 bg-white/20 rounded-full text-sm font-medium'>
                      Since {selectedPartner.established}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-8'>
              {/* Description */}
              <div className='mb-8'>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  About the Partnership
                </h3>
                <p className={`${textSecondaryClass} leading-relaxed text-lg`}>
                  {selectedPartner.description}
                </p>
              </div>

              {/* Projects */}
              <div className='mb-8'>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4`}>
                  Collaborative Projects
                </h3>
                <div className='grid md:grid-cols-2 gap-3'>
                  {selectedPartner.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className={`${
                        darkMode ? "bg-blue-500/10" : "bg-blue-50"
                      } border ${
                        darkMode ? "border-blue-500/20" : "border-blue-200"
                      } rounded-lg p-4 flex items-start gap-3`}>
                      <span className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm flex-shrink-0 mt-0.5 font-semibold'>
                        {idx + 1}
                      </span>
                      <p
                        className={`${
                          darkMode ? "text-slate-300" : "text-gray-700"
                        } text-sm`}>
                        {project}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className='mb-8'>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  Impact & Achievements
                </h3>
                <div
                  className={`${
                    darkMode ? "bg-green-500/10" : "bg-green-50"
                  } border ${
                    darkMode ? "border-green-500/20" : "border-green-200"
                  } rounded-xl p-6`}>
                  <p
                    className={`${
                      darkMode ? "text-green-300" : "text-green-700"
                    } text-lg`}>
                    {selectedPartner.impact}
                  </p>
                </div>
              </div>

              {/* Website Link */}
              {selectedPartner.website && (
                <div className='mb-8'>
                  <a
                    href={selectedPartner.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-medium'>
                    Visit Partner Website
                    <ExternalLink size={18} />
                  </a>
                </div>
              )}

              {/* Close Button */}
              <div className='pt-6 border-t border-gray-200 dark:border-slate-700'>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 font-medium'>
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
