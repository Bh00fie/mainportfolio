import React from 'react';
import "./footer.css"; 

function Footer () {
  return (
    <footer id="footer" className='montserratFont'>
      © {new Date().getFullYear()} Abhinandan Thour - All rights reserved.
    </footer>
    );
  }

export default Footer; 
