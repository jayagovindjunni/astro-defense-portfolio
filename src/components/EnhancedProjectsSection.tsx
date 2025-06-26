
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  short_description: string;
  full_description: string;
  tech_stack: string[];
  github_url: string | null;
  live_url: string | null;
  image_url: string | null;
  status: string;
  created_at: string;
}

const EnhancedProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'completed' | 'in_progress'>('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in_progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'planned': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-jarvis-blue to-jarvis-blue-light bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge defense technology solutions and innovations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-effect rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-700 rounded mb-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-jarvis-blue to-jarvis-blue-light bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Cutting-edge defense technology solutions and innovations
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'completed', label: 'Completed' },
              { key: 'in_progress', label: 'In Progress' }
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as any)}
                variant={filter === filterOption.key ? "default" : "outline"}
                className={filter === filterOption.key 
                  ? "bg-jarvis-blue hover:bg-jarvis-blue-light" 
                  : "border-jarvis-gray text-gray-400 hover:text-white hover:border-jarvis-blue"
                }
              >
                {filterOption.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-effect border-jarvis-gray hover:border-jarvis-blue/50 transition-all duration-300 group overflow-hidden">
              {project.image_url && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}>
                    {project.status.replace('_', ' ')}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-jarvis-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.short_description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-jarvis-blue/20 text-jarvis-blue border-jarvis-blue/30">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech_stack.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                      +{project.tech_stack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  {project.github_url && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-jarvis-gray text-gray-400 hover:text-white hover:border-jarvis-blue flex-1"
                      onClick={() => window.open(project.github_url!, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.live_url && (
                    <Button
                      size="sm"
                      className="bg-jarvis-blue hover:bg-jarvis-blue-light flex-1"
                      onClick={() => window.open(project.live_url!, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>

                <div className="flex items-center text-xs text-gray-500 pt-2 border-t border-jarvis-gray">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(project.created_at).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedProjectsSection;
