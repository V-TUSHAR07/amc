import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Rules & Regulations" />
        <div className="relative">
          <h1 className="h5 border-purple-500 text-purple-500 gg-purple">
            Will Be Announced Shortly
          </h1>

          {/* <p className="body-2 mb-[3rem] text-n-3">
            MUST FOLLOW ALL THE RULES AND REGULATIONS
          </p>
          <ul className="body-2">
            {brainwaveServices.map((item, index) => (
              <li
                key={index}
                className="flex items-start py-4 border-t border-n-6"
              >
                <img width={24} height={24} src={check} />
                <p className="ml-4">{item}</p>
              </li>
            ))}
          </ul> */}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
