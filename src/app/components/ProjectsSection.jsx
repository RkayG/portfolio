"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SmartMention",
    description: "Social Media Mention Analysis Tool",
    image: "/images/projects/sm-preview.png",
    tag: ["All", "Web"],
    //gitUrl: "/",
    previewUrl: "https://smartmention.com",
  },
  {
    id: 2,
    title: "PrimeGrills: Restaurant Management System",
    description: "Vite, React, Django, Tailwind CSS, PostgreSQL, RabbitMq, Paystack API",
    image: "/images/projects/prime.png",
    tag: ["All", "Web"],
    //gitUrl: "/",
    //previewUrl: "https://smartmention.com",
  },
  {
    id: 3,
    title: "AdFriend: Ad Interceptor and Movie Recommender",
    description: "React, Tailwind CSS, Vanilla JS, Typescript, Webpack, TMDB API, Manifest V3",
    image: "/images/projects/adfriend.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RkayG/ad-friend",
    //previewUrl: "https://smartmention.com",
  },
  {
    id: 4,
    title: "Web3Fruity: Crypto Income Discovery Platform",
    description: "NextJs, Tailwind CSS, NodeJs, MongoDB, Contentful CMS, Coingecko API",
    image: "/images/projects/a.png",
    tag: ["All", "Web", "Blockchain"],
    gitUrl: "https://github.com/RkayG/Web3Fruity",
    previewUrl: "https://www.web3fruity.com/",
  },
  {
    id: 5,
    title: "Esplora: Ethereum Blockchain Explorer",
    description: "HTML, Vanilla JS, Tailwind CSS, Coingecko API, Alchemy API",
    image: "/images/projects/esplora.png",
    tag: ["All", "Web", "Blockchain"],
    gitUrl: "https://github.com/RkayG/Esplora",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Imuzic: Spotify Recommendation System",
    description: "Streamlit, Python, Tailwind CSS, Spotipy API",
    image: "/images/projects/imuzic.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RkayG/iMuzic",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "imuzic V2",
    description: "Flask, JavaScript, Python, Spotipy API, HTML, CSS",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RkayG/iMuzic-V2",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Simple Shell: Implementation of the Linux Shell",
    description: "C Language",
    image: "/images/projects/simple-shell.png",
    tag: ["All", "Linux"],
    gitUrl: "https://github.com/RkayG/simple_shell",
   // previewUrl: "/",
  },
  {
    id: 9,
    title: "Monty: Bytecode Interpreter",
    description: "C Language",
    image: "/images/projects/monty.png",
    tag: ["All", "Linux"],
    gitUrl: "https://github.com/RkayG/monty",
    //previewUrl: "/",
  },
];

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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center gap-1 md:gap-2 lg:gap-2 items-center py-6">
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
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              project = {project}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
