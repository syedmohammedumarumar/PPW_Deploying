import React from "react";
import { Code, Palette, Zap, Award, Coffee, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    { icon: <Code className="h-6 w-6" />, title: "Full Stack Development", description: "Expert in modern web technologies" },
    { icon: <Palette className="h-6 w-6" />, title: "UI/UX Design", description: "Beautiful & intuitive experiences" },
    { icon: <Zap className="h-6 w-6" />, title: "Performance", description: "Fast, efficient applications" },
    { icon: <Award className="h-6 w-6" />, title: "Best Practices", description: "Clean, maintainable code" }
  ];

  const interests = [
    { icon: <Coffee className="h-5 w-5" />, text: "Exploring new technologies" },
    { icon: <Heart className="h-5 w-5" />, text: "Open source contributions" },
    { icon: <Target className="h-5 w-5" />, text: "Mentoring developers" }
  ];

  return (
    <section id="about" className="py-10 px-6 lg:px-8 bg-secondary/60 rounded-md">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 20px hsl(var(--primary) / 0.3)); }
          50% { filter: drop-shadow(0 0 30px hsl(var(--primary) / 0.5)); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl gradient-text font-serif font-bold mb-6">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Problem Solver and Full Stack Developer who loves turning 
              real-world challenges into practical digital solutions. For me, coding is 
              not just about writing lines of code — it's about identifying problems, 
              understanding them deeply, and crafting impactful solutions through technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond development, I enjoy exploring new technologies, working on projects 
              that push my creativity, and sharing knowledge with others. I strongly believe 
              that every problem carries the seed of a solution, and I strive to bring those 
              solutions to life through innovation and development.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-primary/5 border-border/50 hover:border-primary/50 transition-all duration-300 group animate-float hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform mx-auto w-fit">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {skill.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section with Decorative Elements */}
        <div className="relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          
          {/* Interests Section */}
          <div className="relative bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              When I'm not coding, you'll find me:
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-background/50 rounded-full px-4 py-2 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-primary">
                    {interest.icon}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {interest.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;