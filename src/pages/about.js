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
      <b>
        “After the short, sharp shock of Omicron, the pandemic phase of COVID-19 looks to be ending for most locations, unless a significant and severe new variant emerges.
        This update discusses what we’ve learned from Omicron, the prospects for the rest of 2022, and presents three potential criteria for defining COVID-19 as endemic.”
        - McKinsey & Company
      </b>
      <br></br>
      <br>
        The Tableau visualization below lets you compare different countries at this stage of the pandemic.
      </br>
      <br>
        Click and drag to select. Then average cases per million, people fully vaccinated, positive rate, and total deaths are displayed for each country.
      </br>

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