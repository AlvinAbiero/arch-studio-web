"use client";

import { useAppStore } from "../store/useStore";

import Link from "next/link";

export default function Navigation() {
  const { isMenuOpen, closeMenu } = useAppStore();
  return (
    <div
      className={`
            ${isMenuOpen ? "opacity-100" : "opacity-0"} 
            md:opacity-100  md:p-8 md:static
            fixed top-30 left-1/2 transform -translate-x-1/2 z-50
            w-5/6  md:w-auto  
            bg-very-light-grey md:bg-transparent
            transition-all duration-300 ease-in-out
            md:transform-none
          `}
    >
      <div className="p-8 md:p-0">
        <ul className="flex flex-col items-center md:items-end md:flex-row space-y-4 md:space-y-0 md:gap-12 mt-0 md:mt-0">
          <li>
            <Link
              href="/portfolio"
              onClick={closeMenu}
              className="block py-2 md:text-[1.8rem] text-[2.4rem] text-medium-grey hover:text-[#1b1d23] transition-colors cursor-pointer font-bold"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block  py-2 md:text-[1.8rem] text-[2.4rem] text-medium-grey hover:text-[#1b1d23]  transition-colors cursor-pointer font-bold"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block py-2  md:text-[1.8rem] text-[2.4rem] text-medium-grey hover:text-[#1b1d23]  transition-colors cursor-pointer font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
