
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient">Prateek Agarwal</a>
            <p className="text-sm text-muted-foreground mt-1">
              Creating powerful digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="https://github.com/agarwal66" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/prateekpassionate/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:agarwalprateek666@gmail.com" className="hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {currentYear} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
