"use client"
import ClientsStories from '@/widgets/ClientStories';
import ContactSection from '@/widgets/ContactSection';
import EducationSection from '@/widgets/EducationSection';
import Hero from '@/widgets/Hero';
import LoadingScreen from '@/widgets/LoadingScreen';
import ProjectSection from '@/widgets/ProjectShowSection';
import QualityServices from '@/widgets/QualityService';
import React, { useEffect, useState } from 'react'

const HomeWrapper = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        
        const timer = setTimeout(() => {
            setLoading(false);
           
        }, 4000); // Adjust the timing as needed

        return () => clearTimeout(timer);
    }, []);

    return (

        <div className={`w-full relative ${loading ? "h-[100vh] -top-16 " : ""}`}>


            {loading && <div className='fixed  h-[100vh] w-full z-30 '>
                <LoadingScreen />
            </div>}
            
            <Hero />
            <QualityServices />
            <ClientsStories/>
            <ProjectSection />
            <EducationSection />
            <ContactSection/>
        </div>
    )
}

export default HomeWrapper