import Featured from "./_components/Featured";
import HeroSlider from "./_components/HeroSlider";
import SmallTeam from "./_components/SmallTeam";
import Welcome from "./_components/Welcome";

export default function Home() {
  return (
    <div className="lg:max-w-7xl md:max-w-7xl md:container w-full mx-auto md:py-8 md:px-4 lg:px-6">
      <HeroSlider />
      <Welcome />
      <SmallTeam />
      <Featured />
    </div>
  );
}
