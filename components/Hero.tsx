import React from "react";
import { ArrowRight } from "lucide-react";
import { counterItems } from "@/constants";
import Container from "./ui/Container";

import Badge from "./ui/Badge";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen pt-38 px-4 flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-ieee-light/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-ieee-medium/10 rounded-full blur-[80px]" />
        </div>

        <div className="hidden lg:flex w-[600px] h-[600px] rounded-full overflow-hidden absolute left-[-150px] top-[50%] -translate-y-1/2 z-0 opacity-15 pointer-events-none">
          <img
            src="images/logos/SB_globe.png"
            alt="Global Technology Watermark"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ieee-lightest via-transparent to-transparent mix-blend-overlay"></div>
        </div>

        <Container className="flex flex-col lg:flex-row items-center relative z-10 gap-18">
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative h-[400px] lg:h-[600px] flex items-center justify-center order-2 lg:order-1">
            <div className="absolute top-[10%] left-[5%] lg:left-[20px] bg-white/10 backdrop-blur-md border border-white/30 p-2 rounded-xl shadow-xl w-120 z-10">
              <img
                src="/images/image.png"
                alt="Hero-image-1"
                className="rounded-xl"
              />
            </div>
            <div className="absolute bottom-[15%] right-[5%] lg:right-[-20px] bg-white/10 backdrop-blur-md border border-white/30 p-2 rounded-xl shadow-xl w-100 z-10">
              <img
                src="/images/image.png"
                alt="Hero-image-1"
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left space-y-6 order-1 lg:order-2 -mt-5">
            <Badge className="border-2 border-ieee-blue/60">
              Advancing Technology for Humanity
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold text-ieee-gray leading-[1.15] tracking-tight">
              IEEE
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-medium to-ieee-blue">
                {" "}
                Student <br /> Branch{" "}
              </span>
              of IIT
            </h1>

            <p className="text-ieee-dark/70 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join a community of innovators. We foster technological excellence
              through industry collaboration, and impactful projects that shape
              the future.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-ieee-medium to-ieee-light text-white rounded-xl shadow-lg shadow-ieee-medium/30 font-semibold hover:shadow-xl hover:scale-102 transition-all duration-300 flex items-center gap-2 hover:cursor-pointer">
                Claim Your Spot
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      <div className="w-full flex justify-center mt-10">
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {counterItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Badge
                key={index}
                className="uppercase p-5 rounded-2xl shadow-md hover:scale-101 transition-transform duration-300 min-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  {Icon && <Icon size={18} className="text-ieee-gray" />}
                  <span className="text-ieee-gray font-semibold text-sm">
                    {item.label}
                  </span>
                </div>
                <span className="text-ieee-blue font-bold text-2xl ml-8">
                  {item.value}
                  {item.suffix}
                </span>
              </Badge>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
