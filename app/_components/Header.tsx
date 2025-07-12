"use client";

import Navigation from "./Navigation";
import { useAppStore } from "../store/useStore";
import { useEffect } from "react";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import close from "@/public/icons/icon-close.svg";
import hamburger from "@/public/icons/icon-hamburger.svg";

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppStore();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (isMenuOpen && !(event.target as Element)?.closest("nav")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen, closeMenu]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen, closeMenu]);

  return (
    <header className="bg-very-light-grey relative z-30 flex items-center  justify-between gap-36 md:px-24 lg:px-44 xl:px-44 py-6 px-12 shadow-md md:shadow-none w-screen md:w-auto bg-white md:mb-24 mb-0">
      {/* Logo */}
      <Link href="/">
        <Image src={Logo} alt="Logo" />
      </Link>

      {/* Navigation */}
      <Navigation />

      {/* Mobile menu button */}
      <div
        className="md:hidden block cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <Image
            src={close}
            alt="close"
            className={isMenuOpen ? "rotate" : ""}
          />
        ) : (
          <Image
            src={hamburger}
            alt="hamburger"
            className={isMenuOpen ? "non-rotate" : ""}
          />
        )}
      </div>

      {/* Menu overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  top-25 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
