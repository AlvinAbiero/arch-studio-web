"use client";
import { useState, useEffect } from "react";
import { PORTFOLIO_DETAILS } from "../_data/portfolioDetails";
import Cta from "./Cta";
import ArrowIcon from "./ArrowIcon";
import { PortfolioItem } from "../types";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioItem[]>([]);

  // Function to get 3 random projects
  const getRandomProjects = () => {
    const shuffled = [...PORTFOLIO_DETAILS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    const projects = getRandomProjects();
    setFeaturedProjects(projects);
  }, []);
  return (
    <section className="my-24 md:my-36 lg:my-42 mx-auto md:container px-8">
      <div className="flex justify-between items-end">
        <h1 className="lg:font-bold font-semibold text-4xl md:text-5xl lg:text-6xl">
          Featured
        </h1>
        <div className="md:flex mt-16 md:mt-8 hidden">
          <Cta href="/portfolio">
            <div className="text-[1.5rem] font-medium leading-[2.5rem]">
              See All
            </div>
            <ArrowIcon />
          </Cta>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="relative group cursor-pointer overflow-hidden"
          >
            <div className="aspect-[4/2] md:aspect-[4/5] relative">
              <Image
                src={project.images.mobile}
                alt={project.title}
                className="w-full h-full object-cover block md:hidden"
                fill
                priority
              />
              <Image
                src={project.images.tablet}
                alt={project.title}
                className="w-full h-full object-cover hidden md:block lg:hidden"
                fill
                priority
              />
              <Image
                src={project.images.desktop}
                alt={project.title}
                className="w-full h-full object-cover hidden lg:block"
                fill
                priority
              />

              {/* Large Number Overlay */}
              <div className="absolute top-4 right-4 text-white/40 text-8xl font-bold leading-none hidden md:block">
                {index + 1}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-3xl lg:text-4xl font-bold mb-1">
                  {project.title}
                </h3>
                <Link href="/portfolio">
                  <p className="text-white/80 text-lg lg:text-xl cursor-pointer">
                    View All Projects
                  </p>
                </Link>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hover Effect
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div> */}

              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden">
        <Cta href="/porfolio">
          <div className="text-[1.5rem] font-medium leading-[2.5rem]">
            See All
          </div>
          <ArrowIcon />
        </Cta>
      </div>
    </section>
  );
};

export default Featured;
