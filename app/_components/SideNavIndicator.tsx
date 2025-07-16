"use client";
import { useAppStore } from "../store/useStore";

const SideNavIndicator = () => {
  const { currentPage } = useAppStore();
  return (
    <div className="hidden md:block absolute left-8 top-0 transform  z-30">
      <div className="bg-gray-400 w-[3px] h-25  mb-5 flex items-center justify-self-center"></div>
      <div className="writing-mode-vertical text-black text-xl font-medium tracking-[1.4rem] opacity-60 flex flex-col">
        {currentPage}
      </div>
    </div>
  );
};

export default SideNavIndicator;
