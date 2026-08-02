import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Top Crew Aviation",
      location: "Jaipur, Rajasthan",
      period: "Oct 2025 – Jun 2026",
      description: [
        "Developed responsive web features using React.js, JavaScript, HTML, and CSS.",
        "Integrated REST APIs to enable seamless communication between frontend and backend systems.",
        "Optimized UI components, reducing page load time and improving user experience.",
        "Collaborated with designers and backend developers to deliver production-ready features.",
        "Maintained reusable components and ensured cross-browser compatibility.",
        "Worked with Git & GitHub for version control and agile development workflows.",
      ],
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "Git",
        "GitHub",
        "Responsive Design",
        "Frontend Development",
        "Agile",
      ],
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Clocked",
      location: "Remote",
      period: "Jan 2026 – May 2026",
      description: [
        "Designed and developed a full-stack community platform for Instagram handle reviews and reputation analytics.",
        "Built secure authentication, session management, and CSRF protection across 30+ application pages.",
        "Developed scalable REST APIs using Node.js, Express.js, and MongoDB.",
        "Implemented interactive dashboards, analytics, and dynamic data visualization.",
        "Optimized application performance through efficient database queries and reusable React components.",
        "Collaborated directly with clients, gathered requirements, and delivered production-ready solutions.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
        "CSRF",
        "JWT",
        "JavaScript",
        "Git",
        "GitHub",
        "Full Stack Development",
      ],
    },
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
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
              }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {experience.title}
                    </CardTitle>

                    <CardDescription className="text-lg font-medium text-primary">
                      {experience.company}
                    </CardDescription>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
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
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Briefcase
                        size={18}
                        className="text-primary"
                      />
                      Key Responsibilities
                    </h4>

                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">
                      Skills Developed
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs"
                        >
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