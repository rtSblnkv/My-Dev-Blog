import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';

import {Main} from './pages/Main/Main'
import {BlogItemsPage} from './pages/BlogItemsPage/BlogItemsPage'
import {Cardblog} from './components/Card-Blog/Card_blog'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return ( 
    <Router>
    <div className ="app">
        <Header/>
          <Route path="/" component={Main} exact/>
          <Route path="/JavaScript" component={BlogItemsPage}/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;