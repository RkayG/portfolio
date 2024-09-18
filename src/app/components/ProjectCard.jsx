import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg max-h-[400px] md:max-h-[400px] h-full rounded-t-xl relative group">
    <div className="h-48 overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    </div>
    <div className="px-4">
      <div className="h-12 mt-3 mb-2">
        <p className="text-sm font-bold text-gray-700">{project.title}</p>
      </div>
     
      <div className="h-12 -mt-4 mb-2">
        <p className="text-gray-600 text-sm ">{project.description}</p>
      </div> 
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tag.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="flex justify-between p-4 border-t">
      <a
        href={project.gitUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
        Code
      </a>
      {project.previewUrl && (
        <a
          href={project.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Preview
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Web3Fruity: Cryto Income Discovery Platform",
    description: "NextJs, Tailwind CSS, NodeJs, MongoDB, Contentful CMS, Coingecko API",
    image: "/images/projects/b.png",
    tag: ["All", "Web", "Blockchain"],
    gitUrl: "https://github.com/RkayG/Web3Fruity",
    previewUrl: "https://www.web3fruity.com/",
  },
  {
    id: 3,
    title: "Esplora: Ethereum Blockchain Explorer",
    description: "HTML, Vanilla JS, Tailwind CSS, Coingecko API, Alchemy API",
    image: "/images/projects/esplora.png",
    tag: ["All", "Web", "Blockchain"],
    gitUrl: "https://github.com/RkayG/Esplora",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Imuzic: Spotify Recommendation System",
    description: "Streamlit, Python, Tailwind CSS, Spotipy API",
    image: "/images/projects/imuzic.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RkayG/iMuzic",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "imuzic V2",
    description: "Flask, JavaScript, Python, Spotipy API, HTML, CSS",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RkayG/iMuzic-V2",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Simple Shell: Implementation of the Linux Shell",
    description: "C Language",
    image: "/images/projects/simple-shell.png",
    tag: ["All", "Linux"],
    gitUrl: "https://github.com/RkayG/simple_shell",
   // previewUrl: "/",
  },
  {
    id: 6,
    title: "Monty: Bytecode Interpreter",
    description: "C Language",
    image: "/images/projects/monty.png",
    tag: ["All", "Linux"],
    gitUrl: "https://github.com/RkayG/monty",
    //previewUrl: "/",
  },
];

