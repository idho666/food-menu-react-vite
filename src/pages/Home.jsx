import React from "react";
import Hero from "../componen/Hero";
import Service from "../componen/Service";
import About from "../componen/AboutComponent";
import FoodMenu from "../componen/FoodMenu";
import Reservation from "../componen/Reservation";
import Team from "../componen/Team";
import Testimonial from "../componen/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <About />
      <FoodMenu />
      <Reservation />
      <Team />
      <Testimonial />
    </div>
  );
}

export default Home;
