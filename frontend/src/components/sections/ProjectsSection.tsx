import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Project_1 from '@/assets/project-1.png'

const ProjectsSection = () => {
  const topProjects = [
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
      image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // you can replace with your own screenshot
      technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
      liveUrl: "https://food-del-frontend-4tz5.onrender.com",
      githubUrl: "https://github.com/syedmohammedumarumar/Food-Delivery-website-MERN.git", // replace with your repo link
      featured: true
    },
    {
      id: 3,
      title: "SMART AMS",
      description: "MERN-based smart attendance system where CRs log attendance, faculty verify instantly, and records sync in real-time—saving time, reducing errors, and improving efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "https://smartams.onrender.com/",  // replace with your deployed link
      githubUrl: "https://github.com/syedmohammedumarumar/SmartAMS---Attendene-Management-System-MERN-Stack.git", // replace with your repo link
      featured: true
    }
  ];

  const handleViewAllProjects = () => {
    window.open("/all-projects");
  };

  return (
    <section id="projects" className="py-5 px-6 lg:px-8 bg-secondary/60 rounded-md mt-2">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold gradient-text mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work and technical achievements
          </p>
          <Button variant="outline" size="sm" className="ml-4" onClick={handleViewAllProjects}>
            All Projects
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {topProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-primary/5 border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
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
                      <Badge key={tech} variant="secondary" className="text-xs">
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
  );
};

export default ProjectsSection;