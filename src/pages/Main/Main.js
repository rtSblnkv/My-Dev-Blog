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

export const Main = () =>{
    return (
        <div className ="app-main">
            <div className="app-cards">  
                 <Card img={Android} title="Android" path="/"/>
                 <Card img={Flutter} title="Flutter" path="/"/>
                 <Card img={Python} title="Python" path="/"/>
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