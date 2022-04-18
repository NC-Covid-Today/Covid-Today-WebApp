import React from "react";
import Tableau from "tableau-react";

const World = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true,
    width: 1050,
    height: 850
  };

  return (
    <div>

      <h1>
        World Covid-19
      </h1>

      <h3>
        April 2022
      </h3>

      <p class="world">
        “After the short, sharp shock of Omicron, the pandemic phase of COVID-19 looks to be ending for most locations, unless a significant and severe new variant emerges. ”
      </p>
      - McKinsey & Company, a healthcare consulting company.
      <br />



      <center>
        <Tableau
          url="https://public.tableau.com/views/WorldCovidMap_Upd4_16/Dash2?:language=en-US&:display_count=n&:origin=viz_share_link"
          options={options}
        />
        <p class="world">The Tableau visualization above lets you compare different countries at this stage of the pandemic.
          Click and drag to select.
        </p>
        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/WorldCovidMap_Upd4_16/Dash2#2">
            World Covid-19 visualization
          </a>
          &nbsp;created with public CDC data.
        </p>
        
      
        <br>
        </br>
        
        <Tableau
          url="https://public.tableau.com/views/CovidDeathsbyCountry/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
          options={options}
        />
      
      <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/CovidDeathsbyCountry/Dashboard1#3">
            Death's per country to Covid-19 visualization
          </a>
          &nbsp;created with public CDC data.
        </p>
      
      
      
        ___________________________________________________________________________________
      
      
      
      </center>



    </div>
  );
};

export default World;