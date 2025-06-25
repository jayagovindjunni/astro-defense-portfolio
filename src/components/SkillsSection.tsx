
const SkillsSection = () => {
  const skills = [
    { name: 'AI/ML', level: 90, icon: '🤖' },
    { name: 'Robotics', level: 85, icon: '🦾' },
    { name: 'OSINT', level: 88, icon: '🔍' },
    { name: 'Cybersecurity', level: 82, icon: '🛡️' },
    { name: 'Electronics', level: 87, icon: '⚡' },
    { name: 'Python', level: 93, icon: '🐍' },
  ];

  return (
    <section id="skills" className="py-20 bg-tech-darker">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">Technical</span>
            <span className="text-tech-green glow-text"> Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-effect p-6 rounded-lg hover:border-tech-green transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{skill.icon}</span>
                  <h3 className="font-tech text-xl text-white group-hover:text-tech-green transition-colors">
                    {skill.name}
                  </h3>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-tech-gray h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-tech-green to-tech-green-dark rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="absolute -top-8 right-0 font-mono text-tech-green text-sm">
                    {skill.level}%
                  </span>
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
