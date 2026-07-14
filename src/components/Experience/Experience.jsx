import React from "react";
import skills from "../../data/experience.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>

      <p className={styles.subtitle}>
        Over the past 3+ years, I have worked with modern technologies to build
        responsive web and mobile applications. Below are the technologies I
        use regularly.
      </p>

      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img
                  src={skill.imagesrc}
                  alt={skill.title}
                  loading="lazy"
                />
              </div>

              <h3 className={styles.skillTitle}>
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;