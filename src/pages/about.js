import React from "react";
import Tableau from "tableau-react";

const About = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };

  return (
    <div>
      <h1>
        World Covid Data
      </h1>
      <b> Todo: </b>
        <b>1. add a paragraph about the world data and what is to come in the future! Otherwise close to finished </b> 
        <b>2. Make sure the viz is centered. </b>

      <center>
        <Tableau
        url="https://public.tableau.com/views/WorldCovidMap/Dash?:language=en-US&:retry=yes&:display_count=n&:origin=viz_share_link"
        options={options}
      />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/WorldCovidMap/Dash">
            World visualization created by Sam Prewitt with public data from CDC.
          </a>
        </p>
        </center>
        

    </div>
  );
};
  
export default About;