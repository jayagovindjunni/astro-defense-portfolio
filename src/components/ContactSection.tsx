
import { Mail, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-jarvis-darker relative overflow-hidden">
      <div className="absolute inset-0 jarvis-grid-bg opacity-25"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-tech text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Get In</span>
            <span className="text-jarvis-blue glow-text"> Touch</span>
          </h2>
          
          <div className="glass-effect p-8 rounded-lg mb-12 jarvis-glow-border">
            <p className="font-mono text-gray-300 text-lg mb-8 leading-relaxed">
              Ready to collaborate on the next breakthrough in defense technology? 
              Let's connect and build the future of soldier safety together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:jayagovind@example.com"
                className="flex items-center space-x-3 px-6 py-3 bg-jarvis-blue text-jarvis-darker font-mono font-semibold rounded-lg hover:bg-jarvis-blue-light transition-all duration-300 transform hover:scale-105 jarvis-glow-border"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
              
              <a 
                href="https://github.com/jayagovind"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 border-2 border-jarvis-blue text-jarvis-blue font-mono font-semibold rounded-lg hover:bg-jarvis-blue hover:text-jarvis-darker transition-all duration-300 jarvis-glow-border"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-jarvis-gray pt-8">
            <p className="font-mono text-gray-500 text-sm">
              © 2024 Jayagovind J Unni. Building tomorrow's defense solutions today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
