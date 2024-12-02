import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { pricingComparison } from "../constants";
import { circleHelp } from "../assets";
import { check } from "../assets";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Basic styling for the tooltip
import "tippy.js/animations/shift-away.css";
import { RxCrossCircled } from "react-icons/rx"; // Tippy.js animation for smooth transitions
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompareList = () => {
  return (
    <Section>
      <div className="container">
        <Heading title="Compare plans & features" />
        <div className="-mx-5 px-5 overflow-auto scroll-smooth no-scrollbar relative">
          <table className="table-fixed w-full min-w-[32rem] relative">
            <tbody>
              <tr className="h6">
                <td className="w-[35%] py-4 pr-10">Features</td>
                <td className="p-4 text-center text-color-2">LaunchPad</td>
                <td className="p-4 text-center text-color-1">SkyLine</td>
                <td className="p-4 text-center text-color-3">CloudCommander</td>
              </tr>
              {pricingComparison.map((item) => (
                <tr className="body-2" key={item.id}>
                  <td className="w-[35%] h-[4.75rem] py-2.5 pr-2.5 border-t border-n-1/5">
                    <div className="flex items-center">
                      {item.feature}
                      <div className="flex-shrink-0 ml-3 opacity-30 transition-opacity hover:opacity-100">
                        {/* Tippy.js tooltip wrapping the help icon */}
                        <Tippy
                          content={item.tooltip} // Tooltip content from pricingComparison array
                          animation="shift-away" // Animation style
                          placement="right" // Show the tooltip to the right of the icon
                          duration={250}
                          arrow={false}
                          className="bg-white text-black min-h-[80px] text-base w-[300px]" // Duration for transition
                        >
                          <img
                            alt="Help"
                            loading="lazy"
                            width="24"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            className="inline-block align-top transition-opacity opacity-100"
                            src={circleHelp}
                            style={{ color: "transparent" }}
                          />
                        </Tippy>
                      </div>
                    </div>
                  </td>
                  <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                    {item.LaunchPad === "Yes" ? (
                      <img
                        alt="Check"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="inline-block align-top transition-opacity opacity-100"
                        src={check}
                        style={{ color: "transparent" }}
                      />
                    ) : item.LaunchPad === "No" ? (
                      <FontAwesomeIcon
                        icon="fa-solid fa-circle-xmark"
                        size="xl"
                        style={{ color: "#FF776F" }}
                      />
                    ) : (
                      item.LaunchPad
                    )}
                  </td>
                  <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                    {item.Skyline === "Yes" ? (
                      <img
                        alt="Check"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="inline-block align-top transition-opacity opacity-100"
                        src={check}
                        style={{ color: "transparent" }}
                      />
                    ) : item.Skyline === "No" ? (
                      <FontAwesomeIcon
                        icon="fa-solid fa-circle-xmark"
                        size="xl"
                        style={{ color: "#FF776F" }}
                      />
                    ) : (
                      item.Skyline
                    )}
                  </td>
                  <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                    {item.CloudCommander === "Yes" ? (
                      <img
                        alt="Check"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="inline-block align-top transition-opacity opacity-100"
                        src={check}
                        style={{ color: "transparent" }}
                      />
                    ) : item.CloudCommander === "No" ? (
                      <FontAwesomeIcon
                        icon="fa-solid fa-circle-xmark"
                        size="xl"
                        style={{ color: "#FF776F" }}
                      />
                    ) : (
                      item.CloudCommander
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default CompareList;
