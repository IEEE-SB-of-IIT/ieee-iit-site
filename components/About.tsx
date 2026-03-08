"use client";

import React from "react";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";
import InfoCard from "./ui/InfoCard";
import { aboutData } from "@/constants";
import AnimatedSection from "./ui/AnimatedSection";

const About = () => {
  return (
    <section id="about" className="relative">
      <Container>
        <AnimatedSection>
          <SectionHeader title="About Us" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.12} direction="up">
              <InfoCard
                title={item.title}
                description={item.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
