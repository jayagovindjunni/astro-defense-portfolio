
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "TuckSole Defense System",
      description: "Advanced soldier safety footwear with integrated sensors, GPS tracking, and health monitoring capabilities for enhanced battlefield protection.",
      fullDescription: "TuckSole represents a revolutionary approach to soldier safety through smart footwear technology. This comprehensive system integrates multiple sensors, real-time health monitoring, GPS tracking, and environmental hazard detection into military-grade boots.",
      tech: ["IoT", "C++", "Sensors", "GPS"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      features: [
        "Real-time health monitoring including heart rate and body temperature",
        "GPS tracking with encrypted location sharing",
        "Environmental hazard detection (chemical, biological threats)",
        "Impact and fall detection with automatic alert system",
        "Long-lasting battery with solar charging capability"
      ],
      challenges: [
        "Miniaturizing sensors while maintaining military durability standards",
        "Ensuring reliable wireless communication in hostile environments",
        "Balancing power consumption with feature requirements"
      ]
    },
    {
      title: "Astronova Surveillance",
      description: "Satellite-based reconnaissance system using AI-powered image analysis for real-time battlefield intelligence and threat detection.",
      fullDescription: "Astronova leverages cutting-edge satellite technology combined with advanced AI algorithms to provide comprehensive surveillance and reconnaissance capabilities for defense applications.",
      tech: ["Python", "AI/ML", "Computer Vision", "Satellites"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      features: [
        "Real-time satellite image processing and analysis",
        "AI-powered threat detection and classification",
        "Automated alert system for suspicious activities",
        "Integration with existing defense communication networks",
        "Historical data analysis for pattern recognition"
      ],
      challenges: [
        "Processing massive amounts of satellite data in real-time",
        "Achieving high accuracy in threat detection while minimizing false positives",
        "Ensuring secure data transmission and storage"
      ]
    },
    {
      title: "AI Tactical Training",
      description: "Machine learning-driven training simulation platform that adapts to individual soldier skills and provides personalized combat scenarios.",
      fullDescription: "This advanced training platform uses machine learning to create dynamic, personalized training scenarios that adapt to each soldier's skill level and learning progress.",
      tech: ["TensorFlow", "VR", "AI", "Simulation"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      features: [
        "Adaptive training scenarios based on individual performance",
        "VR integration for immersive training experiences",
        "Real-time performance analytics and feedback",
        "Multi-user collaborative training environments",
        "Progress tracking and skill assessment tools"
      ],
      challenges: [
        "Creating realistic and diverse training scenarios",
        "Ensuring smooth VR performance with complex AI calculations",
        "Balancing training difficulty to maintain engagement"
      ]
    },
    {
      title: "OSINT Intelligence Hub",
      description: "Comprehensive open-source intelligence gathering and analysis platform for threat assessment and strategic planning.",
      fullDescription: "A sophisticated platform that aggregates and analyzes open-source intelligence from multiple channels to provide actionable insights for defense and security operations.",
      tech: ["Python", "Data Analysis", "API", "Dashboard"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      features: [
        "Multi-source data aggregation and correlation",
        "Automated threat assessment and risk scoring",
        "Interactive dashboards with real-time updates",
        "Advanced search and filtering capabilities",
        "Secure data handling and access controls"
      ],
      challenges: [
        "Handling diverse data formats and sources",
        "Ensuring data accuracy and reliability",
        "Maintaining system security while processing public data"
      ]
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-jarvis-dark relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-jarvis-blue glow-text">Featured</span>
            <span className="text-white"> Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-effect rounded-lg overflow-hidden hover:border-jarvis-blue transition-all duration-300 group jarvis-glow-border transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jarvis-darker via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-tech text-xl text-white mb-3 group-hover:text-jarvis-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-jarvis-gray text-jarvis-blue font-mono text-xs rounded-full border border-jarvis-blue/30 hover:border-jarvis-blue hover:bg-jarvis-blue/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => openModal(project)}
                    className="font-mono text-jarvis-blue hover:text-white transition-colors text-sm border-b border-jarvis-blue hover:border-white hover:bg-jarvis-blue/10 px-2 py-1 rounded"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
