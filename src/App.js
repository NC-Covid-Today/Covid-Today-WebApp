import site_logo from './covidtoday_logo.jpg';

import React from 'react';
import Tableau from "tableau-react";

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import World from './pages/world';
import Local from './pages/local';
import About from './pages/about';
import News from './pages/news';

import { isMobile } from 'react-device-detect';
//import Page } from './TableauPage.js';

const MyComponent = () => {
  if (isMobile) {
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
          <Route path='/world' element={<World />} />
          <Route path='/news' element={<News />} />
          <Route path='/local' element={<Local />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>


      <p class="app"> NC Covid Today is a student made React web-app for making the big data behind Covid-19 more understandable. <br />
        For more information on how Watauga is handling COVID-19 be sure to check out the monthly <a href="https://www.apphealthcare.com/wp-content/uploads/2022/04/COVID-19-Situation-Update-Watauga-County-4.1.2022.pdf" target="_blank">Watauga Situation Update</a> .
      </p>



    </div>
  );
}

export default App;
