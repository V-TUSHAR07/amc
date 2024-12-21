import Section from "./Section";
import Heading from "./Heading";
import chief_patrons from '../assets/chief_patrons/chief_patrons.png'

const Services = () => {
  return (
    <Section id="patrons">
      <div className="container">
        <Heading title="Chief Patrons" />
       <img src={chief_patrons} style={{width:"200vw"}} alt="chief_patrons" />
      </div>
    </Section>
  );
};

export default Services;
