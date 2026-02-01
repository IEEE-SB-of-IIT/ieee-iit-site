import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="glass-surface p-8 group">
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-ieee-medium mb-4 uppercase group-hover:text-ieee-dark transition-colors">
          {title}
        </h3>
        <p className="text-ieee-dark/80 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
