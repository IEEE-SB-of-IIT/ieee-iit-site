import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Societies from "@/components/Chapters";

export default function Home() {
  return (
    <div className="min-h-screen bg-ieee-lightest text-ieee-dark font-sans selection:bg-ieee-light/30 overflow-x-hidden">
      <main>
        <Hero />
        <About />
        <Societies />
        <Projects />
      </main>
    </div>
  );
}

