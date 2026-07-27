import React from 'react';
import { experience, education } from '../data/experience';
import useReveal from '../hooks/useReveal';

function Experience() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="experience" className={`section ${revealClass}`} ref={ref}>
      <h2 className="sectionTitle">Experience</h2>

      <ol className="timeline">
        {experience.map((job) => (
          <li className="timelineItem" key={`${job.company}-${job.start}`}>
            <div className="timelineHeader">
              <h3 className="timelineRole">
                {job.role} <span className="timelineCompany">· {job.company}</span>
              </h3>
              <p className="timelineMeta">
                {job.location} · {job.start} – {job.end}
                {job.current && <span className="timelineNow">Current</span>}
              </p>
            </div>

            <p className="timelineSummary">{job.summary}</p>

            <ul className="timelineBullets">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <ul className="tagList" aria-label={`Technologies used at ${job.company}`}>
              {job.tech.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}

        <li className="timelineItem">
          <div className="timelineHeader">
            <h3 className="timelineRole">
              {education.qualification}{' '}
              <span className="timelineCompany">· {education.institution}</span>
            </h3>
            <p className="timelineMeta">
              {education.location} · {education.start} – {education.end} · {education.grade}
            </p>
          </div>
          {education.dissertation && (
            <p className="timelineSummary">
              Dissertation: <em>{education.dissertation}</em>
            </p>
          )}
        </li>
      </ol>
    </section>
  );
}

export default Experience;
