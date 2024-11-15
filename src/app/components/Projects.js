import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [project, setProject] = useState('');
  const [x, setX] = useState(1);
  const popUpRef = useRef(null);


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
  const maxImages = project === 'Condo' ? 3 : 4; 

  return (
    <section className="w-full py-16 bg-gray-900" id="projects">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <button className="text-2xl font-bold text-cyan-400 hover:text-cyan-600" onClick={() => openPopUp('Condo')}>
              Pelican Point
            </button>
            <p className="text-gray-300 mt-2">
            A secure website providing document access and resources for condo residents. Built with Node.js, Firebase, React, and Tailwind CSS. Backend hosted on Heroku; frontend on AWS Amplify.            </p>
            <div className="flex items-center mt-4">
              <a href="https://github.com/christiangdiaz/ppe-frontend" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              <p className='m-2'> | </p>

              <a href="https://www.ppecondo.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
              View Project
              </a>
            </div>
          </div>

    

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <button className="text-2xl font-bold text-cyan-400 hover:text-cyan-600" onClick={() => openPopUp('translation')}>
              Perfect Accent
            </button>
            <p className="text-gray-300 mt-2">
            An e-commerce platform allowing customers to submit files for quotes, managed by Firebase and designed for a small business. Developed with JavaScript, using React, hosted on AWS Amplify.
            </p>
              <div className="flex items-center mt-4">
              <a href="https://github.com/christiangdiaz/translations" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              <p className='m-2'> | </p>
              <a href="https://www.perfect-accent.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300'>
            <button className='text-2xl font-bold text-cyan-400 hover:text-cyan-600' onClick={() => openPopUp('.png')}>
              New England First Amendment Coalition
            </button>
          </div>

           {/* Pop-Up */}
           {showPopUp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div ref={popUpRef} className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full text-center border border-cyan-400 ">
                <p className="text-2xl font-bold text-cyan-400 mb-3">
                  {project === 'Condo' ? 'Pelican Point' : project === 'translation' ? 'Perfect Accent' : project==='nefac' ? 'New England First Amendment Coalition' : ''}
                </p>

                {project==='Condo' ? 
                <div>
                <img src={`/${project}${x}.png`} 
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
                </div>
                : project==='translation' ? 
                <div>
                <img src={`/${project}${x}.png`} 
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
                </div>
                : project==='nefac' ? <p></p> : 
                <div>
                  <p className='text-2xl font-bold text-cyan-400 mb-3'>NEFAC</p> 
                  <p className='pb-2 mb-4'>Created in collaboration with Build UMass. Part of a team that was tasked with creating and implementing an AI-powered search engine into their existing website.</p>
                </div>}

                <button onClick={closePopUp} className="px-6 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition">
                  Close
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
