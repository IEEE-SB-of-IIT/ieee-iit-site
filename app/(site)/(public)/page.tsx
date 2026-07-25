import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Societies from "@/components/Chapters";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <main className="relative z-10 gap-20 md:gap-32">
        <Hero />
        <div className="flex flex-col">
          <About />
          <Societies />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
