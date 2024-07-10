import React from 'react';
import './Home.css';

function ScrollDown({ scrollToRef }) {
  const handleClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick}>
      Click Here to Smoothly Scroll Down
    </button>
  );
}

export default ScrollDown;
