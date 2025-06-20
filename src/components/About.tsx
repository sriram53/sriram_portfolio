import React from 'react';
import { MapPin, Phone, Mail, Calendar, Globe, Languages } from 'lucide-react';
import sriImg from '../assets/sri-image.jpg';

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Dharmapuri, Tamilnadu' },
    { icon: Phone, label: 'Phone', value: '+91 8608030231' },
    { icon: Mail, label: 'Email', value: 'sidsriramak@gmail.com' },
    { icon: Languages, label: 'Languages', value: 'Tamil, English' },
  ];

  return (
    <section id="about" className="py-20 relative bg-batman-light-grey/5 dark:bg-batman-taupe/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-batman-grey dark:text-batman-taupe">
              About <span className="text-batman-gold">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-taupe mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image and Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-batman-gold/20 to-batman-taupe/20 rounded-2xl border border-batman-light-grey/30 dark:border-batman-taupe/30 overflow-hidden">
{/*                   <img 
                    src="/src/assets/sri-image.jpg" 
                    alt="Sriram A - About" 
                    className="object-cover sri-img-div"
                  /> */}
                  <img src={sriImg} alt="..." />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-batman-gold text-batman-black px-4 py-2 rounded-lg font-semibold">
                  1+ Years Experience
                </div>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="bg-white dark:bg-batman-black/50 border border-batman-light-grey/20 dark:border-batman-taupe/20 rounded-lg p-4 hover:border-batman-gold/50 transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <info.icon className="w-5 h-5 text-batman-gold" />
                      <div>
                        <p className="text-xs text-batman-light-grey dark:text-batman-taupe/70">{info.label}</p>
                        <p className="text-sm font-medium text-batman-grey dark:text-batman-taupe">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-batman-gold mb-4">Flutter Application Developer</h3>
                <p className="text-batman-grey dark:text-batman-taupe leading-relaxed text-lg">
                  I have a proven track record of delivering innovative cross-platform applications 
                  optimized for <span className="text-batman-gold font-semibold">Web, Android, iOS, and Windows</span>, 
                  leading to significant growth in user engagement and retention.
                </p>
              </div>

              <div>
                <p className="text-batman-grey dark:text-batman-taupe leading-relaxed">
                  My collaborative approach and commitment to team success have ensured consistent 
                  on-time project completion in dynamic and diverse environments. I specialize in 
                  creating beautiful, functional mobile applications using 
                  <span className="text-batman-taupe font-semibold"> Flutter and Dart</span>.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-batman-grey dark:text-batman-taupe">Core Competencies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Flutter Development',
                    'Cross-Platform Apps',
                    'REST API Integration',
                    'Firebase Services',
                    'State Management',
                    'UI/UX Design',
                    'Payment Gateways',
                    'App Store Deployment'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-batman-gold rounded-full"></div>
                      <span className="text-batman-grey dark:text-batman-taupe text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-batman-gold to-batman-taupe px-6 py-3 rounded-lg font-semibold text-batman-black hover:scale-105 transition-transform duration-300"
                >
                  <span>Let's Work Together</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
