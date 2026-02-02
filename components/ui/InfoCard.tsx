import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="ieee-cut-card group">
      <div className="ieee-cut-card__inner">
        <div className="ieee-cut-card__badge">
          <span className="ieee-cut-card__icon" aria-hidden="true"></span>
          <span className="text-xs uppercase tracking-[0.28em] text-ieee-lightest/70">
            IEEE IIT
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-ieee-lightest mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-ieee-lightest/70 leading-relaxed text-sm">
          {description}
        </p>

        <div className="ieee-cut-card__footer">
          <span className="text-xs uppercase tracking-[0.24em] text-ieee-lightest/50">
            Featured
          </span>
          <button className="ieee-cut-card__cta">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
