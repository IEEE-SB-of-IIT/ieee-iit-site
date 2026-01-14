import React from 'react'
import { ArrowUpRight, Activity } from 'lucide-react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import BentoCard from './ui/BentoCard';
import { projectsData } from '@/constants';

const Projects = () => {
    const [p1, p2, p3, p4, p5] = projectsData;

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-ieee-light/5">
      <Container>
        <SectionHeader title="Flagship Projects" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          
          {/* Main Large Card (Project 1) */}
          <BentoCard className={p1.className}>
             <img 
               src={p1.image} 
               alt={p1.title} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-ieee-dark/90 via-ieee-dark/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-ieee-light font-mono text-sm mb-2 block">{p1.subtitle}</span>
                <h3 className="text-3xl font-bold mb-2">{p1.title}</h3>
                <p className="text-gray-300 max-w-md text-sm mb-4">
                  {p1.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold hover:text-ieee-light transition-colors">
                  View Case Study <ArrowUpRight size={16} />
                </button>
             </div>
          </BentoCard>

          {/* Side Card Top (Project 2) */}
          <BentoCard className="bg-white/40 backdrop-blur-md border border-white/50 h-[250px]">
             <div className="absolute top-0 right-0 w-1/2 h-full">
                <img 
                  src={p2.image} 
                  alt={p2.title} 
                  className="w-full h-full object-cover object-center mask-image-linear-gradient" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ieee-lightest via-transparent to-transparent"></div>
             </div>
             <div className="relative z-10 p-6 h-full flex flex-col justify-center max-w-[60%]">
                <span className="text-ieee-medium font-mono text-xs mb-1">{p2.subtitle}</span>
                <h3 className="text-xl font-bold text-ieee-dark mb-2">{p2.title}</h3>
                <p className="text-ieee-dark/70 text-xs">
                  {p2.description}
                </p>
             </div>
          </BentoCard>

           {/* Side Card Bottom (Project 3) */}
           <BentoCard className="bg-white/40 backdrop-blur-md border border-white/50 h-[250px]">
             <div className="absolute top-0 right-0 w-2/3 h-full">
                <img 
                  src={p3.image} 
                  alt={p3.title} 
                  className="w-full h-full object-cover" 
                />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ieee-lightest"></div>
             </div>
             <div className="relative z-10 p-6 h-full flex flex-col justify-end max-w-[60%]">
                <span className="text-ieee-medium font-mono text-xs mb-1">{p3.subtitle}</span>
                <h3 className="text-xl font-bold text-ieee-dark mb-2">{p3.title}</h3>
                <p className="text-ieee-dark/70 text-xs">
                  {p3.description}
                </p>
             </div>
          </BentoCard>

          {/* Bottom Row Card Left (Project 4) */}
          <BentoCard className={p4.className}>
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
             <div className="relative z-10 p-6 flex flex-row items-center gap-4 h-full">
                 <div className="w-16 h-16 rounded-full bg-ieee-medium/50 flex items-center justify-center border border-white/20">
                    <Activity className="text-ieee-light" />
                 </div>
                 <div>
                    <span className="text-ieee-light font-mono text-xs block mb-1">{p4.subtitle}</span>
                    <h3 className="text-lg font-bold">{p4.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{p4.description}</p>
                 </div>
             </div>
          </BentoCard>

          {/* Bottom Row Card Right (Project 5) */}
          <BentoCard className={p5.className}>
             <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
                <img 
                  src={p5.image} 
                  alt={p5.title} 
                  className="w-full h-full object-cover opacity-80" 
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-ieee-lightest to-transparent"></div>
             </div>
             <div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-[60%]">
                <span className="text-ieee-medium font-mono text-xs mb-1">{p5.subtitle}</span>
                <h3 className="text-2xl font-bold text-ieee-dark mb-2">{p5.title}</h3>
                <p className="text-ieee-dark/70 text-sm">
                  {p5.description}
                </p>
             </div>
          </BentoCard>

        </div>
      </Container>
    </section>
  );
}

export default Projects