import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container}>
    <div className={styles.text}>
       <h1>Contact</h1>
        <h3>Feel free to reach out!</h3>
    </div>
           <ul className={styles.links}>
               <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt=''/>
                <a href='mailto:prasannatabaniya250@gmail.com'>email</a>
               </li>
               <li className={styles.link}>
               <img src={getImageUrl("contact/linkedinIcon.png")} alt=''/>
                <a href='https://www.linkedin.com/'>linkedin</a>
               </li>
               <li className={styles.link}>
               <img src={getImageUrl("contact/githubIcon.png")} alt=''/>
                <a href='https://www.github.com/Prasannata1Baniya'>Github</a>
               </li>
           </ul>
        
    </footer>
  )
}

export default Contact