import React, { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [project, setProject] = useState('');
  const [x, setX] = useState(1);
  const popUpRef = useRef(null);

  const projects = [
    {
      id: 'pelican-point',
      title: 'Pelican Point',
      description: 'A secure website providing document access and resources for condo residents. Built with Node.js, Firebase, React, and Tailwind CSS. Backend hosted on Heroku; frontend on AWS Amplify.',
      technologies: ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'AWS', 'Heroku'],
      github: 'https://github.com/christiangdiaz/ppe-frontend',
      live: 'https://www.ppecondo.com/',
      images: 3,
      imagePrefix: 'pelican'
    },
    {
      id: 'perfect-accent',
      title: 'Perfect Accent',
      description: 'An e-commerce platform allowing customers to submit files for quotes, managed by Firebase and designed for a small business. Developed with JavaScript, using React, hosted on AWS Amplify.',
      technologies: ['React', 'JavaScript', 'Firebase', 'AWS', 'E-commerce'],
      github: 'https://github.com/christiangdiaz/translations',
      live: 'https://www.perfect-accent.com/',
      images: 3,
      imagePrefix: 'perfect'
    },
    {
      id: 'nefac',
      title: 'New England First Amendment Coalition',
      description: 'Created in collaboration with Build UMass. Part of a team that was tasked with creating and implementing an AI-powered search engine into their existing website.',
      technologies: ['AI/ML', 'Search Engine', 'Team Collaboration', 'Build UMass'],
      github: null,
      live: null,
      images: 2,
      imagePrefix: 'nefac'
    }
  ];

  const openPopUp = (projectId) => {
    setShowPopUp(true);
    setProject(projectId);
    setX(1); 
  };

  const closePopUp = () => {
    setShowPopUp(false);
    setProject('');
    setX(1); 
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        closePopUp();
      }
    }

    if(showPopUp) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showPopUp]);

  const currentProject = projects.find(p => p.id === project);
  const maxImages = currentProject ? currentProject.images : 0; 

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800" id="projects">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <button 
                    onClick={() => openPopUp(proj.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="View project details"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {proj.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4">
                  {proj.github && (
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <span>📁</span>
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {proj.live && (
                    <a 
                      href={proj.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pop-Up Modal */}
        {showPopUp && currentProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div ref={popUpRef} className="bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-cyan-400">{currentProject.title}</h2>
                  <button 
                    onClick={closePopUp}
                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {currentProject.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {currentProject.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-center rounded-lg border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {currentProject.github && (
                    <a 
                      href={currentProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <span>📁</span>
                      <span>View Code</span>
                    </a>
                  )}
                  {currentProject.live && (
                    <a 
                      href={currentProject.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
