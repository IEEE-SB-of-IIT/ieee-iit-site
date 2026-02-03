import TeamMemberCard from '@/components/TeamMemberCard'
import Container from '@/components/ui/Container'
import { executiveCommittee, leads } from '@/constants/teaminfo'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className="bg-white">
      {/* Hero Section - Compact & Bold */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-ieee-blue/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-ieee-medium/20 rounded-full blur-[120px]" />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-ieee-dark text-5xl md:text-7xl lg:text-8xl">
              the <span className="text-ieee-blue">people</span> behind
              <br />
              our success
            </h1>

            <p className="mt-8 text-ieee-dark/70 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Meet the passionate individuals driving innovation and excellence at IEEE IIT Student Branch.
            </p>

            <div className="flex flex-wrap gap-3 mt-10 justify-center">
              {["LEADERSHIP", "INNOVATION", "COMMUNITY", "EXCELLENCE"].map((tag, i) => (
                <div key={i} className="px-5 py-2 rounded-full border border-ieee-dark/20 bg-ieee-lightest hover:bg-ieee-light/30 transition-colors text-xs font-semibold tracking-wider text-ieee-dark/80">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Executive Committee - Bento Grid Layout */}
      <section className="py-20 relative overflow-hidden" data-reveal>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue/10 rounded-full blur-[120px] pointer-events-none" />

        <Container>
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-ieee-dark">
              Executive <span className="text-ieee-blue">Committee</span>
            </h2>
            <p className="mt-4 text-ieee-dark/60 text-lg max-w-xl">
              The core leadership team steering our student branch towards excellence.
            </p>
          </div>

          {/* Bento Grid - Featured Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured: Chairperson - Full width on mobile, 2 cols on desktop */}
            {executiveCommittee.slice(0, 1).map((item, index) => (
              <div key={index} className="md:col-span-2 lg:row-span-2">
                <div className="h-full">
                  <TeamMemberCard member={item} />
                </div>
              </div>
            ))}

            {/* Vice-Chairperson & Secretary - Side by side */}
            {executiveCommittee.slice(1, 3).map((item, index) => (
              <div key={index + 1} className="lg:col-span-1">
                <TeamMemberCard member={item} />
              </div>
            ))}

            {/* Remaining members */}
            {executiveCommittee.slice(3).map((item, index) => (
              <div key={index + 3} className="lg:col-span-1">
                <TeamMemberCard member={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Standing Committee Leads - Masonry Style */}
      <section className="py-20 bg-ieee-dark text-white relative overflow-hidden" data-reveal>
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ieee-blue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ieee-medium/20 rounded-full blur-[100px] pointer-events-none" />

        <Container>
          {/* Section Header */}
          <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
                Standing Committee <span className="text-ieee-blue">Leads</span>
              </h2>
              <p className="mt-4 text-white/60 text-lg max-w-xl">
                The dedicated leads managing specialized committees and driving our programs.
              </p>
            </div>
            <Link href="#contact">
              <button className="group flex items-center gap-2 text-lg font-semibold border-b border-ieee-blue pb-1 hover:text-ieee-blue transition-colors w-fit">
                JOIN OUR TEAM
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {leads.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid"
                style={{
                  // Varying heights for masonry effect
                  marginTop: index === 0 ? '0' : undefined
                }}
              >
                <TeamMemberCard member={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 relative overflow-hidden" data-reveal>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ieee-blue/10 rounded-full blur-[150px]" />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-ieee-dark mb-6">
              Want to be part of <span className="text-ieee-blue">our team</span>?
            </h2>
            <p className="text-ieee-dark/60 text-lg mb-10">
              Join IEEE IIT Student Branch and be part of a global community of innovators, leaders, and technology enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact">
                <button className="group flex items-center gap-3 px-8 py-4 bg-ieee-dark text-white font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-ieee-blue">
                  GET IN TOUCH
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </Link>
              <Link href="/">
                <button className="group flex items-center gap-2 px-8 py-4 text-ieee-dark font-semibold uppercase tracking-wider border-b-2 border-ieee-blue hover:text-ieee-blue transition-colors">
                  LEARN MORE
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
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
