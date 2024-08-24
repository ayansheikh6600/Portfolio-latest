"use client"
import EducationSection from '@/widgets/EducationSection';
import Hero from '@/widgets/Hero';
import LoadingScreen from '@/widgets/LoadingScreen';
import ProjectSection from '@/widgets/ProjectShowSection';
import QualityServices from '@/widgets/QualityService';
import React, { useEffect, useState } from 'react'

const HomeWrapper = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
      }, 4000); // Adjust the timing as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
  
      <div className={`w-full relative ${loading ? "h-[100vh] -top-14 overflow-hidden" : ""}`}>
      
        <>
          {loading && <div className='absolute  h-[100vh] w-full z-30 '>
            <LoadingScreen />
          </div>}
          <Hero />
          <QualityServices />
          <ProjectSection />
          <EducationSection /></>
        //
      </div>
    )
}

export default HomeWrapper