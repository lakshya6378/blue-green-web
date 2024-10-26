import React from 'react'
import Section from './Section'
import Heading from './Heading';

const StateSection = () => {
  return (
    <Section crosses>
      <div className="container">
        <div className=" max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center">
          <h2 className="h2">
            Optimize Performance,
            <br />
            Minimize Costs
          </h2>
          <p className="body-1 mt-4 text-n-4">
            Leverage our expert-driven solutions to maximize efficiency and
            scale without the overhead.
          </p>
        </div>
        <div className=" flex-row justify-center gap-7 lg:flex ">
          <div className=" mb-7 flex-1 ">
            <div className=" relative p-0.5 bg-gradient-to-b from-color-2/80 from-[4.5rem] via-color-1/40 via-[9rem] to-n-1/15 rounded-3xl h-full">
              <div className="py-10 px-10 bg-n-8 rounded-[1.375rem] flex flex-col gap-3  h-full ">
                <div className="text-[2.5rem] leading-none font-bold">50%</div>

                <h4 className="h5 leading-none pb-2">Cost reduction</h4>
                <p className="body-2 ">
                  Upto 50% reduction in your current infrastructure cost,
                  ensuring high performance without the hefty price tag.
                </p>
              </div>
              <div className="absolute top-0 right-0 bg-n-8">
                <svg width="72" height="72" viewBox="0 0 72 72">
                  <path
                    fill="#0E0C15"
                    stroke="#FFC876"
                    strokeWidth="2"
                    strokeOpacity=".8"
                    d="M-1176,1 L6.15,1 C13.89,1 21.35,3.89547 27.06,9.11714 L60.91,40.0541 C67.34,45.9271 71,54.2315 71,62.937 L71,444 C71,461.121 57.12,475 40,475 L-1176,475 C-1193.1209,475 -1207,461.121 -1207,444 L-1207,32 C-1207,14.8792 -1193.1208,1 -1176,1 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className=" mb-7 flex-1">
            <div className=" relative p-0.5 bg-gradient-to-b from-color-2/80 from-[4.5rem] via-color-1/40 via-[9rem] to-n-1/15 rounded-3xl h-full">
              <div className="py-10 px-10 bg-n-8 rounded-[1.375rem] flex flex-col gap-3 h-full">
                <div className="text-[2.5rem] leading-none font-bold">24/7</div>

                <h4 className="h5 leading-none pb-2">expert DevOps support</h4>
                <p className="body-2">
                  keeping your systems optimized and running smoothly around the
                  clock.
                </p>
              </div>
              <div className="absolute top-0 right-0 bg-n-8">
                <svg width="72" height="72" viewBox="0 0 72 72">
                  <path
                    fill="#0E0C15"
                    stroke="#FFC876"
                    strokeWidth="2"
                    strokeOpacity=".8"
                    d="M-1176,1 L6.15,1 C13.89,1 21.35,3.89547 27.06,9.11714 L60.91,40.0541 C67.34,45.9271 71,54.2315 71,62.937 L71,444 C71,461.121 57.12,475 40,475 L-1176,475 C-1193.1209,475 -1207,461.121 -1207,444 L-1207,32 C-1207,14.8792 -1193.1208,1 -1176,1 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-7 flex-1">
            <div className=" relative p-0.5 bg-gradient-to-b from-color-2/80 from-[4.5rem] via-color-1/40 via-[9rem] to-n-1/15 rounded-3xl h-full">
              <div className="py-10 px-10 bg-n-8 rounded-[1.375rem] flex flex-col gap-3 h-full">
                <div className="text-[2.5rem] leading-none font-bold">₹0</div>

                <h4 className="h5 leading-none pb-2">
                  spent on DevOps staffing
                </h4>
                <p className="body-2">
                  with our all-inclusive service handling everything at no
                  additional cost.
                </p>
              </div>
              <div className="absolute top-0 right-0 bg-n-8">
                <svg width="72" height="72" viewBox="0 0 72 72">
                  <path
                    fill="#0E0C15"
                    stroke="#FFC876"
                    strokeWidth="2"
                    strokeOpacity=".8"
                    d="M-1176,1 L6.15,1 C13.89,1 21.35,3.89547 27.06,9.11714 L60.91,40.0541 C67.34,45.9271 71,54.2315 71,62.937 L71,444 C71,461.121 57.12,475 40,475 L-1176,475 C-1193.1209,475 -1207,461.121 -1207,444 L-1207,32 C-1207,14.8792 -1193.1208,1 -1176,1 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default StateSection