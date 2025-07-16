"use client";

import { create } from "zustand";
import { AppStore, HomeSlide } from "../types";
import { HOME_SLIDES } from "../_data/homeSlides";

export const useAppStore = create<AppStore>((set, get) => ({
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

  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openMenu: () => set({ isMenuOpen: true }),

  isAutoPlay: false,
  setAutoPlay: (enabled: boolean) => set({ isAutoPlay: enabled }),

  // Current page tracking
  currentPage: "HOME",
  setCurrentPage: (page: string) => set({ currentPage: page }),

  getCurrentSlide: (): HomeSlide | undefined => {
    const { currentSlideId } = get();
    return HOME_SLIDES.find((slide) => slide.id === currentSlideId);
  },
  isFirstSlide: (): boolean => get().currentSlideId === 1,
  isLastSlide: (): boolean => get().currentSlideId === 4,
}));
