import React from 'react'
import Hero from '../components/Hero';
import Features from '../components/Features';
import Collaboration from '../components/Collaboration';
import StateSection from '../components/StateSection';
import Pricing from '../components/Pricing';
import TagDescription from '../components/TagDescription';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Collaboration />
      <StateSection />
      <Pricing />
      {/* <Testimonials />
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      <TagDescription />
    </>
  );
}

export default Home