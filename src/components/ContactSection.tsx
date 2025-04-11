
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Feel free to reach out to me for any questions or opportunities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:your-email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    your-agarwalprateek666@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9772159844
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Remote, Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} required />
              </div>
              
              <Button type="submit" className="bg-primary hover:bg-primary/80 w-full">
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
