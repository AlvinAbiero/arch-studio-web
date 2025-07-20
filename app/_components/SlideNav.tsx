"use client";

import { HOME_SLIDES } from "../_data/homeSlides";
import { useAppStore } from "../store/useStore";

const SlideNav = () => {
  const { currentSlideId, setSlide } = useAppStore();
  return (
    <div className="md:flex hidden">
      {HOME_SLIDES.map((slide) => (
        <button
          key={slide.id}
          onClick={() => setSlide(slide.id)}
          className={`md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center text-gray-500 font-bold transition-all duration-300 text-lg lg:text-base   cursor-pointer ${
            currentSlideId === slide.id
              ? "bg-black text-white"
              : "bg-white  hover:bg-gray-800/70 text-gray-600"
          }`}
        >
          {slide.id.toString().padStart(2, "0")}
        </button>
      ))}
    </div>
  );
};

export default SlideNav;
