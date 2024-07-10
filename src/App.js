import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/components/pages/Home.js';
import Projects from '../src/components/pages/Projects.js';
import About from './components/pages/Aboutme.js';
import Contactme from '../src/components/pages/Contactme.js';
import ScrollDown from '../src/components/pages/ScrollDownFunction.js';
import Footer from '../src/components/pages/Footer';
import FixedCV from './components/pages/quickCV.js';

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="main-content">
        <div ref={homeRef}>
          <Home />
        </div>
        <ScrollDown scrollToRef={projectsRef} />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <ScrollDown scrollToRef={aboutRef} />
        <div ref={aboutRef}>
          <About />
        </div>
        <ScrollDown scrollToRef={contactRef} />
        <div ref={contactRef}>
          <Contactme />
        </div>
        <FixedCV />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
