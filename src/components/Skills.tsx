
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "Express", "FastAPI"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "AWS", "Firebase", "Docker"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "GraphQL"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      skills: ["Figma", "Git", "VS Code", "Photoshop", "UI/UX"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
