// import Hero from "@/sections/Hero";
// import ShowcaseSection from "@/sections/ShowcaseSection";
// import About from "@/sections/About";
// import NavBar from "@/sections/NavBar";
// import AnimatedCounter from "@/components/AnimatedCounter";

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* background */}
//       {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#071028,_#02050a_85%)]" />
//       <div className="absolute top-28 right-32 w-72 h-72 bg-purple-600/12 blur-[120px] rounded-full" /> */}
//       {/* <div className="absolute top-15 left-50 w-100 h-100 bg-blue-500 blur-[140px] rounded-full" />
//       <div className="absolute top-15 right-50 w-100 h-100 bg-blue-500 blur-[140px] rounded-full" /> */}
//       <NavBar />
//       <Hero />
//       <AnimatedCounter />
//       <About />
//       <ShowcaseSection />
//     </div>
//   );
// }
import NavBar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import AnimatedCounter from "@/components/AnimatedCounter";
import About from "@/sections/About";
import ShowcaseSection from "@/sections/ShowcaseSection";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#0E0C15]">
      {/* Background Layers with Subtle Blue Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#01446b] to-[#01213e] blur-[150px] z-0 w-full h-140" /> */}

      {/* Blurry Circles (Optional) */}
      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 w-[1100px] h-[350px] bg-[#00629B] blur-[200px] rounded-full z-0"></div>
      {/* <div className="absolute bottom-15 right-1/2 transform translate-x-1/2 w-[300px] h-[300px] bg-indigo-500 blur-[80px] rounded-full z-0"></div> */}

      {/* Main Content */}
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <About />
      <ShowcaseSection />
    </div>
  );
}
