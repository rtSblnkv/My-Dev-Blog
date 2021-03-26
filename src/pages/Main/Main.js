import React,{Fragment} from 'react'
import {Card} from '../../components/Card/Card';
import './Main.css';

export const Main = () =>{
    return (
        <div className ="app-main">
            <div className="app-cards">  
                 <Card img="" title="Android" path="/"/>
                 <Card img="" title="Flutter" path="/"/>
                 <Card img="" title="Python" path="/"/>
                 <Card img="" title="JavaScript" path="/"/>
                 <Card img="" title="HTML" path="/"/>
                 <Card img="" title="CSS" path="/"/>
            </div>
        </div>
    )
}