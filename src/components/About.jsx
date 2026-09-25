import React from 'react';
import useReveal from '../hooks/useReveal';

function About() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="about" className={`section ${revealClass}`} ref={ref}>
      <h2 className="sectionTitle">About</h2>

      <div className="prose">
        <p>
          Currently working as a Software Engineer at Lloyds Banking Group within the Agentic AI
          team, creating AI agents that automate fraud processes using Python, Java and Google ADK
          on GCP. In the past I worked at Accenture on a large-scale fintech programme focusing on
          tech such as Databricks, Azure and Python. Before starting my career in tech, I built an
          educational profile in Aerospace Engineering at the University of Southampton where I
          achieved my Master in 2024.
        </p>
        <p>
          A bit more about me, I could talk about Personal Finance, Tech for days and I like to
          spend my free time between travelling, hiking and reading.
        </p>
        <p>
          Fun fact about me, I speak 5 languages and I make a delicious Carbonara!{' '}
          <span className="wiggle" role="img" aria-label="face savouring food">
            😋
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
