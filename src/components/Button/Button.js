import React from 'react';
import './Button.css';

export const Button =({link,text}) =>{
    //const Style=styled.div
    //`color:{color.string =>color}`;
    return(
        <div className="Button">
            <a href = {link}>{text}</a>
        </div>
    );
}