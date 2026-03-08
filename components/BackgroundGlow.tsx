import React from "react";

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ willChange: 'auto', contain: 'strict' }}>
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 10% 10%, rgba(0, 98, 155, 0.22) 0%, transparent 60%), radial-gradient(50% 50% at 90% 15%, rgba(46, 94, 153, 0.2) 0%, transparent 60%), radial-gradient(40% 40% at 50% 85%, rgba(13, 36, 64, 0.16) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute w-[520px] h-[520px] bg-[#00629B] rounded-full opacity-20"
        style={{
          top: "5%",
          left: "5%",
          filter: "blur(100px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute w-[640px] h-[640px] bg-[#2e5e99] rounded-full opacity-20"
        style={{
          bottom: "5%",
          right: "10%",
          filter: "blur(100px)",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute w-[420px] h-[420px] bg-[#0d2440] rounded-full opacity-15"
        style={{
          bottom: "15%",
          left: "15%",
          filter: "blur(100px)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
};

export default BackgroundGlow;
