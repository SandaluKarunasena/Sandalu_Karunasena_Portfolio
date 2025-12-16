import {ExternalLink, Github} from "lucide-react";

const Projects = () => {

    const projects = [
        {
            title: "Client Bill (Natera Inc)",
            description: "A billing service system specifically designed to simplify and facilitate revenue cycle management. This innovative solution ensures that aged receivables are efficiently managed, reducing instances of uncollected funds.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
            video: null,
            technologies: ["Java", "Angular", "Spring Boot", "MySQL", "AWS", "REST APIs", "HTML", "CSS"],
            github: "https://github.com/sandalu-umayanga",
            demo: "https://example.com"
        },
        {
            title: "Retrieval Based Inertial Localization",
            description: "University of Moratuwa Final Year Project addressing indoor localization through a retrieval-based approach using only IMU inputs from inertial sensors without external infrastructure such as WiFi, Bluetooth, floorplan, or GPS.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
            video: null,
            technologies: ["PyTorch", "Python", "Machine Learning", "Deep Neural Network", "U-Net", "Contrastive Learning", "HDF5"],
            github: "https://github.com/sandalu-umayanga",
            demo: "https://drive.google.com/file/d/1w1okkzn7QqJBXOlV9PXnEV4_60jSK1y3/view?usp=drivesdk"
        },
        {
            title: "Smart Phone Based Indoor Navigation System",
            description: "University of Moratuwa Semester 7 Mobile Computing Project. A mobile app that uses WiFi fingerprinting method to navigate users between two points while providing live location. Features data collection, cleaning, navigation, and KNN model for accurate indoor navigation without external infrastructure.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
            video: null,
            technologies: ["React Native", "HTML/CSS", "Machine Learning", "KNN", "WiFi Fingerprinting"],
            github: "https://github.com/sandalu-umayanga",
            demo: "https://example.com"
        },
        {
            title: "Project Dharma Home Suites (LosjiTech)",
            description: "A hospitality operations system and future-proof PMS to manage and sell inventory at industrial level. Features company, customer, agent, and admin management with ticketing system and knowledge base tailor-made for hospitality operations. Developed for USA client Dharma Home Suites.",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
            video: null,
            technologies: ["Angular", "TypeScript", "NestJS", "PostgreSQL", "AWS", "HTML/CSS", "GoJS", "Sequelize ORM"],
            github: "https://github.com/sandalu-umayanga",
            demo: "https://example.com"
        }
    ];

    return (
        <section id="projects" className="pt-12 pb-8 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
                    Featured Projects
                </h2>

                <div className="space-y-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg transition-all duration-300 border bg-slate-50 hover:bg-slate-100 border-slate-200"
                        >
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 text-sm mb-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-2 py-1 bg-slate-200 text-slate-600 rounded text-xs"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg text-slate-700 transition-colors duration-200"
                                >
                                    <Github className="w-4 h-4"/>
                                    <span>Code</span>
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg text-white transition-colors duration-200"
                                >
                                    <ExternalLink className="w-4 h-4"/>
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
