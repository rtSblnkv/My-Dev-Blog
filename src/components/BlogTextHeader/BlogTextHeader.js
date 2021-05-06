import React, { Component } from 'react'
import "./BlogTextHeader.css";

/**
 * Компонент заголовка блога
 *
 * @param {String} text - заголовок
 */
export const BlogTextHeader = ({text}) => {
    return(
        <div className="blogTextHeader">
            {text}
        </div>
    );
}