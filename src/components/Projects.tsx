
import { ExternalLink, Github, Rocket } from 'lucide-react';
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
      demo: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Restaurant App',
      description: 'A full-stack restaurant management system where customers can place orders and hosts can manage product listings.',
      tech: ['Node.js', 'Express.js', 'JavaScript', 'EJS', 'MongoDB'],
      features: ['Order management', 'Menu customization', 'User roles', 'Real-time updates'],
      image: '/lovable-uploads/652a815f-05bc-43a3-9d67-8407cb80a53c.png',
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'JobFinder App',
      description: 'A modern React-based job application platform with intuitive user interface and smooth user experience.',
      tech: ['React', 'JavaScript', 'CSS', 'REST APIs'],
      features: ['Job search', 'Application tracking', 'User profiles', 'Responsive design'],
      image: '/lovable-uploads/652a815f-05bc-43a3-9d67-8407cb80a53c.png',
      github: '#',
      demo: '#',
      gradient: 'from-orange-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">My work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-primary/20 hover-lift overflow-hidden group relative">
              {/* Project image/icon area */}
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-8xl opacity-70 group-hover:scale-110 transition-transform duration-500">🚀</div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-3 text-lg">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-primary font-semibold mb-3 text-lg">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-yellow-500/20 text-primary text-sm rounded-full border border-primary/30 hover:border-primary/50 transition-colors duration-300"
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
                    className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold"
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
