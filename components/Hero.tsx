"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { counterItems } from "@/constants";
import Container from "./ui/Container";
import Image from "next/image";
import Badge from "./ui/Badge";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen pt-24 md:pt-38 px-4 flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-ieee-light/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-ieee-medium/10 rounded-full blur-[80px]" />
        </div>

        <div className="hidden lg:flex w-[600px] h-[600px] rounded-full overflow-hidden absolute left-[-150px] top-[50%] -translate-y-1/2 z-0 opacity-15 pointer-events-none">
          <Image
            src="https://res.cloudinary.com/dwr3qe5al/image/upload/v1772992709/SB_Globe_sb8dos.png"
            alt="Global Technology Watermark"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ieee-lightest via-transparent to-transparent mix-blend-overlay"></div>
        </div>

        <Container className="flex flex-col lg:flex-row items-center relative z-10 gap-18">
          <div className="hidden lg:flex flex-1 w-full max-w-lg lg:max-w-xl relative h-[600px] items-center justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute top-[10%] left-[5%] lg:left-[20px] bg-white/10 backdrop-blur-md border border-white/30 p-1.5 md:p-2 rounded-xl shadow-xl w-[70%] md:w-120 z-10"
            >
              <Image
                src="https://res.cloudinary.com/dwr3qe5al/image/upload/v1772990521/group01_qefqik.jpg"
                alt="Hero-image-1"
                width={480}
                height={320}
                className="rounded-xl w-full h-auto"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute bottom-[15%] right-[5%] lg:right-[-20px] bg-white/10 backdrop-blur-md border border-white/30 p-1.5 md:p-2 rounded-xl shadow-xl w-[60%] md:w-100 z-10"
            >
              <Image
                src="https://res.cloudinary.com/dwr3qe5al/image/upload/v1772990517/group02_xsdf8w.jpg"
                alt="Hero-image-2"
                width={400}
                height={267}
                className="rounded-xl w-full h-auto"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 text-center lg:text-left space-y-6 order-1 lg:order-2 -mt-5"
          >
            <Badge className="border-2 border-ieee-blue/60 whitespace-nowrap text-[12px] sm:text-xs md:text-sm">
              Advancing Technology for Humanity
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold text-ieee-gray leading-[1.15] tracking-tight">
              IEEE
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-medium to-ieee-blue">
                {" "}
                Student <br />
                Branch{" "}
              </span>
              of IIT
            </h1>

            <p className="text-ieee-dark/70 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join a community of innovators. We foster technological excellence
              through industry collaboration, and impactful projects that shape
              the future.
            </p>

            <div className="lg:hidden w-full max-w-md mx-auto py-4">
              <Image
                src="https://res.cloudinary.com/dwr3qe5al/image/upload/v1772990517/group02_xsdf8w.jpg"
                alt="Hero Mobile"
                width={400}
                height={267}
                className="rounded-2xl shadow-xl w-full h-auto border border-white/20"
                priority
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-ieee-medium to-ieee-light text-white rounded-xl shadow-lg shadow-ieee-medium/30 font-semibold hover:shadow-xl hover:scale-102 transition-all duration-300 flex items-center gap-2 hover:cursor-pointer">
                Claim Your Spot
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-center mt-6 md:mt-10"
      >
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-6 px-4 w-full md:w-auto max-w-sm md:max-w-none">
          {counterItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Badge
                  className={cn(
                    "uppercase p-3 md:p-5 rounded-2xl shadow-md hover:scale-101 transition-transform duration-300 min-w-0 md:min-w-[200px]",
                    index === 4 ? "hidden md:flex flex-col" : "flex flex-col"
                  )}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 text-left">
                    {Icon && <Icon size={16} className="text-ieee-gray shrink-0 md:size-[18px]" />}
                    <span className="text-ieee-gray font-semibold text-[10px] md:text-sm line-clamp-1">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-ieee-blue font-bold text-lg md:text-2xl ml-6 md:ml-8 text-left">
                    {item.value}
                    {item.suffix}
                  </span>
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
