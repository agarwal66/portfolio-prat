
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import codingImg from "./coding.png"; // Example image, replace with actual image
import hospitalImg from "./hospital.png"; // Example image, replace with actual image
const projects = [
  {
    title: 'Code-With-Dude',
    description: 'A full-stack e-commerce platform with product management, cart functionality, and secure checkout.',
    image: codingImg,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'WebSocket.io'],
    demoUrl: 'https://code-with-dude.up.railway.app/',
    githubUrl: 'https://github.com/agarwal66/code-friends',
  },
  {
    title: 'Chat-App',
    description: 'A collaborative task management application with real-time updates and team functionality.',
    image: 'https://cdn.dribbble.com/users/5126936/screenshots/11401680/web_1920___2.png',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
    demoUrl: 'https://github.com/agarwal66/Chat-two-way-application',
    githubUrl: 'https://github.com/agarwal66/Chat-two-way-application',
  },
  {
    title: 'Hospital Management System',
    description: 'An analytics dashboard for social media platforms with data visualization and reporting features.',
    image: hospitalImg,
    tags: ['Vue.js', 'D3.js', 'Node.js', 'Express', 'PostgreSQL'],
    demoUrl: 'https://careplus-frontend.vercel.app/',
    githubUrl: 'https://github.com/agarwal66/careplus-frontend',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills and experience in full-stack development.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient overflow-hidden border-secondary animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={16} /> Code
                  </a>
                </Button>
                
                <Button size="sm" className="bg-primary hover:bg-primary/80" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink size={16} /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/agarwal66" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mx-auto">
              <Code size={18} /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
