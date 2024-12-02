import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brainwaveSymbol, check, mongodb } from "../assets";
import { collabApps, collabContent, collabText ,connectingservices} from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";


const Collaboration = () => {
  return (
    <Section crosses>
      <Heading className="md:max-w-md lg:max-w-2xl" title="Why Choose Us?" />
      <div className="container">
        <div className="">
          <ul className="grid sm:grid-cols-2 gap-x-10 mb-10 md:mb-14 md:m-auto">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className=" xl:w-[50rem]  flex  gap-x-20 pt-7">
          <p className="body-1 mb-8 text-n-4 sm:mb-16 lg:mb-32  lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 ">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {connectingservices.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <div className="flex items-center mt-auto">
                      <div
                        className={`flex items-center justify-center h-[50px] rounded-md  p-0.5 w-[50px]`}
                        style={{
                          backgroundColor: `${app.bgcolor}`,
                        }}
                      >
                        {app.id != 3 ? (
                          <FontAwesomeIcon
                            stroke=" #63666A"
                            strokeWidth={"4%"}
                            icon={`${app.iconUrl} `}
                            color={"white"}
                            size="xl"
                            fill="none"
                          />
                        ) : (
                          <img src={mongodb} alt="mongologo" />
                        )}
                      </div>

                      {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
