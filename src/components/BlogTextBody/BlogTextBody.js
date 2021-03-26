import React from 'react'
import './BlogTextBody.css';

/**
 * Компонент основного текста блога
 * 
 * @param {String} text - текст блога
 */
export const BlogTextBodyComponent = ({ text }) => {
    return ( <
        div className = "blogTextBody" > { text } <
        /div>
    );
}