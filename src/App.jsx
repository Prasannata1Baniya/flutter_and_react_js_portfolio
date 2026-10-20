import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.App}>
      {/* Top Scroll Progress Indicator */}
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Back To Top Floating Action Button */}
      <button
        onClick={scrollToTop}
        className={`${styles.backToTop} ${
          showBackToTop ? styles.backToTopVisible : ''
        }`}
        aria-label="Back to Top"
        title="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
