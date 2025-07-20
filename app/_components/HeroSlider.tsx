"use client";

import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";
import { useAppStore } from "../store/useStore";
import { HOME_SLIDES } from "../_data/homeSlides";
import Image from "next/image";
import { useEffect } from "react";
import SlideNav from "./SlideNav";
import Cta from "./Cta";
import ArrowIcon from "./ArrowIcon";

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function HeroSlider() {
  const { currentSlideId, nextSlide, prevSlide, isAutoPlay } = useAppStore();

  const { inViewRef, inView } = useIntersectionObserver();

  const currentSlide = HOME_SLIDES.find((slide) => slide.id === currentSlideId);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, nextSlide]);

  // const handleSlideChange = (slideId: number): void => {
  //   setSlide(slideId);
  // };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  if (!currentSlide) return <div>Loading...</div>;

  return (
    <motion.div
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="focus:outline-none relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-screen  md:max-h-[600px] mx-auto md:container">
        <Image
          src={currentSlide.images.desktop}
          alt={currentSlide.title}
          fill
          className="object-cover hidden lg:block transition-opacity duration-500"
          priority
        />
        <Image
          src={currentSlide.images.tablet}
          alt={currentSlide.title}
          fill
          className="object-cover hidden md:block lg:hidden transition-opacity duration-500"
          priority
        />
        <Image
          src={currentSlide.images.mobile}
          alt={currentSlide.title}
          fill
          className="object-cover block md:hidden transition-opacity duration-500"
          priority
        />

        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex md:items-center items-start">
          <div className="md:ml-auto mx-auto px-8 lg:px-8">
            <div className="container max-w-lg text-white pr-24 md:pr-0">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mt-24 md:mt-0 mb-4 leading-tight">
                {currentSlide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                {currentSlide.text}
              </p>
              <div className="flex">
                <Cta href="/portfolio">
                  <div className="text-[1.5rem] font-medium leading-[2.5rem]">
                    See Our Portfolio
                  </div>
                  <ArrowIcon />
                </Cta>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide numbers */}
      <div className="absolute bottom-0 left-20 lg:left-6 xl:-left-20 z-50">
        <SlideNav />
      </div>
    </motion.div>
  );
}
