import React from 'react';
import { Building, Calendar, MapPin, ArrowRight, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Miguel Sevener Innovation Private Limited',
      period: 'March 2025 - Present',
      location: 'Current Position',
      type: 'Full Time',
      responsibilities: [
        'Leading Flutter development projects for cross-platform applications',
        'Implementing modern UI/UX designs with attention to detail',
        'Collaborating with backend teams for seamless API integration',
        'Mentoring junior developers and conducting code reviews'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git'],
      status: 'current'
    },
    {
      title: 'Full Stack Developer',
      company: 'Aroganam Tech',
      period: 'October 2024 - March 2025',
      location: 'Previous Position',
      type: 'Full Time',
      responsibilities: [
        'Developed and maintained Flutter applications for Android and iOS',
        'Integrated payment gateways and third-party services',
        'Optimized app performance and user experience',
        'Participated in agile development methodologies'
      ],
      technologies: ['Flutter', 'Dart', 'Provider', 'Bloc', 'SQLite'],
      status: 'completed'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Hindusthan College of Engineering and Technology',
      period: '2021 - 2023',
      type: 'MCA',
      description: 'Specialized in software development and mobile application technologies'
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Don Bosco College',
      period: '2018 - 2021',
      type: 'BCA',
      description: 'Foundation in computer science and programming fundamentals'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-batman-grey dark:text-batman-taupe">
              My <span className="text-batman-gold">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-taupe mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold text-batman-gold mb-8 flex items-center">
                <Building className="w-6 h-6 mr-3" />
                Work Experience
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className={`bg-white dark:bg-batman-black/50 border-l-4 ${
                      exp.status === 'current' ? 'border-batman-gold' : 'border-batman-taupe'
                    } rounded-lg p-6 hover:bg-batman-light-grey/5 dark:hover:bg-batman-black/70 transition-colors duration-300 shadow-lg`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-batman-grey dark:text-batman-taupe mb-1">{exp.title}</h4>
                          <p className="text-batman-gold font-medium">{exp.company}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.status === 'current' 
                            ? 'bg-batman-gold/20 text-batman-gold' 
                            : 'bg-batman-taupe/20 text-batman-taupe'
                        }`}>
                          {exp.status === 'current' ? 'Current' : 'Completed'}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-sm text-batman-light-grey dark:text-batman-taupe/70">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2 text-batman-grey dark:text-batman-taupe">
                            <ArrowRight className="w-4 h-4 text-batman-gold mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-batman-gold/10 border border-batman-gold/30 rounded-full text-xs text-batman-gold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-batman-taupe mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-batman-black/50 border border-batman-light-grey/20 dark:border-batman-taupe/30 rounded-lg p-6 hover:border-batman-taupe/50 transition-colors duration-300 shadow-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-batman-grey dark:text-batman-taupe mb-1">{edu.degree}</h4>
                        <p className="text-batman-taupe font-medium">{edu.institution}</p>
                      </div>
                      <div className="px-3 py-1 bg-batman-taupe/20 text-batman-taupe rounded-full text-xs font-medium">
                        {edu.type}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-batman-light-grey dark:text-batman-taupe/70 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-sm text-batman-grey dark:text-batman-taupe">{edu.description}</p>
                  </div>
                ))}
              </div>

              {/* Professional Skills */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-batman-grey dark:text-batman-taupe mb-6">Professional Skills</h4>
                <div className="space-y-4">
                  {[
                    'Over 1+ years of hands-on experience in coding and implementation',
                    'Skilled communicator with excellent interpersonal skills',
                    'Expert in API integration and Payment Gateway implementation',
                    'Proficient in Mobile App development for iOS & Android',
                    'Specialization in UI Design for Mobile applications',
                    'Quick learner with ability to adapt to new technologies'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-batman-gold rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-batman-grey dark:text-batman-taupe text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;