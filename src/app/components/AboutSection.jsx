"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, GraduationCap, Award, ArrowRight, CheckCircle, Calendar, MapPin } from 'lucide-react';

const TAB_DATA = [
  {
    title: "Technical Skills",
    id: "skills",
    icon: <Code2 className="w-5 h-5" />,
    content: {
      "Backend Development": ["Node.js", "Django", "Express", "Python"],
      "Database Technologies": ["MySQL", "PostgreSQL", "MongoDB"],
      "Frontend Development": ["React", "Next.js", "TypeScript", "JavaScript"],
      "Blockchain & Web3": ["Solidity", "Smart Contracts"],
      "Development Tools": ["Vite", "Linux Scripting", "Git", "Remix", "Docker", "CI/CD", "Nginx"],
    },
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    content: [
      {
        institution: "ALX Africa | Holberton University",
        program: "Software Engineering Program",
        period: "2023 - 2024",
        description: "Comprehensive software engineering curriculum focusing on full-stack development"
      },
      {
        institution: "Alchemy University",
        program: "Blockchain Development",
        period: "2023",
        description: "Specialized training in blockchain technologies and smart contract development"
      }
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-5 h-5" />,
    content: [
      {
        title: "Software Engineering Certificate",
        issuer: "ALX Africa",
        date: "2024",
        description: "Full-stack web development and software engineering fundamentals"
      },
      {
        title: "Blockchain Developer Certificate",
        issuer: "Alchemy University",
        date: "2023",
        description: "Smart contract development, DeFi protocols, and Web3 technologies"
      }
    ],
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const renderSkillsContent = (content) => (
    <div className="space-y-6">
      {Object.entries(content).map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
          className="space-y-3"
        >
          <h4 className="text-lg font-semibold text-blue-400 border-b border-blue-400/30 pb-2">
            {category}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                className="flex items-center space-x-2 text-gray-300 py-1"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderEducationContent = (content) => (
    <div className="space-y-6">
      {content.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="border-l-2 border-blue-400 pl-6 pb-6 last:pb-0"
        >
          <div className="flex items-start space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full -ml-8 mt-2"></div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">{item.institution}</h4>
              <p className="text-blue-400 font-medium">{item.program}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.period}</span>
                </div>
              </div>
              <p className="text-gray-300 mt-3 leading-relaxed">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderCertificationsContent = (content) => (
    <div className="space-y-6">
      {content.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4"
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
            <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          </div>
          <p className="text-blue-400 font-medium mb-1">{cert.issuer}</p>
          <p className="text-sm text-gray-400 mb-3">{cert.date}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
        </motion.div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    const currentTab = TAB_DATA.find((t) => t.id === activeTab);
    
    switch (activeTab) {
      case 'skills':
        return renderSkillsContent(currentTab.content);
      case 'education':
        return renderEducationContent(currentTab.content);
      case 'certifications':
        return renderCertificationsContent(currentTab.content);
      default:
        return null;
    }
  };

  return (
    <section 
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Full Stack Developer & Blockchain Enthusiast
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies 
                  and blockchain development. My journey in software engineering has equipped me 
                  with a comprehensive skill set spanning both traditional web development and 
                  cutting-edge blockchain technologies.
                </p>
                <p>
                  With a strong foundation in JavaScript ecosystems and backend technologies, 
                  I specialize in building scalable, user-centric applications that solve 
                  real-world problems. My experience includes developing everything from 
                  responsive web applications to smart contracts and DeFi protocols.
                </p>
                <p>
                  I thrive on continuous learning and staying at the forefront of technology 
                  trends, always seeking new challenges that push the boundaries of what's possible.
                </p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3">
              {TAB_DATA.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Tab Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-h-[600px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 flex items-center space-x-3">
                  {TAB_DATA.find((t) => t.id === activeTab).icon}
                  <span>{TAB_DATA.find((t) => t.id === activeTab).title}</span>
                </h3>
                <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {renderTabContent()}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;