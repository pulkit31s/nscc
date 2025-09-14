import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-2'
import { TeamGrid } from '@/components/card-grid'
import { SpotlightHero } from '@/components/spotlight-hero'
import { TimelineDemo } from '@/components/time-line-demo'

const Page = () => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <SpotlightHero />
      <TeamGrid />
      <TimelineDemo />
      <FeaturesSectionDemo />
      <Footer />
    </div>
  )
}

export default Page