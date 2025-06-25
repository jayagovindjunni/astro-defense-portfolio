
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-jarvis-dark relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-tech text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-jarvis-blue glow-text">About</span>
            <span className="text-white"> Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg jarvis-glow-border">
                <h3 className="font-tech text-xl text-jarvis-blue mb-4">Background</h3>
                <p className="text-gray-300 font-mono leading-relaxed">
                  As a dedicated tech enthusiast, I'm passionate about leveraging cutting-edge technology 
                  to solve real-world problems, particularly in the defense sector. My journey combines 
                  theoretical knowledge with practical innovation.
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-lg jarvis-glow-border">
                <h3 className="font-tech text-xl text-jarvis-blue mb-4">Vision</h3>
                <p className="text-gray-300 font-mono leading-relaxed">
                  To revolutionize soldier safety and defense capabilities through advanced technology 
                  solutions that bridge the gap between innovation and practical military applications.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg jarvis-glow-border">
                <h3 className="font-tech text-2xl text-jarvis-blue mb-6 glow-text">Project SENTINEL</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-jarvis-blue pl-4">
                    <h4 className="font-mono text-white font-semibold">TuckSole Technology</h4>
                    <p className="text-gray-400 text-sm">Advanced soldier safety footwear systems</p>
                  </div>
                  <div className="border-l-2 border-jarvis-blue pl-4">
                    <h4 className="font-mono text-white font-semibold">Astronova Surveillance</h4>
                    <p className="text-gray-400 text-sm">Satellite-based monitoring and reconnaissance</p>
                  </div>
                  <div className="border-l-2 border-jarvis-blue pl-4">
                    <h4 className="font-mono text-white font-semibold">AI Training Tools</h4>
                    <p className="text-gray-400 text-sm">Machine learning-driven tactical training systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
