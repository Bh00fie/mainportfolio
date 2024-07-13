import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import coverLetterGenerator from '../Images/CoverLetterGeneator.png';

function Projects() {

 // Creating an array of for each cards containing their information 
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardInformation = [
        {
            title: "Workout Kitchen",
            image: "https://github.com/Allen-EC/workout_kitchen/raw/main/assets/images/screenshot.png",
            text: "Webpage to help improve your overall health! Using API the user can look for recipes based on what they have in stock and also select a an exercise based on the difficulty and type!",
            linkProject: "https://allen-ec.github.io/workout_kitchen/"
        },  
        {
            title: "Cover Letter Generator with AI!",
            image: coverLetterGenerator,
            text: "Project that allows the user to upload their CV and the Job description to get a quick tailored cover letter using ChatGPT API!",
            linkProject: "https://reactcoverlettergenerator.netlify.app"
        },  
        {
            title: "Mechanical Engineering Project",
            image: "https://ak.picdn.net/shutterstock/videos/1012114871/thumb/1.jpg?ip=x480",
            text: "Work In Progress",
        },  
        {
            title: "Financial Portfolio Tracker",
            image: "https://ak.picdn.net/shutterstock/videos/1012114871/thumb/1.jpg?ip=x480",
            text: "Work In Progress",
        },  
    ]

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cardInformation.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cardInformation.length - 1 : prevIndex - 1
    );
  };
      
    return (
        <div id='projectPage'>
            <h1 id='projectTitle' className='title'>Projects:</h1>
            
            <div id='carouselContainer'>
                <button onClick={prevCard} className="arrow left-arrow">&lt;</button>
        
            <div id='cardContainer'>
                {cardInformation.map((card, idx) => (
            
            <div 
              key={idx} 
              className={`projectCard ${idx === currentIndex ? 'active' : ''}`}
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
          ))}
        </div>
        
        <button onClick={nextCard} className="arrow right-arrow">&gt;</button>
      </div>

      <div id='cardCounter'>
        {currentIndex + 1} / {cardInformation.length}
      </div>
    </div>
  );
}


export default Projects;
