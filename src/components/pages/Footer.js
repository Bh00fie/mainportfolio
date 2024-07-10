import React from 'react';
import "./footer.css"; 

function Footer() {
  const handleScrollDown = () => {
    const element = document.getElementById('homePage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={handleScrollDown}>
        Click Here to scroll to the top
      </button>

      <footer id="footer" className='montserratFont'>
        © {new Date().getFullYear()} Abhinandan Thour - All rights reserved.
      </footer>
    </div>
  );
}

export default Footer; 
