"use client";

import { useAppStore } from "../store/useStore";
import { HOME_SLIDES } from "../_data/homeSlides";
import Image from "next/image";
import { useEffect } from "react";

export default function HeroSlider() {
  const {
    currentSlideId,
    setSlide,
    nextSlide,
    prevSlide,
    isAutoPlay,
    setAutoPlay,
  } = useAppStore();

  const currentSlide = HOME_SLIDES.find((slide) => slide.id === currentSlideId);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  const handleSlideChange = (slideId: number): void => {
    setSlide(slideId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  if (!currentSlide) return <div>Loading...</div>;

  return (
    <div
      className="relative focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
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
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {currentSlide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                {currentSlide.text}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">See Our Portfolio</button>
                <button
                  onClick={() => setAutoPlay(!isAutoPlay)}
                  className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors"
                >
                  {isAutoPlay ? "Pause" : "Auto Play"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {HOME_SLIDES.map((slide) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(slide.id)}
            className={`w-3 h-3 rounded-full transition-colors ${
              slide.id === currentSlideId
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${slide.id}`}
          />
        ))}
      </div>

      {/* Slide numbers */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {HOME_SLIDES.map((slide) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(slide.id)}
            className={`w-12 h-12 text-sm font-bold transition-colors ${
              slide.id === currentSlideId
                ? "bg-white text-black"
                : "bg-black/50 text-white hover:bg-black/70"
            }`}
            aria-label={`Go to slide ${slide.id}: ${slide.title}`}
          >
            {slide.id}
          </button>
        ))}
      </div>
    </div>
  );
}
