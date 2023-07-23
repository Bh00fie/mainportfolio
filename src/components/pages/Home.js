import React from 'react';
import './Home.css' 
import icon from '../Images/icon.png'
import CV from '../documents/Abhinandanthour.pdf'

function Home() {
    return (
        <div id='homePage'>
            <div id='profileSection'>
                <img className="profileCard" id='photoProfile' src={icon} alt='photoProfile'/>    
                <div id='informationCard'>
                    <div className='profileCard montserratFont' id='profileDescription'>
                        <h3 id='nameProfile'> Abhinandan Thour </h3>
                        <h4 id='jobProfile'> Front-End Developer</h4>
                        <div id='socialProfile'> 
                            <a id='GitHub' className='socialLink' href='https://github.com/Bh00fie' target='_blank' rel="noreferrer" >GitHub</a>
                            <a id="LinkedIn" className='socialLink' href='https://www.linkedin.com/in/abhinandanthour' target='_blank' rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                    <div className='myCV'>
                        <a href={CV} download="abhinandanthourCV.pdf">
                            <button id='cvButton'>CV</button>
                        </a>
                    </div>
                </div>

            </div>
            <div id='profileSummary' className='montserratFont'>
                <h1 className='profileInformation title' id='profileSummaryTitle'> Who's Abhi?</h1>
                <p className='profileInformation' id='profileSummaryDescription'>I'm an Aerospace and Mechanical Engineering student at the University of Southampton. With a background in Italy, Ireland, and the UK, I bring a diverse perspective. My passion for technology and improving lives led me to pursue Mechanical Engineering, but I've realized the increasing influence of software and now seek to transition into this field. Explore my portfolio to learn more about my academic achievements and projects as I embark on this exciting journey into software.</p>
            </div>
        </div>
    );
}

export default Home;