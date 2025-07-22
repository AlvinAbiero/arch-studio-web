"use client";
import Image from "next/image";
import heritageImg from "@/public/about/desktop/image-heritage.jpg";
import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";
const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Heritage = () => {
  const { inViewRef, inView } = useIntersectionObserver();
  return (
    <motion.section
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative  lg:mt-72 my-24 lg:px-10 md:px-8 px-8 lg:max-w-6xl xl:max-w-8xl md:max-w-4xl"
    >
      <div className="w-30 h-[.8] bg-gray-400 mb-16 md:hidden"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-end items-end gap-16">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-6 xl:gap-5">
          <h2 className="text-6xl font-semibold leading-16 w-2/3 lg:w-full md:text-8xl md:leading-18 lg:text-[6rem] lg:leading-[5rem]">
            Our Heritage
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 font-medium">
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p className="text-xl sm:text-2xl text-gray-500 font-medium">
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p className="text-xl sm:text-2xl text-gray-500 font-medium">
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
        <div className="hidden lg:block">
          <Image src={heritageImg} alt="picture of a building" />
        </div>
      </div>
    </motion.section>
  );
};

export default Heritage;
