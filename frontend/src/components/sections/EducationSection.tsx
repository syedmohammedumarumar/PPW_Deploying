import React from "react";
import { Code, GraduationCap, BookOpen, Award, Users, FileText, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "B.TECH in Artificial Intelligence & Machine Learning",
      institution: "Madanapalle Institute Of Technology & Science",
      period: "2022 - 2026 (Ongoing)",
      description: "Currently pursuing a specialized degree in AI/ML with focus on machine learning algorithms, deep learning, neural networks, and data science. Gaining hands-on experience in Python, TensorFlow, and various AI frameworks while building real-world projects.",
      keySubjects: ["Machine Learning", "Deep Learning", "Data Structures", "Python Programming", "Neural Networks", "Computer Vision"]
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Sri Chaitanya Junior College",
      period: "2020 - 2022",
      description: "Completed intermediate education with Mathematics, Physics, and Chemistry (MPC stream). Built strong foundation in analytical thinking, problem-solving, and mathematical concepts that support my current technical studies.",
      keySubjects: ["Mathematics", "Physics", "Chemistry", "English", "Logical Reasoning", "Problem Solving"]
    }
  ];

  const learningMethods = [
    { icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Online Courses" },
    { icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Technical Documentation" },
    { icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Open Source Projects" },
    { icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Programming Communities" },
    { icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Tech Blogs & Articles" }
  ];

  return (
    <section id="education" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/60 rounded-md mt-2">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 20px hsl(var(--primary) / 0.3)); }
          50% { filter: drop-shadow(0 0 30px hsl(var(--primary) / 0.5)); }
        }
        
        /* Custom responsive adjustments */
        @media (max-width: 640px) {
          .responsive-card {
            transform: none !important;
          }
          .responsive-card:hover {
            transform: scale(1.01) !important;
          }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header - Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold gradient-text mb-3 sm:mb-4">
            Education & Learning
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto px-2">
            My educational journey in technology and continuous learning path
          </p>
        </div>

        {/* Education Cards - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="responsive-card bg-primary/5 border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-4 sm:p-6 md:p-8">
                {/* Mobile Layout - Stacked */}
                <div className="block sm:hidden space-y-3">
                  {/* Mobile Header with small icon */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-primary/10 rounded-full flex-shrink-0">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-tight flex-1">
                      {edu.degree}
                    </h3>
                  </div>
                  
                  {/* Mobile Institution & Period */}
                  <div className="space-y-1">
                    <p className="text-primary font-medium text-sm">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Mobile Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                    {edu.description}
                  </p>

                  {/* Mobile Key Subjects */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-xs font-medium">Key Subjects</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {edu.keySubjects.map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Side by side */}
                <div className="hidden sm:flex items-start gap-3 sm:gap-4">
                  {/* Desktop Icon */}
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  
                  {/* Desktop Content */}
                  <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium text-sm sm:text-base mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="truncate">{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {edu.description}
                    </p>

                    {/* Desktop Key Subjects */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">Key Subjects</span>
                      </div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {edu.keySubjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Learning Section - Responsive */}
        <div className="relative">
          {/* Decorative Background Elements - Hidden on mobile for performance */}
          <div className="hidden sm:block absolute top-0 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-glow"></div>
          <div className="hidden sm:block absolute bottom-0 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          
          {/* Continuous Learning Section - Responsive */}
          <div className="relative bg-primary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
              <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center sm:text-left">
                Continuous Learning
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-4 sm:mb-6 text-center text-sm sm:text-base leading-relaxed px-2 text-justify">
              Beyond formal education, I actively engage in self-learning through online courses, documentation, and hands-on projects to stay updated with the latest technologies in web development, AI/ML, and software engineering.
            </p>
            
            {/* Learning Methods - Responsive Layout */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
              {learningMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 sm:gap-3 bg-background/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 min-w-0"
                >
                  <div className="text-primary flex-shrink-0">
                    {method.icon}
                  </div>
                  <span className="text-muted-foreground text-xs sm:text-sm whitespace-nowrap">
                    {method.text}
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

export default EducationSection;