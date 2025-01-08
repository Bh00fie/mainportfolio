import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

function Projects() {

 // Creating an array of for each cards containing their information 
    const [currentIndex, setCurrentIndex] = useState(0);

    // All project, to add new project, copy and paste the same format
    const cardInformation = [
        {
            title: "Workout Kitchen",
            image: "https://github.com/Bh00fie/workout_kitchen/blob/main/assets/images/screenshot.png?raw=true",
            text: "Webpage to help improve your overall health by providing recipes based on what you have in stock!",
            linkProject: "https://allen-ec.github.io/workout_kitchen/"
        },  
        {
            title: "Cover Letter Generator with AI!",
            image: "https://github.com/Bh00fie/coverLetterGenerator/blob/main/frontend/src/components/images/screenshot.png?raw=true",
            text: "Project that allows the user to upload their CV and Job description to get a tailored template for a cover letter!",
            linkProject: "https://reactcoverlettergenerator.netlify.app"
        },  
        {
            title: "Weight Tracker",
            image: "https://github.com/Bh00fie/Weight-Tracker/blob/main/public/screenshot.png?raw=true",
            text: "Webapp to help you track your weight and support you in your weight loss journey!",
            linkProject: "https://github.com/Bh00fie/Weight-Tracker"
        },  
        {
            title: "Supply Chain Simulation,",
            image: "https://github.com/Bh00fie/Manufacturing-CW2/blob/main/Images/CumulativeCostOverTime.png?raw=true",
            text: "Script to calculate the production rate and ROI for Al and Li batteries on the manufacturing line!",
        },  
        {
            title: "Temperature and Humidity Monitor",
            image: "https://github.com/Bh00fie/ArduinoTemperatureCheck/blob/main/HardwarePhoto.png?raw=true",
            text: "This project helps find the temperature humidity level in the envirorment with the help of Arduino!",
        },  
    ]

    // Function to move around the carousel to a specific card or project
    const nextCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardInformation.length);
    };
    
    const prevCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cardInformation.length) % cardInformation.length);
    };
  
    const jumpToCard = (index) => {
      setCurrentIndex(index);
    };

      return (
        <div id='projectPage'>
          <h1 id='projectTitle' className='title'>Projects:</h1>
          
          {/* Creating Carousel effect to allow the user to scroll to different projects, this is useful to keep the webpage clean, especially when the number of projects increase */}
          <div id='carouselContainer'>
            <div id='cardContainer'>
              {cardInformation.map((card, idx) => {
                // Method to move the cards while increasing the distance and the scale from the center
                let position = (idx - currentIndex + cardInformation.length) % cardInformation.length;
                if (position > Math.floor(cardInformation.length / 2)) {
                  position -= cardInformation.length;
                }

                return (
                  <div 
                    key={idx} 
                    className={`projectCard position-${position}`}
                    style={{
                      transform: `translateX(${position * 110}%) scale(${position === 0 ? 1 : 0.8})`,
                      opacity: Math.abs(position) <= 1 ? 1 : 0,
                      zIndex: cardInformation.length - Math.abs(position)
                    }}
                  >
                    <Card>
                      <Card.Img variant="top" src={card.image} />
                      <Card.Body>
                        <Link to={card.linkProject} target="_blank">
                          <Card.Title>{card.title}</Card.Title>
                        </Link>
                        <Card.Text>{card.text}</Card.Text>
                      </Card.Body>
                    </Card>

                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Buttons to move the cards */}
          <div id='carouselControls'>
            <button onClick={prevCard} className="arrow left-arrow">&lt;</button>
            <div id='cardSelector'>
              {cardInformation.map((_, idx) => (
                <Button 
                    key={idx} 
                    onClick={() => jumpToCard(idx)} 
                    className={currentIndex === idx ? 'custom-active' : 'custom-inactive'}
                    >
                    {idx + 1}
                </Button>
              ))}
            </div>
            <button onClick={nextCard} className="arrow right-arrow">&gt;</button>
          </div>
        </div>
      );
    }
    
    export default Projects;
