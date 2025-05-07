import { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Twitter, ChevronDown, ChevronRight, ArrowRight, Menu, X, Sun, Moon } from 'lucide-react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle'; // Import the ThemeToggle component
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes fadeSlideUp {
        from { 
          opacity: 0;
          transform: translateY(20px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 1s ease-out forwards;
      }
      
      .animate-fadeSlideUp {
        animation: fadeSlideUp 1s ease-out forwards;
      }
      
      .animation-delay-100 {
        animation-delay: 0.1s;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle scroll progress for the progress bar at the top
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-100 dark:bg-blue-900/40 z-50">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">Theophilus Kolawole</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative hover:text-blue-600 dark:hover:text-blue-400 transition py-1 ${activeSection === section ? 'text-blue-600 dark:text-blue-400' : 'dark:text-slate-300'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded"></span>
                )}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-md py-4 px-4 z-40 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition ${
                    activeSection === section ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'dark:text-slate-300'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Me */}
      <AboutMe />

      {/* Add Skills Component */}
      <Skills />
      
      {/* Add Projects Component */}
      <Projects />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-2xl mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Theophilus Kolawole</span>
              </div>
              <p className="text-slate-400 max-w-md">
                Crafting powerful digital experiences with clean code and creative solutions.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/TheoKolawole" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
                <Github size={18} />
              </a>
              <a href="www.linkedin.com/in/theokolawole" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/TheoKolawole" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
                <Twitter size={18} />
              </a>
              <a href="mailto:theophiluskolawole19@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Theophilus Kolawole. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* <a href="#" className="text-slate-400 hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition">Terms of Service</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}