import Hero from "@/sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";
import NavBar from "@/sections/NavBar";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <ShowcaseSection />
    </div>
  );
}
