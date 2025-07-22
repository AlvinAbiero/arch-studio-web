import React from "react";
// import { Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import iconTwitter from "@/public/icons/icon-twitter.svg";
import iconLinkedin from "@/public/icons/icon-linkedin.svg";
import Leader from "./Leader";

interface LeaderCardProps {
  leader: Leader;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader }) => {
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={leader.image}
          alt={leader.name}
          width={300}
          height={300}
          className="w-full h-auto object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-8">
            <div className=" hover:scale-120 transition-transform duration-200">
              <Image
                src={iconTwitter}
                alt="twitter icon"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
            <div className=" hover:scale-120  transition-transform duration-200">
              <Image
                src={iconLinkedin}
                alt="linkedin icon"
                className="w-8 h-8 cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-1">{leader.name}</h3>
        <p className="text-gray-600 text-lg md:text-xl">{leader.position}</p>
      </div>
    </div>
  );
};

export default LeaderCard;
