import React from 'react'
import Section from '../components/Section'
import Heading from '../components/Heading'
import { aboutimage } from '../assets'
const About = () => {
  return (
    <Section id="about">
      <div className="container relative z-2 md:grid md:grid-cols-2 md:items-center md:gap-10 lg:gap-48">
        <div className="relative">
          <img
            alt="about image"
            className="inline-block align-top opacity-100 w-full md:min-w-[125%] xl:min-w-full"
            src={aboutimage}
          />
        </div>
        <div className="max-w-[50rem] mx-auto mb-12 md:text-left lg:mb-20 md:mt-12 lg:max-w-[30rem] lg:mt-20">
          <Heading title="About Us" />
          <p className='body-2 text-n-4 mt-3 text-justify'>
            At BlueGreen Web LLP, our mission is to empower your business to
            grow tremendously without the hassle of deploying, managing, and
            scaling your solutions. We believe that your focus should be on
            innovation and driving your business forward, while we take care of
            all your concerns related to releasing and deploying your products.
            <br/><br/>
            Our certified architects expertly handle your infrastructure,
            ensuring that you have a robust, secure, and scalable environment
            tailored to your needs. With our expert team at your side, why worry
            about a dedicated DevOps team? We provide comprehensive support that
            allows you to concentrate on what you do best—creating and
            innovating.
            <br/> <br/>Our goal is to make your journey seamless, enabling you
            to achieve remarkable growth while we handle the complexities of
            cloud management and operations. Together, let’s unlock your full
            potential!
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About