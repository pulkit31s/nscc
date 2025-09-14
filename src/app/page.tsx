"use client"

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-2'
import { TeamGrid } from '@/components/card-grid'
import { TimelineDemo } from '@/components/time-line-demo'
import dynamic from 'next/dynamic'

const SpotlightHero = dynamic(() => import('@/components/spotlight-hero').then(mod => ({ default: mod.SpotlightHero })), { ssr: false })

const Page = () => {
  return (
    <div className='relative min-h-screen'>
      {/* <Navbar /> */}
      <SpotlightHero />
      <TeamGrid />
      <TimelineDemo />
      <FeaturesSectionDemo />
      <Footer />
    </div>
  )
}

export default Page