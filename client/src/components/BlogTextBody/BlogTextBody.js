import React from "react";
import "../BlogTextBody.css";

/**
 * Компонент основного текста блога
 *
 * @param {String} text - текст блога
 */
export const BlogTextBody = ({ text }) => {
    return ( 
        <div className = "blogTextBody">
            { text } 
        </div>
    );
}
