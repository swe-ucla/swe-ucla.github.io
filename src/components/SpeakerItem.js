import React from 'react'
import {Link } from 'react-router-dom'
import "./Speakers.css";

function SpeakerItem(props) {
    return (
        <li className='speaker_item'>
                <figure className='speaker__item__pic-wrap' data-category={props.label} >
                    <img 
                    src={props.src} 
                    alt={"Speaker"}
                    className='speaker__item__img' 
                    />
                </figure>
                <div className = "speaker__item__info" >
                <h5 className='speaker__item__text'>{props.text}</h5>   
                </div>
        </li>
       

    )
    
}

export default SpeakerItem;