import Hero from "@/sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";
import NavBar from "@/sections/NavBar";
import TechStack from "@/sections/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <TechStack />
    </div>
  );
}
