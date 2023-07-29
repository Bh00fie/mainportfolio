import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import "./Project.css"

function Projects() {

 // Creating an array of for each cards containing their information 

    const cardInformation = [
        {
            title: "Workout Kitchen",
            image: "https://placehold.co/200",
            text: "ABC",
        },  
        {
            title: "Health Tracker",
            image: "https://ak.picdn.net/shutterstock/videos/1012114871/thumb/1.jpg?ip=x480",
            text: "Work In Progress",
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
            <Row xs={1} md={2} className="g-5">
                {/* g-4 stands for the spacing between cards when in a row */}
                {/* Creating an array of cards and give them an index value idx */}
                {cardInformation.map((card, idx) => (
                <Col key={idx}>
                    <Card className='projectCardGroup'>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
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