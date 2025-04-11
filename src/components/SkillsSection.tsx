
import React from 'react';
import { Github, Code, Globe, Database, Server, Laptop, Puzzle, FileCog, GitBranch, Container, Cloud, TestTube } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', icon: <Code className="h-6 w-6 text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <Globe className="h-6 w-6 text-[#000000]" /> },
      { name: 'JavaScript/TypeScript', icon: <FileCog className="h-6 w-6 text-[#3178C6]" /> },
      { name: 'HTML/CSS', icon: <Laptop className="h-6 w-6 text-[#E34F26]" /> },
      { name: 'Tailwind CSS', icon: <Puzzle className="h-6 w-6 text-[#38B2AC]" /> },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: <Server className="h-6 w-6 text-[#339933]" /> },
      { name: 'Express.js', icon: <Server className="h-6 w-6 text-[#000000]" /> },
      { name: 'MongoDB', icon: <Database className="h-6 w-6 text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <Database className="h-6 w-6 text-[#336791]" /> },
      { name: 'REST API Design', icon: <Code className="h-6 w-6 text-[#0096FF]" /> },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', icon: <Github className="h-6 w-6 text-[#F05032]" /> },
      { name: 'Docker', icon: <Container className="h-6 w-6 text-[#2496ED]" /> },
      { name: 'AWS/GCP', icon: <Cloud className="h-6 w-6 text-[#FF9900]" /> },
      { name: 'CI/CD', icon: <GitBranch className="h-6 w-6 text-[#4B32C3]" /> },
      { name: 'Testing (Jest, RTL)', icon: <TestTube className="h-6 w-6 text-[#C21325]" /> },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          As a full-stack developer, I've developed expertise in various technologies and tools.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.name} 
              className="bg-white shadow-md p-6 rounded-lg animate-slide-up"
              style={{ animationDelay: `${0.2 + catIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
