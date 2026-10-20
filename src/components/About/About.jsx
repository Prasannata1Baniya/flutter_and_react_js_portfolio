import React from 'react';
import styles from './About.module.css';
import frontendImg from '/assets/about/frontend.jpg';
import backendImg from '/assets/about/backend.png';
import uiuxImg from '/assets/about/UI_UX.jpg';
import { Smartphone, Layout, Server, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    '3+ Years of Hands-on Development Experience',
    'Specialized in Flutter Cross-Platform Mobile Apps',
    'Proficient in React, Next.js & Full-Stack Architectures',
    'Clean Architecture, BLoC State Management & REST APIs',
    'User-Centric Design Prototyping with Figma'
  ];

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionPill}>
            <Sparkles size={14} />
            <span>WHO I AM</span>
          </div>
          <h2 className={styles.title}>
            About <span className={styles.titleAccent}>Me</span>
          </h2>
          <p className={styles.subtitle}>
            I am a self-taught, passionate developer dedicated to transforming complex ideas into elegant, high-performing mobile and web applications. My focus centers on intuitive user experiences, robust code quality, and modern scalable architectures.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1: Mobile */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <Smartphone size={26} />
              </div>
              <span className={styles.cardTag}>Mobile Specialist</span>
            </div>

            <div className={styles.imageWrapper}>
              <img src={frontendImg} alt="Mobile & Frontend Development" className={styles.cardImg} />
            </div>

            <h3 className={styles.cardTitle}>Mobile Development (Flutter)</h3>
            <p className={styles.cardDesc}>
              Building high-performance, native-quality Android and iOS applications with <strong>Flutter & Dart</strong>. Expert in BLoC state management, reactive streams, offline storage, dynamic push notifications, and seamless native integration.
            </p>

            <div className={styles.techStackPills}>
              <span>Flutter</span>
              <span>Dart</span>
              <span>BLoC</span>
              <span>Firebase</span>
              <span>REST APIs</span>
            </div>
          </div>

          {/* Card 2: Web & Fullstack */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconContainer} ${styles.iconPurple}`}>
                <Server size={26} />
              </div>
              <span className={styles.cardTag}>Full-Stack Web</span>
            </div>

            <div className={styles.imageWrapper}>
              <img src={backendImg} alt="Backend & Web Development" className={styles.cardImg} />
            </div>

            <h3 className={styles.cardTitle}>Web & Full-Stack Development</h3>
            <p className={styles.cardDesc}>
              Crafting responsive web platforms using <strong>React, Next.js, and Node.js</strong>. Implementing scalable backend APIs, database management with MongoDB & PostgreSQL, Supabase auth, and optimized server-side rendering.
            </p>

            <div className={styles.techStackPills}>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Prisma</span>
            </div>
          </div>

          {/* Card 3: UI/UX & Design */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconContainer} ${styles.iconCyan}`}>
                <Layout size={26} />
              </div>
              <span className={styles.cardTag}>UI/UX Prototyping</span>
            </div>

            <div className={styles.imageWrapper}>
              <img src={uiuxImg} alt="UI/UX Design" className={styles.cardImg} />
            </div>

            <h3 className={styles.cardTitle}>UI/UX Design & Architecture</h3>
            <p className={styles.cardDesc}>
              Designing clean, interactive user interfaces in <strong>Figma</strong> prior to development. Ensuring responsive layouts, accessible design systems, fluid motion physics, and user journeys that drive engagement.
            </p>

            <div className={styles.techStackPills}>
              <span>Figma</span>
              <span>Wireframing</span>
              <span>UI Design Systems</span>
              <span>User Flows</span>
            </div>
          </div>
        </div>

        {/* Core Competencies Box */}
        <div className={styles.highlightsBox}>
          <div className={styles.highlightsHeader}>
            <Cpu size={22} className={styles.cpuIcon} />
            <h4>Core Values & Engineering Standards</h4>
          </div>
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={index} className={styles.highlightItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
