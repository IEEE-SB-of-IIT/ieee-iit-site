import { chapters } from '@/constants'
import React from 'react'
import Container from './ui/Container'
import { Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const Chapters = () => {
  return (
    <section className="py-24 bg-ieee-dark text-white relative overflow-hidden" data-reveal>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ieee-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ieee-medium/20 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-20 items-start">

          {/* Left Side: Bold Typography */}
          <div className="lg:w-[35%] flex flex-col justify-start relative z-10 shrink-0 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter mb-8">
              our <br />
              <span className="text-ieee-blue">chapters</span> <br />
              & societies
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              Explore the diverse technical communities within IEEE IIT. Each chapter focuses on a specific domain, providing specialized knowledge and networking opportunities.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["TECHNICAL", "NETWORKING", "INNOVATION"].map((tag, i) => (
                <div key={i} className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-xs font-semibold tracking-wider">
                  {tag}
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-2 text-lg font-semibold border-b border-ieee-blue pb-1 hover:text-ieee-blue transition-colors w-fit">
              EXPLORE ALL CHAPTERS
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right Side: Chapter Cards Grid */}
          <div className="lg:w-[65%] relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.id}
                  className={cn(
                    "group relative flex flex-col items-center p-6 rounded-3xl bg-white shadow-lg border border-white/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                    index === 0 && "xl:col-span-2"
                  )}
                  style={{ '--hover-color': chapter.color } as React.CSSProperties}
                >
                  <div className="w-full h-20 flex items-center justify-center mb-4 p-3">
                    <img
                      src={`/images/logos/${chapter.icon}`}
                      alt={chapter.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-col items-center w-full">
                    <h4 className="text-sm font-bold text-ieee-dark text-center leading-tight mb-3 group-hover:text-[var(--hover-color)] transition-colors duration-300">
                      {chapter.name}
                    </h4>

                    <div className="w-8 h-1 bg-ieee-dark/20 rounded-full group-hover:w-16 group-hover:bg-[var(--hover-color)] transition-all duration-500 mb-4"></div>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex gap-3">
                    <a
                      href={chapter.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-ieee-lightest text-ieee-blue hover:bg-[var(--hover-color)] hover:text-white transition-all duration-300"
                    >
                      <Instagram size={14} />
                    </a>
                    <a
                      href={chapter.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-ieee-lightest text-ieee-blue hover:bg-[var(--hover-color)] hover:text-white transition-all duration-300"
                    >
                      <Facebook size={14} />
                    </a>
                    <a
                      href={chapter.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-ieee-lightest text-ieee-blue hover:bg-[var(--hover-color)] hover:text-white transition-all duration-300"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>

                  {/* Hover highlight effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Chapters
