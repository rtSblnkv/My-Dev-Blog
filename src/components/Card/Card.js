import React from 'react';
import './Card.css';

function importAll(r){
    return r.keys().map(r);
}

const images=importAll(require.context('./',false,/\.(png)$/));

export const Card = (props) => {
    return(
        <div className="card-app">
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