import React from 'react';
import { projects, otherProjects } from '../data/projects';
import useReveal from '../hooks/useReveal';

// Static grid rather than a carousel: everything is visible at once, it degrades
// to a single column on mobile without a stack of media queries, and it needs no
// screenshots — several of these projects have nothing worth photographing.
function Projects() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="projects" className={`section ${revealClass}`} ref={ref}>
      <h2 className="sectionTitle">Projects</h2>

      <ul className="projectGrid">
        {projects.map((project) => (
          <li className="projectCard" key={project.title}>
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectWhat">{project.what}</p>
            <p className="projectInteresting">{project.interesting}</p>

            <ul className="tagList" aria-label={`Technologies used in ${project.title}`}>
              {project.tech.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="projectLinks">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live site ↗
                </a>
              )}
              {project.code && (
                <a href={project.code} target="_blank" rel="noreferrer">
                  Code ↗
                </a>
              )}
              {project.note && <span className="projectNote">{project.note}</span>}
            </div>
          </li>
        ))}
      </ul>

      <p className="projectsAlso">
        Also built:{' '}
        {otherProjects.map((project, index) => (
          <React.Fragment key={project.name}>
            {index > 0 && ', '}
            <a href={project.code} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          </React.Fragment>
        ))}
        .
      </p>
    </section>
  );
}

export default Projects;
