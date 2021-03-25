import React from 'react';
import './Button.css';

export const Button =({link,text,color}) =>{
    return(
        <div className="Button" background-color = {color}>
            <a href = {link}>{text}</a>
        </div>
    );
}