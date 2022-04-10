import React from 'react';
import Tableau from "tableau-react";

const Local = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <div>
      <h1>
        ** INDEX **
      </h1>

      <Tableau
        url="https://public.tableau.com/shared/DMN7Z9JQ6?:display_count=n&:origin=viz_share_link"
        options={options}
      />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/WorldCovidMap/Dash">
            world viz
          </a>
        </p>
      
    </div>
  );
};
  
export default Local;