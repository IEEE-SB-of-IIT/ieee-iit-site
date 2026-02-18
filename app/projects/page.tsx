import ProjectCard from "@/components/ProjectCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/constants/projectinto";
import { executiveCommittee, leads } from "@/constants/teaminfo";
import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-4">
      <SectionHeader title="Our Projects" className="mt-40 md:mt-45" />

      <div className="flex flex-wrap justify-center gap-6 mt-10 mb-10">
        {projects.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
