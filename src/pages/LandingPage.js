import React from "react";
import HeroPage from "../components/HeroSection/HeroPage";
import InfoPage from "../components/InfoSection/InfoPage";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import ServicePage from "../components/Services/ServicePage";
const LandingPage = () => {
  return (
    <>
      <HeroPage />
      <InfoPage {...homeObjOne} />
      <InfoPage {...homeObjTwo} />
      <ServicePage />
      <InfoPage {...homeObjThree} />
    </>
  );
};

export default LandingPage;
