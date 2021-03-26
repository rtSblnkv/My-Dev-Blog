import React from 'react';
import {Button} from '../Button/Button';
import "./Footer.css";

export const Footer = () =>{
    return(
        <footer className=" app-footer">
            <p> Created by</p>
            <div className= "creators-lnk">
                <Button 
                link="https://vk.com/rt_sblnkv" 
                text="Артем Сабельников"
   
                />
                <Button 
                link="https://vk.com/aaaptyppp" 
                text="Артур Фаттахов"
      
                />
                <Button 
                link="https://vk.com/b4sk4kov" 
                text="Михаил Баскаков"
                color ="#C5FBA4"/>
            </div>
            <h4>2021</h4>
        </footer>

    );
}
