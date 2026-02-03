'use client'

import TeamMemberCard from '@/components/TeamMemberCard'
import Container from '@/components/ui/Container'
import { executiveCommittee, leads } from '@/constants/teaminfo'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main>
      {/* Hero Section - Minimal & Bold */}
      <section className="relative min-h-[50vh] pt-40 pb-20 overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ieee-dark text-white rounded-full mb-8">
              <span className="w-2 h-2 bg-ieee-blue rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider">TEAM 2024/25</span>
            </div>

            <h1 className="font-display font-bold leading-[0.95] tracking-tighter text-ieee-dark text-4xl md:text-5xl lg:text-6xl">
              Meet the Minds Behind
              <br />
              <span className="text-ieee-blue">Innovation</span>
            </h1>

            <p className="mt-8 text-ieee-dark/60 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              The brilliant minds shaping the future of technology at IEEE IIT Student Branch
            </p>
          </div>
        </Container>
      </section>

      {/* Executive Committee Section - DARK */}
      <section className="py-24 bg-ieee-dark text-white relative overflow-hidden" data-reveal>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ieee-blue/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ieee-medium/15 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          {/* Section Label */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-ieee-blue font-bold text-sm tracking-[0.2em] uppercase">Leadership</span>
              <div className="h-px w-full bg-ieee-blue/50 mt-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mt-6">
              Executive Committee
            </h2>
          </div>

          {/* Top Row - 3 Cards Centered (Chairperson, Vice-Chair, Secretary) */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {executiveCommittee.slice(0, 3).map((item, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[320px]">
                <TeamMemberCard member={item} />
              </div>
            ))}
          </div>

          {/* Bottom Row - 4 Cards Centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {executiveCommittee.slice(3).map((item, index) => (
              <div key={index + 3} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[280px]">
                <TeamMemberCard member={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Standing Committee Leads Section - LIGHT */}
      <section className="py-24 relative overflow-hidden" data-reveal>
        <Container>
          {/* Section Label */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-ieee-blue font-bold text-sm tracking-[0.2em] uppercase">Committees</span>
              <div className="h-px w-full bg-ieee-blue/30 mt-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-ieee-dark mt-6">
              Standing Committee Leads
            </h2>
            <p className="mt-4 text-ieee-dark/60 text-lg max-w-xl mx-auto">
              Driving excellence across specialized domains
            </p>
          </div>

          {/* Row 1 - 4 Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {leads.slice(0, 4).map((item, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[280px]">
                <TeamMemberCard member={item} />
              </div>
            ))}
          </div>

          {/* Row 2 - 4 Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {leads.slice(4, 8).map((item, index) => (
              <div key={index + 4} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[280px]">
                <TeamMemberCard member={item} />
              </div>
            ))}
          </div>

          {/* Row 3 - 2 Cards Centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {leads.slice(8).map((item, index) => (
              <div key={index + 8} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[280px]">
                <TeamMemberCard member={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Join CTA - DARK */}
      <section className="py-24 bg-ieee-dark text-white relative overflow-hidden" data-reveal>
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ieee-blue/20 rounded-full blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              Be Part of Something <span className="text-ieee-blue">Great</span>
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
              Join IEEE IIT Student Branch and unlock opportunities in the global tech community.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <Link href="#contact">
                <button className="group flex items-center gap-3 px-8 py-4 bg-white text-ieee-dark font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-ieee-blue hover:text-white">
                  Join Now
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </Link>
              <Link href="/">
                <button className="group flex items-center gap-2 px-8 py-4 text-white font-semibold uppercase tracking-wider rounded-full border-2 border-white/20 hover:border-ieee-blue hover:text-ieee-blue transition-all">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default page
