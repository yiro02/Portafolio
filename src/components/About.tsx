import React from 'react';
import { Code2, Palette, Zap } from 'lucide-react';
 

const About = () => {
  const values = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600"/>,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Palette className="w-8 h-8 text-emerald-600"/>,
      title: "User-Centered Design",
      description: "Creating intuitive interfaces that prioritize user experience and accessibility."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              About Me
            </h2>
            <div className="w-24 h-2 mx-auto mb-8 bg-gradient-to-r from-indigo-600 to-emerald-600"></div>
          </div>

          <div className="grid items-center gap-12 mb-16 lg:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-full h-96 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-2xl">
                <div className="flex items-center justify-center rounded-full w-100 h-80 bg-gradient-to-br from-blue-200 to-emerald-200">
                  <img src="../images/_BC_NC_Foto.jpg" alt="BC-fotografia" className='rounded-full w-100 h-80'  />
              </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Crafting Digital Experiences
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                With over 2 years of experience in frontend development, I specialize in creating 
                modern, responsive web applications using React, TypeScript, and cutting-edge web technologies. 
                I'm passionate about writing clean, efficient code and building user interfaces that 
                are both beautiful and functional.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I believe in the power of collaboration and continuous learning. Whether working with 
                designers, backend developers, or product managers, I strive to bridge the gap between 
                design and technology to create exceptional user experiences.
              </p>
              <div className="pt-4">
               <a 
               href="../public/Jose Gabriel Hernandez - Front-End Developer - Resume.pdf" 
               download 
                target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-indigo-600 hover:bg-indigo-700 rounded-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                 >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 text-center transition-all duration-300 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="mb-4 text-xl font-bold text-gray-900">
                  {value.title}
                </h4>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About); 