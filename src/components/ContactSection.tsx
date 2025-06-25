
import { Mail, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-tech-darker">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-tech text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Get In</span>
            <span className="text-tech-green glow-text"> Touch</span>
          </h2>
          
          <div className="glass-effect p-8 rounded-lg mb-12">
            <p className="font-mono text-gray-300 text-lg mb-8 leading-relaxed">
              Ready to collaborate on the next breakthrough in defense technology? 
              Let's connect and build the future of soldier safety together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:jayagovind@example.com"
                className="flex items-center space-x-3 px-6 py-3 bg-tech-green text-tech-darker font-mono font-semibold rounded-lg hover:bg-tech-green-dark transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
              
              <a 
                href="https://github.com/jayagovind"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 border-2 border-tech-green text-tech-green font-mono font-semibold rounded-lg hover:bg-tech-green hover:text-tech-darker transition-all duration-300"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-tech-gray pt-8">
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
