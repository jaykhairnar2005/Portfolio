import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // 1. Check saved preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    // 2. Fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="font-sans antialiased selection:bg-brand-500 selection:text-white transition-colors duration-500 bg-white dark:bg-[#030303] relative overflow-hidden min-h-screen">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 noise-bg opacity-30 dark:opacity-[0.15] mix-blend-overlay"></div>
      
      <CustomCursor />
      
      {/* Ambient Global Background Orbs - Ultra subtle for dino-kupinic feel */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden hidden dark:block">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-900/10 blur-[150px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] -right-[20%] w-[50%] h-[70%] rounded-full bg-blue-900/5 blur-[150px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gray-900/20 dark:bg-white/20 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
