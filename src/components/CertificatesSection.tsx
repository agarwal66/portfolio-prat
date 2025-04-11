
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'April 2023',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=1170&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'React & Redux Master Class',
    issuer: 'Coursera',
    date: 'January 2023',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1170&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Advanced JavaScript Concepts',
    issuer: 'Frontend Masters',
    date: 'October 2022',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop',
    url: '#'
  },
];

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Certificates</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Professional certifications that validate my expertise and knowledge in various technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-secondary animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <a 
                    href={certificate.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-full hover:bg-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </a>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Award className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-lg">{certificate.title}</h3>
                    <p className="text-sm text-muted-foreground">{certificate.issuer} • {certificate.date}</p>
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

export default CertificatesSection;
