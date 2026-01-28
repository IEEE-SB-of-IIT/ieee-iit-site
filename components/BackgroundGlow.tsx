"use client";

import { motion } from "motion/react";
import React from "react";

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#E7F0FA]">
      <motion.div
        className="absolute w-[500px] h-[500px] bg-[#00629B] rounded-full blur-[100px] opacity-30 mix-blend-multiply"
        animate={{
          x: ["-20%", "120%", "-20%"],
          y: ["-20%", "120%", "-20%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
        style={{
          top: "10%",
          left: "10%",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#2e5e99] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
        animate={{
          x: ["120%", "-20%", "120%"],
          y: ["50%", "-50%", "50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
        style={{
          bottom: "10%",
          right: "10%",
        }}
      />
    </div>
  );
};

export default BackgroundGlow;
