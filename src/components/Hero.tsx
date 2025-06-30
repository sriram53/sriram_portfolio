import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown, Phone } from 'lucide-react';
import sriImg from '../assets/sri-image.jpg';
import resume from '../assets/sriram_new_resume.pdf';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const titles = ['Flutter Developer', 'Mobile App Expert', 'Cross-Platform Specialist', 'Full Stack Developer'];

  useEffect(() => {
    const typeText = async () => {
      const title = titles[currentIndex];
      
      if (isTyping) {
        if (currentText.length < title.length) {
          setCurrentText(title.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timeout = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, titles]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden " style={{marginTop:"100px"}}>
      {/* Batman Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10">
        <div className="w-96 h-96 text-batman-gold">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L30 30 L20 20 L10 40 L25 50 L10 60 L20 80 L30 70 L50 90 L70 70 L80 80 L90 60 L75 50 L90 40 L80 20 L70 30 Z" 
                  fill="currentColor" />
          </svg>
        </div>
      </div>
<br/>
      <div className="container mx-auto px-6 py-6 text-center relative z-10 mt-5">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 relative animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-6 relative animate-float">
              <div className="w-full h-full bg-gradient-to-br from-batman-gold via-batman-taupe to-batman-gold rounded-full p-1 animate-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-batman-black">
{/*                   <img 
                    src="/src/assets/sri-image.jpg" 
                    alt="Sriram A - Flutter Developer" 
                    className="w-full h-full object-cover"
                  /> */}
                  <img src={sriImg} alt="..." />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-batman-gold rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              <span className="block text-batman-grey dark:text-batman-taupe">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-batman-gold via-batman-taupe to-batman-gold bg-clip-text text-transparent animate-gradient">
                Sriram A
              </span>
            </h1>

            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-batman-gold">
                {currentText}
                <span className="animate-blink">|</span>
              </h2>
            </div>

            <p className="text-xl text-batman-grey dark:text-batman-taupe max-w-2xl mx-auto leading-relaxed">
              Passionate about creating exceptional mobile experiences with 
              <span className="text-batman-gold font-semibold"> Flutter</span>. 
              Specialized in cross-platform development for 
              <span className="text-batman-taupe font-semibold"> Android, iOS, Web & Windows</span>.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-8">
              <a
                href="https://github.com/sriram53"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-full hover:border-batman-gold transition-all duration-300 hover:shadow-lg hover:shadow-batman-gold/25"
              >
                <Github className="w-6 h-6 text-batman-grey dark:text-batman-taupe group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-batman-grey dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 px-3 py-1 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GitHub
                </span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/sriram-a-266938260/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-full hover:border-batman-gold transition-all duration-300 hover:shadow-lg hover:shadow-batman-gold/25"
              >
                <Linkedin className="w-6 h-6 text-batman-grey dark:text-batman-taupe group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-batman-grey dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 px-3 py-1 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </span>
              </a>
              
              <a
                href="mailto:sidsriramak@gmail.com"
                className="group relative p-4 bg-white dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-full hover:border-batman-gold transition-all duration-300 hover:shadow-lg hover:shadow-batman-gold/25"
              >
                <Mail className="w-6 h-6 text-batman-grey dark:text-batman-taupe group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-batman-grey dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 px-3 py-1 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Email
                </span>
              </a>

              <a
                href="tel:+918608030231"
                className="group relative p-4 bg-white dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-full hover:border-batman-gold transition-all duration-300 hover:shadow-lg hover:shadow-batman-gold/25"
              >
                <Phone className="w-6 h-6 text-batman-grey dark:text-batman-taupe group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-batman-grey dark:bg-batman-black border border-batman-light-grey/30 dark:border-batman-taupe/30 px-3 py-1 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Call
                </span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="batmanarrow-div">
  <a
    href={resume}
    download="sriram_new_resume.pdf"
    className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-batman-gold to-batman-taupe px-8 py-4 rounded-full font-semibold text-batman-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-batman-gold/25"
  >
    <Download className="w-5 h-5 group-hover:animate-bounce" />
    <span>Download Resume</span>
  </a>
</div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <span
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce batmanarrow"
        >
          <div className="w-6 h-10 border-2 border-batman-gold rounded-full flex justify-center">
            <ArrowDown className="w-4 h-4 text-batman-gold mt-2" />
          </div>
        </span>
      </div>
      <br/>
    </section>
  );
};

export default Hero;
