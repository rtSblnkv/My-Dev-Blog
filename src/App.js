import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
<<<<<<< HEAD

||||||| 836a6dc




=======
import {Main} from './pages/Main/Main'
import {Cardblog} from './components/Card-Blog/Card_blog'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



>>>>>>> 59f5c795b2dd351f6f362bbf556b4db94881aedc
function App() {
  return ( 
    <Router>
    <div className ="app">
        <Header/>
          <Route path="/" component={Main}/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;