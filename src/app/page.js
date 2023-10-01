import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AchievementsSections from '@/components/AchievementsSections'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import EmailSection from '@/components/EmailSection'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212]" >
    <Navbar />
    <div className='container mt-24 mx-auto px-12 py-4'>
    <HeroSection />
    <AchievementsSections />
    <AboutSection />
    <ProjectsSection />
    <EmailSection />
    </div>
    <Footer />
  </main>
  )
}

export default page