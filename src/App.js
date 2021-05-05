import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {BlogTextPage} from './components/BlogTextPage/BlogTextPage';

function App() {
  return ( 
    <div className ="app">
        <Header/>
        <BlogTextPage/>
        <Footer/>
    </div>
  );
}

export default App;