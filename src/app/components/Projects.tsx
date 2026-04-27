import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  live: string | null;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "pelican-point",
      title: "Pelican Point",
      description:
        "A secure website providing document access and resources for condo residents. Built with Node.js, Firebase, React, and Tailwind CSS. Backend hosted on Heroku; frontend on AWS Amplify.",
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "Tailwind CSS",
        "AWS",
        "Heroku",
      ],
      github: "https://github.com/christiangdiaz/ppe-frontend-next",
      live: "https://www.ppecondo.com/",
    },
    {
      id: "build-umass",
      title: "BUILD UMass",
      description:
        "Updated the BUILD UMass website from legacy code to modern TypeScript using Next.js and Tailwind CSS. Led a team of 4 developers, overseeing a member showcase and an AI-powered search engine for new opportunities.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/build-umass/BUILD-website",
      live: "https://www.buildumass.com/",
    },
    {
      id: "nefac",
      title: "New England First Amendment Coalition",
      description:
        "Created in collaboration with Build UMass. Part of a team that was tasked with creating and implementing an AI-powered search engine into their existing website.",
      technologies: [
        "AI/ML",
        "Search Engine",
        "Team Collaboration",
        "Build UMass",
      ],
      github: null,
      live: null,
    },
  ];

  return (
    <section
      className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      id="projects"
    >
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="group relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 flex flex-col flex-1">
                {/* header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400/60 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-3">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-cyan-400 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-cyan-400 transition-colors"
                        aria-label="Live site"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {proj.title}
                </h3>

                {/* description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {proj.description}
                </p>

                {/* tech badges */}
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
