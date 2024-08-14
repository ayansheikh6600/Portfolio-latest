import Navbar from '@/layouts/Navbar'
import EducationSection from '@/widgets/EducationSection'
import Hero from '@/widgets/Hero'
import ProjectSection from '@/widgets/ProjectShowSection'
import QualityServices from '@/widgets/QualityService'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      

        <Hero/>
        <QualityServices/>
        <ProjectSection/>
        <EducationSection/>
    </div>
  )
}

export default page