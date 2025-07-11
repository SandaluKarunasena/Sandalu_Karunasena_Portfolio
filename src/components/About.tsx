
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">
              I'm a passionate software engineer with a strong foundation in full-stack development. 
              My journey in technology spans across web development, mobile applications, and modern 
              frameworks.
            </p>
            
            <p className="text-lg leading-relaxed">
              With experience in both frontend and backend technologies, I enjoy creating seamless 
              user experiences while ensuring robust and scalable backend solutions. I'm constantly 
              learning and adapting to new technologies to stay at the forefront of innovation.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-1">
              <div className="bg-white rounded-lg p-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Sandalu Karunasena"
                  className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
