import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit  = async  (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.name == ""  ||  formData.email == ""  || formData.subject == ""  || formData.message == "" ) { 
         setStatus('error');
      return;
    } else {
      setStatus('sending');
    }
    
   
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      label: "Email",
      value: "yiro849@gmail.com",
      href: "mail to: yiro849@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-red-600" />,
      label: "Phone",
      value: "+1 (809) 809-6037",
      href:  "tel:+1 809-935-6037"
    },
    {
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      label: "Locations",
      value: "Santo Domingo, RD",
      href: "Republica Dominicana"  
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-indigo-600 to-emerald-600"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with amazing people. Let's create something extraordinary together.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 bg-white shadow-lg rounded-2xl">
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                Send Message
              </h3>
              
              {status === 'success' && (
                <div className="flex items-center p-4 mb-6 space-x-3 border border-green-200 rounded-lg bg-green-50">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-600" />
                  <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center p-4 mb-6 space-x-3 border border-red-200 rounded-lg bg-red-50">
                  <AlertCircle className="flex-shrink-0 w-5 h-5 text-red-600" />
                  <p className="text-red-800">Something went wrong. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                     
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl focus:outline-none focus:ring-1442 focus:ring-indigo-100 focus:border-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
             
                    rows={5}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 resize-vertical"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center w-full px-6 py-4 space-x-3 font-semibold text-white transition-all duration-300 transform bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 rounded-xl hover:scale-105 disabled:transform-none focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 bg-white shadow-lg rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Get In Touch
                </h3>
                <p className="mb-8 leading-relaxed text-gray-600">
                  I'm always open to discussing new opportunities, creative projects, 
                  or potential collaborations. Feel free to reach out through any of 
                  the following channels.
                </p>
                
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-semibold text-gray-700">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-900 transition-colors duration-300 rounded-lg hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 border border-indigo-100 bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl">
                <h4 className="mb-4 text-xl font-bold text-gray-900">
                  Let's Create Something Amazing
                </h4>
                <p className="leading-relaxed text-gray-600">
                  Whether you have a project in mind, need technical consultation, 
                  or just want to say hello, I'd love to hear from you. I typically 
                  respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;