
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900/50 to-transparent border-t border-primary/20 py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-6 hover:scale-105 transition-transform duration-300">
            Bhaskar Pujari
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            <span className="text-primary font-semibold">Full Stack Developer</span> • Final Year BCA Student at GGSIPU
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>© 2024 Bhaskar Pujari. Built with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span>and lots of code.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
