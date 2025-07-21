"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";
import { PortfolioItem as ProjectType } from "../types";

interface PortfolioItemProps {
  project: ProjectType;
  index: number;
}

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project, index }) => {
  const { inViewRef, inView } = useIntersectionObserver();
  return (
    <motion.div
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: index * 0.1 }} // Staggered animation
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative group cursor-pointer overflow-hidden"
    >
      <div className="md:aspect-[4/5] aspect-[4/2]  relative">
        {/* Desktop Image */}
        <Image
          src={project.images.desktop}
          alt={project.title}
          className="w-full h-full object-cover hidden lg:block"
          fill
          priority
        />

        {/* Tablet Image */}
        <Image
          src={project.images.tablet}
          alt={project.title}
          className="w-full h-full object-cover hidden md:block lg:hidden"
          fill
          priority
        />

        {/* Mobile Image */}
        <Image
          src={project.images.mobile}
          alt={project.title}
          className="w-full h-full object-cover block md:hidden"
          fill
          priority
        />

        {/* Content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent"
          whileHover={{
            y: -2,
            transition: { duration: 0.2 },
          }}
        >
          <motion.h3
            className="text-white text-3xl lg:text-4xl font-bold mb-1"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-white/80 text-xl lg:text-2xl cursor-pointer"
            whileHover={{
              color: "#ffffff",
              transition: { duration: 0.2 },
            }}
          >
            {project.date}
          </motion.p>
        </motion.div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
