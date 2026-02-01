"use client";

import { motion } from "motion/react";
import React from "react";

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 10% 10%, rgba(0, 98, 155, 0.22) 0%, transparent 60%), radial-gradient(50% 50% at 90% 15%, rgba(46, 94, 153, 0.2) 0%, transparent 60%), radial-gradient(40% 40% at 50% 85%, rgba(13, 36, 64, 0.16) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 35, 70, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 35, 70, 0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15, 35, 70, 0.08) 0%, transparent 45%, rgba(15, 35, 70, 0.06) 100%)",
          backgroundSize: "100% 6px",
        }}
      />
      <motion.div
        className="absolute w-[520px] h-[520px] bg-[#00629B] rounded-full blur-[140px] opacity-25 mix-blend-multiply"
        animate={{
          x: ["-20%", "120%", "-20%"],
          y: ["-10%", "120%", "-10%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
        style={{
          top: "5%",
          left: "5%",
        }}
      />
      <motion.div
        className="absolute w-[640px] h-[640px] bg-[#2e5e99] rounded-full blur-[160px] opacity-25 mix-blend-multiply"
        animate={{
          x: ["120%", "-30%", "120%"],
          y: ["60%", "-40%", "60%"],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
        style={{
          bottom: "5%",
          right: "10%",
        }}
      />
      <motion.div
        className="absolute w-[420px] h-[420px] bg-[#0d2440] rounded-full blur-[120px] opacity-20 mix-blend-multiply"
        animate={{
          x: ["10%", "80%", "10%"],
          y: ["90%", "20%", "90%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1],
        }}
        style={{
          bottom: "15%",
          left: "15%",
        }}
      />
    </div>
  );
};

export default BackgroundGlow;
