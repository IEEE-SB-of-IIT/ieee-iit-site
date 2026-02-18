import React from 'react'

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src="/images/image.png"
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-ieee-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
          {project.date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-ieee-dark mb-2 group-hover:text-ieee-blue transition-colors">
          {project.name}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard