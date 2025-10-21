"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TypingEffect from './components/TypingEffect';

export default function Home() {
  const heroRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    if (typeof window !== 'undefined') {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);

      if (isMobile) return;


      const heroElement = document.getElementById('hero');
      if (!heroElement) return;

      const rect = heroElement.getBoundingClientRect();
      const isOverHero = event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (isOverHero) {

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const gradient = `
          radial-gradient(
            circle at ${x * 100}% ${y * 100}%, 
            rgba(6, 182, 212, 0.2) 0%,
            rgba(59, 130, 246, .001) 50%,
            transparent 100%
          )
        `;

        heroElement.style.background = gradient;
      } else {
        heroElement.style.background = '';
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);

      if (!isMobile) {
        let throttled = false;
        const throttledMouseMove = (e) => {
          if (!throttled) {
            requestAnimationFrame(() => {
              handleMouseMove(e);
              throttled = false;
            });
            throttled = true;
          }
        };

        window.addEventListener("mousemove", throttledMouseMove);

        return () => {
          window.removeEventListener("mousemove", throttledMouseMove);
        };
      }
    }
  }, [handleMouseMove]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen py-8 px-4 md:px-8 relative w-full" id="hero">
          {/* Background decoration */}
          <div className="absolute bottom-20 left-8 text-cyan-400/20 text-4xl font-mono select-none">
            { }
          </div>

          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent select-none">
              Hey, I'm Christian
            </h1>

            <div className="flex flex-col items-center md:flex-row md:justify-center md:text-3xl font-semibold text-white">
              <p className="mr-0 md:mr-3 text-2xl md:text-4xl select-none">I am a</p>
              <TypingEffect phrases={["Software Engineer.", "Full Stack Developer.", "Student.", "Creator."]} />
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative solutions and creating seamless user experiences through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/christian-diaz-276246327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/christiangdiaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
              </div>

              <div className="h-8 w-px bg-gray-600 hidden sm:block"></div>

              <a
                href="/Diaz, Christian.docx"
                download="Diaz, Christian.docx"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaDownload className="text-sm" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}