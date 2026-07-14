import React from "react";
import styles from "./About.module.css";

import frontendImg from "../../assets/about/frontend.jpg";
import backendImg from "../../assets/about/backend.png";
import uiuxImg from "../../assets/about/UI_UX.jpg";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <p className={styles.subtitle}>
        I enjoy turning ideas into beautiful, responsive, and scalable web and
        mobile applications. I continuously learn new technologies to improve my
        skills and build better digital experiences.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src={frontendImg}
            alt="Frontend Development"
            className={styles.image}
          />

          <h3>Frontend Development</h3>

          <p>
            I build modern, responsive, and user-friendly interfaces using
            React.js, HTML, CSS, JavaScript, and Flutter while focusing on
            performance and accessibility.
          </p>
        </div>

        <div className={styles.card}>
          <img
            src={backendImg}
            alt="Backend Development"
            className={styles.image}
          />

          <h3>Backend Development</h3>

          <p>
            I develop secure REST APIs and backend services using Node.js,
            Express.js, Firebase, Supabase, PostgreSQL, and Prisma to create
            scalable applications.
          </p>
        </div>

        <div className={styles.card}>
          <img
            src={uiuxImg}
            alt="UI UX Design"
            className={styles.image}
          />

          <h3>UI / UX Design</h3>

          <p>
            I design clean, modern interfaces in Figma before development,
            ensuring intuitive user experiences, consistent design systems, and
            responsive layouts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;