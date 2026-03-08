"use client";

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import BentoCard from './ui/BentoCard';
import { projectsData } from '@/constants';
import Link from 'next/link';
import AnimatedSection from './ui/AnimatedSection';

const Projects = () => {
  const [p1, p2, p3, p4, p5] = projectsData;

  return (
    <section id="projects" className="relative">
      <Container>
        <AnimatedSection>
          <SectionHeader title="Flagship Projects" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto">

          {/* CodeSprint */}
          <AnimatedSection delay={0.1} className="md:col-span-3 md:row-span-2 order-1">
            <BentoCard className="h-[400px] md:h-full">
              <img
                src={p1.image.startsWith('http') ? p1.image : `/images/flagships/${p1.image}`}
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
          </AnimatedSection>

          {/* MicroMaze */}
          <AnimatedSection delay={0.2} direction="right" className="md:col-span-3 order-2">
            <BentoCard className="h-[300px] md:h-[250px]">
              <img
                src={p2.image.startsWith('http') ? p2.image : `/images/flagships/${p2.image}`}
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
          </AnimatedSection>

          {/* CodeRally */}
          <AnimatedSection delay={0.3} direction="right" className="md:col-span-3 order-3">
            <BentoCard className="h-[300px] md:h-[250px]">
              <img
                src={p3.image.startsWith('http') ? p3.image : `/images/flagships/${p3.image}`}
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
          </AnimatedSection>

          {/* Sherlock */}
          <AnimatedSection delay={0.15} direction="left" className="md:col-span-4 order-4">
            <BentoCard className="h-[300px] md:h-[180px]">
              <img
                src={p5.image.startsWith('http') ? p5.image : `/images/flagships/${p5.image}`}
                alt={p5.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 md:hidden transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent md:hidden"></div>

              <img
                src={p5.image.startsWith('http') ? p5.image : `/images/flagships/${p5.image}`}
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
          </AnimatedSection>

          {/* Ignite */}
          <AnimatedSection delay={0.25} direction="right" className="md:col-span-2 order-5">
            <BentoCard className="h-[300px] md:h-[180px]">
              <img
                src={p4.image.startsWith('http') ? p4.image : `/images/flagships/${p4.image}`}
                alt={p4.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 md:hidden transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent md:hidden"></div>

              <img
                src={p4.image.startsWith('http') ? p4.image : `/images/flagships/${p4.image}`}
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
          </AnimatedSection>

        </div>

        <AnimatedSection delay={0.1}>
          <div className="flex justify-center mt-10">
            <Link href="/projects">
              <button className="px-8 py-4 bg-gradient-to-r from-ieee-medium to-ieee-light text-white rounded-xl shadow-lg shadow-ieee-medium/30 font-semibold hover:shadow-xl hover:scale-102 transition-all duration-300 flex items-center gap-2 hover:cursor-pointer">
                <span>View More Projects</span>
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default Projects