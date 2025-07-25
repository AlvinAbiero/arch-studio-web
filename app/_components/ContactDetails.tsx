"use client";
import Image from "next/image";
import imageMapDesktop from "@/public/contact/desktop/image-map.png";
import imageMapTablet from "@/public/contact/tablet/image-map.png";
import imageMapMobile from "@/public/contact/mobile/image-map.png";
import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const ContactDetails = () => {
  const { inViewRef, inView } = useIntersectionObserver();

  return (
    <motion.section
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="lg:mb-56 md:mb-46 lg:mt-8 relative xl:max-w-8xl lg:max-w-7xl lg:mb-4 mb-24 mt-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16 md:my-24 px-8 gap-8 md:gap-16 lg:gap-24 xl:gap-32">
        <h2 className="text-6xl font-semibold leading-[3.5rem] w-2/3 lg:w-full md:text-7xl md:leading-[4rem] md:w-full md:text-center lg:text-7xl lg:leading-[4rem] mb-4 md:mb-8">
          Contact Details
        </h2>

        <div className="flex flex-col gap-6 my-4">
          <h3 className="text-gray-500 font-semibold text-xl md:text-2xl">
            Main Office
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Mail: archone@mail.com
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Address: 1892 Chenoweth Drive TN
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Phone: 123-456-3451
          </p>
        </div>
        <div className="flex flex-col gap-6 my-4">
          <h3 className="text-gray-500 font-semibold text-xl md:text-2xl">
            Office II
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Mail: archtwo@mail.com
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Address: 3399 Wines Lane TX
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Phone: 832-123-4321
          </p>
        </div>
      </div>
      <div className="">
        <Image
          src={imageMapDesktop}
          alt="person typing on a laptop keyboard"
          className="hidden lg:block"
        />
        <Image
          src={imageMapTablet}
          alt="person typing on a laptop keyboard"
          className="w-full hidden md:block lg:hidden"
        />
        <Image
          src={imageMapMobile}
          alt="person typing on a laptop keyboard"
          className="w-full h-full  block md:hidden"
        />
      </div>
    </motion.section>
  );
};

export default ContactDetails;
