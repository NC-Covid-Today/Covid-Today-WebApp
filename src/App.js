import site_logo from './covidtoday_logo.jpg';

import React from 'react';
//import Tableau from "tableau-react";

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/index';
import SignUp from './pages/signup';
import Contact from './pages/contact';

//import Page } from './TableauPage.js';

function App() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <div className="App">
      <title className="Site-header"> 
          
            <img src={site_logo} className="Site-logo" alt="covidtoday_logo" /> 
            
            <span>NC Covid Today</span>
           
      </title> 
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>         
            
      <center>
          ___
          <p>
        NC Covid Today is a student made React web-app for making the big data behind Covid-19 more understandable. 
        Local - Is home to North Carolina specific Covid-19 data.
        World - Displays Covid-19 data for the all countries actively sharing their data.
        News - Contains links and descriptions of websites where you can find more reliable information about Covid-19.
        About - Contains future plans and more infromation about NC Covid Today. 
          </p>
        </center>
        
    </div>
  );
}

export default App;
