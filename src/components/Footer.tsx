import React from 'react';
import { Github, Linkedin, Mail, Heart } from  'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/yiro02",
      icon: <Github size={20} />,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com",
      icon: <Linkedin size={20} />,
      label: "LinkedIn"
    }, 
    {
      href: "mailto: alex@example.com",
      icon: <Mail size={20} />,
      label: "Email"
    }
  ];

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 text-white bg-gray-900" role="contentinfo">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 mb-8 md:grid-cols-3">
            
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold"> Jose Gabriel Hernandez </h3>
              <p className="leading-relaxed text-gray-400">
                Frontend Developer passionate about creating exceptional digital experiences 
                with modern web technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 transition-colors duration-300 rounded-lg hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2" role="navigation" aria-label="Footer navigation">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block px-2 py-1 text-left text-gray-400 transition-colors duration-300 rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <a 
                  href="https://www.google.com/maps/place/Santo+Domingo/@18.4541852,-69.9377149,16.09z/data=!4m6!3m5!1s0x8eaf89f1107ea5ab:0xd6c587b82715c164!8m2!3d18.4626178!4d-69.9360924!16zL20vMGZ0aGw?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                  className="block transition-colors duration-300 rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                 Santo Domingo Este, Dominican Republic
                </a>
                <a 
                  href="mailto: yiro849@gmail.com" 
                  className="block transition-colors duration-300 rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  yiro849@gmail.com
                </a>
                <a 
                  href="cel: +1 809-935-6037"
                  className="block transition-colors duration-300 rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  +1 (809) 935-6037
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between pt-8 space-y-4 border-t border-gray-800 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Jose Gabriel Hernandez. All rights reserved.
            </p>
            <p className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Built with</span>
              <Heart size={22} className="text-red-500 " />
              <span>using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
 