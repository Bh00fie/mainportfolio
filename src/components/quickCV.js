import React from "react";
import "./quickCV.css"

function fixedCV() {
    return (
        <div className='myCV fixedCVButton'>
            <a href="./abhinandanthour.pdf" download="abhinandanthourCV.pdf">
                <button  id='cvButton'>CV</button>
            </a>
        </div>  
    );
}

export default fixedCV;