import React, { useState } from "react";
import { discountpercentage } from "../constants";
import { smallSphere, stars } from "../assets";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";
import { LeftLine, RightLine } from "../components/design/Pricing";
import Section from "../components/Section";
import CompareList from "../components/CompareList";
import FrequentQuestions from "../components/FrequentQuestions";
const PricingPage = () => {
  const [duration, setduration] = useState("monthly");
  return (
    <>
      <Section className="overflow-hidden" id="pricing">
        <div className="container relative z-2">
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img
              src={smallSphere}
              className="relative z-1 "
              width={255}
              height={255}
              alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="stars"
              />
            </div>
          </div>
          <Heading
            tag="Affordable Solutions for Every Stage of Your Growth"
            title="Pay As You Go"
          />
          <div className="w-[19rem] mx-auto mb-10 p-0.25 bg-gradient-to-b from-[#D77DEE]/90 to-n-1/15 rounded-xl">
            <div className="flex p-[0.1875rem] bg-n-8 rounded-[0.6875rem]">
              <button
                className={`button flex-1 h-10 rounded-lg transition-colors ${
                  duration === "monthly" ? "bg-n-6" : ""
                }`}
                onClick={() => {
                  setduration("monthly");
                }}
              >
                monthly
              </button>
              <button
                className={`button flex-1 h-10 rounded-lg transition-colors ${
                  duration === "annually" ? "bg-n-6" : ""
                }`}
                onClick={() => {
                  setduration("annually");
                }}
              >
                annually
                <span className="ml-2.5 p-1 bg-color-1 rounded">-{discountpercentage}%</span>
              </button>
            </div>
          </div>
          <div className="relative ">
            <PricingList duration={duration}/>
            <LeftLine />
            <RightLine />
          </div>
          <div className="flex justify-center mt-10"></div>
        </div>
      </Section>
      <CompareList/>
      <FrequentQuestions/>
    </>
  );
};

export default PricingPage;
