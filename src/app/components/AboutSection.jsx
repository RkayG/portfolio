"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, GraduationCap, Award, ArrowRight } from 'lucide-react';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code className="w-6 h-6" />,
    content: [
      "Node.js", "Express", "MySQL", "MongoDB", "Python", "C",
      "JavaScript", "TypeScript", "Solidity", "NextJS", "React", "Linux Scripting"
    ],
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap className="w-6 h-6" />,
    content: [
      "ALX Africa | Holberton University",
      "Alchemy University"
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-6 h-6" />,
    content: [
      "ALX: Software Engineering",
      "Alchemy Blockchain Developer"
    ],
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 mb-12 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
              About Me
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate full stack web developer with a knack for creating interactive and responsive web applications. My expertise spans JavaScript, React, Node.js, and more. I thrive on challenges and continuously expand my skill set. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4">
              {TAB_DATA.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all text-lg font-semibold ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  {TAB_DATA.find((t) => t.id === activeTab).title}
                </h3>
                <ul className="space-y-4">
                  {TAB_DATA.find((t) => t.id === activeTab).content.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-200 text-lg"
                    >
                      <ArrowRight className="text-blue-400 w-5 h-5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;