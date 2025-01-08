import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/1 - Home.js';
import WhosAbhi from './components/pages/2 - WhosAbhi.js';
import Projects from './components/pages/3 - Projects.js';
import Contactme from './components/pages/4 - Contactme.js';
import Footer from './components/pages/5 - Footer.js';
// import FixedCV from './components/pages/quickCV.js';
// import ScrollDown from '../src/components/pages/ScrollDownFunction.js';

function App() {
  const [theme, setTheme] = useState('light'); // Default theme

  const homeRef = useRef(null);
  const whoisabhiRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  useEffect(() => {
    // Setting default theme based on local storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme); // Set body attribute
  }, []);

  // Function to switch theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    // Router used to switch between different pages without loading reloding the entire page
    <Router> 
      <div className="main-content">
        {/* Theme Toggle Button */}
        <div className="theme-toggle">
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>

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
