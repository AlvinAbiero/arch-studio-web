export interface SlideImage {
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface HomeSlide {
  id: number;
  title: string;
  text: string;
  images: SlideImage;
}

export interface PortfolioItem {
  id: number;
  date: string;
  title: string;
  images: SlideImage;
}

export interface AppStore {
  // Slider state
  currentSlideId: number;
  setSlide: (id: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;

  // Navigation state
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;

  // Auto-play functionality
  isAutoPlay: boolean;
  setAutoPlay: (enabled: boolean) => void;

  // Helper getters
  getCurrentSlide: () => HomeSlide | undefined;
  isFirstSlide: () => boolean;
  isLastSlide: () => boolean;
}
