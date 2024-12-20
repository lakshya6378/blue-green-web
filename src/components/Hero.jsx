// import React, { useRef } from 'react'
// import Section from './Section'
// import {webintroduction} from '../constants'
// import { curve, heroBackground, robot } from '../assets';
// import {cloudai2,cloudai} from '../assets'
// import Button from './Button';
// import { BackgroundCircles,BottomLine, Gradient} from './design/Hero';
// import { heroIcons } from '../constants';
// import { ScrollParallax } from 'react-just-parallax';
// import Generating from './Generating';
// import Notification from './Notification';
// import CompanyLogos from './CompanyLogos';
// const Hero = () => {
//     const parallaxRef=useRef(null);
//   return (
//     <Section
//       className="pt-[12rem] -mt-[5.25rem] h-[100vh]"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings
//       id="hero"
//     >
//       <div className="container relative " ref={parallaxRef}>
//         <div className="relative  z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
//           <h1 className="h1 mb-6">
//             Code your best <br /> We'll handle the rest.
//             {/* <span className="inline-block relative">
//               BlueGreenWeb
//               <img
//                 src={curve}
//                 className="absolute top-full  left-0 w-full xl:-mt-2"
//                 width={600}
//                 height={28}
//                 alt="curve"
//               />
//             </span> */}
//           </h1>
//           <p className="body-1 text-2xl max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
//             Deploy any service, anytime—starting at just ₹799
//           </p>
//           <Button href="/pricing" white>
//             Get Started
//           </Button>
//         </div>
//         <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//           {/* <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
//             <div className="relative bg-n-8 rounded-[1rem]">
//               <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
//               <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/600]">
//                 <img
//                   className="h-full"
//                   src={cloudai}
//                   width={1024}
//                   height={490}
//                   alt="Cloud"
//                 />
//                 <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 " />
//               </div>
//             </div>
//             <Gradient />
//           </div> */}
//           <div className="absolute  left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
//             <img
//               src={heroBackground}
//               className="w-full"
//               width={1440}
//               height={1800}
//               alt="hero"
//             />
//           </div>
//           <BackgroundCircles />
//         </div>
//       </div>
//       <BottomLine />
//     </Section>
//   );
// }

// export default Hero
import React, { useRef } from "react";
import Section from "./Section";
import { heroBackground } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine } from "./design/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="relative pt-0 h-[100vh] overflow-hidden" id="hero">
      <div
        className="container relative h-full flex flex-col justify-center items-center"
        ref={parallaxRef}
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full">
            <img
              src={heroBackground}
              width={1440}
              height={1800}
              className=" object-cover md:object-contain transform translate-y-[-10%] md:translate-y-[-20%]"
              alt="hero"
            />
          </div>
        </div>

        {/* Heading and Content */}
        <div className="text-center px-4 md:px-8">
          <h1 className="h1 mb-4 md:mb-6 text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-tight">
            Code your best <br /> We'll handle the rest.
          </h1>
          <p className="body-1 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 md:mb-6 text-n-2">
            Deploy any service, anytime—starting at just ₹799
          </p>
        </div>
        <Button href="/pricing" white className="z-20">
          Get Started
        </Button>
        {/* Decorative Circles */}
        <div className="relative z-10">
          <BackgroundCircles />
        </div>
      </div>

      {/* Bottom Line */}
      <BottomLine />
    </Section>
  );
};

export default Hero;
