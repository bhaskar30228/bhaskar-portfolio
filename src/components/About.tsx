
import { GraduationCap, Code, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a focus on creating meaningful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a BCA final year student at Guru Gobind Singh Indraprastha University (GGSIPU) 
              and a full stack developer with experience in building full-featured web applications 
              using the MERN stack.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development began with a curiosity about how websites work, 
              and has evolved into a passion for creating scalable, user-friendly applications. 
              I'm constantly learning and adapting to new technologies.
            </p>

            <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <GraduationCap className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold text-white">Education</h3>
                <p className="text-gray-400">Bachelor of Computer Applications (BCA), GGSIPU — Final Year</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover-lift">
              <Code className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development</h3>
              <p className="text-gray-400">
                Experienced in both frontend and backend development with modern technologies
              </p>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover-lift">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-400">
                Sharpening my skills in Data Structures and Algorithms with Java
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
