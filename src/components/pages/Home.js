import React from 'react';

function Home() {
    return (
        <div id='homePage'>
            <div id='profileSection'>
                <img className="profileCard" id='photoProfile' src='https://placehold.co/400' alt='photoProfile'/>    
                <div className='profileCard' id='profileDescription'>
                    <h3 id='nameProfile'> Abhinandan Thour </h3>
                    <p id='jobProfile'> Front-End Developer</p>
                    <div id='socialProfile'>
                        <a id='GitHub' className='socialLink' href='https://github.com/Bh00fie' target='_blank' >GitHub</a>
                        <a id="LinkedIn" className='socialLink' href='https://www.linkedin.com/in/abhinandanthour' target='_blank'>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;