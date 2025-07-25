"use client";

import Image from "next/image";
import imageHeroDesktop from "@/public/contact/desktop/image-hero.jpg";
import imageHeroTablet from "@/public/contact/tablet/image-hero.jpg";
import imageHeroMobile from "@/public/contact/mobile/image-hero.jpg";
import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const ContactHero = () => {
  const { inViewRef, inView } = useIntersectionObserver();
  return (
    <motion.section
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="lg:mb-56 md:mb-46 lg:mt-8 relative xl:max-w-8xl lg:max-w-7xl"
    >
      <h1 className="md:absolute top-0 xl:-top-20 lg:-top-4 xl:right-8 lg:right-56 md:right-36 md:top-18 hidden md:block  text-gray-200 xl:text-[19rem] lg:text-[14rem] md:text-[12rem] text-[9rem] font-bold z-40">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-end relative">
        <div className="relative">
          <Image
            src={imageHeroDesktop}
            alt="person typing on a laptop keyboard"
            className="xl:w-full h-[90vh] lg:w-[85%] lg:relative lg:-right-30 xl:right-0   hidden lg:block"
          />
          <Image
            src={imageHeroTablet}
            alt="person typing on a laptop keyboard"
            className="h-[90vh] w-[96%] relative -right-30   hidden md:block lg:hidden"
          />
          <Image
            src={imageHeroMobile}
            alt="person typing on a laptop keyboard"
            className="w-full h-full  block md:hidden"
          />
        </div>
        <div className="p-8 my-8 md:my-0 lg:py-16 xl:px-36 lg:px-24 bg-white relative xl:-left-56 xl:top-36  xl:h-[90vh] lg:-left-32 lg:top-24 lg:h-[80vh] flex md:items-center items-start justify-center  flex-col xl:w-3xl lg:w-2xl md:-left-64 md:w-2xl md:h-[80vh] md:top-36">
          <h2 className="text-6xl font-semibold leading-[3.5rem] w-2/3 lg:w-full md:text-7xl md:leading-[4rem] md:w-full md:text-center lg:text-7xl lg:leading-[4rem] mb-4 md:mb-8">
            Tell us about your project
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 font-medium md:text-center">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactHero;
