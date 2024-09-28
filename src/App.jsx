import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Collaboration from './components/Collaboration';
import Pricing from './components/Pricing';
import CompanyLogos from './components/CompanyLogos';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Collaboration />
        <Pricing />
        <Testimonials/>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App
