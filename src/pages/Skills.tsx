import React from 'react';
import { Code, Database, Palette, Server, Smartphone, Globe, Terminal, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'MERN Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5, Tailwind CSS & JavaScript', level: 90 },
        { name: 'MongoDB', level: 95 },
        { name: 'Express', level: 95 },
        { name: 'React', level: 95 },
        { name: 'Node. js', level: 95 },

      ]
    },
    
    {
      title: 'Programming ',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Data Structures & Algorithms (C++)', level: 92 },
        { name: 'Python Programming', level: 85 },
        { name: 'Problem Solving (LeetCode/codeChef)', level: 92 },
        { name: 'Object-Oriented Programming (OOP)', level: 92 },
        { name: 'System Design', level: 92 },
        
      ]
    },
     {
      title: ' Tools / Platforms',
      icon: Terminal,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Visual studio Code', level: 85 },
        { name: 'Kali Linux', level: 85 },
        
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 85 },
      ]
    },
    {
      title: 'Cyber Security',
      icon: Shield,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'Cybersecurity Basics', level: 88 },
        { name: 'Network Security (Firewalls, VPN)', level: 85 },
        { name: 'Footprinting with NMAP', level: 85 },
        { name: 'TOR', level: 85 },
      ]
    },
   
  ];

  const certifications = [
     '• MERN Certified Developer',
     '• Research and Development from WHiLE',
     '• Cyber Trainee from Intrainz',
    '• Prompt Engineering Certification',
    '• Hackathon -by Chandigarh University (CU), Punjab'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-glow shimmer-card p-8 rounded-xl animate-fadeInUp"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center animate-fadeInUp">
          <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-glow px-6 py-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300 animate-pulse-custom"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

      {/* Experience Timeline */}
<div className="mt-20 animate-fadeInUp">
  <h2 className="text-3xl font-bold text-white text-center mb-12">Experience Timeline</h2>
  <div className="max-w-4xl mx-auto relative">
    {/* Vertical line */}
    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

    {[
      {
        year: 'Oct 2024 - Dec 2024',
        title: 'MERN Stack Developer',
        company: 'Mobiqliq Global Pvt. Ltd.',
        description:
          'Leading development of scalable web applications using React, Node.js, and cloud technologies.'
      },
      {
        year: 'Nov 2023 - Sep 2024',
        title: 'Research and Development',
        company: 'Startup WHiLE.',
        description:
          'Used my skills in Market Research and Product Development and understanding how startups work.'
      },
      {
        year: 'Oct 2023 - Dec 2023',
        title: 'Cyber Security Trainee',
        company: 'Intrainz Innovation',
        description:
          'Explored my journey in Cyber Security working on various tools and learning new technologies.'
      }
    ].map((experience, index) => (
      <div
        key={index}
        className={`relative flex flex-col md:flex-row items-center mb-12 ${
          index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
        }`}
      >
        {/* Timeline dot */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>

        {/* Content */}
        <div
          className={`md:w-5/12 w-full mt-6 md:mt-0 ${
            index % 2 === 0 ? 'md:pr-8 text-left md:text-right' : 'md:pl-8 text-left'
          }`}
        >
          <div className="card-glow p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-2">{experience.title}</h4>
            <h5 className="text-blue-400 font-semibold mb-2">{experience.company}</h5>
            <p className="text-gray-400 text-sm mb-2">{experience.year}</p>
            <p className="text-gray-300">{experience.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
  );
};

export default Skills;