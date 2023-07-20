import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import Classes from "../Classes/Classes";
import Video from "../VideoSection/Video";

const Home = () => {
  useEffect(() => {
    document.title = "CricDemy | Home";
  }, []);
  return (
    <div>
      <Banner />
      <Instructors />
      <Classes />
      <Video />
    </div>
  );
};

export default Home;
