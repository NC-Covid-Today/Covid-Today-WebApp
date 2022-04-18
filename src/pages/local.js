import React from 'react';
import Tableau from "tableau-react";
const Local = () => {
  const options = {
    hideTabs: false,
    hideToolbar: false,
    width: 1050,
    height: 650
  };
  const options2 = {
    hideTabs: false,
    hideToolbar: false,
    width: 1050,
    height: 850
  };
  return (
    <div>

      <h1>
        Local Covid-19
      </h1>
      <h3>
        April 2022
      </h3>

      <p class="local">
        North Carolina Covid-19 infections are going down! Mask mandates are ending and the world is starting to go back to “normal”.
        By clicking on the play button on the <em>Covid-19 Over the Past 180 days viz</em> you can see NC's infection rate for the past 180 days.
        Dark blue represents a low infection rate per county while dark red means there are lots of cases (107,105 at the peak).
        Hovering over a county will display its specific cases (if reported).
      </p>

      <p class="local">
        This data comes from the NC Covid Dashboard and shows that while cases were high in January they have gotten significantly lower since.
      </p>

      <center>
        <Tableau
          url="https://public.tableau.com/views/NC_Map_animated/MapofNC?:language=en-US&:display_count=n&:origin=viz_share_link"
          options={options}
        />
        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/NC_Map_animated/MapofNC">
            Past 180 days visualization
          </a>
          &nbsp;created with data from the NC Covid Dashboard.
        </p>

        <p>         
        </p>

        <Tableau
          url="https://public.tableau.com/views/Book1_16502407046280/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
          options={options2}
        />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/NC_Map_animated/MapofNC">
            North Carolina Infections visualization
          </a>
          &nbsp;created with data from the NC Covid Dashboard.
        </p>

        <p class="local"> 
        </p>
        ___________________________________________________________________________________
      </center>

      <p class="local">
        Lots of people are getting vaccinated! Over 15 million doses have been administered in North Carolina. Below are pie and bar charts displaying the doses per manufacturer and number administered per age group.
        By hovering over a section of the visualization, you can see more data. 
      </p>

      <p class="local">
        "You have a spot, take you shot!"
        </p>

      <p class="local">
        - <a href="https://covid19.ncdhhs.gov/vaccines?utm_source=(direct)&utm_medium=(none)&utm_campaign=myspot.nc.gov"> MySpot.nc.gov</a>
      </p>

      <center>
       ___________________________________________________________________________________
      
        <Tableau
          url="https://public.tableau.com/views/VaxPieChartV2_1_0/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
          options={options2}
        />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/VaxPieChartV2_1_0/Dashboard1?publish=yes">
            Vaccination visualization
          </a>
          &nbsp;created by Sam Prewitt with public CDC data.
        </p>

        <p class="local"> 
        </p>
        ___________________________________________________________________________________
      </center>



      TODO: Chase's Tableau Viz
      
      <center>
      ___________________________________________________________________________________
      </center>
    </div>


  );
};

export default Local;