import site_logo from './covidtoday_logo.jpg';

import React from 'react';
import Tableau from "tableau-react";

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Local from './pages/local';
import About from './pages/about';
import Blogs from './pages/blogs';
import News from './pages/news';
import World from './pages/world';

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
          <Route exact path='/local' element={<Local />} />
          <Route path='/about' element={<About />} />
          <Route path='/world' element={<World />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </Router>         
        <p>
          TODO: <br></br>
            * testtesttest
        </p>
        <h1>Tableau Dashboard in React </h1>
        
        
    </div>
  );
}

export default App;
