import React from "react";
import Tableau from "tableau-react";

const World = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };

  return (
    <div>
      <h1>
        **NOT USED** World 
      </h1>

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

        

    </div>
  );
};
  
export default World;