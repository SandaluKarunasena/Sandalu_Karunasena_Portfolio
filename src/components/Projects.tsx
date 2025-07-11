
import { ExternalLink, Github, Play } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      video: null,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/sandalu-umayanga",
      demo: "https://example.com"
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform mobile app built with React Native. Features offline sync, push notifications, and collaborative workspaces.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      video: null,
      technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
      github: "https://github.com/sandalu-umayanga",
      demo: "https://example.com"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights. Built with Python backend and React frontend.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      video: null,
      technologies: ["Python", "TensorFlow", "React", "D3.js", "Docker"],
      github: "https://github.com/sandalu-umayanga",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-blue-500/20 border border-blue-500'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Project Preview */}
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="relative group">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover"
              />
              {projects[selectedProject].video && (
                <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white" />
                </button>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {projects[selectedProject].title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {projects[selectedProject].description}
              </p>
              
              <div className="flex space-x-4">
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-white transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a
                  href={projects[selectedProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
