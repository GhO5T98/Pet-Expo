import React from "react";
import Hero from "./HeroSection/Hero";
import PetList from "./PetListSection/PetList";
import AnimatedSection from "./FramerAnimate";
import Sponsor from "./SponsorSection/Sponsor";
import AboutUs from "./AboutUsSection/AboutUs";
import Contact from "./ContactSection/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <PetList />
      </AnimatedSection>
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection>
        <Sponsor />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
};

export default Home;
