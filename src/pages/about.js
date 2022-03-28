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
        **BETA** World 
      </h1>

      <Tableau
        url="https://public.tableau.com/views/COVIDimpactonTravel/AirPassengerGrowthHistory?:language=en-US&:retry=yes&:display_count=n&:origin=viz_share_link"
        options={options}
      />

        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/app/profile/yvan.fornes/viz/COVIDimpactonTravel/AirPassengerGrowthHistory">
            Covid-19 example viz
          </a>
        </p>

        

    </div>
  );
};
  
export default About;