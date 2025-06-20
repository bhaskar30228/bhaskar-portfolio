
import { Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', icon: '🌐', level: 90 },
        { name: 'CSS', icon: '🎨', level: 85 },
        { name: 'JavaScript', icon: '⚡', level: 88 },
        { name: 'React', icon: '⚛️', level: 85 },
        { name: 'Redux', icon: '🔄', level: 75 },
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Express.js', icon: '🚀', level: 80 },
        { name: 'REST APIs', icon: '🔗', level: 85 },
        { name: 'EJS', icon: '📄', level: 75 },
      ]
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', icon: '🍃', level: 80 },
        { name: 'SQL', icon: '🗃️', level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'GitHub', icon: '🐙', level: 85 },
        { name: 'Postman', icon: '📮', level: 80 },
        { name: 'Clerk Auth', icon: '🔐', level: 70 },
        { name: 'Java (DSA)', icon: '☕', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-medium">My expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card-gradient p-8 rounded-2xl hover-lift group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 text-center group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group/skill"
                  >
                    <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
                      <span className="text-3xl group-hover/skill:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <div className="flex-1">
                        <span className="text-gray-300 font-semibold text-lg block">
                          {skill.name}
                        </span>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
