"use client";

import { HOME_SLIDES } from "../_data/homeSlides";
import { useAppStore } from "../store/useStore";

const SlideNav = () => {
  const { currentSlideId, setSlide } = useAppStore();
  return (
    <div className="hidden md:absolute md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 z-30">
      <div className="flex space-x-2">
        {HOME_SLIDES.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setSlide(slide.id)}
            className={`md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-gray-200 font-bold transition-all duration-300 text-sm lg:text-base ${
              currentSlideId === slide.id
                ? "bg-white text-black"
                : "bg-gray-600/50  hover:bg-gray-500/70"
            }`}
          >
            {slide.id.toString().padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideNav;
