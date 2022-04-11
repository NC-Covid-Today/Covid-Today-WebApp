import React from 'react';
import Tableau from "tableau-react";

const Index = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <div>
      <h1>
        ** INDEX **
      </h1>

      <h2>
        Why is this page not displaying??????????
      </h2>
      <Tableau
        url="https://public.tableau.com/views/NC_Map_animated/MapofNC?:language=en-US&:display_count=n&:origin=viz_share_link"
        options={options}
      />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/sam.prewitt/viz/NC_Map_animated/MapofNC">
            world viz
          </a>
        </p>
      
    </div>
  );
};
  
export default Index;