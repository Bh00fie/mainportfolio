import React from 'react';
import './Aboutme.css';

function About() {
    return (
        <div id='aboutmePage'>
            <h1 id='aboutmeTitle' className='title'>About me:</h1>
            <div className = 'aboutmeParagraph' id='aboutmeFirstParagraph' >
                <img className = 'aboutmePhoto' id='aboutmeFirstPhoto' src = 'https://placehold.co/400x275' alt='photoofPlace'/>
                <div className = 'aboutmeText' id = 'aboutmeFirstText'>
                    <h3 className ='aboutmeTextTitle'> Origins - Italy </h3>
                    <p  className ='aboutmeTextDescription'> I was born in India and subsequently moved to Italy at the age of 3. My family settled in a small town located 30 miles south of Garda's Lake in northern Italy. My passion for building and creating things led me to discover mechanical engineering as an ideal career path, one that not only allows me to pursue my interests but also enables me to make meaningful contributions to both the community and the environment. During my secondary education, I focused on mechatronics and mechanical engineering. Later on, I embarked on an exchange program in Ireland to acquire proficiency in English, a language I deemed essential for personal and professional growth. In 2019, I successfully completed my Diploma in mechatronics and mechanical engineering with an outstanding score of 89% before relocating to the UK in the same summer.</p>
                </div>
            </div>
            <div className = 'aboutmeParagraph' id='aboutmeSecondParagraph'>
                <div className = 'aboutmeText' id = 'aboutmeSecondText'>
                    <h3 className ='aboutmeTextTitle'> Engineering Degree - UK </h3>
                    <p  className ='aboutmeTextDescription'> Upon arriving in the UK, I enrolled in the Mechanical Engineering program at the University of Hertfordshire. However, after a year, I found the program lacked the level of challenge I sought. Consequently, I made the decision to transfer to the University of Southampton, where I pursued a degree in MEng Aerospace and Mechanical Engineering. Throughout my tenure at Southampton, I actively engaged in significant engineering projects, gaining valuable experiences, such as conducting a dissertation study on Doping Mos2 with Carbon atoms and exploring its applications in Space. Additionally, I participated in a summer internship at New Motion Lab as a Design Mechanical Engineer, and later secured a placement year at Cummins Inc. as a New Production Introduction Manufacturing Engineer.</p>
                </div>
                <img className = 'aboutmePhoto' id='aboutmeSecondPhoto' src = 'https://placehold.co/400x275' alt='photoofPlace'/>
            </div>
            <div className = 'aboutmeParagraph' id='aboutmeThirdParagraph' >
                <img className = 'aboutmePhoto' id='aboutmeThirdPhoto' src = 'https://placehold.co/400x275' alt='photoofPlace'/>
                <div className = 'aboutmeText' id = 'aboutmeThirdText'>
                    <h3 className ='aboutmeTextTitle'> Full Stack Developer </h3>
                    <p  className ='aboutmeTextDescription'> My journey has been intertwined with coding from an early stage, with a particular focus on utilizing Python and Matlab for various engineering projects, and C++ with Arduino for experimental endeavors. During my placement, I had the opportunity to delve deeper into the world of coding, prompting me to undertake a Front-End Bootcamp where I honed my skills and undertook projects involving APIs, Node.JS, and React. Now, equipped with these acquired skills, I am currently engaged in Full Stack Projects that seamlessly integrate my developer proficiency with my mechanical and aerospace engineering knowledge.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
