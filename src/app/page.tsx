"use client"

import { useEffect } from 'react';
// import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-2'
import { TeamGrid } from '@/components/card-grid'
import { TimelineDemo } from '@/components/time-line-demo'
import dynamic from 'next/dynamic'

const SpotlightHero = dynamic(() => import('@/components/spotlight-hero').then(mod => ({ default: mod.SpotlightHero })), { ssr: false })

const Page = () => {
  useEffect(() => {
    const handlePageHide = () => {
      // Cleanup any resources or connections here to prevent extension port issues
      console.log('Page is being hidden or unloaded');
    };

    const handleBeforeUnload = () => {
      // Additional cleanup
      console.log('Page is about to unload');
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        console.log('Page restored from bfcache');
        // Reinitialize any connections if needed
      }
    };

    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

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