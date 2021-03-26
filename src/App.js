import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Cardblog} from './components/Card-Blog/Card_blog'



function App() {
  return ( 
    <div className ="app">
        <Header/>
        <Cardblog/>
        <Cardblog/>
        <Cardblog/>
        <Footer/>
    </div>
  );
}

export default App;
