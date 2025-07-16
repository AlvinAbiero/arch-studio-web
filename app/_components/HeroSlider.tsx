"use client";

import { useAppStore } from "../store/useStore";
import { HOME_SLIDES } from "../_data/homeSlides";
import Image from "next/image";
import { useEffect } from "react";
import SlideNav from "./SlideNav";

export default function HeroSlider() {
  const { currentSlideId, nextSlide, prevSlide, isAutoPlay } = useAppStore();

  const currentSlide = HOME_SLIDES.find((slide) => slide.id === currentSlideId);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
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
    <div className="focus:outline-none " tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="relative  h-screen md:max-h-[400px] lg:max-h-[600px] overflow-hidden md:max-w-4xl lg:max-w-6xl">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className=" mx-auto px-4 lg:px-8">
            <div className="container max-w-lg text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {currentSlide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                {currentSlide.text}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">See Our Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide numbers */}
      <SlideNav />
    </div>
  );
}
