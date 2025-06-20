
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'Redux', icon: '🔄' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'REST APIs', icon: '🔗' },
        { name: 'EJS', icon: '📄' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'SQL', icon: '🗃️' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'GitHub', icon: '🐙' },
        { name: 'Postman', icon: '📮' },
        { name: 'Clerk Auth', icon: '🔐' },
        { name: 'Java (DSA)', icon: '☕' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
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
