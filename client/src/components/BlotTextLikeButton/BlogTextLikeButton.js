import React from 'react';
import './BlogTextLikeButton.css'
import likedIcon from './images/liked.png'
import unlikedIcon from './images/unliked.png'

export const BlogTextLikeButton = ({liked}) => {
    return(
            <div className = "icon">
                <img src={liked ? likedIcon : unlikedIcon} alt='like' ></img>
            </div>
    );
}