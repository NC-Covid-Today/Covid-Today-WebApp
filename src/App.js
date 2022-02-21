import logo from './logo.svg';
import site_logo from './covidtoday_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <title className="Site-header"> 
          <div class="aligned">
            <img src={site_logo} className="Site-logo" alt="covidtoday_logo" /> 
            <span>NC Covid Today</span>
          </div> 
      </title>      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        /*
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          */
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
