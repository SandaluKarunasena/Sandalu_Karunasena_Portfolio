
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Synegern Health (PVT) Ltd",
      location: "Colombo, Sri Lanka",
      period: "May 2025 - Present",
      description: "Leading security enhancements and system architecture improvements for healthcare billing systems, focusing on vulnerability assessments and client onboarding optimization.",
      achievements: [
        "Eliminated SQL injection vulnerabilities discovered in VAPT assessments by refactoring legacy dynamic SQL to use JPA and parameterized queries. Enforced repository-level validation that reduced injection attack vectors by 100% and improved audit pass rates across all affected modules.",
        "Fixed 10+ high-risk VAPT findings by implementing HTTP security headers and authentication controls across AWS Lambda and Spring Boot services. Set up HSTS, CSP, Permissions-Policy, X-Frame-Options, and CORS policies at the API Gateway layer. Also restricted actuator endpoints in production and added immediate JWT invalidation on logout, cutting the attack surface by 60%+ and meeting all OWASP security requirements.",
        "Implemented client-side security headers to block XSS, clickjacking, data exfiltration, and protocol downgrade attacks. Created strict CSP rules that allowed integration with Stripe and web components while maintaining security. Configured HSTS with preload/subdomain support and locked down CORS to trusted origins only. This eliminated all medium and high-severity findings in follow-up VAPT scans.",
        "Rebuilt invoice and statement generation for new ambulance-sector clients, which required refactoring backend validation and aggregation logic to handle their complex billing scenarios. Improved processing speed by up to 50%, increased financial accuracy, and made the system more reliable for high-volume healthcare transactions.",
        "Redesigned the frontend UI using Angular 15, Angular Material, Bootstrap, and modern HTML/CSS to improve consistency, responsiveness, and accessibility. Better component structure and visual hierarchy reduced navigation friction and accelerated task completion by 30%, leading to higher client adoption.",
        "Owned the complete development process for multiple production features - from analyzing requirements and estimating effort to designing technical solutions, writing code, and reviewing pull requests. Consistently hit sprint deadlines while improving estimation accuracy and reducing post-release bugs."
      ]
    },
    {
      title: "Software Engineer",
      company: "Synegern Health (PVT) Ltd",
      location: "Colombo, Sri Lanka",
      period: "August 2023 - April 2025",
      description: "Developed robust financial analytics and client support systems using Angular, Java, Spring Boot, and MySQL, serving 800+ clients managing $26M in global receivables.",
      achievements: [
        "Engineered account receivable analytics dashboard with caching and optimization",
        "Built client support feature that reduced support tickets by 60% through threaded discussions",
        "Upgraded frontend portal from Angular 9 to Angular 15, improving performance and maintainability",
        "Redesigned notification panel, cutting notification incidents by 70%",
        "Implemented Okta login event tracking for enhanced security monitoring"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Embla Software Innovation (PVT) Ltd",
      location: "Colombo, Sri Lanka",
      period: "December 2021 - July 2022",
      description: "Worked on large-scale hospitality management system for LosjiTech using Angular, NestJS, TypeScript, PostgreSQL, and AWS in an 11-member team.",
      achievements: [
        "Introduced and implemented diagram maker tool for articles using GoJS library",
        "Automated nightly data synchronization with cron jobs, saving 25 hours monthly",
        "Developed password recovery system with AWS Cognito API, eliminating 90% of related support tickets",
        "Awarded Best Industrial Trainee In Sri Lanka 2021/2022 by Institution of Engineers Sri Lanka"
      ]
    }
  ];

  return (
    <section id="experience" className="pt-12 pb-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30 transform md:-translate-x-px"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 shadow-lg border-2 border-white"></div>
              
              <div className={`md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-200 relative overflow-hidden group">
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-primary font-semibold mb-2 text-lg">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-slate-500 text-sm space-y-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                  
                  <div className="bg-white/70 rounded-lg p-4 border border-slate-200/50">
                    <h5 className="font-semibold text-slate-700 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-600 text-sm flex items-start">
                          <span className="text-primary mr-3 mt-1 text-base">▸</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
