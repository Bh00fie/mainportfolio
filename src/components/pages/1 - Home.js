import React from 'react';
import './style.css';
// import icon from '../Images/icon.png'
import icon from '../Images/Professional_Headshot.png'
import CV from '../documents/Abhinandanthour.pdf'

function Home() {
    return (

        <div id='homePage'>
            {/* Profile Section to present myself quickly with the essential information about me */}
            <div id='profileSection'>
                <img className="profileCard" id='photoProfile' src={icon} alt='photoProfile'/>    
                <div id='informationCard'>
                    {/* Card to get a quick introduction about me */}
                    <div className='profileCard montserratFont' id='profileDescription'>
                        <h3 id='nameProfile'> Abhinandan Thour </h3>
                        <h4 id='jobProfile'> Software Engineer</h4>
                        {/* Social Media links */}
                        <div id='socialProfile'> 
                            <a id='GitHub' className='socialLink' href='https://github.com/Bh00fie' target='_blank' rel="noreferrer" >GitHub</a>
                            <a id="LinkedIn" className='socialLink' href='https://www.linkedin.com/in/abhinandanthour' target='_blank' rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                    {/* Section to add button where the user can download my latest CV */}
                    <div className='myCV'>
                        <a href={CV} download="abhinandanthourCV.pdf">
                            <button id='cvButton'>CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;