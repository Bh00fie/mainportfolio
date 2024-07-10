import React from 'react';
import './style.css';

function ScrollDown({ scrollToRef }) {
  const handleClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="scrollButtonDiv">
    <button id="scrollDownButton" onClick={handleClick}>V
    </button>
    </div>
  );
}

export default ScrollDown;
