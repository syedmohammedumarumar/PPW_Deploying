import { Card, CardContent } from '@/components/ui/card';
import { 
  Database, 
  Server, 
  Wrench,
  Globe,
  Github
} from 'lucide-react';
// React Icons imports
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNode, 
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaFigma,
  
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiNumpy ,
  SiRender ,
  SiPandas ,
  SiPostman 
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";


import {TbBrandDjango,TbBrandCpp  } from 'react-icons/tb';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", bgColor: "#E34F2620" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", bgColor: "#1572B620" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", bgColor: "#06B6D420" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", bgColor: "#F7DF1E20" },
        { name: "React", icon: <FaReact />, color: "#61DAFB", bgColor: "#61DAFB20" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", bgColor: "#00000015" },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server className="h-5 w-5 sm:h-6 sm:w-6" />,
      skills: [
        { name: "Django", icon: <SiDjango />, color: "#68A063", bgColor: "#68A06320" },
        { name: "DRF", icon: <TbBrandDjango />, color: "#68A063", bgColor: "#68A06320" },
        { name: "Node.js", icon: <FaNode />, color: "#68A063", bgColor: "#68A06320" },
        { name: "Express", icon: <SiExpress />, color: "#000000", bgColor: "#00000015" },
         { name: "MySQL", icon: <SiMysql />, color: "#4479A1", bgColor: "#4479A120" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", bgColor: "#47A24820" },
     
      ]
    },
    {
      title: "Version control & Tools",
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032", bgColor: "#F0503220" },
        { name: "Github", icon: <Github />, color: "#2496ED", bgColor: "#2496ED20" },
        { name: "VS Code", icon: <VscVscode  />, color: "#007ACC", bgColor: "#007ACC20" },
        { name: "Postman", icon: <SiPostman />, color: "#DC382D", bgColor: "#DC382D20" },
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E", bgColor: "#F24E1E20" },
        { name: "Render", icon: <SiRender  />, color: "#61DAFB", bgColor: "#00000015" },

        
      ]
    },
    {
      title: "Programming Lang & others",
      icon: <Wrench className="h-5 w-5 sm:h-6 sm:w-6" />,
      skills: [
        { name: "C++", icon: <TbBrandCpp/>, color: "#FF6B35", bgColor: "#FF6B3520" },
        { name: "Python", icon: <FaPython />, color: "#3776AB", bgColor: "#3776AB20" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED", bgColor: "#2496ED20" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900", bgColor: "#FF990020" },
        { name: "Numpy ", icon: <SiNumpy  />, color: "#4479A1", bgColor: "#4479A120" },
        { name: "Pandas  ", icon: <SiPandas   />, color: "#FF9900", bgColor: "#FF990020" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-secondary/60 rounded-md mt-2">
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
        .skill-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-card:hover {
          transform: translateY(-2px);
        }
        @media (min-width: 640px) {
          .skill-card:hover {
            transform: translateY(-4px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @media (min-width: 640px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold gradient-text mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            A comprehensive toolkit for building modern, scalable applications with cutting-edge technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="bg-primary/5 border-border/50 hover:border-primary/30 transition-all duration-500 animate-float"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground text-center">
                    {category.title}
                  </h3>
                </div>
                
                {/* Mobile: 3 columns, Tablet: 3 columns, Desktop: 3 columns */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-card flex flex-col items-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-secondary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-opacity-50"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = skill.color + '50';
                        e.currentTarget.style.backgroundColor = skill.bgColor;
                        e.currentTarget.style.boxShadow = `0 4px 15px ${skill.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2 lg:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                           style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground text-center group-hover:font-semibold transition-all duration-300 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>       
      </div>
    </section>
  );
};

export default SkillsSection;