import React from 'react';
import Tableau from "tableau-react";
const Blogs = () => {
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

      <p>
        North Carolina Covid-19 infections are going down! Mask mandates are ending and the world is starting to go back to “normal”.
        By clicking on the play button on the <em>Covid-19 Over the Past 180 days viz</em> you can see NCs infection rates for the past 180 days.
        Dark blue represents a low infection rate per county while dark red means there are lots of cases (107,105 at the peak).
        Hovering over a county will display its specific cases (if reported).
      </p>

      <p>
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
            North Carolina visualization
          </a>
          &nbsp;created by Sam Prewitt with data from NC Covid Dashboard.
        </p>
        ___________________________________________________________________________________
      </center>

      <p>
        The severity bar is another indicator of how well the state is doing. Overall cases are below XXX so we see a Green bar symbolizing that the state is doing well compared to the past 180 days.
      </p>

      TODO: GREEN D3 bar


      <center>
        ___________________________________________________________________________________
        TODO: paragraph about use & get the viz formatted!
      </center>

      <center>
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
        ___________________________________________________________________________________
      </center>


      
      TODO: Chase's Tableau Viz

    </div>


  );
};

export default Blogs;