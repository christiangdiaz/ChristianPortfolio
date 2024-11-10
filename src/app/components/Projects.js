import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [project, setProject] = useState('');
  const [x, setX] = useState(1);

  const openPopUp = (project) => {
    setShowPopUp(true);
    setProject(project);
    setX(1); 
  };

  const closePopUp = () => {
    setShowPopUp(false);
    setProject('');
    setX(1); 
  };

  const maxImages = project === 'Condo' ? 3 : 4; 

  return (
    <section className="w-full py-16 bg-gray-900" id="projects">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <button className="text-2xl font-bold text-cyan-400" onClick={() => openPopUp('Condo')}>
              Pelican Point
            </button>
            <p className="text-gray-300 mt-2">
              Built a secure condo website for document access and resident resources using Node.js, Firebase, React, and Tailwind CSS, hosted on Heroku.
            </p>
            <div className="flex items-center mt-4">
              <a href="https://github.com/christiangdiaz/ppe-frontend" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              <p> | </p>
              <a href="https://www.ppecondo.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>

          {/* Pop-Up */}
          {showPopUp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full text-center border border-cyan-400">
                <p className="text-2xl font-bold text-cyan-400 mb-3">
                  {project === 'Condo' ? 'Pelican Point' : project === 'translation' ? 'Perfect Accent' : ''}
                </p>

                <img src={`/${project}${x}.png`} 
                alt={project} 
                className="w-full h-72 object-cover rounded mb-4" 
                style={{userSelect: 'none'}}
                draggable={false}
                />

                <div className="flex justify-between items-center mb-4">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="text-white text-3xl cursor-pointer hover:text-cyan-400 transition"
                    onClick={() => setX(x === 1 ? maxImages : x - 1)}
                  />
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white text-3xl cursor-pointer hover:text-cyan-400 transition"
                    onClick={() => setX(x === maxImages ? 1 : x + 1)}
                  />
                </div>

                <button onClick={closePopUp} className="px-6 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition">
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <button className="text-2xl font-bold text-cyan-400" onClick={() => openPopUp('translation')}>
              Perfect Accent
            </button>
            <p className="text-gray-300 mt-2">
              Direct-to-consumer e-commerce website for a small business. Customers can submit a file to receive a quote.
            </p>
            <div className="flex items-center mt-4">
              <a href="https://github.com/christiangdiaz/translations" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              <p> | </p>
              <a href="https://www.perfect-accent.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
