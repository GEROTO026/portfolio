const SkillsSection = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Responsive Design", level: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;