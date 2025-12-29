import React from 'react';
import './style.css';

function WhosAbhi() {
    return(
        // Summary of who I am and what am I looking forward to
        <div id='profileSummary' className='montserratFont'>
            <h1 className='profileInformation title' id='profileSummaryTitle'> Who's Abhi?</h1>
            <p className='profileInformation' id='profileSummaryDescription'>
            
            Currently working as a Software Engineer II at Lloyds Banking Group within the Finance Platform working on the data necessary to make Securities. In the past I worked at Accenture on the Bank of England project focusing on tech such as Databricks, Azure and Python. Before starting my career in tech, I built an educational profile in Aerospace Engineering at the University of Southampton where I achieved my Master in 2024. 
            
            <br /><br />
            
            A bit more about me, I could talk about Personal Finance, Tech for days and I like to spend my free time between travelling, hiking and reading.
            
            <br /><br />            
            
            Fun fact about me, I speak 5 languages and I make a delicious Carbonara! 😋
            </p>
        </div>
    );
};

export default WhosAbhi;

