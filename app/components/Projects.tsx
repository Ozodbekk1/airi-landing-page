/** @format */

"use client";
import React, { useState } from "react";
import {
  Shield,
  Globe,
  Award,
  Lightbulb,
  ExternalLink,
  X,
  Calendar,
  Users as UsersIcon,
  Target,
  LucideIcon,
} from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
  activeProject: number;
  setActiveProject: (index: number) => void;
}

interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  status: string;
  fullDescription: string;
  objectives: string[];
  team: string;
  timeline: string;
  impact: string[];
}

export const Projects: React.FC<ProjectsProps> = ({
  darkMode,
  activeProject,
  setActiveProject,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const textSecondaryClass = darkMode ? "text-slate-400" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-slate-900/50 border-slate-800"
    : "bg-white border-gray-200";

  const projects: Project[] = [
    {
      title: "Vehicle Recognition System",
      description:
        "AI-powered security software for violation detection and vehicle number recognition across national infrastructure",
      icon: Shield,
      category: "Computer Vision",
      status: "Deployed",
      fullDescription:
        "A comprehensive AI-powered system designed to enhance traffic management and national security. The system employs advanced computer vision algorithms to detect traffic violations, recognize vehicle license plates, and maintain a secure database of vehicle movements across Uzbekistan.",
      objectives: [
        "Real-time vehicle tracking and monitoring",
        "Automatic license plate recognition (ALPR)",
        "Traffic violation detection and documentation",
        "Integration with national security databases",
        "Analytics dashboard for law enforcement",
      ],
      team: "15 researchers and engineers",
      timeline: "2021 - Present (Deployed)",
      impact: [
        "Reduced traffic violations by 35%",
        "Improved response time for law enforcement",
        "Enhanced border security operations",
        "Automated traffic management in major cities",
      ],
    },
    {
      title: "Environmental Monitoring",
      description:
        "Analytics software for monitoring and forecasting ecological situation in Aral Sea region with real-time data",
      icon: Globe,
      category: "Data Analytics",
      status: "Active",
      fullDescription:
        "An advanced environmental monitoring and prediction system focused on the Aral Sea region. Using satellite imagery, IoT sensors, and machine learning models, this system tracks ecological changes, predicts environmental trends, and provides actionable insights for environmental protection.",
      objectives: [
        "Real-time environmental data collection",
        "Satellite image analysis and interpretation",
        "Predictive modeling for ecological changes",
        "Water quality monitoring",
        "Climate pattern analysis",
      ],
      team: "20 scientists and data analysts",
      timeline: "2020 - Ongoing",
      impact: [
        "Early detection of environmental hazards",
        "Data-driven policy recommendations",
        "International collaboration on Aral Sea restoration",
        "Improved disaster preparedness",
      ],
    },
    {
      title: "Medical AI Assistant",
      description:
        "Cardiology applications using advanced AI for diagnostic support, patient care, and healthcare optimization",
      icon: Award,
      category: "Healthcare",
      status: "In Development",
      fullDescription:
        "An intelligent medical assistant system designed to support cardiologists in diagnosis, treatment planning, and patient monitoring. The system analyzes medical images, ECG data, and patient history to provide evidence-based recommendations and early warning for cardiovascular conditions.",
      objectives: [
        "ECG analysis and interpretation",
        "Cardiac imaging diagnostics",
        "Risk assessment for cardiovascular diseases",
        "Treatment recommendation system",
        "Patient monitoring and alerts",
      ],
      team: "25 AI specialists and medical professionals",
      timeline: "2022 - 2026",
      impact: [
        "Earlier detection of cardiovascular conditions",
        "Reduced diagnostic errors",
        "Improved patient outcomes",
        "Support for remote healthcare delivery",
      ],
    },
    {
      title: "National Herbarium Recognition",
      description:
        "Digital recognition system for botanical research, biodiversity preservation, and environmental studies",
      icon: Lightbulb,
      category: "Biology",
      status: "Research Phase",
      fullDescription:
        "A groundbreaking digital platform for plant identification and botanical research. Using computer vision and deep learning, this system helps researchers, students, and environmental agencies identify plant species, track biodiversity, and preserve botanical knowledge for future generations.",
      objectives: [
        "Plant species identification from images",
        "Digital herbarium database creation",
        "Endangered species tracking",
        "Mobile app for field researchers",
        "Integration with international botanical databases",
      ],
      team: "12 botanists and AI researchers",
      timeline: "2023 - 2025",
      impact: [
        "Preservation of botanical knowledge",
        "Support for biodiversity research",
        "Educational tool for students",
        "Conservation planning and monitoring",
      ],
    },
  ];

  return (
    <>
      <section
        id='projects'
        className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl mb-4'>
              <span className='bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>
                Featured Projects
              </span>
            </h2>
            <p className={`${textSecondaryClass} text-lg max-w-2xl mx-auto`}>
              Transforming research into real-world AI solutions that impact
              society and modernize government services
            </p>
          </div>

          <div className='relative'>
            {/* Carousel Container */}
            <div className='overflow-hidden rounded-3xl'>
              <div
                className={`relative h-96 ${cardBgClass} backdrop-blur-sm border`}>
                {projects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === activeProject
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-full"
                      }`}>
                      <div className='flex flex-col md:flex-row h-full'>
                        <div
                          className={`md:w-1/2 flex items-center justify-center ${
                            darkMode
                              ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                              : "bg-gradient-to-br from-blue-50 to-purple-50"
                          } p-12`}>
                          <Icon className='w-32 h-32 text-blue-500' />
                        </div>
                        <div className='md:w-1/2 p-12 flex flex-col justify-center'>
                          <div className='flex items-center gap-3 mb-4 flex-wrap'>
                            <div
                              className={`inline-block px-4 py-1 ${
                                darkMode
                                  ? "bg-blue-500/20 border-blue-500/30"
                                  : "bg-blue-100 border-blue-300"
                              } border rounded-full text-sm text-blue-500`}>
                              {project.category}
                            </div>
                            <div
                              className={`inline-block px-4 py-1 ${
                                darkMode
                                  ? "bg-green-500/20 border-green-500/30"
                                  : "bg-green-100 border-green-300"
                              } border rounded-full text-sm text-green-500`}>
                              {project.status}
                            </div>
                          </div>
                          <h3
                            className={`text-3xl ${
                              darkMode ? "text-white" : "text-gray-900"
                            } mb-4`}>
                            {project.title}
                          </h3>
                          <p
                            className={`${textSecondaryClass} text-lg leading-relaxed mb-6`}>
                            {project.description}
                          </p>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className='px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 w-fit flex items-center gap-2'>
                            View Project Details
                            <ExternalLink size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className='flex justify-center gap-3 mt-6'>
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? "w-12 bg-blue-500"
                      : `w-2 ${darkMode ? "bg-slate-700" : "bg-gray-300"}`
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'>
          <div
            className={`relative ${cardBgClass} border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            <div className='sticky top-0 bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-t-3xl'>
              <button
                onClick={() => setSelectedProject(null)}
                className='absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors'>
                <X size={24} />
              </button>
              <div className='flex items-center gap-4 mb-4'>
                {React.createElement(selectedProject.icon, {
                  className: "w-12 h-12",
                })}
                <div>
                  <h2 className='text-3xl mb-2'>{selectedProject.title}</h2>
                  <div className='flex gap-2 flex-wrap'>
                    <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
                      {selectedProject.category}
                    </span>
                    <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-8'>
              <div className='mb-8'>
                <h3
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-3`}>
                  Project Overview
                </h3>
                <p className={`${textSecondaryClass} leading-relaxed`}>
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div
                  className={`${
                    darkMode ? "bg-blue-500/10" : "bg-blue-50"
                  } border ${
                    darkMode ? "border-blue-500/20" : "border-blue-200"
                  } rounded-xl p-4`}>
                  <div className='flex items-center gap-2 mb-2'>
                    <UsersIcon className='w-5 h-5 text-blue-500' />
                    <h4
                      className={`${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}>
                      Team
                    </h4>
                  </div>
                  <p className={textSecondaryClass}>{selectedProject.team}</p>
                </div>

                <div
                  className={`${
                    darkMode ? "bg-purple-500/10" : "bg-purple-50"
                  } border ${
                    darkMode ? "border-purple-500/20" : "border-purple-200"
                  } rounded-xl p-4`}>
                  <div className='flex items-center gap-2 mb-2'>
                    <Calendar className='w-5 h-5 text-purple-500' />
                    <h4
                      className={`${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}>
                      Timeline
                    </h4>
                  </div>
                  <p className={textSecondaryClass}>
                    {selectedProject.timeline}
                  </p>
                </div>
              </div>

              <div className='mb-8'>
                <h3
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4 flex items-center gap-2`}>
                  <Target className='w-6 h-6 text-blue-500' />
                  Project Objectives
                </h3>
                <ul className='space-y-2'>
                  {selectedProject.objectives.map((objective, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 ${textSecondaryClass}`}>
                      <span className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm flex-shrink-0 mt-0.5'>
                        {idx + 1}
                      </span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mb-8'>
                <h3
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-4`}>
                  Impact & Results
                </h3>
                <div className='grid md:grid-cols-2 gap-3'>
                  {selectedProject.impact.map((item, idx) => (
                    <div
                      key={idx}
                      className={`${
                        darkMode ? "bg-green-500/10" : "bg-green-50"
                      } border ${
                        darkMode ? "border-green-500/20" : "border-green-200"
                      } rounded-lg p-4`}>
                      <p
                        className={`${
                          darkMode ? "text-green-300" : "text-green-700"
                        }`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='pt-6 border-t border-gray-200 dark:border-slate-700'>
                <button
                  onClick={() => setSelectedProject(null)}
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
