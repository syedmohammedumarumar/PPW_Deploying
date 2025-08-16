import { useState } from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Project_1 from '@/assets/project-1.png'
import { CustomCursor } from '@/components/CustomCursor';

const AllProjects = () => {
  // Your three specific projects
  const allProjects = [
    {
      id: 1,
      title: "Automated Attendance Calculator",
      description: "Django web app that automates attendance with Selenium & Docker, used by thousands of students to get instant results",
      image: Project_1,
      technologies: ["Django", "Selenium", "Docker", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://automated-attendence-calculator-website-4.onrender.com/",
      githubUrl: "https://github.com/syedmohammedumarumar/Automuted-Attendence-Calculator-website.git",
      featured: true
    },
    {
      id: 2,
      title: "Food Delivery Web-Application",
      description: "MERN-based food delivery app with Stripe payments, real-time tracking, responsive UI, and an admin panel for product and order management.",
      image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
      liveUrl: "https://food-del-frontend-4tz5.onrender.com",
      githubUrl: "https://github.com/syedmohammedumarumar/Food-Delivery-website-MERN.git",
      featured: true
    },
    {
      id: 3,
      title: "SMART AMS",
      description: "MERN-based smart attendance system where CRs log attendance, faculty verify instantly, and records sync in real-time—saving time, reducing errors, and improving efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "https://smartams.onrender.com/",
      githubUrl: "https://github.com/syedmohammedumarumar/SmartAMS---Attendene-Management-System-MERN-Stack.git",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background px-[5%]">
      <CustomCursor/>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl gradient-text lg:text-5xl font-serif font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore my complete portfolio of web applications, mobile apps, and innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProjects;