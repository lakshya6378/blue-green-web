import React, { useEffect, useRef, useState } from 'react'
import Section from './Section'
import Heading from './Heading'
import { testimonials } from '../constants';


const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const previousSlide=()=>{
    if(current===0) setCurrent(testimonials.length-1);
    else setCurrent(current-1);
  }
  const nextSlide=()=>{
    if (current === testimonials.length - 1) setCurrent(0);
    else setCurrent(current+1);
  }

  const handleInteraction = (index) => {
    clearInterval(intervalRef.current); // Stop the auto-play
    clearTimeout(timeoutRef.current); // Clear the pause timeout

    setCurrent(index); // Move to clicked slide
    setIsPaused(true); // Pause auto-play

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false); // Resume auto-play after 10 seconds
    }, 10000); // 10-second pause
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // 5-second interval
    }

    // Clear interval on cleanup
    return () => clearInterval(intervalRef.current);
  }, [current, isPaused]);
   
   

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="testimonials"
    >
      <div className="container">
        <Heading title="Client Success Stories" />

        <div className="container mx-auto">
          <div className=" relative p-0.5 bg-gradient-to-b from-color-2/80 from-[4.5rem] via-color-1/40 via-[9rem] to-n-1/15 rounded-3xl">
            <div className="pt-20 px-5 py-10 bg-n-8 rounded-[1.375rem] md:pt-20 md:px-20 mb:pb-16 lg:py-28 lg:pr-48">
              <div className="overflow-hidden">
                <ul
                  className={`flex transition ease-out duration-400 `}
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {testimonials.map((item) => (
                    <li key={item.id - 1} className="flex-shrink-0 w-full">
                      <div className="flex flex-col lg:flex-row lg:items-start">
                        <div className="quote mb-6 md:mb-12 lg:mb-0 lg:text-[1.75rem] lg:leading-[2.25rem]">
                          {item.text};
                        </div>
                        <div className="flex items-center mt-auto lg:block lg:mt-0 lg:ml-20">
                          <div className="w-20 mr-6 lg:w-40 lg:mr-0 lg:mb-11">
                            <img
                              className="inline-block align-top  transition-opacity opacity-100 w-full rounded-2xl"
                              src={item.imageUrl}
                              alt="profilephoto"
                              width={160}
                              height={160}
                            />
                          </div>
                          <div>
                            <div className="h6">{item.name}</div>
                            <div className="caption text-n-1/25">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center mt-10 -mx-2 md:mt-12 md:justify-start lg:absolute lg:top-0 lg:right-20 lg:h-full lg:flex-col lg:justify-center lg:m-0">
                {testimonials.map((item) => (
                  <button
                    key={item.id}
                    className="relative w-6 h-6 mx-2 lg:my-2 lg:mx-0"
                    onClick={() => handleInteraction(item.id - 1)}
                  >
                    <span
                      className={`absolute inset-0 ${
                        current === item.id - 1 ? "bg-conic-gradient" : ""
                      } rounded-full transition-opacity opacity-100`}
                    ></span>
                    <span className="absolute inset-0.25 bg-n-8 rounded-full">
                      <span className="absolute inset-2 bg-n-1 rounded-full"></span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute -top-14 left-0 z-2 font-code text-[11.25rem] text-color-1 leading-none md:left-12">
              “
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
    </Section>
  );
}

export default Testimonials