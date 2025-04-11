
import React from 'react';
import { Code, Trophy, LineChart, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: 'LeetCode',
    username: 'agarwalprateek666',
    stats: {
      problems: '510+ Problems',
      contests: '2+ Contests',
      ranking: 'Top 45%'
    },
    icon: <Code className="text-[#FFA116]" size={24} />,
    color: 'bg-[#FFA116]/10',
    url: 'https://leetcode.com/u/agarwalprateek666/'
  },
  {
    name: 'CodeForces',
    username: 'agarwalprateek666',
    stats: {
      problems: '100+ Problems',
      contests: '1+ Contests',
      ranking: 'newbie (600+)'
    },
    icon: <Trophy className="text-[#1F8ACB]" size={24} />,
    color: 'bg-[#1F8ACB]/10',
    url: 'https://codeforces.com/profile/agarwalprateek666'
  },
  {
    name: 'Coding Ninjas',
    username: 'dev_coding_pro',
    stats: {
      problems: '150+ Problems',
      // contests: '1+ Contests',
      // ranking: 'newbie Coder'
    },
    icon: <LineChart className="text-[#F78D1E]" size={24} />,
    color: 'bg-[#F78D1E]/10',
    url: 'https://www.codingninjas.com/'
  }
];

const CodingPlatformsSection: React.FC = () => {
  return (
    <section id="coding-platforms" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Coding <span className="text-gradient">Platforms</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My achievements and activity on competitive programming platforms.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card 
              key={platform.name} 
              className="bg-white shadow-md animate-slide-up border-none"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className={`${platform.color} rounded-t-lg`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {platform.icon}
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </div>
                </div>
                <CardDescription>@{platform.username}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {Object.entries(platform.stats).map(([key, value]) => (
                    <li key={key} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View Profile
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatformsSection;
