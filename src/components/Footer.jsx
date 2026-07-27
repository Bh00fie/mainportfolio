import React from 'react';
import PixelTrail from './PixelTrail';

function Footer({ theme }) {
  return (
    <footer className="siteFooter">
      <PixelTrail theme={theme} />
      <p>© {new Date().getFullYear()} Abhinandan Thour. Built with React and Vite.</p>
    </footer>
  );
}

export default Footer;
