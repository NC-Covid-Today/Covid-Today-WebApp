import site_logo from './covidtoday_logo.jpg';

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
        <p>
          TODO: <br></br>
            * Embed Tableau Viz
        </p>

        
    </div>
  );
}

export default App;
