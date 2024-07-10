import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/1 - Home.js';
import WhosAbhi from './components/pages/2 - WhosAbhi.js';
import Projects from './components/pages/3 - Projects.js';
// import About from './components/pages/4 - Aboutme.js';
import Contactme from './components/pages/5 - Contactme.js';
import Footer from './components/pages/6 - Footer.js';
// import FixedCV from './components/pages/quickCV.js';
// import ScrollDown from '../src/components/pages/ScrollDownFunction.js';

function App() {
  const homeRef = useRef(null);
  const whoisabhiRef = useRef(null);
  const projectsRef = useRef(null);
  // const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <div className="main-content">
        <div ref={homeRef}>
          <Home />
        </div>
        {/* <ScrollDown scrollToRef={whoisabhiRef} /> */}
        <div ref={whoisabhiRef}>
          <WhosAbhi />
        </div>
        {/* <ScrollDown scrollToRef={projectsRef} /> */}
        <div className='borderSection' ref={projectsRef}>
          <Projects />
        </div>
        {/* <ScrollDown scrollToRef={aboutRef} />
        <div className='borderSection' ref={aboutRef}>
          <About />
        </div> */}
        {/* <ScrollDown scrollToRef={contactRef} /> */}
        <div className='borderSection' ref={contactRef}>
          <Contactme />
        </div>
        {/* <FixedCV /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
