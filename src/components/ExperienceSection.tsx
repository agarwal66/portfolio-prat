import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'On-the-Job Trainee',
      company: 'Top Crew Aviation',
      location: 'Jaipur',
      period: 'Sept 2025 – Present',
      description: [
        'Assisting in aviation operations coordination and documentation',
        'Supporting workflow management and compliance processes',
        'Collaborating with cross-functional teams for smooth execution',
        'Contributing to process tracking and operational efficiency improvements',
        'Developing full-stack web applications using modern developer tools',
        'Building responsive frontends with React.js and Tailwind CSS',
        'Creating RESTful APIs and backend services with Node.js and Express',
        'Managing databases with MongoDB and implementing data-driven solutions'
      ],
      skills: ['Aviation Operations', 'Workflow Management', 'Documentation', 'Team Collaboration', 'Process Improvement', 'Full-Stack Development', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Git & GitHub', 'RESTful APIs', 'Agile Methodology']
    }
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My professional journey and the skills I've developed along the way.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="card-gradient border-secondary animate-slide-up mb-8"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {experience.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default ExperienceSection;
