import React from 'react';
import { ExternalLink,  Github,  } from 'lucide-react';
 
const Projects = () => {
  const projects = [
    {
      title: "Mini-Dashboard",
      description: "A comprehensive Admin dashboard for managing dashboard widgets, when Receive an error message when the form is submitted if The input field is empty The email address is not formatted correctly",
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/v1554895678/Challenges/tvzmm442kkjocmihbpiq.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/yiro02/Ping-Comming-Soon/tree/master",
      demo: "https://mini-dash-board.netlify.app/",
      featured: true
    },
    
    {
      title: "Intro Component with Sign Up Form",
      description: "A collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/v1559829911/Challenges/cbyamvcsyhwlvnlelr5n.jpg", 
      tags:  ["React", "TypeScript", "Tailwind CSS", "API"],
      github: "https://https://github.com/yiro02/register-intro-form.com",
      demo: "https://intro-component-with-sing-up-form-p.netlify.app/",
      featured: true
    },

    {
      title: "Blog de Viajes App",
      description: "A beautiful web-site application with interactive maps, and travel to different parts of the U.K .",
      image: "https://blogs-viajes.netlify.app/img/imagen_1.jpg",
      tags: ["HTML", "CCS"],
      github: "https://github.com",
      demo: "https://blogs-viajes.netlify.app/#",
      featured: true
    },

    {
      title: "Cubos 3D",
      description: "A responsive 3-D Cube built with HTML, CCS, JAVA-SCRIPT featuring smooth animations and optimized performance.",
      image: "https://png.pngtree.com/png-vector/20250422/ourlarge/pngtree-d-glossy-rubik-s-cube-with-vivid-colors-and-realistic-puzzle-png-image_16077048.png", 
      tags: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/yiro02/Cubo-3d",
      demo: "https://cubos-3d.netlify.app/",
      featured: true
    },
    
    {
      title: "Social Coffe Blog",
      description: "A comprehensive Website for social management coffe-break course, and Coffee extraction technique.",
      image: "https://user-images.githubusercontent.com/91045865/155264474-91705d12-9823-4809-8a62-ed2104c0c2eb.png",
      tags: ["HTML", "CSS" ],
      github: "https://github.com",
      demo: "https://blog-coffe-0.netlify.app/",
      featured: true
    },
    {
      title: "Learning Management System",
      description: "An interactive learning platform with course management, progress tracking, and video streaming capabilities.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Firebase", "Video.js", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project =>  project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Featured Projects
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-indigo-600 to-emerald-600">
              
            </div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              A showcase of my recent work, demonstrating expertise in modern web development 
              and commitment to creating exceptional user experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid gap-12 mb-20 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="overflow-hidden transition-all duration-500 transform group bg-gray-50 rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="overflow-hidden cursor-pointer aspect-video bg-gradient-to-br from-indigo-100 to-emerald-100">
                  <img 
                    src={project.image} 
                    alt={`Screenshot of ${project.title}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={20} />
                      <span className="font-medium">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-2 text-gray-600 transition-colors duration-300 rounded-lg hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-12">
            <h3 className="mb-12 text-3xl font-bold text-center text-gray-900">
              Other Notable Projects
            </h3>
            <div className="grid gap-8 cursor-pointer md:grid-cols-2 xl:grid-cols-4">
              {otherProjects.map((project, index) => (
                <div 
                  key={index}
                  className="overflow-hidden transition-all duration-300 transform group bg-gray-50 rounded-xl hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="overflow-hidden aspect-video bg-gradient-to-br from-indigo-100 to-emerald-100">
                    <img 
                      src={project.image} 
                      alt={`Screenshot of ${project.title}`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                      {project.title}
                    </h4>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-600 transition-colors duration-300 rounded hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-600 transition-colors duration-300 rounded hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);