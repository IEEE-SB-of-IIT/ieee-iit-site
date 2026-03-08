import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
      <div className="mb-4">
        <h3 className="text-2xl font-extrabold text-ieee-medium uppercase tracking-wide group-hover:text-ieee-dark transition-colors duration-300">
          {title}
        </h3>
        <div className="w-12 h-1 bg-ieee-medium rounded-full mt-3 group-hover:w-full transition-all duration-500 ease-out"></div>
      </div>
      <p className="text-ieee-dark/80 leading-relaxed text-base flex-grow">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
