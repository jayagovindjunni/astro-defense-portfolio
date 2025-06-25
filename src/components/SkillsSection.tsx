
const SkillsSection = () => {
  const skills = [
    'AI/ML & Deep Learning',
    'Robotics & Automation',
    'Cybersecurity',
    'OSINT & Intelligence Analysis',
    'Electronics & Circuit Design',
    'Python, C++ Development',
    'Satellite Technology',
    'Patriotism & National Service',
    'Leadership & Teamwork'
  ];

  return (
    <section id="skills" className="py-20 bg-jarvis-darker relative overflow-hidden">
      {/* Jarvis-like background grid */}
      <div className="absolute inset-0 jarvis-grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jarvis-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-tech text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Skills &amp; Interests</span>
            <span className="text-jarvis-blue glow-text"> We Value</span>
          </h2>
          
          <p className="font-mono text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We are looking for patriotic, passionate people who share our vision of protecting the nation with technology and innovation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill} 
                className="jarvis-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-6 h-full flex items-center justify-center">
                  {/* Jarvis-like corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Skill text */}
                  <h3 className="font-mono text-sm md:text-base text-center text-gray-300 group-hover:text-jarvis-blue transition-all duration-300 font-medium">
                    {skill}
                  </h3>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-jarvis-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
