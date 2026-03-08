"use client";

import { chapters } from '@/constants'
import React from 'react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import ChapterCard from './ui/ChapterCard'
import AnimatedSection from './ui/AnimatedSection'

const Chapters = () => {
  return (
    <section className="overflow-x-hidden">
      <Container>
        <AnimatedSection>
          <SectionHeader title="Our Chapters" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {chapters.map((chapter, index) => (
            <AnimatedSection key={chapter.id} delay={0.05 + index * 0.08} direction="up">
              <ChapterCard chapter={chapter} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Chapters