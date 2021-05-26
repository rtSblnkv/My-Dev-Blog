import React from 'react';
import '../Card-Blog-Title/Card-Blog-Title.css';

export const CardBlogTitle = ({section,text,img}) => {
    return(
        <div className="blog-title">
            <div className="blog-context">
                <div className="blog-section">
                    {section}
                </div>
                <div className="blog-text">
                    {text}
                </div>
            </div>
            <div className = "blog-image">
                  <img src = {img}/>
               </div>
 
            
        </div>
    );
}