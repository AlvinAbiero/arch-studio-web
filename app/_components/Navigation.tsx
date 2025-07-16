"use client";

import { useAppStore } from "../store/useStore";
import { useEffect } from "react";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import close from "@/public/icons/icon-close.svg";
import hamburger from "@/public/icons/icon-hamburger.svg";

const Navigation = () => {
  const { isMenuOpen, toggleMenu, closeMenu, setCurrentPage, currentPage } =
    useAppStore();

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    closeMenu();
  };

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
    <header className="relative top-0 left-0 right-0 z-50 bg-transparent">
      <div className="lg:max-w-7xl max-w-4xl mx-auto py-2 px-4 sm:px-8 lg:px-8 shadow-md md:shadow-none">
        <div className="flex justify-between md:justify-start items-center h-16 lg:h-20 md:gap-16 min-w-full">
          {/* Logo */}
          <Link href="/" onClick={() => handleNavClick("HOME")}>
            <Image src={Logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-8 pt-6">
              <li>
                <Link
                  href="/portfolio"
                  onClick={() => handleNavClick("PORTFOLIO")}
                  className={`block   text-[1.4rem] ${
                    currentPage === "PORTFOLIO"
                      ? "hover:text-medium-grey text-[#1b1d23] font-bold"
                      : " text-medium-grey hover:text-[#1b1d23]"
                  }  transition-colors cursor-pointer font-medium`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => handleNavClick("ABOUT US")}
                  className={`block   text-[1.4rem] ${
                    currentPage === "ABOUT US"
                      ? "hover:text-medium-grey text-[#1b1d23] font-bold"
                      : " text-medium-grey hover:text-[#1b1d23]"
                  } ] transition-colors cursor-pointer font-medium`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => handleNavClick("CONTACT")}
                  className={`block   text-[1.4rem] ${
                    currentPage === "CONTACT"
                      ? "hover:text-medium-grey text-[#1b1d23] font-bold"
                      : " text-medium-grey hover:text-[#1b1d23]"
                  }  transition-colors cursor-pointer font-medium`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div
            className="md:hidden ml-auto  cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <button className="inline-flex items-center justify-center p-2 outline-none cursor-pointer">
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
            </button>
          </div>

          {/* Menu overlay for mobile */}
          {isMenuOpen && (
            <div
              className="fixed inset-0  top-[5.15rem] bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />
          )}

          {/* Mobile Menu */}
          <div className="md:hidden block">
            <div
              className={`fixed left-0 right-0 bg-gray-300  transform transition-transform duration-300 ease-in-out z-50  ${
                isMenuOpen
                  ? "translate-y-0 visible"
                  : "translate-y-50 invisible"
              }`}
              style={{ top: "5.15rem" }}
            >
              <ul className="px-8 py-8 space-y-8 flex flex-col items-center justify-center">
                <li>
                  <Link
                    href="/portfolio"
                    onClick={() => handleNavClick("PORTFOLIO")}
                    className="block py-2 text-[1.8rem] text-medium-grey hover:text-[#1b1d23] transition-colors cursor-pointer font-bold"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => handleNavClick("ABOUT US")}
                    className="block  py-2 text-[1.8rem]  text-medium-grey hover:text-[#1b1d23]  transition-colors cursor-pointer font-bold"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => handleNavClick("CONTACT")}
                    className="block py-2  text-[1.8rem] text-medium-grey hover:text-[#1b1d23]  transition-colors cursor-pointer font-bold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
