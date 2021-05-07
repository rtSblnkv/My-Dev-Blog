import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({img, title,path}) => {
    return(
        <div className="card-app">
             <Link to={path} className="card-link">
               <div className = "card-img">
                  <img src = {img}/>
               </div>
               <div className="card-txt">
                    {title} 
               </div>
               </Link>
        </div>
    );
}
