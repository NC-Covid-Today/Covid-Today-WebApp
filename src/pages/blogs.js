import React from 'react';
import Tableau from "tableau-react";
const Blogs = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true,
    width: 1050,
    height: 950
  };
  return (
    <div>

      <h1>
        Local Covid-19
      </h1>

      <p>
        North Carolina Covid-19 infections are going down! Mask mandates are ending and the world is starting to go back to “normal”.
        By clicking on the play button you can see NCs infection rates for the past 180 days.
        Dark blue represents low numbers while dark red means there are lots of cases (107,105 at the peak).
        Hovering over a county will display its specific cases if reported.
      </p>

      <p>
        This data comes from the NC Covid Dashboard and shows that while cases were high in January they have gotten significantly lowers since.
      </p>

      <p>
        The severity bar is another indicator of how well the state is doing. Overall cases are below XXX so we see a Green bar symbolizing that the state is doing well compared to the past 180 days.
      </p>

      <center>
        <Tableau
          url="https://public.tableau.com/views/NC_Map_animated/MapofNC?:language=en-US&:display_count=n&:origin=viz_share_link"
          options={options}
        />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/NC_Map_animated/MapofNC">
            NC viz
          </a>
          &nbsp;created by Sam Prewitt with data from NC Covid Dashboard.
        </p>
        ___________________________________________________________________________________
      </center>

    </div>


  );
};

export default Blogs;