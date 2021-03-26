import React, { Component } from 'react'
import "./BlogTextHeader.css";

/**
 * Компонент заголовка блога
 *
 * @param {String} text - заголовок
 */
export const BlogTextHeaderComponent = ({text}) => {
    return(
        <div className="blogTextHeader">
            {text}
        </div>
    );
}