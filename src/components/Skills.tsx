import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 50 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 92 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Next.js", level: 85 },
        { name: "Git", level: 52 },
        { name: "Figma", level:60 },
         ]
    },
    {
      title: "Additional Skills",
      skills: [
        { name: "Node.js", level: 55 },
              ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-indigo-600 to-emerald-600"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              A comprehensive toolkit of modern technologies and methodologies 
              for building exceptional web applications.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <div 
           key={categoryIndex} className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl" >
                <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 ">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full">
                        <div 
                          className="h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-indigo-600 to-emerald-600"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 150}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
         </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);