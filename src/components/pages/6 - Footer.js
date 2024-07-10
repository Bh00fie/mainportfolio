import React from 'react';
import './style.css';

function Footer() {
  const handleScrollDown = () => {
    const element = document.getElementById('homePage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='footerSection'>
      {/* <div id='scrollButtonDiv'>
        <button id="scrollDownButton" onClick={handleScrollDown}> Λ </button>
      </div> */}
      <div>
          <footer id="footer" className='montserratFont'>
          © {new Date().getFullYear()} Abhinandan Thour - All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Footer; 
