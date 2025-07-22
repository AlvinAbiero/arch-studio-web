"use client";
import LeaderCard from "./LeaderCard";
import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";

interface Leader {
  id: number;
  name: string;
  position: string;
  image: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Jake Richards",
    position: "Chief Architect",
    image: "/about/desktop/avatar-jake.jpg",
  },
  {
    id: 2,
    name: "Thompson Smith",
    position: "Head of Finance",
    image: "/about/desktop/avatar-thompson.jpg",
  },
  {
    id: 3,
    name: "Jackson Rourke",
    position: "Lead Designer",
    image: "/about/desktop/avatar-jackson.jpg",
  },
  {
    id: 4,
    name: "Maria Simpson",
    position: "Senior Architect",
    image: "/about/desktop/avatar-maria.jpg",
  },
];

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Leader = () => {
  const { inViewRef, inView } = useIntersectionObserver();
  return (
    <motion.div
      className="py-12"
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-6 grid grid-cols-1 lg:grid-cols-2">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
          The Leaders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Leader;
