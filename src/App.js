import logo from './logo.svg';
import site_logo from './covidtoday_logo.jpg';
//import './App.css';

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
  return (
    /*
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
    );*/
    <div className="App">
      <title className="Site-header"> 
          <div class="aligned">
            <img src={site_logo} className="Site-logo" alt="covidtoday_logo" /> 
            <span>NC Covid Today</span>
          </div> 
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
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Covid Today is a web-app for distributing Covid19 information via data visualizations and news articles.  There will be visualizations on NC specific data, such as infection rate. Pages populated with relevant news articles and a viz for world data will also be included to share a "bigger picture" of the pandemic. 
        
          TODO: 
            * Add multiple pages
            * Embed Tableau Viz
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
