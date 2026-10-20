import React, { useState } from 'react';
import projectsData from '../../data/projects.json';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import { Search, Sparkles, X, ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: '⭐ Featured' },
    { id: 'mobile', label: 'Mobile (Flutter)' },
    { id: 'web', label: 'Web Applications' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    // Category or Featured filter
    const matchesTab =
      activeFilter === 'all'
        ? true
        : activeFilter === 'featured'
        ? project.featured
        : project.category === activeFilter;

    // Search query filter
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.skills.some((skill) => skill.toLowerCase().includes(query));

    return matchesTab && matchesSearch;
  });

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionPill}>
            <Sparkles size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className={styles.title}>
            Featured <span className={styles.titleAccent}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Explore a selection of my real-world mobile applications, full-stack web platforms, and UI prototypes engineering clean code and scalable state management.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className={styles.controlsBar}>
          <div className={styles.tabList}>
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`${styles.tabBtn} ${
                  activeFilter === tab.id ? styles.activeTabBtn : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by title, skill (Flutter, Next.js, Node...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={styles.clearBtn}
                aria-label="Clear Search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id || project.title}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Code size={40} className={styles.emptyIcon} />
            <h3>No matching projects found</h3>
            <p>Try clearing your search query or selecting a different filter tab.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className={styles.resetBtn}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Detailed Project Modal */}
        {selectedProject && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className={styles.modalContainer}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModalBtn}
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className={styles.modalImageWrapper}>
                <img
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalContent}>
                <div className={styles.modalTags}>
                  <span className={styles.modalCategory}>
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className={styles.modalFeatured}>⭐ Featured Project</span>
                  )}
                </div>

                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                <p className={styles.modalDescription}>
                  {selectedProject.description}
                </p>

                <div className={styles.modalSkillsSection}>
                  <h4>Technologies & Tools Used</h4>
                  <div className={styles.modalSkillsList}>
                    {selectedProject.skills.map((skill, index) => (
                      <span key={index} className={styles.modalSkillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalDemoBtn}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo / Web Link</span>
                  </a>

                  <a
                    href={selectedProject.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalGithubBtn}
                  >
                    <GithubIcon size={18} />
                    <span>View GitHub Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
