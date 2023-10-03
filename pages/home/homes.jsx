import React from "react";
import Video from "../../components/video/Video";
import Home_Page_Navbar from "../../components/homepagenavbar/HomePageNavbar";
import Counter from "../../components/counter/Counter";

const Index = () => {
  return (
    <React.Fragment>
      <Video />
      <Home_Page_Navbar />
      <Counter/>
    </React.Fragment>
  );
};

export default Index;
