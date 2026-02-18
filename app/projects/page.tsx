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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 mb-32">
        {projects.map((item, index) => (
          <div
            key={index}
            className="w-full"
          >
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
