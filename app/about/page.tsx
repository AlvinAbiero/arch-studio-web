import React from "react";
import AboutHero from "../_components/AboutHero";
import Heritage from "../_components/Heritage";
import Leader from "../_components/Leader";

const AboutPage = () => {
  return (
    <section className="lg:max-w-8xl md:max-w-7xl md:container w-full mx-auto md:py-8 md:px-4 lg:px-6">
      <AboutHero />
      <Heritage />
      <Leader />
    </section>
  );
};

export default AboutPage;
