import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
   <section className={styles.container} id='about'>
   <h2 className={styles.title}>About</h2>
   <div className={styles.content}>
    <img src={getImageUrl("about/aboutImage.png")} alt='' className={styles.aboutImage}/>
    <ul className={styles.aboutItems }>
    <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt=''/> 
        <div>
            <h3>Frontend Developer</h3>
            <p>I am a Frontend developer with experience in building responsive and optimized sites.</p>
        </div>
    </li>
    <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt=''/>
        <div>
            <h3>Backend Developer</h3>
            <p>I am a Backend developer with experience in building fast and optimized backend systems and APIs.</p>
        </div>
    </li>
    <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt=''/>
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

{/*Version Control: Git, GitHub
Tools: VS Code, Figma, Postman, etc. */}
