import React from 'react';
//the about page
const About = () => {
  return (
    <div>
      <h1 class="about">What is NC Covid Today?</h1>
      <p class="about">Covid Today is a web-app created by Sam Prewitt and Chase Allison for our CS-4800 capstone project at
        Appalachian State University. Our goal is to help share information about the Covid-19 pandemic in an
        easy to understand way. The state of North Carolina has a <a href="https://covid19.ncdhhs.gov/dashboard" target="_blank"> Covid Dashboard</a>,
        however this site presents too much data and can be overwhelming.
      </p>

      <br>
      </br>

      <h2 class="about">Why use our site?</h2>

      <ul class="about">
        <li>Get local information fast</li>
        <li>Stay up to date on cases around the world</li>
        <li>View the latest Watagua COVID-19 Situation Update</li>
        <li>Relevant COVID-19 news from around the world</li>
      </ul>


      <p class="about">
        Feel free to visit the <a href="https://covid19.ncdhhs.gov/dashboard" target="_blank"> NC Covid Dashboard</a> as well!
        <br></br>
        For contributions submit PRs here: <a href="https://github.com/NC-Covid-Today/Covid-Today-WebApp/pulls" target="_blank"> https://github.com/NC-Covid-Today/Covid-Today-WebApp/pulls</a>
      </p>
      ___________________________________________________________________________________
    </div>
  );
};

export default About;