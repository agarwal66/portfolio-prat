
import React from 'react';
import { Calendar, MapPin, Briefcase, FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
              I enjoy creating robust and user-friendly applications that solve real-world problems.
              With a keen eye for detail and a commitment to writing clean, maintainable code, I strive to deliver
              exceptional digital experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
                <div className="bg-primary/20 p-3 rounded-full mb-3">
                  <Calendar className="text-primary" size={24} />
                </div>
                <h3 className="font-medium mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">1+ Years</p>
              </div>
              
              <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
                <div className="bg-primary/20 p-3 rounded-full mb-3">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="font-medium mb-1">Completed</h3>
                <p className="text-sm text-muted-foreground">10+ Projects</p>
              </div>
              
              <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center text-center">
                <div className="bg-primary/20 p-3 rounded-full mb-3">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Remote, Worldwide</p>
              </div>
              </div>

{/* CV Download Section */}
<div className="flex flex-col items-center space-y-4 pt-8">
  <h3 className="text-xl font-semibold">Download My CV</h3>
  <Button 
    variant="default" 
    size="lg"
    className="group hover:bg-primary/90 transition-all duration-300"
    onClick={() => window.open('/PrateekCV2.pdf', '_blank')}
  >
    <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
    Download CV
  </Button>
  <p className="text-sm text-muted-foreground">
    Get a detailed overview of my skills and experience
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
