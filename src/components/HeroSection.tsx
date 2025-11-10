import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "./profile.jpg"; // ✅ Correct import
import pratImg from "./prat.png"; // ✅ Correct import
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 md:order-1 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-primary mb-4">Hi, I'm Prateek Agarwal</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Full Stack</span> Developer
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the
              web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-primary hover:bg-primary/80">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <Mail size={18} />
                </a>
              </Button>
              <Button variant="outline">
                <a href="#projects" className="flex items-center gap-2">
                  View Projects <ArrowDown size={18} />
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/agarwal66"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/prateekagarwal19/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:agarwalprateek666@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div
            className="order-1 md:order-2 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-purple-600 absolute blur-3xl opacity-25"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 relative z-10">
              <img
                  src={pratImg} // ✅ Use imported image here
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
