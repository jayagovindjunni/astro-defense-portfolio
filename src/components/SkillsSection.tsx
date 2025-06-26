
import SkillBar from './SkillBar';

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

  const skillsWithProgress = [
    { name: 'Python & AI/ML', percentage: 90 },
    { name: 'Cybersecurity', percentage: 85 },
    { name: 'Electronics Design', percentage: 80 },
    { name: 'C++ Development', percentage: 75 },
    { name: 'Robotics', percentage: 70 },
    { name: 'OSINT Analysis', percentage: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-jarvis-darker relative overflow-hidden">
      <div className="absolute inset-0 jarvis-grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jarvis-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-tech text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Skills &amp; Interests</span>
              <span className="text-jarvis-blue glow-text"> We Value</span>
            </h2>
            
            <p className="font-mono text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are looking for patriotic, passionate people who share our vision of protecting the nation with technology and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Skills Grid */}
            <div>
              <h3 className="font-tech text-2xl text-jarvis-blue mb-8 text-center">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="jarvis-card group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative p-4 h-full flex items-center justify-center">
                      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-jarvis-blue opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      
                      <h3 className="font-mono text-sm text-center text-gray-300 group-hover:text-jarvis-blue transition-all duration-300 font-medium">
                        {skill}
                      </h3>
                      
                      <div className="absolute inset-0 bg-jarvis-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bars */}
            <div>
              <h3 className="font-tech text-2xl text-jarvis-blue mb-8 text-center">Proficiency Levels</h3>
              <div className="space-y-2">
                {skillsWithProgress.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
