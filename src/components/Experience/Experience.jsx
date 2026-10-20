import React, { useState } from 'react';
import skillsData from '../../data/experience.json';
import styles from './Experience.module.css';
import { Sparkles, Code2, ShieldCheck, Milestone } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'mobile', label: 'Mobile (Flutter)' },
    { id: 'frontend', label: 'Frontend Web' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'tools', label: 'Tools & Design' },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  const milestones = [
    {
      period: '2023 - Present',
      role: 'Cross-Platform Mobile & Full-Stack Developer',
      description: 'Building high-performance mobile apps using Flutter & BLoC architecture, coupled with modern web applications in React, Next.js, and Node.js REST services.',
    },
    {
      period: '2022 - 2023',
      role: 'Flutter & Mobile App Specialist',
      description: 'Engineered real-time features like WebRTC meeting rooms, GPS ride tracking, and Firebase cloud integrations with structured Clean Architecture.',
    },
    {
      period: '2021 - 2022',
      role: 'Web Development & UI/UX Design',
      description: 'Focused on core JavaScript ES6+, HTML5/CSS3 responsive layouts, REST API integrations, and Figma design prototyping.',
    },
  ];

  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionPill}>
            <Sparkles size={14} />
            <span>MY TOOLKIT</span>
          </div>
          <h2 className={styles.title}>
            Skills & <span className={styles.titleAccent}>Technologies</span>
          </h2>
          <p className={styles.subtitle}>
            A comprehensive overview of the frameworks, languages, and development tools I use to engineer scalable web and mobile software solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.tabList}>
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${
                activeTab === tab.id ? styles.activeTabBtn : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconRing}>
                  <img
                    src={skill.imagesrc}
                    alt={skill.title}
                    loading="lazy"
                    className={styles.skillIcon}
                  />
                </div>
                <span className={styles.levelBadge}>{skill.level}</span>
              </div>

              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillDesc}>{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className={styles.milestonesSection}>
          <div className={styles.milestoneHeader}>
            <Milestone size={24} className={styles.milestoneIcon} />
            <h3>Development Journey & Experience</h3>
          </div>

          <div className={styles.timeline}>
            {milestones.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.period}>{item.period}</span>
                  <h4 className={styles.roleTitle}>{item.role}</h4>
                  <p className={styles.roleDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
