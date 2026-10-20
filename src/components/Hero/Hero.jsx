import React from 'react';
import styles from './Hero.module.css';
import heroImg from '/assets/hero/prasannata.jpg';
import { Briefcase, Mail, ArrowRight, Code, Smartphone, Layers, Award, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Available for Internships & Full-time Roles</span>
          </div>

          <h1 className={styles.title}>
            Building seamless <br />
            <span className={styles.titleGradient}>Mobile & Web</span> Apps
          </h1>

          <h2 className={styles.subtitle}>
            Hi, I'm <span className={styles.highlightName}>Prasannata Baniya</span> — Flutter & Full-Stack Developer
          </h2>

          <p className={styles.description}>
            Software developer with 3+ years of experience engineering responsive, cross-platform mobile applications in <strong>Flutter</strong> and dynamic web applications with <strong>React & Next.js</strong>. Dedicated to clean architecture, high performance, and intuitive user experiences.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="https://github.com/Prasannata1Baniya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>

            <a href="#contact" className={styles.tertiaryBtn}>
              <Mail size={18} />
              <span>Contact</span>
            </a>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>

            <div className={styles.statDivider}></div>

            <div className={styles.statItem}>
              <div className={styles.statValue}>3+</div>
              <div className={styles.statLabel}>Years Coding</div>
            </div>

            <div className={styles.statDivider}></div>

            <div className={styles.statItem}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Passion & Precision</div>
            </div>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageCard}>
            <div className={styles.imageRing}></div>
            <img
              src={heroImg}
              alt="Prasannata Baniya"
              className={styles.profileImg}
            />

            {/* Floating Tech Badges */}
            <div className={`${styles.floatingBadge} ${styles.badgeFlutter}`}>
              <Smartphone size={16} />
              <span>Flutter & Dart</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badgeReact}`}>
              <Code size={16} />
              <span>React & Next.js</span>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badgeBackend}`}>
              <Layers size={16} />
              <span>Node.js & APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
