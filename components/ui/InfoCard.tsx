import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
      <h3 className="text-xl font-bold text-ieee-medium mb-4 uppercase group-hover:text-ieee-dark transition-colors">
        {title}
      </h3>
      <p className="text-ieee-dark/80 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
