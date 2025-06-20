import React from 'react';
import { Code, Smartphone, Database, Globe, Zap, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-batman-gold to-batman-taupe',
      skills: [
        { name: 'Flutter', level: 80 },
        { name: 'Dart', level: 80 },
        // { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        // { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-batman-taupe to-batman-gold',
      skills: [
        { name: 'Flutter', level: 80 },
        { name: 'Android', level: 85 },
        { name: 'iOS', level: 85 },
        { name: 'Cross-Platform', level: 80 },
        { name: 'App Store Deploy', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-batman-gold to-batman-taupe',
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs', level: 80 },
        { name: 'MySQL', level: 85 },
        // { name: 'SQLite', level: 85 },
        { name: 'Node.js', level: 80 }
      ]
    },
    {
      title: 'State Management',
      icon: Zap,
      color: 'from-batman-taupe to-batman-gold',
      skills: [
        { name: 'Provider', level: 60 },
        { name: 'Bloc', level: 65 },
        { name: 'Riverpod', level: 60 },
        { name: 'GetX', level: 65 },
        { name: 'MVVM', level: 65 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Globe,
      color: 'from-batman-gold to-batman-taupe',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 80 },
        { name: 'Android Studio', level: 85 },
        { name: 'Postman', level: 85 },
        // { name: 'Adobe XD', level: 75 }
      ]
    },
    // {
    //   title: 'Security & Payments',
    //   icon: Shield,
    //   color: 'from-batman-taupe to-batman-gold',
    //   skills: [
    //     { name: 'Payment Gateways', level: 85 },
    //      { name: 'API Security', level: 85 },
    //     { name: 'Authentication', level: 85 },
    //     { name: 'Data Encryption', level: 80 },
    //      { name: 'OAuth', level: 85 }
    //   ]
    // }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-batman-grey dark:text-batman-taupe">{skill.name}</span>
        <span className="text-sm text-batman-gold font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-batman-light-grey/20 dark:bg-batman-taupe/20 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-batman-gold to-batman-taupe h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            animationDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-batman-grey dark:text-batman-taupe">
              Technical <span className="text-batman-gold">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-taupe mx-auto rounded-full"></div>
            <p className="text-batman-light-grey dark:text-batman-taupe/70 mt-6 max-w-2xl mx-auto">
              Comprehensive expertise in modern development technologies and frameworks
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-batman-black rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-batman-black`}>
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-8 h-8" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-batman-gold/10 to-batman-taupe/10 rounded-xl p-8 border border-batman-gold/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-batman-grey dark:text-batman-taupe mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-batman-grey dark:text-batman-taupe max-w-3xl mx-auto leading-relaxed">
                I'm passionate about staying current with the latest technologies and best practices. 
                My commitment to continuous learning ensures that I can deliver cutting-edge solutions 
                using the most effective tools and methodologies available.
              </p>
              <div className="flex justify-center items-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-batman-gold">1+</div>
                  <div className="text-sm text-batman-light-grey dark:text-batman-taupe/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-batman-gold">10+</div>
                  <div className="text-sm text-batman-light-grey dark:text-batman-taupe/70">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-batman-gold">4+</div>
                  <div className="text-sm text-batman-light-grey dark:text-batman-taupe/70">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;