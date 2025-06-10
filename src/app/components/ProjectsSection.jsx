"use client"
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Project Tag Component
const ProjectTag = ({ onClick, name, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
    : "bg-white/5 text-gray-300 border-gray-600 hover:bg-white/10 hover:border-gray-500";
  
  return (
    <button
      className={`${buttonStyles} border px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="group bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-gray-700 transition-all duration-500 h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.gitUrl && (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/70 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-black/90 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/70 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-black/90 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tag.filter(tag => tag !== "All").map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.gitUrl && (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-white/10 border border-gray-600 text-white text-sm font-medium rounded-lg hover:bg-white/20 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              Code
            </a>
          )}
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Preview
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Data
const projectsData = [
  {
    id: 1,
    title: "SmartMention",
    description: "Advanced social media mention analysis tool with real-time sentiment tracking and comprehensive analytics dashboard for brands and businesses.",
    image: "/images/projects/sm-preview.png",
    tag: ["All", "Web"],
    previewUrl: "https://smartmention.com",
  },
  {
    id: 2,
    title: "PrimeGrills: Restaurant Management System",
    description: "Full-stack micro-service restaurant management platform with order processing, inventory management, and integrated payment solutions using modern web technologies.",
    image: "/images/projects/prime.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "AdFriend: Ad Interceptor and Movie Recommender",
    description: "Chrome extension that blocks advertisements while providing personalized movie recommendations using TMDB API.",
    image: "/images/projects/adfriend2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RkayG/ad-friend",
    previewUrl: "https://screenrec.com/share/XRNehEHpSc",
  },
  {
    id: 4,
    title: "Web3Fruity: Crypto Income Discovery Platform",
    description: "Comprehensive cryptocurrency income discovery platform featuring real-time market data, DeFi yield farming opportunities, and portfolio tracking.",
    image: "/images/projects/web3fruity.png",
    tag: ["All", "Web", "Blockchain"],
    gitUrl: "https://github.com/RkayG/Web3Fruity",
    previewUrl: "https://www.web3fruity.com/",
  },
  {
    id: 5,
    title: "Esplora: Ethereum Blockchain Explorer",
    description: "Blockchain explorer for Ethereum network with transaction tracking.",
    image: "/images/projects/esplora.png",
    tag: ["All", "Web", "Blockchain"],
    gitUrl: "https://github.com/RkayG/Esplora",
  },
  {
    id: 6,
    title: "Imuzic: Spotify Recommendation System",
    description: "Music recommendation engine that analyzes listening patterns and suggests personalized playlists using Spotify's comprehensive API.",
    image: "/images/projects/imuzic.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RkayG/iMuzic",
  },
  {
    id: 7,
    title: "Simple Shell: Linux Shell Implementation",
    description: "Custom implementation of the Linux shell with command parsing, process management, and built-in commands written in C programming language.",
    image: "/images/projects/simple-shell.png",
    tag: ["All", "Linux"],
    gitUrl: "https://github.com/RkayG/simple_shell",
  },
  {
    id: 8,
    title: "Monty: Bytecode Interpreter",
    description: "Stack-based bytecode interpreter for Monty language with comprehensive opcode support and error handling implemented in C.",
    image: "/images/projects/monty.png",
    tag: ["All", "Linux"],
    gitUrl: "https://github.com/RkayG/monty",
  },
];

// Main Projects Section Component
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section id="projects" className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Header */}
          <div className="relative text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore my latest work featuring cutting-edge technologies and innovative solutions
              </p>
            </motion.div>
          </div>

          {/* Filter Tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectTag
              onClick={handleTagChange}
              name="All"
              isSelected={tag === "All"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Web"
              isSelected={tag === "Web"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Blockchain"
              isSelected={tag === "Blockchain"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Linux"
              isSelected={tag === "Linux"}
            />
          </motion.div>

          {/* Projects Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectsSection;