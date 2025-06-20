import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Talkcee',
      subtitle: 'Mobile Communication Platform',
      description: 'A dynamic mobile communication platform that redefines how individuals connect, communicate, and collaborate through real-time chat and crystal-clear voice calls.',
      longDescription: 'Talkcee empowers users to initiate meaningful, paid conversations by offering access to another person\'s time, expertise, or attention. The platform features end-to-end encryption, seamless payment integration, and an intuitive user interface designed with security, convenience, and value at its core.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'WebRTC', 'Payment Gateway', 'Real-time Chat'],
      features: [
        'Real-time chat and voice calls',
        'Secure payment integration',
        'End-to-end encryption',
        'Cross-platform compatibility',
        'User expertise marketplace',
        'Audio/Video quality optimization'
      ],
      icon: Smartphone,
      gradient: 'from-batman-gold to-batman-taupe',
      status: 'Live',
      color: 'batman-gold'
    },
    {
      title: 'Loan Management System',
      subtitle: 'Financial Application Platform',
      description: 'A comprehensive loan application system that helps users apply for loans, track approvals, manage payments, and access insurance and tax details.',
      longDescription: 'The system allows employees to review applications, monitor repayments, manage insurance, and ensure tax compliance. It streamlines financial processes for users and improves efficiency for employees through an organized and transparent system.',
      technologies: ['Flutter', 'REST API', 'SQLite', 'Provider', 'Payment Gateway'],
      features: [
        'Loan application and tracking',
        'Payment management system',
        'Insurance and tax integration',
        'Employee review dashboard',
        'Automated compliance checks',
        'Document management'
      ],
      icon: Database,
      gradient: 'from-batman-taupe to-batman-gold',
      status: 'In Development',
      color: 'batman-taupe'
    },
    {
      title: 'Darshan Journey',
      subtitle: 'Temple Discovery Platform',
      description: 'A comprehensive platform serving as a Wikipedia of temples. Users can search for temples based on deity, pariharam, and festival ways.',
      longDescription: 'The platform allows users to book yatras, rooms, and iyers online. Features include detailed temple information, booking management, and spiritual guidance services with multi-language support.',
      technologies: ['Flutter', 'Node.js', 'MySQL', 'REST API', 'Booking System'],
      features: [
        'Temple search and discovery',
        'Online booking system',
        'Spiritual guidance services',
        'Festival and event calendar',
        'Multi-language support',
        'Payment integration'
      ],
      icon: Globe,
      gradient: 'from-batman-gold to-batman-taupe',
      status: 'Completed',
      color: 'batman-gold'
    },
    {
      title: 'Bhagavad Gita Learning',
      subtitle: 'Educational Mobile App',
      description: 'A comprehensive platform for individuals to learn and understand the key slogans (verses) of the Bhagavad Gita in an engaging and accessible manner.',
      longDescription: 'The project utilizes audio and video formats to enhance the learning experience and cater to different learning preferences. Features include verse-by-verse explanations, audio pronunciations, and progress tracking.',
      technologies: ['Flutter', 'REST API', 'Audio/Video Players', 'SQLite'],
      features: [
        'Verse-by-verse learning',
        'Audio and video content',
        'Progress tracking',
        'Multi-language support',
        'Offline reading mode',
        'Search functionality'
      ],
      icon: BookOpen,
      gradient: 'from-batman-taupe to-batman-gold',
      status: 'Completed',
      color: 'batman-taupe'
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[activeProject];

  return (
    <section id="projects" className="py-20 bg-batman-light-grey/5 dark:bg-batman-taupe/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-batman-grey dark:text-batman-taupe">
              Featured <span className="text-batman-gold">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-taupe mx-auto rounded-full"></div>
          </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {projects.map((proj, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`p-6 rounded-xl transition-all duration-300 text-left ${
                  index === activeProject
                    ? 'bg-white dark:bg-batman-black shadow-lg border-2 border-batman-gold'
                    : 'bg-white dark:bg-batman-black/50 hover:bg-batman-light-grey/5 dark:hover:bg-batman-black/70 border border-batman-light-grey/20 dark:border-batman-taupe/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${proj.gradient} flex items-center justify-center mb-4`}>
                  <proj.icon className="w-6 h-6 text-batman-black" />
                </div>
                <h4 className="font-semibold text-batman-grey dark:text-batman-taupe mb-2">{proj.title}</h4>
                <p className="text-sm text-batman-light-grey dark:text-batman-taupe/70 line-clamp-2">{proj.description}</p>
              </button>
            ))}
          </div>
          {/* Project Showcase */}
          <br/>
          <br/>
          <div className="bg-white dark:bg-batman-black rounded-2xl shadow-2xl overflow-hidden mt-5">
            <div className="grid lg:grid-cols-2">
              {/* Project Info */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-8 h-8 text-batman-black" />
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.status === 'In Development' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-batman-grey dark:text-batman-taupe mb-2">{project.title}</h3>
                <p className="text-batman-gold font-medium mb-4">{project.subtitle}</p>
                
                <p className="text-batman-grey dark:text-batman-taupe mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-batman-grey dark:text-batman-taupe mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-batman-gold/10 border border-batman-gold/30 rounded-full text-xs text-batman-gold font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-batman-grey dark:text-batman-taupe mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-batman-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-batman-grey dark:text-batman-taupe">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-batman-gold to-batman-taupe px-6 py-3 rounded-lg font-semibold text-batman-black hover:scale-105 transition-transform duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-batman-light-grey/10 dark:bg-batman-taupe/10 border border-batman-light-grey/30 dark:border-batman-taupe/30 px-6 py-3 rounded-lg font-semibold text-batman-grey dark:text-batman-taupe hover:border-batman-gold transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>

              {/* Project Visual */}
              <div className="bg-gradient-to-br from-batman-light-grey/10 to-batman-light-grey/20 dark:from-batman-taupe/10 dark:to-batman-black p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-96 bg-gradient-to-br from-batman-grey to-batman-black rounded-3xl shadow-2xl overflow-hidden border-8 border-batman-grey">
                    {/* Phone Screen */}
                    <div className="bg-white h-full flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                        <project.icon className="w-16 h-16 text-batman-black" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-batman-gold rounded-full animate-ping"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-batman-taupe rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-batman-light-grey/5 dark:bg-batman-taupe/5 p-6 flex items-center justify-between">
              <button
                onClick={prevProject}
                className="flex items-center space-x-2 text-batman-light-grey dark:text-batman-taupe/70 hover:text-batman-gold transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeProject ? 'bg-batman-gold' : 'bg-batman-light-grey dark:bg-batman-taupe/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="flex items-center space-x-2 text-batman-light-grey dark:text-batman-taupe/70 hover:text-batman-gold transition-colors duration-300"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Project Grid Preview */}
         
        </div>
      </div>
    </section>
  );
};

export default Projects;