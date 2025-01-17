import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Service from "./component/Service";
import Project from "./component/Project";
import Testimonial from "./component/Testimonial";
import Portfolio from "./component/Portfolio";
import Update from "./component/Update";
import ScrollToTopButton from "./component/scroll";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Service />
        <Project />
        <Testimonial />
        <Portfolio />
        <Update />
      </div>
      <ButtonGradient />
      <ScrollToTopButton />
    </>
  );
}

export default App;