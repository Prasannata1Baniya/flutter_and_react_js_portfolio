import React from 'react';
import styles from './ProjectCard.module.css';
import { ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

const ProjectCard = ({ project, onSelect }) => {
  const { title, imageSrc, description, skills, demo, source, category, featured } = project;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} onClick={() => onSelect(project)}>
        <img src={imageSrc} alt={title} className={styles.cardImage} loading="lazy" />

        <div className={styles.imageOverlay}>
          <button className={styles.overlayBtn} onClick={(e) => { e.stopPropagation(); onSelect(project); }}>
            <Eye size={18} />
            <span>View Details</span>
          </button>
        </div>

        {featured && (
          <div className={styles.featuredBadge}>
            <Sparkles size={12} />
            <span>Featured</span>
          </div>
        )}

        <span className={styles.categoryBadge}>{category}</span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.title} onClick={() => onSelect(project)}>
          {title}
        </h3>

        <p className={styles.description}>{description}</p>

        <div className={styles.skillsList}>
          {skills.slice(0, 5).map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
          {skills.length > 5 && (
            <span className={styles.skillMore}>+{skills.length - 5}</span>
          )}
        </div>

        <div className={styles.cardActions}>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoBtn}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={15} />
            <span>Live Demo</span>
          </a>

          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
            onClick={(e) => e.stopPropagation()}
            title="GitHub Repository"
          >
            <GithubIcon size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
