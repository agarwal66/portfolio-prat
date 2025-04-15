
import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const educationData = [
  {
    years: '2022 - 2025',
    degree: 'B.Tech CSE',
    institution: 'Lovely Professional University',
    location: 'Phagwara',
    description: 'B.Tech in Computer Science & Engineering',
    cgpa: '7.00/10',
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
  },
  {
    years: '2021 - 2022',
    degree: '12th Standard',
    institution: 'CBSE Board',
    location: 'Rajasthan',
    description: 'Science Stream with Computer Science',
    percentage: '75%',
    icon: <School className="h-8 w-8 text-primary" />,
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Education</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My academic journey that has shaped my knowledge and skills.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-8 sm:pl-16 py-6 group"
            >
              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div className="absolute left-4 sm:left-8 top-12 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              )}
              
              {/* Icon */}
              <div className="absolute left-0 sm:left-4 top-7 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 p-2">
                {item.icon}
              </div>
              
              {/* Content */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.institution}</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.years}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.degree}</h4>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">{item.location}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
                <p className="text-sm font-medium text-primary">
                  {item.cgpa ? `CGPA: ${item.cgpa}` : `Percentage: ${item.percentage}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
