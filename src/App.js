import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Cardblog} from './components/Card-Blog/Card_blog'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {
  return ( 
    <Router>
    <div className ="app">
        <Header/>
          <Route path="/Card-Blog" component={Cardblog} />
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
