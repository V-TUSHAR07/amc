import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useState, useEffect } from "react";
import Section from "./Section";

const Collaboration = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "EVENT TIMELINES";
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const typeEffect = () => {
      if (!isRemoving) {
        // Typing in
        interval = setInterval(() => {
          setDisplayText((prev) => {
            if (currentIndex < fullText.length) {
              currentIndex += 1;
              return fullText.slice(0, currentIndex);
            } else {
              clearInterval(interval);
              setTimeout(() => setIsRemoving(true), 2000); // Wait before removing
              return prev;
            }
          });
        }, 200); // Adjust speed for typing in
      } else {
        // Removing letters
        interval = setInterval(() => {
          setDisplayText((prev) => {
            if (currentIndex > 0) {
              currentIndex -= 1;
              return fullText.slice(0, currentIndex);
            } else {
              clearInterval(interval);
              setIsRemoving(false); // Reset for repeating
              return "";
            }
          });
        }, 400); // Adjust speed for typing out
      }
    };

    typeEffect();
    return () => clearInterval(interval);
  }, [isRemoving]);

  const events = [
    { time: "Day 1, 7:30 AM", title: "Reporting Start" },
    { time: "Day 1, 8:30 AM", title: "Breakfast" },
    { time: "Day 1, 10:00 AM", title: "Inauguration and End of Reporting" },
    { time: "Day 1, 10:45 AM", title: "Tea Break" },
    { time: "Day 1, 11:15 AM", title: "Hackathon Begins" },
    { time: "Day 1, 1:00 PM - 2:00 PM", title: "Lunch Break" },
    { time: "Day 1, 4:30 PM - 5:00 PM", title: "Tea Break" },
    { time: "Day 1, 5:00 PM", title: "Review 1" },
    { time: "Day 1, 8:30 PM - 9:30 PM", title: "Dinner" },
    { time: "Day 1, 11:00 PM", title: "Review 2" },
    { time: "Day 2, 1:00 AM", title: "Zumba and Tea Break" },
    { time: "Day 2, 4:00 AM", title: "Tea Break" },
    { time: "Day 2, 5:00 AM", title: "Review 3" },
    { time: "Day 2, 6:00 AM", title: "Yoga Session" },
    { time: "Day 2, 8:30 AM - 9:30 AM", title: "Breakfast" },
    { time: "Day 2, 11:15 AM", title: "End of Hackathon and Final Review" },
    { time: "Day 2, 11:15 AM - 12:00 PM", title: "Cultural Events" },
    { time: "Day 2, 12:00 PM", title: "Results" },
  ];

  return (
    <Section crosses id="timeline">
      <div className="container lg:flex">
        <div className="container">
          <motion.h2
            className="h1 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displayText}
          </motion.h2>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="w-full py-10 flex flex-col items-center">
            {/* <div className="relative w-full max-w-4xl">
              <div className="relative w-full max-w-4xl">
                <div className="space-y-12">
                  {events.map((event, index) => (
                    <motion.div
                      className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-8"
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2, // Stagger animation for each event
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <div className="h-36 w-44 bg-transparent border-4 border-purple-500 text-purple-500 flex items-center justify-center rounded-full">
                          <span className="text-sm text-center break-words px-2">
                            {event.time}
                          </span>
                        </div>
                        <div className="w-1 h-9 bg-purple-500"></div>
                      </div>

                      <motion.div
                        className="p-6 rounded-lg shadow-lg w-full lg:w-96 bg-purple-600 text-white"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + 0.1, // Slightly staggered effect for content box
                          ease: "easeOut",
                        }}
                      >
                        <h3 className="text-2xl font-semibold mb-2">
                          {event.title}
                        </h3>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div> */}
            <h1 className="h5 border-purple-500 text-purple-500 gg-purple">Will Be Announced Shortly</h1>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
