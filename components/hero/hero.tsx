/** @format */
"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Brain,
  Microscope,
  Users,
  Globe,
  Award,
  Cpu,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const AIRIWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate projects carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Research Projects", value: "50+", icon: Microscope },
    { label: "AI Researchers", value: "100+", icon: Users },
    { label: "Publications", value: "200+", icon: BookOpen },
    { label: "Partners", value: "30+", icon: Globe },
  ];

  const researchAreas = [
    {
      title: "Computer Vision",
      description:
        "Advanced image recognition, object detection, and visual AI solutions for real-world applications.",
      icon: "👁️",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Natural Language Processing",
      description:
        "Speech processing, language understanding, and text analysis for Uzbek and multilingual applications.",
      icon: "💬",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning",
      description:
        "Cutting-edge ML algorithms, deep learning models, and intelligent automation systems.",
      icon: "🤖",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Applied AI",
      description:
        "Practical AI solutions for healthcare, agriculture, education, and public administration.",
      icon: "⚡",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const projects = [
    {
      title: "Vehicle Recognition System",
      description:
        "AI-powered security software for violation detection and vehicle number recognition",
      image: "🚗",
      category: "Computer Vision",
    },
    {
      title: "Environmental Monitoring",
      description:
        "Analytics software for monitoring and forecasting ecological situation in Aral Sea region",
      image: "🌍",
      category: "Data Analytics",
    },
    {
      title: "Medical AI Assistant",
      description:
        "Cardiology applications using advanced AI for diagnostic support and patient care",
      image: "🏥",
      category: "Healthcare",
    },
    {
      title: "National Herbarium Recognition",
      description:
        "Digital recognition system for botanical research and biodiversity preservation",
      image: "🌿",
      category: "Biology",
    },
  ];

  const partners = [
    "Ministry of Digital Technologies",
    "Tashkent International University",
    "TUIT",
    "Leading Foreign Institutes",
    "Industry Partners",
    "Global AI Community",
  ];

  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
      {/* Animated Background */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-blue-900/20'></div>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10"
            : "bg-transparent"
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Brain className='w-7 h-7 text-white' />
              </div>
              <div>
                <h1 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  AIRI.UZ
                </h1>
                <p className='text-xs text-slate-400'>AI Research Institute</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center space-x-8'>
              {["About", "Research", "Projects", "Partners", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className='text-slate-300 hover:text-white transition-colors relative group'>
                    {item}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300'></span>
                  </a>
                )
              )}
              <button className='px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-medium'>
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors'>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800'>
            <div className='px-4 py-6 space-y-4'>
              {["About", "Research", "Projects", "Partners", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className='block text-slate-300 hover:text-white transition-colors py-2'
                    onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                )
              )}
              <button className='w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium'>
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className='relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6 backdrop-blur-sm'>
              <span className='w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse'></span>
              <span className='text-sm text-purple-300'>
                Pioneering AI Research in Uzbekistan
              </span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                Digital Technologies
              </span>
              <br />
              <span className='text-white'>& Artificial Intelligence</span>
              <br />
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                Research Institute
              </span>
            </h1>

            <p className='text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed'>
              Leading Uzbekistan's AI revolution through groundbreaking
              research, innovative solutions, and strategic partnerships.
              Implementing the Digital Uzbekistan - 2030 Strategy.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2'>
                Explore Our Research
                <ArrowRight size={20} />
              </button>
              <button className='px-8 py-4 border-2 border-purple-500/50 rounded-xl font-medium hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2'>
                <Mail size={20} />
                Contact Us
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-20'>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className='relative group'
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                  <div className='relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300'>
                    <Icon className='w-8 h-8 text-purple-400 mb-4' />
                    <h3 className='text-3xl font-bold text-white mb-2'>
                      {stat.value}
                    </h3>
                    <p className='text-slate-400 text-sm'>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section
        id='research'
        className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Research Areas
              </span>
            </h2>
            <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
              Cutting-edge AI research across multiple domains, driving
              innovation and practical solutions
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className='group relative'
                style={{ animationDelay: `${index * 150}ms` }}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`}></div>
                <div className='relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 h-full'>
                  <div className='text-5xl mb-4'>{area.icon}</div>
                  <h3 className='text-2xl font-bold mb-3 text-white'>
                    {area.title}
                  </h3>
                  <p className='text-slate-400 leading-relaxed mb-4'>
                    {area.description}
                  </p>
                  <button className='text-purple-400 hover:text-purple-300 flex items-center gap-2 font-medium group-hover:gap-4 transition-all'>
                    Learn More
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section
        id='projects'
        className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                Featured Projects
              </span>
            </h2>
            <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
              Transforming research into real-world AI solutions that impact
              society
            </p>
          </div>

          <div className='relative'>
            {/* Carousel Container */}
            <div className='overflow-hidden rounded-3xl'>
              <div className='relative h-96 bg-slate-900/50 backdrop-blur-sm border border-slate-800'>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === activeProject
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }`}>
                    <div className='flex flex-col md:flex-row h-full'>
                      <div className='md:w-1/2 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-12'>
                        <div className='text-9xl'>{project.image}</div>
                      </div>
                      <div className='md:w-1/2 p-12 flex flex-col justify-center'>
                        <div className='inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4 w-fit'>
                          {project.category}
                        </div>
                        <h3 className='text-3xl font-bold mb-4 text-white'>
                          {project.title}
                        </h3>
                        <p className='text-slate-400 text-lg leading-relaxed mb-6'>
                          {project.description}
                        </p>
                        <button className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-medium hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 w-fit flex items-center gap-2'>
                          View Project
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
                      ? "w-12 bg-purple-500"
                      : "w-2 bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        id='partners'
        className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Our Partners
              </span>
            </h2>
            <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
              Collaborating with leading institutions to advance AI research and
              development
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            {partners.map((partner, index) => (
              <div
                key={index}
                className='bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center text-center group'>
                <p className='text-slate-300 font-medium group-hover:text-white transition-colors'>
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20'></div>
            <div className='relative bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-12 md:p-16 text-center backdrop-blur-sm'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Join Our Research
                </span>
              </h2>
              <p className='text-slate-300 text-lg mb-8 max-w-2xl mx-auto'>
                Be part of Uzbekistan's AI revolution. Collaborate with leading
                researchers and contribute to groundbreaking projects that shape
                the future.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='px-8 py-4 bg-white text-slate-900 rounded-xl font-medium hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2'>
                  Join Our Team
                  <ArrowRight size={20} />
                </button>
                <button className='px-8 py-4 border-2 border-white/30 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2'>
                  View Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id='contact'
        className='relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-12 mb-12'>
            {/* About */}
            <div className='md:col-span-2'>
              <div className='flex items-center space-x-3 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                  <Brain className='w-7 h-7 text-white' />
                </div>
                <div>
                  <h1 className='text-xl font-bold text-white'>AIRI.UZ</h1>
                  <p className='text-xs text-slate-400'>
                    AI Research Institute
                  </p>
                </div>
              </div>
              <p className='text-slate-400 leading-relaxed mb-6'>
                Digital Technologies and Artificial Intelligence Research
                Institute - Leading AI research and development in Uzbekistan
                since 2021.
              </p>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors'>
                  <Github size={20} />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors'>
                  <Linkedin size={20} />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors'>
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-3'>
                {[
                  "About Us",
                  "Research",
                  "Projects",
                  "Publications",
                  "Careers",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href='#'
                      className='text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2'>
                      <ChevronRight size={16} />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className='text-white font-semibold mb-4'>Contact</h3>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3 text-slate-400'>
                  <Mail
                    size={20}
                    className='text-purple-400 mt-1 flex-shrink-0'
                  />
                  <a
                    href='mailto:info@airi.uz'
                    className='hover:text-purple-400 transition-colors'>
                    info@airi.uz
                  </a>
                </li>
                <li className='flex items-start gap-3 text-slate-400'>
                  <Phone
                    size={20}
                    className='text-purple-400 mt-1 flex-shrink-0'
                  />
                  <span>+998 71 263 41 98</span>
                </li>
                <li className='flex items-start gap-3 text-slate-400'>
                  <MapPin
                    size={20}
                    className='text-purple-400 mt-1 flex-shrink-0'
                  />
                  <span>Tashkent, Uzbekistan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8 border-t border-slate-800'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <p className='text-slate-400 text-sm'>
                © 2025 AIRI.UZ. All rights reserved. Established by Presidential
                Resolution No. PP-4996
              </p>
              <div className='flex gap-6 text-sm text-slate-400'>
                <a href='#' className='hover:text-purple-400 transition-colors'>
                  Privacy Policy
                </a>
                <a href='#' className='hover:text-purple-400 transition-colors'>
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIRIWebsite;
