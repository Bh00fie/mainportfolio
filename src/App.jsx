import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Divider from './components/Divider';
import Footer from './components/Footer';

// The theme is already applied to <html> by the inline script in index.html before
// first paint, so we read the applied value rather than setting it in an effect.
// Doing it in an effect is what caused the white flash for dark-mode visitors.
function readAppliedTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState(readAppliedTheme);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;

    // Keep the browser chrome colour in step with the page.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#17191a' : '#ffffff');

    try {
      localStorage.setItem('theme', next);
    } catch {
      // Private browsing can throw on write. The toggle still works for this session.
    }
  };

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="mainContent">
        <Hero theme={theme} />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer theme={theme} />
    </>
  );
}

export default App;
