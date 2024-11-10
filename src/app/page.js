"use client";

import { useCallback, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import TypingEffect from './components/TypingEffect';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  const handleMouseMove = useCallback((event) => {
    const x = event.clientX / window.innerWidth / 2 + 0.25;
    const y = event.clientY / window.innerHeight / 2 + 0.25;
    document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #1f1c2c, #454a59)`;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen py-8 px-4 md:px-8" id="hero">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg backdrop-blur-md mb-4 text-center" style={{ userSelect: 'none' }}>
          Hey, I'm Christian
        </h1>
        <div className="flex flex-col items-center md:flex-row md:text-3xl font-semibold text-white mt-2">
          <p className="mr-0 md:mr-2 text-xl md:text-3xl" style={{ userSelect: 'none' }}>I am a</p>
          <TypingEffect phrases={["Software Engineer.", "Full Stack Developer.", "Student", "Creator"]} />
        </div>
        <div className="flex space-x-4 md:space-x-6 mt-8">
          <a
            href="https://www.linkedin.com/in/christian-diaz-276246327"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl md:text-3xl hover:text-cyan-400 transition duration-200 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/christiangdiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl md:text-3xl hover:text-gray-300 transition duration-200 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
