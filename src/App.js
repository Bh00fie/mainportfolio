import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// Importing pages/element from the component folder, all "Names" are function in those file there are being exported to the App.js file
import NavTabs from '../src/components/NavTabs.js';
import Home from '../src/components/pages/Home.js';
import Projects from '../src/components/pages/Projects.js';
import About from './components/pages/Aboutme.js';
import Contactme from '../src/components/pages/Contactme.js';
import Footer from '../src/components/Footer';

// We import the main Style.css file
import './components/style.css'

function App() {
  return (
    <Router>
      <NavTabs/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<About />} />
          <Route path="contactme" element={<Contactme />} />
        </Routes>  
      <Footer/>
    </Router>
  );
}

export default App;
