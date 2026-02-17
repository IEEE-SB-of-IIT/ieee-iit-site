import React from "react";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";
import InfoCard from "./ui/InfoCard";
import { aboutData } from "@/constants";

const About = () => {
  return (
    <section id="about" className="relative">
      <Container>
        <SectionHeader title="About Us" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
