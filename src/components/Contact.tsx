import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, User, FileText, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree, EmailJS, etc.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sidsriramak@gmail.com',
      link: 'mailto:sidsriramak@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8608030231',
      link: 'tel:+918608030231'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dharmapuri, Tamilnadu',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/sriram53',
      color: 'hover:text-batman-grey dark:hover:text-batman-taupe'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sriram-a-266938260/',
      color: 'hover:text-batman-gold'
    }
    ,
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://x.com/sidsriramak?t=fT0yW4oVc7B0jaX0hgkI6Q&s=08',
      color: 'hover:text-batman-gold'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-batman-light-grey/5 dark:bg-batman-taupe/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-batman-grey dark:text-batman-taupe">
              Get In <span className="text-batman-gold">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-taupe mx-auto rounded-full"></div>
            <p className="text-batman-light-grey dark:text-batman-taupe/70 mt-6 max-w-2xl mx-auto">
              Ready to bring your mobile app ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-batman-grey dark:text-batman-taupe mb-6">Let's Connect</h3>
                <p className="text-batman-grey dark:text-batman-taupe leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with amazing teams. 
                  Whether you have a specific project in mind or just want to chat about Flutter development, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-batman-black rounded-lg hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-batman-gold to-batman-taupe rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-batman-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-batman-grey dark:text-batman-taupe">{info.title}</h4>
                      <p className="text-batman-light-grey dark:text-batman-taupe/70">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-batman-grey dark:text-batman-taupe mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white dark:bg-batman-black border border-batman-light-grey/20 dark:border-batman-taupe/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-batman-gold hover:shadow-lg ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-batman-gold/10 to-batman-taupe/10 rounded-lg p-6 border border-batman-gold/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-batman-grey dark:text-batman-taupe">Available for Projects</h4>
                </div>
                <p className="text-sm text-batman-grey dark:text-batman-taupe">
                  Currently accepting new Flutter development projects and freelance opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-batman-black rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-batman-grey dark:text-batman-taupe mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-lg bg-white dark:bg-batman-black text-batman-grey dark:text-batman-taupe focus:ring-2 focus:ring-batman-gold focus:border-transparent transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-batman-grey dark:text-batman-taupe mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-lg bg-white dark:bg-batman-black text-batman-grey dark:text-batman-taupe focus:ring-2 focus:ring-batman-gold focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-batman-grey dark:text-batman-taupe mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-lg bg-white dark:bg-batman-black text-batman-grey dark:text-batman-taupe focus:ring-2 focus:ring-batman-gold focus:border-transparent transition-colors duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-batman-grey dark:text-batman-taupe mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-batman-light-grey/30 dark:border-batman-taupe/30 rounded-lg bg-white dark:bg-batman-black text-batman-grey dark:text-batman-taupe focus:ring-2 focus:ring-batman-gold focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-batman-gold to-batman-taupe text-batman-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-batman-light-grey/20 dark:border-batman-taupe/20 text-center">
            <p className="text-batman-light-grey dark:text-batman-taupe/70">
              © 2025 Sriram A.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;