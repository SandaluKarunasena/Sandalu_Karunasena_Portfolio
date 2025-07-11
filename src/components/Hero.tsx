
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Sandalu
            <span className="text-blue-400"> Karunasena</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Full-Stack Software Engineer
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with cutting-edge technologies. 
            Experienced in web and mobile development, with a focus on user experience and performance.
          </p>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/sandalu-umayanga"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandalu-karunasena/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a
              href="mailto:sandalu.karunasena@example.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </button>
    </section>
  );
};

export default Hero;
