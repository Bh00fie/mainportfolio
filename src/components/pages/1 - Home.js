import React from 'react';
import './style.css';
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
                        <h4 id='jobProfile'> Full Stack Developer</h4>
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
        </div>
    );
}

export default Home;