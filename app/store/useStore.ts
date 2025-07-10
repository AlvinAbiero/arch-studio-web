"use client"

import {create} from 'zustand'

export const useStore = create((set, get) => ({
    // slider state
    currentSlideId: 1,
    setSlide: (id: number) => set({currentSlideId: id}),
    nextSlide: () => set((state) => ({
        currentSlideId: state.currentSlideId < 4  ? state.currentSlideId + 1 : 1
    })),
    prevSlide: () => set((state) => ({
        currentSlideId: state.currentSlideId > 1 ? state.currentSlideId - 1 : 4
    })),


    // Navigation state
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openMenu: () => set({ isMenuOpen: true }),

   // Auto-play functionality (bonus feature)
  isAutoPlay: false,
  setAutoPlay: (enabled) => set({ isAutoPlay: enabled }),
}))