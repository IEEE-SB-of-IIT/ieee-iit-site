"use client";

import TeamMemberCard from "@/components/TeamMemberCard";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { executiveCommittee, leads } from "@/constants/teaminfo";
import React from "react";

const TeamPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-4">
      <AnimatedSection>
        <SectionHeader title="Executive Committee" className="mt-40 md:mt-45" />
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {executiveCommittee.map((item, index) => (
          <AnimatedSection
            key={index}
            delay={0.05 + (index % 4) * 0.1}
            direction="up"
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <TeamMemberCard member={item} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <SectionHeader
          title="Standing Committee Leads"
          className="mt-10 md:mt-50"
        />
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-32">
        {leads.map((item, index) => (
          <AnimatedSection
            key={index}
            delay={0.05 + (index % 4) * 0.1}
            direction="up"
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <TeamMemberCard member={item} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
