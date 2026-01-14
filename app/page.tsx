import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Societies from "@/components/Societies";

export default function Home() {
  return (
    <div className="min-h-screen bg-ieee-lightest text-ieee-dark font-sans selection:bg-ieee-light/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Societies />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

