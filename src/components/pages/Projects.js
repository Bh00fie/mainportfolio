import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Project.css"

function Projects() {

 // Creating an array of for each cards containing their information 

    const cardInformation = [
        {
            title: "Project1",
            image: "https://placehold.co/200",
            text: "ABC",
        },  
        {
            title: "Project2",
            image: "https://placehold.co/200",
            text: "ABC",
        },  
        {
            title: "Project2",
            image: "https://placehold.co/200",
            text: "ABC",
        },  
        {
            title: "Project2",
            image: "https://placehold.co/200",
            text: "ABC",
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