import React from 'react'
import Section from '../components/Section'
import Heading from '../components/Heading'
import { featurespageimage } from '../assets';
import Features from '../components/Features';

const Services = () => {
  return (
    <>
      <Section crosses>
        <div className="container relative z-2 md:grid md:grid-cols-2 md:items-center md:gap-10 lg:gap-48">
          <div className="max-w-[50rem]  mb-12 md:text-left lg:mb-20 md:mt-12 lg:max-w-[30rem] lg:mt-20">
            <h2 className="h2">Your Vision, Our Expertise</h2>
            <p className="h5 mt-2 text-n-4">
              From strategy to execution, explore services crafted to meet your
              unique challenges and goals.
            </p>
          </div>
          <div className="relative">
            <img
              alt="services image"
              className="inline-block align-top  transition-opacity opacity-100 w-full md:min-w-[125%] xl:min-w-full"
              src={featurespageimage}
            />
          </div>
        </div>
      </Section>
      <Features/>
    </>
  );
}

export default Services