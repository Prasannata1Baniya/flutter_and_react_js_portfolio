import React from "react";
import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/email.png";
import linkedinIcon from "../../assets/contact/linkedin.png";
import githubIcon from "../../assets/contact/github.png";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>Let's Work Together</h2>

        <p className={styles.subtitle}>
          Have an idea, project, internship opportunity, or just want to say
          hello? I'd love to hear from you.
        </p>
      </div>

      <div className={styles.contactCards}>
        <a
          href="mailto:prasannata8890@gmail.com"
          className={styles.card}
        >
          <img src={emailIcon} alt="Email" />

          <div>
            <h3>Email</h3>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/prasannata-baniya-060b792bb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={linkedinIcon} alt="LinkedIn" />

          <div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </div>
        </a>

        <a
          href="https://github.com/Prasannata1Baniya"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={githubIcon} alt="GitHub" />

          <div>
            <h3>GitHub</h3>
            <p>View my projects</p>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Contact;