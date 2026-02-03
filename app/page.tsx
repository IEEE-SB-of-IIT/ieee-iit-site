import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Societies from "@/components/Chapters";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="min-h-screen text-ieee-dark font-sans selection:bg-ieee-light/30">
      <main>
        <Hero />
        <Stats />
        <About />
        <Societies />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

