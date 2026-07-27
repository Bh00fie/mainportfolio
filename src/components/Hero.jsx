import React from 'react';
import headshotWebp from '../assets/headshot.webp';
import headshotJpg from '../assets/headshot.jpg';
import CV from '../assets/Abhinandanthour.pdf';
import { skills } from '../data/experience';
import HeroBackground from './HeroBackground';

function Hero({ theme }) {
  return (
    <section id="top" className="hero">
      <HeroBackground theme={theme} />

      <picture>
        {/* Explicit dimensions so the largest element on the page does not shift layout. */}
        <source srcSet={headshotWebp} type="image/webp" />
        <img
          className="heroPhoto"
          src={headshotJpg}
          width="600"
          height="600"
          alt="Abhinandan Thour"
          fetchpriority="high"
        />
      </picture>

      <div className="heroText">
        <h1 className="heroName">Abhinandan Thour</h1>
        <p className="heroRole">Data Engineer</p>
        <p className="heroContext">
          Leeds, UK &middot; Agentic AI &amp; fraud prevention in banking
        </p>

        <div className="heroActions">
          <a className="button buttonPrimary" href={CV} download="Abhinandan Thour CV.pdf">
            Download CV
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/abhinandanthour"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="button" href="https://github.com/Bh00fie" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        {/* Grouped skills, no ratings. This is also what keyword searches land on. */}
        <dl className="skills">
          {skills.map((group) => (
            <div className="skillGroup" key={group.group}>
              <dt>{group.group}</dt>
              <dd>{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
