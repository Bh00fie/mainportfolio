import React from 'react';
import CV from '../assets/Abhinandanthour.pdf';
import useReveal from '../hooks/useReveal';

// Plain links rather than a form. The previous EmailJS form shipped its service
// credentials in the client bundle, and a mailto is what people actually use.
function Contact() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="contact" className={`section ${revealClass}`} ref={ref}>
      <h2 className="sectionTitle">Get in touch</h2>

      <p className="prose contactIntro">
        Open to conversations about data engineering roles, regulatory reporting and platform work
        — or anything I've built here.
      </p>

      <ul className="contactList">
        <li>
          <span className="contactLabel">Email</span>
          <a href="mailto:thourabhinandan@gmail.com">thourabhinandan@gmail.com</a>
        </li>
        <li>
          <span className="contactLabel">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/abhinandanthour"
            target="_blank"
            rel="noreferrer"
          >
            /in/abhinandanthour
          </a>
        </li>
        <li>
          <span className="contactLabel">GitHub</span>
          <a href="https://github.com/Bh00fie" target="_blank" rel="noreferrer">
            @Bh00fie
          </a>
        </li>
        <li>
          <span className="contactLabel">CV</span>
          <a href={CV} download="Abhinandan Thour CV.pdf">
            Download as PDF
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
