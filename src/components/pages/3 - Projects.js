import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
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
        // {
        //     title: "Mechanical Engineering Project",
        //     image: "https://ak.picdn.net/shutterstock/videos/1012114871/thumb/1.jpg?ip=x480",
        //     text: "Work In Progress",
        // },  
        // {
        //     title: "Financial Portfolio Tracker",
        //     image: "https://ak.picdn.net/shutterstock/videos/1012114871/thumb/1.jpg?ip=x480",
        //     text: "Work In Progress",
        // },  

    ]

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
          
          <div id='carouselContainer'>
            <div id='cardContainer'>
              {cardInformation.map((card, idx) => {
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
