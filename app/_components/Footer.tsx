"use client";
import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";
import Link from "next/link";
import Logo from "@/public/footer-logo.svg";
import Image from "next/image";
// import NavList from "./NavList";
import Cta from "./Cta";
import ArrowIcon from "./ArrowIcon";

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};
const Footer = () => {
  const { inViewRef, inView } = useIntersectionObserver();
  return (
    <motion.footer
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex md:flex-row flex-col items-center md:mt-80 mt-40 md:px-64 px-0 "
    >
      <Link
        className="lg:h-[18rem] lg:w-[18rem] bg-very-dark-blue flex justify-center items-center h-[10rem] w-[10rem] p-8 -mb-24 md:mb-0 z-[2]"
        href="/"
      >
        <Image src={Logo} alt="logo" />
      </Link>
      <nav className="flex items-center w-[75%] lg:h-[18rem] md:h-[10rem] bg-very-light-grey md:pl-36 md:flex-row flex-col h-auto pl-0 -mb-24 z-[2]">
        {/* <NavList /> */}
        <div className="ml-auto md:mr-[-13rem] m-0">
          <Cta href="/portfolio">
            <button className="text-[1.8rem] font-bold leading-[2.5rem]">
              See Our Portfolio
            </button>
            <ArrowIcon />
          </Cta>
        </div>
      </nav>
    </motion.footer>
  );
};

export default Footer;
