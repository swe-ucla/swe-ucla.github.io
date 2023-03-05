import React from 'react';
import SpeakerItem from "./SpeakerItem";
import "./Speakers.css";

function Speakers() {
    console.log("hi")
    return (
        
        <div className = "speakers">
            <h1> Speakers: </h1>   
            <div className="speaker__container">
                <div className="speaker__wrapper">
                    <ul className="speaker__items">
                        <SpeakerItem
                        src = 'images/blank-profile.webp'
                        text = "Speaker 1 info"
                        label = "Speaker Name"
                        />
                         <SpeakerItem
                        src = 'images/blank-profile.webp'
                        text = "Speaker 2 info"
                        label = "Speaker Name"
                        />
                         <SpeakerItem
                        src = 'images/blank-profile.webp'
                        text = "Speaker 3 info"
                        label = "Speaker Name"
                        />
                        
                    </ul>
                </div>
            </div>
        </div>

    )
    
}

export default Speakers;