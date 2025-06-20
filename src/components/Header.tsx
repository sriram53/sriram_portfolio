import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Award,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import "../components/whole.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Skills", href: "#skills", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-batman-black/95 backdrop-blur-lg border-b border-batman-light-grey/20 dark:border-batman-taupe/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="imgcontainer-img w-10 h-10 bg-gradient-to-br from-batman-gold to-batman-taupe rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              {/* <Code className="w-6 h-6 text-batman-black" /> */}
              <img
                src="https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1966.png"
                alt="none"
              />
            </div>
            <div className="hidden md:block navcontainer px-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-batman-gold to-batman-taupe bg-clip-text text-transparent">
                Sriram A
              </h1>
              <p className="text-xs text-batman-light-grey dark:text-batman-taupe/70">
                Flutter Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-1 text-batman-grey dark:text-batman-taupe hover:text-batman-gold transition-colors duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}

            {/* Batman Theme Toggle */}
            <div className="relative">
              <button
                onClick={toggleTheme}
                className="relative w-16 h-8 bg-batman-light-grey dark:bg-batman-taupe rounded-full p-1 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-batman-gold"
              >
                <div
                  className={`absolute inset-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-500 flex items-center justify-center ${
                    isDark ? "translate-x-8" : "translate-x-0"
                  }`}
                >
                  {isDark ? (
                    <Moon className="w-3 h-3 text-batman-black" />
                  ) : (
                    <Sun className="w-3 h-3 text-batman-gold" />
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <Sun
                    className={`w-3 h-3 transition-opacity duration-300 ${
                      isDark ? "opacity-30" : "opacity-100"
                    } text-batman-gold`}
                  />
                  <Moon
                    className={`w-3 h-3 transition-opacity duration-300 ${
                      isDark ? "opacity-100" : "opacity-30"
                    } text-white`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="relative w-12 h-6 bg-batman-light-grey dark:bg-batman-taupe rounded-full p-1 transition-colors duration-500"
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-500 ${
                  isDark ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-batman-light-grey/10 dark:bg-batman-taupe/10 border border-batman-light-grey/30 dark:border-batman-taupe/30 hover:bg-batman-light-grey/20 dark:hover:bg-batman-taupe/20 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-batman-grey dark:text-batman-taupe" />
              ) : (
                <Menu className="w-5 h-5 text-batman-grey dark:text-batman-taupe" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-batman-black/95 backdrop-blur-lg border-b border-batman-light-grey/20 dark:border-batman-taupe/20">
            <div className="container mx-auto px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 w-full py-3 text-batman-grey dark:text-batman-taupe hover:text-batman-gold transition-colors duration-300 group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
