import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BSc Engineering (Hons) in Computer Science and Engineering",
      institution: "University of Moratuwa",
      location: "Colombo, Sri Lanka",
      period: "October 2018 - December 2023",
      gpa: "CGPA: 3.73/4.2 (First Class)",
      achievements: [
        "Dean's List: Semesters 1, 3, 6, 7, and 8",
        "Best Industrial Trainee In Sri Lanka 2021/2022 (Institution of Engineers Sri Lanka)"
      ]
    }
  ];

  return (
    <section id="education" className="pt-12 pb-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-200">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-slate-800">
                      {edu.degree}
                    </h3>
                  </div>
                  <h4 className="text-primary font-semibold text-lg mb-2">
                    {edu.institution}
                  </h4>
                  <div className="text-slate-600 font-medium mb-4">
                    {edu.gpa}
                  </div>
                </div>
                
                <div className="text-slate-500 text-sm space-y-2 lg:text-right">
                  <div className="flex items-center lg:justify-end">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center lg:justify-end">
                    <MapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold text-slate-700">Awards & Achievements</span>
                </div>
                <ul className="space-y-2 ml-7">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-slate-600 flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;