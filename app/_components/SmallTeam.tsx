import Image from "next/image";
import Cta from "./Cta";
import ArrowIcon from "./ArrowIcon";
import desktopTeamImg from "@/public/home/desktop/image-small-team.jpg";
import tabletTeamImg from "@/public/home/tablet/image-small-team.jpg";
import mobileTeamImg from "@/public/home/mobile/image-small-team.jpg";

const SmallTeam = () => {
  return (
    <section className="xl:my-42 lg:my-36 md:my-24 my-16">
      <div className="relative h-[70vh] md:h-[70vh] lg:h-screen   md:max-h-[600px] mx-auto md:container">
        <Image
          src={desktopTeamImg}
          alt="desktop team image"
          fill
          className="object-cover hidden lg:block transition-opacity duration-500"
          priority
        />
        <Image
          src={tabletTeamImg}
          alt="tablet team image"
          fill
          className="object-cover hidden md:block lg:hidden transition-opacity duration-500"
          priority
        />
        <Image
          src={mobileTeamImg}
          alt="mobile team image"
          fill
          className="object-cover block md:hidden transition-opacity duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex md:items-center items-start">
          <div className="md:ml-auto mx-auto px-8 lg:px-8">
            <div className="container max-w-lg text-white pr-24 md:pr-0">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mt-24 md:mt-0 mb-4 leading-tight">
                Small Team, big ideas
              </h1>
              <div className="flex mt-16 md:mt-8">
                <Cta href="/about">
                  <div className="text-[1.5rem] font-medium leading-[2.5rem]">
                    About Us
                  </div>
                  <ArrowIcon />
                </Cta>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallTeam;
