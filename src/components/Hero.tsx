
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-yellow-500/10"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-orange-600/15 to-red-500/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float-slow"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-8 hover-lift">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-medium">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow">
            Hi, I'm{' '}
            <span className="gradient-text relative">
              Bhaskar Pujari
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl rounded-lg opacity-50"></div>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
            <span className="text-primary font-semibold">Full Stack</span> Developer
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            I build <span className="text-primary font-semibold">modern</span>, scalable web applications using the{' '}
            <span className="text-primary font-semibold">MERN stack</span> and more. 
            Currently in my final year of BCA at GGSIPU, passionate about creating 
            innovative digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-bold px-10 py-4 text-lg glow-effect hover-lift shadow-2xl"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-black px-10 py-4 text-lg hover-lift glass-effect"
              asChild
            >
              <a href="#contact">
                Contact Me
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
