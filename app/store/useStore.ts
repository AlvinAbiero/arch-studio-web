"use client";

import { create } from "zustand";
import { AppStore, HomeSlide } from "../types";
import { HOME_SLIDES } from "../_data/homeSlides";

export const useAppStore = create<AppStore>((set, get) => ({
  // Slider state
  currentSlideId: 1,
  setSlide: (id: number) => set({ currentSlideId: id }),
  nextSlide: () =>
    set((state) => ({
      currentSlideId: state.currentSlideId < 4 ? state.currentSlideId + 1 : 1,
    })),
  prevSlide: () =>
    set((state) => ({
      currentSlideId: state.currentSlideId > 1 ? state.currentSlideId - 1 : 4,
    })),

  // Navigation state
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openMenu: () => set({ isMenuOpen: true }),

  // Auto-play functionality
  isAutoPlay: false,
  setAutoPlay: (enabled: boolean) => set({ isAutoPlay: enabled }),

  // Helper getters
  getCurrentSlide: (): HomeSlide | undefined => {
    const { currentSlideId } = get();
    return HOME_SLIDES.find((slide) => slide.id === currentSlideId);
  },

  isFirstSlide: (): boolean => get().currentSlideId === 1,
  isLastSlide: (): boolean => get().currentSlideId === 4,
}));
