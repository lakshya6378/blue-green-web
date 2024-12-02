import React from 'react'
import Section from './Section'
import Button from './Button';
import { gradient } from '../assets';
const TagDescription = () => {
  return (
    <Section className="relative"crosses >
      <div className="container">
        <div className="relative max-w-[43.125rem] mx-auto py-8 md:py-14">
          <div className="relative text-center z-1">
            <h1 className="h1 mb-4">
              No DevOps team?
              <br /> No problem.
            </h1>
            <p className="body-1 text-2xl max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Enjoy full DevOps support at zero extra cost.
            </p>
            {/* <Button href="/pricing" white>
              Get Started
            </Button> */}
          </div>
          <div className="absolute top-1/2 left-1/2 w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[39.25rem] h-[39.25rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[30.625rem] h-[30.625rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[21.5rem] h-[21.5rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[13.75rem] h-[13.75rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-color-dodge pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <img
                alt="Gradient"
                loading="lazy"
                width="942"
                height="942"
                decoding="async"
                data-nimg="1"
                className="inline-block align-top opacity-0 transition-opacity opacity-100 w-full"
                src={gradient}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default TagDescription