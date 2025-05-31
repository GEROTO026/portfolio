const SkillsSection = () => {
  const skills = [
    { name: "HTML5", logo: "https://cdn-icons-png.flaticon.com/512/174/174854.png" },
    { name: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png" },
    { name: "UI/UX Design", logo: "https://cdn-icons-png.flaticon.com/512/5527/5527656.png" },
    { name: "Responsive Design", logo: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 p-4 bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="mt-3 font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

// DONE