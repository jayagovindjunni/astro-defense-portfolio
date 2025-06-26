
import TypingAnimation from './TypingAnimation';

const HeroSection = () => {
  const typingTexts = [
    "Tech Enthusiast & Future Defense-Tech Innovator",
    "AI/ML & Robotics Specialist",
    "Cybersecurity & OSINT Expert",
    "Electronics & Circuit Designer"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-jarvis-darker">
      <div className="absolute inset-0 jarvis-grid-bg opacity-40"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-tech text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Jayagovind</span>
            <br />
            <span className="text-jarvis-blue glow-text">J Unni</span>
          </h1>
          
          <div className="h-16 mb-8">
            <TypingAnimation 
              texts={typingTexts}
              className="font-mono text-xl md:text-2xl text-gray-300"
            />
          </div>
          
          <div className="inline-block p-4 glass-effect rounded-lg animate-jarvis-glow-pulse jarvis-glow-border mb-12">
            <p className="font-mono text-jarvis-blue text-sm md:text-base">
              &gt; Developing next-gen defense solutions through Project SENTINEL
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-jarvis-blue text-jarvis-darker font-mono font-semibold rounded-lg hover:bg-jarvis-blue-light transition-all duration-300 transform hover:scale-105 jarvis-glow-border hover:shadow-lg hover:shadow-jarvis-blue/25"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-jarvis-blue text-jarvis-blue font-mono font-semibold rounded-lg hover:bg-jarvis-blue hover:text-jarvis-darker transition-all duration-300 jarvis-glow-border hover:shadow-lg hover:shadow-jarvis-blue/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-jarvis-blue glow-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
