
-- Create a table for blog posts
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for project details (enhanced projects)
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_description TEXT,
  full_description TEXT,
  tech_stack TEXT[] DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'completed', -- completed, in_progress, planned
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for testimonials
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT,
  company TEXT,
  content TEXT NOT NULL,
  avatar_url TEXT,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- new, read, replied
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for analytics/page views
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  active BOOLEAN DEFAULT true
);

-- Enable Row Level Security (RLS) for public access
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (published = true);

CREATE POLICY "Anyone can view projects" 
  ON public.projects 
  FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can view featured testimonials" 
  ON public.testimonials 
  FOR SELECT 
  USING (featured = true);

-- Create policies for contact form submissions
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policies for page views (analytics)
CREATE POLICY "Anyone can log page views" 
  ON public.page_views 
  FOR INSERT 
  WITH CHECK (true);

-- Create policies for newsletter subscriptions
CREATE POLICY "Anyone can subscribe to newsletter" 
  ON public.newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Insert some sample data
INSERT INTO public.projects (title, slug, short_description, full_description, tech_stack, github_url, image_url, featured, status) VALUES
('TuckSole Defense System', 'tucksole-defense', 'Advanced soldier safety footwear with integrated sensors', 'TuckSole represents a revolutionary approach to soldier safety through smart footwear technology. This comprehensive system integrates multiple sensors, real-time health monitoring, GPS tracking, and environmental hazard detection into military-grade boots.', ARRAY['IoT', 'C++', 'Sensors', 'GPS'], 'https://github.com/jayagovind/tucksole', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop', true, 'completed'),
('Astronova Surveillance', 'astronova-surveillance', 'Satellite-based reconnaissance system using AI', 'Astronova leverages cutting-edge satellite technology combined with advanced AI algorithms to provide comprehensive surveillance and reconnaissance capabilities for defense applications.', ARRAY['Python', 'AI/ML', 'Computer Vision', 'Satellites'], 'https://github.com/jayagovind/astronova', 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop', true, 'completed'),
('AI Tactical Training', 'ai-tactical-training', 'ML-driven training simulation platform', 'This advanced training platform uses machine learning to create dynamic, personalized training scenarios that adapt to each soldier''s skill level and learning progress.', ARRAY['TensorFlow', 'VR', 'AI', 'Simulation'], 'https://github.com/jayagovind/ai-training', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop', true, 'completed');

INSERT INTO public.testimonials (name, position, company, content, featured) VALUES
('Col. Sarah Mitchell', 'Defense Systems Director', 'US Defense Department', 'Jayagovind''s innovative approach to defense technology is exactly what our military needs. His solutions are practical, robust, and game-changing.', true),
('Dr. Michael Chen', 'AI Research Lead', 'Defense Tech Institute', 'Working with Jayagovind has been exceptional. His technical expertise combined with his understanding of defense requirements makes him invaluable.', true),
('Maj. David Rodriguez', 'Field Operations Commander', 'Special Forces Unit', 'The TuckSole system has revolutionized how we approach soldier safety. This technology saves lives in the field.', true);

INSERT INTO public.blog_posts (title, slug, excerpt, content, published) VALUES
('The Future of Defense Technology', 'future-defense-technology', 'Exploring emerging technologies that will shape the next generation of defense systems.', 'In this comprehensive analysis, we explore how AI, IoT, and advanced materials are revolutionizing defense technology...', true),
('Building Resilient Military Systems', 'resilient-military-systems', 'Key principles for developing robust defense solutions that perform under extreme conditions.', 'Military systems must operate in the harshest environments. Here are the core principles I follow when developing defense technology...', true),
('Innovation in Soldier Safety', 'innovation-soldier-safety', 'How modern technology is enhancing protection and situational awareness for military personnel.', 'Soldier safety is paramount in defense technology. This post explores the latest innovations in personal protection systems...', true);
