import React from 'react';
import SpeakerItem from "./SpeakerItem";
import "./Speakers.css";
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


function Speakers() {
    console.log("hi")
    return (
        <div className = "speakers2">
            <div className="graphic1">
            </div>
            <div className="graphic2">
            </div>
            <div className='infoheader'>
            <h1>Engineering for Good<br></br>Research Symposium</h1>
                <h2>Overview</h2>
                <p className='info1'>Info</p>
                <a href="https://google.com/">
                    <Button className = 'regbutton' variant="contained" size='large' >
                        Registration Link! 
                    </Button>
                </a>
            </div>
        <h3>Meet the Speakers</h3>
        <div className='figure1'> 
            <div className = 'circle_border'>
            <img 
            src='images/blank-profile.webp'
            alt="Speaker 1"
            />
            </div>
            {/* <img src="images/blank-profile.webp" alt="speaker 1" height="200" width="200" /> */}
            <p className='info'>Some layout models such as table and ruby have a complex internal structure, 
                with several different roles that their children and descendants can fill. 
                This section defines those "internal" display values, which only have meaning 
                within that particular layout mode.</p>
                </div>
        <div className='figure2'> 
            <div className = 'circle_border'>
            <img 
            src='images/blank-profile.webp'
            alt="Speaker 2"
            />
            </div>
            {/* <img src="images/blank-profile.webp" alt="speaker 2" height="200" width="200" /> */}
            <p className='info'>Some layout models such as table and ruby have a complex internal structure, 
                with several different roles that their children and descendants can fill. 
                This section defines those "internal" display values, which only have meaning 
                within that particular layout mode.</p>
                </div>
        <div className='figure3'> 
            <div className = 'circle_border'>
            <img
            src='images/blank-profile.webp'
            alt="Speaker 3"
            />
            </div>
            {/* <img src="images/blank-profile.webp" alt="speaker 3" height="200" width="200" /> */}
            <p className='info'>Some layout models such as table and ruby have a complex internal structure, 
                with several different roles that their children and descendants can fill. 
                This section defines those "internal" display values, which only have meaning
                 within that particular layout mode.</p>
        </div>
      </div>
        // <div className = "speakers">
        //     <h1> Speakers: </h1>   
        //     <div className="speaker__container">
        //         <div className="speaker__wrapper">
        //             <ul className="speaker__items">
        //                 <SpeakerItem
        //                 src = 'images/blank-profile.webp'
        //                 text = "Speaker 1 info"
        //                 label = "Speaker Name"
        //                 />
        //                  <SpeakerItem
        //                 src = 'images/blank-profile.webp'
        //                 text = "Speaker 2 info"
        //                 label = "Speaker Name"
        //                 />
        //                  <SpeakerItem
        //                 src = 'images/blank-profile.webp'
        //                 text = "Speaker 3 info"
        //                 label = "Speaker Name"
        //                 />
                        
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
    
}

export default Speakers;