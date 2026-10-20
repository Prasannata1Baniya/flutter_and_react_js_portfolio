import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X, Sparkles, Send } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills & Tech', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <a href="#home" className={styles.brand}>
          <div className={styles.brandIcon}>
            <Sparkles size={18} />
          </div>
          <span className={styles.brandName}>
            Prasannata<span className={styles.brandAccent}>.dev</span>
          </span>
        </a>

        <div className={styles.desktopMenu}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${
                    activeSection === link.id ? styles.activeLink : ''
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className={styles.hireBtn}>
            <Send size={15} />
            <span>Hire Me</span>
          </a>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={`${styles.mobileDrawer} ${
            menuOpen ? styles.mobileDrawerOpen : ''
          }`}
        >
          <div className={styles.mobileDrawerContent}>
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`${styles.mobileNavLink} ${
                      activeSection === link.id ? styles.mobileActiveLink : ''
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={styles.mobileHireBtn}
            >
              <Send size={16} />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
