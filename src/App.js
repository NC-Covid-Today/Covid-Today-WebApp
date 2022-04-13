import site_logo from './covidtoday_logo.jpg';

import React from 'react';
import Tableau from "tableau-react";

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

import {isMobile} from 'react-device-detect';
//import Page } from './TableauPage.js';

const MyComponent = () => {
  if(isMobile) {
      return (
          <div> This web-app does not work on mobile devices. Go to <a href="https://covid19.ncdhhs.gov/dashboard"> NC Covid Dashboard.</a> </div>
      )
  }
  
};
function App() {
   
  if (isMobile) return <div> Mobile is not supported. Try <a href="https://covid19.ncdhhs.gov/dashboard"> NC Covid Dashboard instead.</a></div> 

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
            
          <h2>
          <p> NC Covid Today is a student made React web-app for making the big data behind Covid-19 more understandable. <br />
           Local - Is home to North Carolina specific Covid-19 data.<br />
           World - Displays Covid-19 data for the all countries actively sharing their data.<br />
           News - Contains links and descriptions of websites where you can find more reliable information about Covid-19.<br />
           About - Contains future plans and more infromation about NC Covid Today.</p>
           </h2>
      

    </div>
  );
}

export default App;
