import TeamMemberCard from '@/components/TeamMemberCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { executiveCommittee, leads } from '@/constants/teaminfo'
import React from 'react'

const page = () => {
  return (
  <>
    <SectionHeader title='Executive Committee' className='mt-40 md:mt-45'/>
    <div className='flex flex-wrap justify-center gap-6 px-4 md:px-8 lg:px-16 mt-8'>
      {executiveCommittee.map((item, index) => (
        <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <TeamMemberCard member={item} />
        </div>
      ))}
    </div>

    <SectionHeader title='Standing Committee Leads' className='mt-10 md:mt-50'/>
    <div className='flex flex-wrap justify-center gap-6 px-4 md:px-8 lg:px-16 mt-8 mb-32'>
      {leads.map((item, index) => (
        <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
          <TeamMemberCard member={item} />
        </div>
      ))}
    </div>
  </>
  )
}

export default page