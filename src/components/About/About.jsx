/*import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
   <section className={styles.container} id='about'>
   <h2 className={styles.title}>About</h2>
   <div className={styles.content}>
    <img src="src/assets/about/frontend.jpg" alt='' className={styles.aboutImage}/>
    <ul className={styles.aboutItems }>
    <li className={styles.aboutItem}>
        <img src="src/assets/about/frontend.jpg" alt=''/> 
        <div>
            <h3>Frontend Developer</h3>
            <p>I am a Frontend developer with experience in building responsive and optimized sites.</p>
        </div>
    </li>
    <li className={styles.aboutItem}>
        <img src="src/assets/about/frontend.jpg" alt=''/>
        <div>
            <h3>Backend Developer</h3>
            <p>I am a Backend developer with experience in building fast and optimized backend systems and APIs.</p>
        </div>
    </li>
    <li className={styles.aboutItem}>
        <img src="src/assets/about/frontend.jpg" alt=''/>
        <div>
            <h3>UI Developer</h3>
            <p>I have designed multiple landing pages.</p>
        </div>
    </li>
    </ul>
   </div>


   </section>
  )
}

export default About

Version Control: Git, GitHub
Tools: VS Code, Figma, Postman, etc.

*/


import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="src/assets/about/frontend.jpg" alt="" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="src/assets/about/backend.png" alt="" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="src/assets/about/UI_UX.jpg" alt="" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About
