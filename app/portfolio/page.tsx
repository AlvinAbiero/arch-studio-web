"use client";
import React from "react";

import { PORTFOLIO_DETAILS as portfolioProjects } from "../_data/portfolioDetails";
import PortfolioItem from "../_components/PortfolioItem";

const PortfolioPage = () => {
  return (
    <section className="lg:max-w-7xl md:max-w-7xl md:container w-full mx-auto md:py-8 md:px-4 lg:px-6">
      <div className="my-12 mx-auto md:container px-8">
        {/* tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <PortfolioItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
