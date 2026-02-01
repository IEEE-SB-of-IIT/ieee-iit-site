import { chapters } from '@/constants'
import React from 'react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import ChapterCard from './ui/ChapterCard'

const Chapters = () => {
  return (
    <section className="overflow-x-hidden" data-reveal>
      <Container>
        <SectionHeader title="Our Chapters" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Chapters
