
import { GraduationCap, Code, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Passionate developer with a focus on creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a BCA final year student at <span className="text-primary font-semibold">Guru Gobind Singh Indraprastha University (GGSIPU)</span> 
                and a full stack developer with experience in building full-featured web applications 
                using the <span className="text-primary font-semibold">MERN stack</span>.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development began with a curiosity about how websites work, 
                and has evolved into a passion for creating <span className="text-primary font-semibold">scalable</span>, user-friendly applications. 
                I'm constantly learning and adapting to new technologies.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl border border-primary/20 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Education</h3>
                  <p className="text-gray-400">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-primary font-medium">GGSIPU — Final Year</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="card-gradient p-8 rounded-2xl hover-lift group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Full Stack Development</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Experienced in both frontend and backend development with modern technologies, 
                creating end-to-end solutions that deliver exceptional user experiences.
              </p>
            </div>

            <div className="card-gradient p-8 rounded-2xl hover-lift group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Problem Solving</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sharpening my skills in Data Structures and Algorithms with Java, 
                focusing on writing efficient, optimized code for complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
