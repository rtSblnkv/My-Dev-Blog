import React from 'react';
import '../Card-Blog/Card-blog.css';
import like from './images/like.png'
import mark from './images/mark.png'

export const Cardblog = ({content,author}) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="card-head">Управление памятью в JS</div>
                <div className="card-text ">Статья об управлении памятью и принципах работы сборщика мусора, а также о том, как избежать самых распространенных видов утечек памяти.</div>
                <div className="card-info"> 
                    <div className="card-icons">
                        <img src={mark} alt='mark'></img>
                        120
                        <img src={like} alt='like'></img>
                        123
                    </div>
                    <div className="card-author">Автор: Chupaha777</div>
                </div>
            </div>
        </div>
    );
}