import React from 'react';
import {SearchBarComponent} from '../SearchBar/SearchBar';
import {Button} from '../Button/Button';
import "./Header.css"

export const Header = () =>{
    return(
        <header className="app-header">
        <div className="title"> 
           <h1>MY DEV BLOG</h1>
        </div>
        <SearchBarComponent/>
        <Button link="/" text="Регистрация"color ="#CCAAFB"/>
        <Button link="/" text="Войти"color ="#BFEFFA"/>  
        </header>
    );
}