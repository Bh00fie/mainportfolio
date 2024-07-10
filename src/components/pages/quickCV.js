import React from "react";
import './style.css';
import CV from '../documents/Abhinandanthour.pdf'

function fixedCV() {
    return (
        <div className='myCV fixedCVButton'>
            <a href={CV} download="abhinandanthourCV.pdf">
                <button  id='cvButton'>CV</button>
            </a>
        </div>  
    );
}

export default fixedCV;