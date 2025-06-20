
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Shopping App',
      description: 'A comprehensive e-commerce platform with user roles (Host/Customer), favorites functionality, and product browsing capabilities.',
      tech: ['Node.js', 'Express.js', 'JavaScript', 'EJS', 'MongoDB'],
      features: ['User authentication', 'Product management', 'Shopping cart', 'Favorites system'],
      image: '/lovable-uploads/652a815f-05bc-43a3-9d67-8407cb80a53c.png',
      github: '#',
      demo: '#'
    },
    {
      title: 'Restaurant App',
      description: 'A full-stack restaurant management system where customers can place orders and hosts can manage product listings.',
      tech: ['Node.js', 'Express.js', 'JavaScript', 'EJS', 'MongoDB'],
      features: ['Order management', 'Menu customization', 'User roles', 'Real-time updates'],
      image: '/lovable-uploads/652a815f-05bc-43a3-9d67-8407cb80a53c.png',
      github: '#',
      demo: '#'
    },
    {
      title: 'JobFinder App',
      description: 'A modern React-based job application platform with intuitive user interface and smooth user experience.',
      tech: ['React', 'JavaScript', 'CSS', 'REST APIs'],
      features: ['Job search', 'Application tracking', 'User profiles', 'Responsive design'],
      image: '/lovable-uploads/652a815f-05bc-43a3-9d67-8407cb80a53c.png',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700 hover-lift overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-6xl opacity-50">🚀</div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="text-primary font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-black"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-black"
                    asChild
                  >
                    <a href={project.demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
