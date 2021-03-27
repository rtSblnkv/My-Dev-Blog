import React from "react";
import "./Card.css";

function importAll(r){
    return r.keys().map(r);
}

const images=importAll(require.context('./',false,/\.(png)$/));

export const Card = (props) => {
    return(
        <div className="card-app">
        </div>
    );
}