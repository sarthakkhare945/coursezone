import { motion } from "framer-motion";
import { IoBookmarkOutline, IoRocketOutline } from "react-icons/io5";
import { PiNotebook } from "react-icons/pi";
import { useEffect, useRef } from "react";

const MotionSlider = () => {
  const slides = [
    {
      icon: <IoRocketOutline className="text-yellow-500" size={30} />,
      title: "Hands-On Learning Experience",
      description:
        "Courses are crafted by industry experts to ensure high-quality, up-to-date content.",
    },
    {
      icon: <PiNotebook className="text-yellow-500" size={30} />,
      title: "Apply: Build, Play, Create",
      description:
        "Build projects and play in interactive playgrounds—all in your browser.",
    },
    {
      icon: <IoBookmarkOutline className="text-yellow-500" size={30} />,
      title: "Grow: Elevate Your Career",
      description:
        "Upskill through CodeHelp and achieve career success with industry support.",
    },
  ];

  const containerRef = useRef(null);

  // Auto-scroll loop logic
  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        container.scrollTop += 1;

        // If scrolled to bottom, reset
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight
        ) {
          container.scrollTop = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30); // smaller interval = smoother

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-5 sm:p-10 md:p-24 w-full  text-white flex h-auto md:h-[90vh]">
      <div className="flex flex-col md:flex-row mx-auto border border-gray-700 w-[90%] rounded-xl gap-8 p-5">
        {/* Info Section */}
        <div className="order-1 md:order-2 w-full md:w-[40%] flex flex-col justify-center gap-5">
          <h2 className="text-xl font-semibold">What is CourseZone?</h2>
          <p className="text-gray-300">
            CourseZone is a platform designed to help developers hone their
            programming skills through hands-on learning. We provide interactive
            courses and challenges that range from basic to advanced levels.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex mt-4 bg-[#ee5253] py-3 px-4 w-fit rounded-lg text-white font-semibold"
          >
            Learn More
          </motion.button>
        </div>

        {/* Slider Section */}
        <div className="order-2 md:order-1 w-full md:w-[60%] flex justify-center items-center">
          <div
            ref={containerRef}
            className="h-[400px] md:h-[400px] overflow-y-hidden flex flex-col gap-6"
          >
            {[...slides, ...slides].map((slide, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center min-h-[150px]"
              >
                <div className="mb-3">{slide.icon}</div>
                <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
                <p className="text-gray-300 text-sm">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionSlider;
