import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import NavTabs from '../src/components/NavTabs.js';
import Home from '../src/components/pages/Home.js';
import Projects from '../src/components/pages/Projects.js';
import About from './components/pages/Aboutme.js';
import Contactme from '../src/components/pages/Contactme.js';
import Footer from '../src/components/Footer';
import FixedCV from '../src/components/quickCV.js';
import './components/style.css';

function App() {
  return (
    <Router>
      <NavTabs />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<About />} />
          <Route path="contactme" element={<Contactme />} />
        </Routes>
        <Footer />
        <FixedCV />
      </div>
    </Router>
  );
}

export default App;