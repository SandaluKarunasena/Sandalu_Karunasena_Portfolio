
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Corp",
      location: "Remote",
      period: "2022 - Present",
      description: "Lead full-stack development projects, mentor junior developers, and architect scalable solutions using modern technologies.",
      achievements: [
        "Led development of microservices architecture serving 100k+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 5 junior developers and conducted code reviews"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd",
      location: "Colombo, Sri Lanka",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Built responsive web applications with 99.9% uptime",
        "Optimized database queries improving performance by 40%",
        "Implemented automated testing reducing bugs by 50%"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "StartUp Innovations",
      location: "Colombo, Sri Lanka",
      period: "2019 - 2020",
      description: "Started career focusing on frontend development with React and Vue.js. Gained experience in agile development methodologies.",
      achievements: [
        "Contributed to 3 successful product launches",
        "Learned modern development practices and tools",
        "Collaborated with design team to implement pixel-perfect UIs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform md:-translate-x-px"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform md:-translate-x-2 z-10"></div>
              
              <div className={`md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-blue-400 font-semibold mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-slate-300 text-sm space-y-1">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-400 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
