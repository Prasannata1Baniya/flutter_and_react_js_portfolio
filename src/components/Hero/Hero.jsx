import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Hi! I am PRASANNATA BANIYA</h1>
            <p className={styles.description}>I am a Flutter and React Self- taught Developer with 3 years of experience. 
            Reach out to me if you'd like to learn more!</p>
            <div className={styles.buttons}>
            <a href='mailto:prasannatabaniya250@gmail.com' className={styles.contactBtn}>Contact me</a>
            <a href='https://github.com/Prasannata1Baniya' className={styles.githubBtn}>Github</a>
            </div>
      </div>
      <img
        src="/src/assets/hero/prasannata.jpg" alt="My image" className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero