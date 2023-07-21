import React from 'react';
import './Home.css' 

function Home() {
    return (
        <div id='homePage'>
            <div id='profileSection'>
                <img className="profileCard" id='photoProfile' src='https://placehold.co/400' alt='photoProfile'/>    
                <div>
                    <div className='profileCard' id='profileDescription'>
                        <h3 id='nameProfile'> Abhinandan Thour </h3>
                        <h4 id='jobProfile'> Front-End Developer</h4>
                        <div id='socialProfile'>
                            <a id='GitHub' className='socialLink' href='https://github.com/Bh00fie' target='_blank' >GitHub</a>
                            <a id="LinkedIn" className='socialLink' href='https://www.linkedin.com/in/abhinandanthour' target='_blank'>LinkedIn</a>
                        </div>
                    </div>
                    <div className='myCV'>
                        <a href="./abhinandanthour.pdf" download="abhinandanthourCV.pdf">
                            <button id='cvButton'>CV</button>
                        </a>
                    </div>
                </div>

            </div>
            <div id='profileSummary'>
                <h1 className='profileInformation' id='profileSummaryTitle'> Who's Abhi?</h1>
                <p className='profileInformation' id='profileSummaryDescription'>I'm an Aerospace and Mechanical Engineering student at the University of Southampton. With a background in Italy, Ireland, and the UK, I bring a diverse perspective. My passion for technology and improving lives led me to pursue Mechanical Engineering, but I've realized the increasing influence of software and now seek to transition into this field. Explore my portfolio to learn more about my academic achievements and projects as I embark on this exciting journey into software.</p>
            </div>
        </div>
    );
}

export default Home;