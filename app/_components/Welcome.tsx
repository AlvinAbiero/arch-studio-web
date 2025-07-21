import Image from "next/image";
import welcomeImg from "@/public/home/desktop/image-welcome.jpg";

const Welcome = () => {
  return (
    <section className="relative  lg:mt-72 my-24 lg:px-10 md:px-16 px-8 lg:max-w-7xl md:max-w-4xl">
      <h1 className="lg:absolute top-0 xl:-top-64 lg:-top-50 xl:-right-6 lg:-right-2 md:right-0 hidden md:block text-gray-200/80 xl:text-[20rem] lg:text-[16rem] text-[9rem] font-bold">
        Welcome
      </h1>
      <div className="w-30 h-[.8] bg-gray-400 mb-16 md:hidden"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-end items-end">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-6 xl:gap-5">
          <h2 className="text-6xl font-semibold leading-16 w-2/3 lg:w-full md:text-8xl md:leading-18 lg:text-[6rem] lg:leading-[5rem]">
            Welcome to Arch Studio
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 font-medium">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="text-xl sm:text-2xl text-gray-500 font-medium">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="text-xl sm:text-2xl text-gray-500 font-medium">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className="hidden lg:block">
          <Image src={welcomeImg} alt="picture of a building" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
