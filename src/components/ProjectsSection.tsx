
const ProjectsSection = () => {
  const projects = [
    {
      title: "TuckSole Defense System",
      description: "Advanced soldier safety footwear with integrated sensors, GPS tracking, and health monitoring capabilities for enhanced battlefield protection.",
      tech: ["IoT", "C++", "Sensors", "GPS"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
    },
    {
      title: "Astronova Surveillance",
      description: "Satellite-based reconnaissance system using AI-powered image analysis for real-time battlefield intelligence and threat detection.",
      tech: ["Python", "AI/ML", "Computer Vision", "Satellites"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
    },
    {
      title: "AI Tactical Training",
      description: "Machine learning-driven training simulation platform that adapts to individual soldier skills and provides personalized combat scenarios.",
      tech: ["TensorFlow", "VR", "AI", "Simulation"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    },
    {
      title: "OSINT Intelligence Hub",
      description: "Comprehensive open-source intelligence gathering and analysis platform for threat assessment and strategic planning.",
      tech: ["Python", "Data Analysis", "API", "Dashboard"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-tech-green glow-text">Featured</span>
            <span className="text-white"> Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-effect rounded-lg overflow-hidden hover:border-tech-green transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-tech text-xl text-white mb-3 group-hover:text-tech-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-tech-gray text-tech-green font-mono text-xs rounded-full border border-tech-green/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="font-mono text-tech-green hover:text-white transition-colors text-sm border-b border-tech-green hover:border-white">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
