import React from 'react'
import { ArrowUpRight, Activity, SendHorizonal, ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import BentoCard from './ui/BentoCard';
import { projectsData } from '@/constants';
import Link from 'next/link';

const Projects = () => {
    const [p1, p2, p3, p4, p5] = projectsData;

  return (
    <section id="projects" className="relative" data-reveal>
      <Container>
        <SectionHeader title="Flagship Projects" />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto">
          
          {/* CodeSprint */}
          <BentoCard className="md:col-span-3 md:row-span-2 h-[400px] md:h-auto order-1">
             <img 
               src={`/images/flagships/${p1.image}`} 
               alt={p1.title} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950/80 via-gray-950/40 to-transparent">
                <span className="text-white text-xs mb-1 block">{p1.subtitle}</span>
                <h3 className="text-3xl font-bold text-white mb-2">{p1.title}</h3>
                <p className="text-white/70 text-sm mb-3 max-w-md">
                  {p1.description}
                </p>
                <Link href="https://codesprint.lk" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-ieee-blue transition-colors hover:cursor-pointer"> 
                    Visit Website <ArrowUpRight size={16} />
                  </button>
                </Link>
             </div>
          </BentoCard>

          {/* MicroMaze */}
          <BentoCard className="md:col-span-3 h-[300px] md:h-[250px] order-2">
             <img 
               src={`/images/flagships/${p2.image}`} 
               alt={p2.title} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/70 via-transparent to-transparent"></div>
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950/80 via-gray-950/50 to-transparent">
                <span className="text-white text-xs mb-1 block">{p2.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{p2.title}</h3>
                <p className="text-white/70 text-sm w-70">
                  {p2.description}
                </p>
             </div>
          </BentoCard>

          {/* CodeRally */}
          <BentoCard className="md:col-span-3 h-[300px] md:h-[250px] order-3">
             <img 
               src={`/images/flagships/${p3.image}`}
               alt={p3.title} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/70 via-transparent to-transparent"></div>
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950/80 via-gray-950/50 to-transparent">
                <span className="text-white text-xs mb-1 block">{p3.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{p3.title}</h3>
                <p className="text-white/70 text-sm w-70">
                  {p3.description}
                </p>
             </div>
          </BentoCard>

          {/* Sherlock */}
          <BentoCard className="md:col-span-4 h-[300px] md:h-[180px] order-4">
             <img 
               src={`/images/flagships/${p5.image}`}
               alt={p5.title} 
               className="absolute inset-0 w-full h-full object-cover opacity-80 md:hidden transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent md:hidden"></div>
             
             <img 
               src={`/images/flagships/${p5.image}`}
               alt={p5.title} 
               className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
             />
             
             <div className="hidden md:block absolute left-0 top-0 h-full w-3/8 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950/80 via-gray-950/40 to-transparent md:hidden">
                <span className="text-white text-xs mb-1 block">{p5.subtitle}</span>
                <h3 className="text-xl font-bold text-white mb-2">{p5.title}</h3>
                <p className="text-white/70 text-sm max-w-md">
                  {p5.description}
                </p>
             </div>
             
             <div className="hidden md:flex relative z-10 p-6 h-full flex-col justify-center max-w-[30%]">
                <span className="text-white text-xs mb-1">{p5.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{p5.title}</h3>
                <p className="text-white/70 text-sm">
                  {p5.description}
                </p>
             </div>
          </BentoCard>

          {/* Ignight */}
          <BentoCard className="md:col-span-2 h-[300px] md:h-[180px] order-5">
             <img 
               src={`/images/flagships/${p4.image}`}
               alt={p4.title} 
               className="absolute inset-0 w-full h-full object-cover opacity-80 md:hidden transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent md:hidden"></div>
             
             <img 
               src={`/images/flagships/${p4.image}`}
               alt={p4.title} 
               className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
             />
             
             <div className="hidden md:block absolute right-0 top-0 h-full w-5/7 bg-gradient-to-l from-gray-950 via-gray-950/90 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950/80 via-gray-950/40 to-transparent md:hidden">
                <span className="text-white text-xs mb-1 block">{p4.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{p4.title}</h3>
                <p className="text-white/70 text-sm">
                  {p4.description}
                </p>
             </div>
             
             <div className="hidden md:flex relative z-10 p-6 h-full flex-col justify-center ml-auto max-w-[50%] text-right">
                <span className="text-white text-xs mb-1">{p4.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{p4.title}</h3>
                <p className="text-white/70 text-sm">
                  {p4.description}
                </p>
             </div>
          </BentoCard>

        </div>

        <div className="flex justify-center mt-10">
          <button className="group relative overflow-hidden px-8 py-4 rounded-[22px] border border-ieee-light/60 bg-ieee-lightest/70 text-ieee-dark font-semibold transition-all duration-300 shadow-[0_16px_40px_rgba(0,98,155,0.18)] hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,98,155,0.28)]">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,98,155,0.25),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ieee-blue/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="relative z-10 flex items-center gap-3">
              View More Projects
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ieee-light/60 bg-ieee-lightest/80 text-ieee-blue transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Projects
