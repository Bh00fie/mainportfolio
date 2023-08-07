import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import "./Project.css"
import { Link } from 'react-router-dom';

function Projects() {

 // Creating an array of for each cards containing their information 

    const cardInformation = [
        {
            title: "Workout Kitchen",
            image: "https://github.com/Allen-EC/workout_kitchen/raw/main/assets/images/screenshot.png",
            text: "Webpage to help improve your overall health! Using API the user can look for recipes based on what they have in stock and also select a an exercise based on the difficulty and type!",
            linkProject: "https://allen-ec.github.io/workout_kitchen/"
        },  
        {
            title: "Cover Letter Generator with AI!",
            image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/nouamanetazi/cover-letter-generator.png",
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
      
    return (
        <div id='projectPage'>
        <>
            {/* Code to create a grid of cards copied from React-Bootstrap */}
            <h1 id='projectTitle' className='title'>Projects:</h1>
            <div id='projectGrid'>
            <Row xs={1} md={2} className="g-4">
                {/* g-4 stands for the spacing between cards when in a row */}
                {/* Creating an array of cards and give them an index value idx */}
                {cardInformation.map((card, idx) => (
                <Col key={idx}>
                    <Card className='projectCardGroup'>
                    <Card.Img variant="top" src={card.image} /> 
                    <Card.Body>
                        <Link to={card.linkProject} target="_blank">
                            <Card.Title>{card.title} </Card.Title>
                        </Link>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </div>
        </>
    </div>
    );
      
}


export default Projects;
