import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-indigo-200 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-emerald-200 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
      <div className="container relative z-10 px-6 py-32 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Hi, I'm{'  '}
              <span className="text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text">
               Jose Gabriel Hernandez
              </span>
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-gray-600 md:text-2xl">
              A passionate <strong>Frontend Developer</strong> who creates exceptional digital experiences 
              with modern web technologies, focusing on performance, accessibility, and user delight.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-indigo-600 shadow-lg hover:bg-indigo-700 rounded-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 hover:shadow-xl"
             >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-semibold text-indigo-600 transition-all duration-300 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
             >
              Get In Touch
            </button>
          </div>

          <div className="flex items-center justify-center mb-16 space-x-6">
            <a 
              href="https://github.com/yiro02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Visit GitHub profile"
             >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gabriel-hernandez-morales/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Send email"
            >
              <Mail size={28} />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="p-2 text-gray-400 transition-colors duration-300 rounded-lg animate-bounce hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default React.memo(Hero); 
// Using React.memo to prevent unnecessary re-renders