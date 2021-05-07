import React from 'react'
import {Card} from '../../components/Card/Card';
import './Main.css';

import Android from '../../images/Android.png'
import Flutter from '../../images/Flutter.png'
import Csharp from '../../images/Csharp.png'
import Python from '../../images/Python.png'
import Java from '../../images/Java.png'
import JS from '../../images/JS.png'
import Html from '../../images/Html.png'
import Sql from '../../images/SQl.png'
import Css from '../../images/Css.png'
import mdbImage from  '../../images/mdbImage.png'

const Intro = ({text,image}) => {
    return(
        <div className="main-intro">
            <div className="main-intro-img">
                <img src = {image}/>
            </div> 
            <div className = "main-intro-txt">
                {text}
            </div>
        </div>
    );
}

export const Main = () => {
    return( 
        <div className ="app-main">  
            <Intro text={Text} image={mdbImage} />        
            <div className="app-cards">  
                <Card img={Android} title="Android" path="/Android"/>
                <Card img={Flutter} title="Flutter" path="/Flutter"/>
                <Card img={Python} title="Python" path="/Python"/>
                <Card img={JS} title="JavaScript" path="/"/>
                <Card img={Html} title="HTML" path="/"/>
                <Card img={Css} title="CSS" path="/"/>
                <Card img={Java} title="Java" path="/"/>
                <Card img={Csharp} title="C#" path="/"/>
                <Card img={Sql} title="SQL" path="/"/>
            </div>               
        </div>
    )
}

/* TO DELETE */
var Text="Привет,читатель! Это блог про языки программирования "+
"и все,что с ними связано,выше ты можешь увидеть эмблемы"+
" языков программирования.Нажав,на нужную ты попадёшь на страничку с выбранной категорией!";
/* TO DELETE */