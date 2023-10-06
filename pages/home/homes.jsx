import React from "react";
import Video from "../../components/video/Video";
import Home_Page_Navbar from "../../components/homepagenavbar/HomePageNavbar";
import Counter from "../../components/counter/Counter";
import Mix from "../../components/charts/genelchart";
import Charts from "../../components/charts/charts"
import Column  from "../../components/charts/column";

const Index = () => {
  return (
    <React.Fragment>
      <Video />
      <Home_Page_Navbar />
      <Counter/>
       <Column /> 
       <Charts/> 
      <Mix/>
      
    </React.Fragment>
  );
};

export default Index;
