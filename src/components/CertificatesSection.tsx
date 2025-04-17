
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import c1Img from "./c1.png"
import c2Img from "./c2.png"
import c3Img from "./c3.png"
import c4Img from "./c4.png"
import n1Img from "./n1.png"
import c5Img from "./c5.png"
const certificates = [
  {
    title: 'Ethical Hacking',
    issuer: 'Nptel',
    date: 'Nov 2024',
    image: n1Img,
    url: '/public/Ethical Hacking.pdf'
  },
  {
    title: 'Dynamic Programming, Greedy Algorithms',
    issuer: 'Coursera',
    date: 'March 2024',
    image: c1Img,
    url: 'https://www.coursera.org/account/accomplishments/verify/WFGLMWY9NFRX'
  },
  {
    title: 'Approximation Algorithms and Linear Programming',
    issuer: 'Coursera',
    date: 'April 2024',
    image: c2Img,
    url: 'https://www.coursera.org/account/accomplishments/verify/7ULHG2CKU7AT'
  },
  {
    title: 'Algorithms on Strings',
    issuer: 'Coursera',
    date: 'February 2024',
    image: c3Img,
    url: 'https://www.coursera.org/account/accomplishments/verify/73JBVYH3TFZ7'
  },
  {
    title: 'Generative AI with Large Language Models',
    issuer: 'Coursera',
    date: 'April 2024',
    image: c4Img,
    url: 'https://www.coursera.org/account/accomplishments/verify/YKDWA39TRRRS'
  },
  {
    title: 'Introduction to Java',
    issuer: 'Coursera',
    date: 'February 2024',
    image: c5Img,
    url: 'https://www.coursera.org/account/accomplishments/verify/X6F5HGD43NQ3'
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
