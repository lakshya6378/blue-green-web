import React, { useState } from 'react'
import Section from './Section'
import {faqData} from '../constants'
const FrequentQuestions = () => {
     const [showanswer, setShowanswer] = useState(false);
     const [contentid, setcontentid] = useState();
  return (
    <Section>
      <div className="container lg:flex">
        <div className="max-w-[50rem] mx-auto mb-12 md:text-center lg:text-left lg:mb-20 lg:min-w-[22.75rem] lg:mr-12 lg:pt-8 xl:min-w-[32.75rem]">
          <h2 className="h2">Frequently asked questions</h2>
          <p className="body-2 mt-4 text-n-4">
            Haven't found what you're looking for?{" "}
            <a
              className="text-n-1 hover:text-color-2"
              href="mailto:agarwallakshya99@gmail.com"
            >
              Contact us
            </a>
          </p>
        </div>
        <div className="-mt-8 lg:mt-0">
          {faqData.map((item) => (
            <div className="py-8 border-b border-n-1/5" key={item.id}>
              <div className="flex items-start justify-between cursor-pointer">
                <div className="text-[1.25rem] leading-8">
                  {item.question}
                </div>
                <div
                  className="relative w-6 h-6 mt-1 ml-10"
                  onClick={() => {
                    setcontentid(item.id);
                     showanswer&&contentid===item.id?setShowanswer(false):setShowanswer(true);
                  }}
                >
                  <div className="absolute top-[0.6875rem] left-1 w-4 h-0.5 bg-n-1 rounded-sm"></div>
                  <div
                    className={`absolute top-[0.6875rem] left-1 w-4 h-0.5 bg-n-1 rounded-sm transition-transform ${
                      showanswer && contentid === item.id ? "" : "rotate-90"
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className={`grid  transition-all ${
                  showanswer && contentid === item.id
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                } `}
              >
                <div className="body-2 text-n-3 overflow-hidden">
                  <div className="pt-6">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FrequentQuestions