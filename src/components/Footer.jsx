import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing location icon from react-icons

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="contact">
      <div className="container flex sm:justify-between justify-center items-center gap-16 max-sm:flex-col">
        <div className="text-center lg:text-left text-n-4">
          <h1 className="font-semibold text-2xl text-white mb-2 ">
            About AMC Institutions
          </h1>
          <a
            href="https://www.google.com/maps?q=AMC+Engineering+College" // replace with the correct URL for the map
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-900 text-white rounded-full transition-all duration-300 hover:bg-purple-600 hover:scale-105"
          >
            <FaMapMarkerAlt className="text-xl" />
            <span className="text-lg">View on Map</span>
          </a>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>

        <div className="text-left grid grid-cols-2 gap-10 p-4  rounded-lg shadow-md">
          <div>
            <h3 className="font-semibold text-lg mb-2">Faculty Coordinator</h3>
            <p className="mb-8 text-gray-300 mt-9">
              Mrs. Veena Bhat: 9901160630
            </p>
            <p className="mb-8 text-gray-300">Dr. Sridhar CS: 9980055330</p>
            <p className="mb-8 text-gray-300">Mr. Sanjeevan K: 8088956959</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Student Coordinator</h3>
            <p className="mb-8 text-gray-300 mt-9">Vishnu M R: 7899356719</p>
            {/* <p className="mb-8 text-gray-300">Sri Sandhya: 8431723586</p> */}
            <p className="mb-8 text-gray-300">Arushi Arunkumar: 9902110945</p>
            {/* <p className="mb-8 text-gray-300">Ekta Kumari: 7870810384</p> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
