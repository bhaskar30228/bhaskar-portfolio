
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhaskarpujari2006@gmail.com',
      href: 'mailto:bhaskarpujari2006@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9625384983',
      href: 'tel:+919625384983',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'bhaskar-pujari-aa8509297',
      href: 'https://linkedin.com/in/bhaskar-pujari-aa8509297',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-gray-900/20 to-transparent relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Get in touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="block group"
                >
                  <div className="flex items-center space-x-6 p-6 card-gradient rounded-2xl border-primary/20 hover-lift group-hover:border-primary/40 transition-all duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="text-white font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/bhaskar30228"
                  className="group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center border border-gray-600 hover:border-primary/50 transition-all duration-300 hover-lift">
                    <Github className="text-gray-300 group-hover:text-primary transition-colors duration-300" size={20} />
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/bhaskar-pujari-aa8509297"
                  className="group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center border border-blue-500 hover:border-primary/50 transition-all duration-300 hover-lift">
                    <Linkedin className="text-white group-hover:text-primary transition-colors duration-300" size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-gradient p-10 rounded-2xl border-primary/20">
            <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-gray-600 text-white h-12 text-lg focus:border-primary/50 transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-gray-600 text-white h-12 text-lg focus:border-primary/50 transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-900/50 border-gray-600 text-white text-lg focus:border-primary/50 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-bold py-4 text-lg glow-effect hover-lift"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
