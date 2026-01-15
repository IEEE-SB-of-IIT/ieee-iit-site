import TeamMemberCard from '@/components/TeamMemberCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { executiveCommittee, leads } from '@/constants/teaminfo'
import React from 'react'

const page = () => {
  return (
  <>
    <SectionHeader title='Executive Committee' className='mt-40 md:mt-45'/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 mt-8'>
      {executiveCommittee.map((item, index) => (
        <TeamMemberCard key={index} member={item} />
      ))}
    </div>

    <SectionHeader title='Standing Committee Leads' className='mt-10 md:mt-50'/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16 mt-8 mb-32'>
      {leads.map((item, index) => (
        <TeamMemberCard key={index} member={item} />
      ))}
    </div>
  </>
  )
}

export default page