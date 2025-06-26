
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';
import ParticlesBackground from '../components/ParticlesBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-darker text-white relative">
      <ParticlesBackground />
      <ThemeToggle />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
