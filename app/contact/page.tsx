import React from "react";
import ContactHero from "../_components/ContactHero";
import ContactDetails from "../_components/ContactDetails";
import ContactForm from "../_components/ContactForm";

const ContactPa = () => {
  return (
    <section className="lg:max-w-8xl md:max-w-7xl md:container w-full mx-auto md:py-8 md:px-4 lg:px-6">
      <ContactHero />
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default ContactPa;
