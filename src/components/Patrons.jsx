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
import patrons from '../assets/chief_patrons/patrons.png'
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Patrons" />
        <img src={patrons} style={{width:"200vw"}} alt="patrons" />

      </div>
    </Section>
  );
};

export default Services;
