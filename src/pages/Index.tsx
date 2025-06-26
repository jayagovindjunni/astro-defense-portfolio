
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import EnhancedProjectsSection from '../components/EnhancedProjectsSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EnhancedContactSection from '../components/EnhancedContactSection';
import NewsletterSection from '../components/NewsletterSection';
import ThemeToggle from '../components/ThemeToggle';
import ParticlesBackground from '../components/ParticlesBackground';
import { useAnalytics } from '../hooks/useAnalytics';

const Index = () => {
  useAnalytics();

  return (
    <div className="min-h-screen bg-tech-darker text-white relative">
      <ParticlesBackground />
      <ThemeToggle />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EnhancedProjectsSection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
      <EnhancedContactSection />
    </div>
  );
};

export default Index;
