import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Main} from './pages/Main/Main';



function App() {
  return ( 
    <div className ="app">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
