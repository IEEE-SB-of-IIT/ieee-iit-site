import MagicBento from "@/components/MagicBento";
import TitleHeader from "@/components/TitleHeader";
import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="projects" className="w-full max-w-none px-0 mt-25">
      <TitleHeader title="Our Impactful Initiatives" />

      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={1000}
        glowColor="132, 0, 255"
      />
    </div>
  );
};

export default ShowcaseSection;
