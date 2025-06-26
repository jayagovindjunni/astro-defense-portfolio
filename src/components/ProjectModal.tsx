
import { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-effect rounded-lg animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-jarvis-blue/20 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-jarvis-blue" />
        </button>
        
        <div className="p-8">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <h2 className="font-tech text-3xl text-jarvis-blue mb-4">{project.title}</h2>
          
          <p className="text-gray-300 font-mono mb-6 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
          
          <div className="mb-6">
            <h3 className="font-tech text-xl text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-jarvis-gray text-jarvis-blue font-mono text-sm rounded-full border border-jarvis-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {project.features && (
            <div className="mb-6">
              <h3 className="font-tech text-xl text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 font-mono flex items-start">
                    <span className="text-jarvis-blue mr-2">▶</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {project.challenges && (
            <div>
              <h3 className="font-tech text-xl text-white mb-3">Technical Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300 font-mono flex items-start">
                    <span className="text-jarvis-blue mr-2">◆</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
