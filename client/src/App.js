import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';

import {Main} from './pages/Main/Main'
import BlogItemsPage from './pages/BlogItemsPage/BlogItemsPage'
import BlogTextPage from './pages/BlogTextPage/BlogTextPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return ( 
    <Router>
    <div className ="app">
        <Header/>
          <Route path="/" component={Main} exact/>
          <Route path="/:section" render ={({match})=>{
            return <BlogItemsPage Section ={match.params.section} />
          }}
          exact/>
          <Route path="/:section/:id" render ={({match})=>{
            return <BlogTextPage Id={match.params.id}/>
          }}
          exact/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;