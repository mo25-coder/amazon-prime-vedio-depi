import React from "react";
import Carousel from "../../components/CarouselHome/Carousel";
// import { useState } from 'react'
import "../../assets/css/Homepage/Homepage.css";
import HomeCategories from "../../components/Categories/HomeCategories";

function Homepage() {
  // return <HomeCategories />;
  return (
    <div>
      <Carousel />
      <HomeCategories />
      {/* Other content */}
    </div>
  );
}

export default Homepage;
