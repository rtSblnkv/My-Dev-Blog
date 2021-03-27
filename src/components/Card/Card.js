import React from 'react';
import './Card.css';

export const Card = ({img,title}) => {
    return(
        <div classname="card-app">
                 <a className="card-link" href={props.path}>
               <div className = "card-img">
                  <img src = {props.img}/>
               </div>
               <div className="card-txt">
                    {props.title} 
               </div>
            </a> 
        </div>

    );
}