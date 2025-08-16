import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroImage from '@/assets/resized.png';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Problem Solver','Backend Developer', 'Frontend Developer', 'DevOps Engineer','Public Speaker','Freelancer'];

  // Social Links Configuration - Easy to update
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5 lg:h-6 lg:w-6" />,
      url: 'https://github.com/syedmohammedumarumar', 
      hoverColor: 'hover:bg-primary/60'
    },
    {
      name: 'LinkedIn', 
      icon: <Linkedin className="h-5 w-5 lg:h-6 lg:w-6" />,
      url: 'https://www.linkedin.com/in/mohammedumar474/', 
      hoverColor: 'hover:bg-primary/60'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5 lg:h-6 lg:w-6" />,
      url: 'mailto:umar.md.4474@gmail.com',
      hoverColor: 'hover:bg-primary/60'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500); // Change role every 2.5 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .animate-role-change {
          animation: roleChange 0.5s ease-in-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 20px hsl(var(--primary) / 0.3)); }
          50% { filter: drop-shadow(0 0 30px hsl(var(--primary) / 0.5)); }
        }
        @keyframes roleChange {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-8">
          {/* Mobile Photo */}
          <div className="flex mt-10 justify-center animate-fade-in-up">
            <div className="relative w-48 h-48">
              <div className="w-50 h-50 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-primary/30 overflow-hidden animate-float">
                <img
                  src={HeroImage}
                  alt="Mohammed Umar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Mobile Glow Effects */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-accent/20 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up text-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-serif font-bold text-foreground leading-tight">
                Hello, I'm <span className="gradient-text">Mohammed Umar</span>
              </h1>
              <p className="text-lg text-muted-foreground font-medium animate-role-change" key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I craft exceptional digital experiences through innovative development 
                and thoughtful design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="px-6 py-4 text-base font-semibold animate-pulse-glow hover:scale-105 transition-all" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-4 text-base font-semibold hover:scale-105 transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-full transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                  >
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Hello, I'm <span className="gradient-text">Mohammed Umar</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium animate-role-change" key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I craft exceptional digital experiences through innovative development 
                and thoughtful design. Passionate about creating solutions that make 
                a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold animate-pulse-glow hover:scale-105 transition-all" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
            </div>

            {/* Desktop Social Links */}
            <div className="flex  gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-full transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                  >
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative animate-float flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-primary/30 overflow-hidden">
                <img
                  src={HeroImage}
                  alt="Mohammed Umar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Glow Effects */}
              <div className="absolute -top-4 left-60 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/1 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="rounded-full hover:bg-primary/60">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;