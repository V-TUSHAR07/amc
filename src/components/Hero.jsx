import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import "./hero.css";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 480px)" });
  const isSmallScreen = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 768px)",
  });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1025px) and (max-width: 1440px)",
  });
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1441px)" });

  // Set text size based on screen size
  const textSize = isExtraSmallScreen
    ? "text-5xl" // Mobile portrait
    : isSmallScreen
    ? "text-6xl" // Mobile landscape and small tablets
    : isMediumScreen
    ? "text-8xl" // Tablets
    : isLargeScreen
    ? "text-9xl" // Desktops
    : isExtraLargeScreen
    ? "text-9xl" // Large desktops
    : "text-6xl"; // Default size

  const animationVariant = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
        // stiffness: 80,
      },
    },
    whileHover: {
      scale: 1.1,
      rotate: [0, 2, -2, 0], // Subtle swing effect
      transition: {
        duration: 0.6,
        yoyo: Infinity, // Repeats the animation
      },
    },
  };

  return (
    <Section
      className="pt-[12rem] -mt-[8.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h2 className="h2">AMC ENGINEERING COLLEGE</h2>
          <p className="max-w-2xl mx-auto mb-6  lg:mb-2">
            Affiliated to VTU, Belagavi | Approved by AICTE | NAAC A+ and NBA
            ACCREDITED, Bannerghatta Main Road, Bangalore-560083
          </p>
          <p className="text-1xl font-semibold text-n-2 mb-4">
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </p>
          <h2 className="text-2xl font-bold mb-6 text-primary">Presents</h2>
          <motion.h3
            className={`${textSize} font-extrabold mb-6 text-accent glow-animation`}
            variants={animationVariant}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
          >
            HACKZION{" "}
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute text-[0.5em]" // Smaller size
            >
              V.1
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="relative text-[0.5em]" // Smaller size
            >
              V.2
            </motion.span>
          </motion.h3>

          <p className="text-xl font-medium text-n-2 mb-6">
            Think, Code, Innovate
          </p>
          <p className="text-2xl font-bold mb-6 text-primary">
            A 24 HOURS NATIONAL LEVEL HACKATHON <br />
            <p className="text-2xl font-bold mb-6 text-purple-400">
              {/* 5th & 6th December 2023 */}
              February 2025
            </p>
          </p>
          {/* <Button href="#features" white>
            Know More
          </Button> */}
        </div>

        <div className="relative max-w-[23rem] mx-auto mb:max-w-8xl xl:mt-24">
          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
