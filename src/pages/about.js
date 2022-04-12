import React from "react";
import Tableau from "tableau-react";



const About = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true,
    width: 1000,
    height: 950
  };

  return (
    <div>

      <h2>
        World Covid-19
      </h2>
      <p>
        “After the short, sharp shock of Omicron, the pandemic phase of COVID-19 looks to be ending for most locations, unless a significant and severe new variant emerges. This update discusses what we’ve learned from Omicron, the prospects for the rest of 2022, and presents three potential criteria for defining COVID-19 as endemic.”
      </p>
      - McKinsey & Company
      <br />
      <p>The Tableau visualization below lets you compare different countries at this stage of the pandemic.
        Click and drag to select. Then average cases per million, people fully vaccinated, positive rate, and total deaths are displayed for each country.
      </p>

      <center>
        <Tableau
          url="https://public.tableau.com/views/WorldCovidMap/Dash?:language=en-US&:display_count=n&:origin=viz_share_link"
          options={options}
        />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/WorldCovidMap/Dash">
            World Covid-19 viz
          </a>
          created by Sam Prewitt with public CDC data.
        </p>
        ___________________________________________________________________________________
      </center>


    </div>
  );
};

export default About;