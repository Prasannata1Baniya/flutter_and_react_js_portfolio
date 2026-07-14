import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
  },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={title}
        className={styles.image}
        loading="lazy"
      />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>
        {description}
      </p>

      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li
            key={index}
            className={styles.skill}
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Live Demo
        </a>

        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;