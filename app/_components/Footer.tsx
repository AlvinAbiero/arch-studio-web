"use client";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useStore";
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

  const { closeMenu, setCurrentPage } = useAppStore();

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    closeMenu();
  };
  return (
    <motion.footer
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="md:container mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-4xl  py-8 md:px-4  lg:px-8 md:my-24 mt-24 bg-gray-200 flex flex-col md:flex-row items-center justify-center relative"
    >
      <div className="bg-black lg:w-50 md:w-40 md:h-[100%] w-40 h-40 p-4 md:p-8 flex items-center justify-center md:absolute md:-left-12 lg:-left-16 xl:-left-20  md:mt-0 -mt-24">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </div>

      <nav className="flex flex-col items-center justify-center md:flex-row ">
        {/* <NavList /> */}
        <ul className="p-8 md:space-y-0 md:gap-12 gap-6 flex flex-col md:flex-row items-center justify-center md:-ml-24">
          <li>
            <Link
              href="/portfolio"
              onClick={() => handleNavClick("PORTFOLIO")}
              className="block py-2 text-[1.5rem] lg:text-[1.8rem] text-medium-grey hover:text-[#1b1d23] transition-colors cursor-pointer font-bold"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => handleNavClick("ABOUT US")}
              className="block  py-2 text-[1.5rem] lg:text-[1.8rem]  text-medium-grey hover:text-[#1b1d23]  transition-colors cursor-pointer font-bold"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => handleNavClick("CONTACT")}
              className="block py-2  text-[1.5rem] lg:text-[1.8rem] text-medium-grey hover:text-[#1b1d23]  transition-colors cursor-pointer font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:absolute sm:-right-4 md:-right-12 lg:-right-18 xl:-right-22">
          <Cta href="/portfolio">
            <button className="text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] font-bold leading-[2.5rem]">
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
