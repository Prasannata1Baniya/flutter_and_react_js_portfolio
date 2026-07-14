import React from "react";
import styles from "./Hero.module.css";

import heroImg from "../../assets/hero/prasannata.jpg";

const Hero = () => {
  return (
    <section className={styles.container} id="home">

      <div className={styles.content}>

        <span className={styles.badge}>
          🚀 Open to Internships & Freelance
        </span>

        <h1 className={styles.title}>
          Hi, I'm <span>Prasannata Baniya</span>
        </h1>

        <h2 className={styles.subtitle}>
          Flutter Developer • React Developer
        </h2>

        <p className={styles.description}>
          Self-taught Flutter and React developer with over 3 years of
          experience building responsive web and mobile applications.
          Passionate about creating beautiful UI, scalable applications,
          and solving real-world problems through technology.
        </p>

        <div className={styles.buttons}>
          <a
            href="mailto:prasannatabaniya250@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>

          <a
            href="https://github.com/Prasannata1Baniya"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
          >
            GitHub
          </a>
        </div>

        <div className={styles.stats}>
          <div>
            <h3>15+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>3+</h3>
            <p>Years</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Passion</p>
          </div>
        </div>

      </div>

      <div className={styles.imageWrapper}>
        <img
          src={heroImg}
          alt="Prasannata Baniya"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>

    </section>
  );
};

export default Hero;