import React from 'react';
import useReveal from '../hooks/useReveal';

function About() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="about" className={`section ${revealClass}`} ref={ref}>
      <h2 className="sectionTitle">About</h2>

      <div className="prose">
        <p>
          I'm a Data Engineer at Lloyds Banking Group in Leeds, on the Economic Crime Prevention
          Platform's Agentic AI team. I build AI agents that support customers going through fraud
          journeys — Python and Google ADK on GCP, with a React and TypeScript front end. Fraud is
          a good problem to work on: the cost of getting it wrong lands on a real person, in both
          directions.
        </p>
        <p>
          Before that I was in the Balance Sheet Management &amp; Regulatory Reporting Lab at
          Lloyds, building data and reporting solutions for securitisation, funds transfer pricing
          and regulatory reporting — liquidity coverage ratio and asset encumbrance — in C#, SQL
          Server and the SSIS/SSAS/SSRS stack. Earlier, at Accenture, I delivered data pipelines
          and reporting on a large-scale fintech programme in Python, SQL, Azure and Databricks,
          and built a cloud ETL pipeline end to end on AWS.
        </p>
        <p>
          I didn't start in data. I read Mechanical and Aerospace Engineering at the University of
          Southampton — my dissertation was on solid lubrication in space using nitrogen-doped
          MoS₂ — then spent a year at Cummins as an NPI Manufacturing Engineer, running analysis
          for engine programmes and introducing VR and 3D printing into prototyping. That
          background is the reason I think about systems the way I do: tolerances, failure modes,
          and what happens on the line when an assumption turns out to be wrong.
        </p>
        <p>
          Outside work I'll happily talk about personal finance and tech for far too long, and spend
          my free time travelling, hiking and reading. I speak five languages and make a genuinely
          good carbonara.{' '}
          <span className="wiggle" role="img" aria-label="face savouring food">
            😋
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
