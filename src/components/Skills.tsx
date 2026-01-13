
import { Code, Database, Server, Palette, Shield, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["Angular", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Python", "NodeJS", "NestJS", "REST API"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Technologies",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "JPA"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "AWS Lambda", "AWS Cognito", "AWS S3", "AWS API Gateway", "Docker", "CI/CD"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Monitoring",
      skills: ["Okta", "VAPT", "HSTS", "CSP", "Grafana"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tools & Methodologies",
      skills: ["Git", "Bitbucket", "Postman", "Jira", "Agile/Scrum", "JUnit", "Claude Code AI"]
    }
  ];

  return (
    <section id="skills" className="pt-12 pb-8 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 group border border-slate-200"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-200"
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
