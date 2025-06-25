
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-tech-darker">
      <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-tech text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Jayagovind</span>
            <br />
            <span className="text-tech-green glow-text">J Unni</span>
          </h1>
          
          <p className="font-mono text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-left">
            Tech Enthusiast &amp; Future Defense-Tech Innovator
          </p>
          
          <div className="inline-block p-4 glass-effect rounded-lg animate-glow-pulse">
            <p className="font-mono text-tech-green text-sm md:text-base">
              &gt; Developing next-gen defense solutions through Project SENTINEL
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-tech-green text-tech-darker font-mono font-semibold rounded-lg hover:bg-tech-green-dark transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-tech-green text-tech-green font-mono font-semibold rounded-lg hover:bg-tech-green hover:text-tech-darker transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
