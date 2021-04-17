import React from "react";
import DonateSection from "./DonateSection";
import HeroContainer from "./HeroContainer";
import NavBar from "../common/NavBar";
import NewAnimalsSection from "./NewAnimalsSection";
import NewsSection from "./NewsSection";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroContainer />
      <NewAnimalsSection />
      <DonateSection />
      <NewsSection />
      <Footer />
    </>
  );
};

export default HomePage;
