import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionSlider = () => {
  // Slide data
  const slides = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 22"
          className="w-6 h-6 fill-chileanFire-500"
        >
          <path
            fillRule="evenodd"
            d="M5.5 1.834a1.833 1.833 0 0 0-1.833 1.833v14.667A1.834 1.834 0 0 0 5.5 20.167h10.083a2.75 2.75 0 0 0 2.75-2.75V4.584a2.75 2.75 0 0 0-2.75-2.75zm3.667 1.833H5.5v14.667h10.083a.917.917 0 0 0 .917-.917V4.584a.917.917 0 0 0-.917-.917h-.916v8.228c0 .825-.998 1.237-1.58.654l-1.17-1.17-1.17 1.17c-.583.583-1.58.17-1.58-.654zm3.666 0H11v6.037l.262-.262a.926.926 0 0 1 1.31 0l.261.262z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      title: "Hands-On Learning Experience",
      description:
        "Emphasize that your courses are crafted by industry experts to ensure high-quality, up-to-date content.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 22"
          className="w-6 h-6 fill-mandy-500"
        >
          <path d="M14.667 2.75c.47 0 .857.354.91.81l.006.107v.916h1.834c.966 0 1.758.748 1.828 1.697l.005.137v11c0 .966-.748 1.758-1.697 1.828l-.136.005H4.583a1.833 1.833 0 0 1-1.828-1.697l-.005-.136v-11c0-.967.748-1.759 1.697-1.829l.136-.005h1.834v-.916a.917.917 0 0 1 1.827-.107l.006.107v.916h5.5v-.916c0-.507.41-.917.917-.917m2.75 8.25H4.583v6.417h12.834zm0-4.583H4.583v2.75h12.834z"></path>
        </svg>
      ),
      title: "Apply: Build, Play, Create",
      description:
        "Bring ideas to life in CodeHelp's Apply. Build projects, play in boot playgrounds—all in your browser.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 22"
          className="w-6 h-6 fill-pastelGreen-500"
        >
          <path d="m16.885 2.564.354.051c.55.087 1.166.233 1.544.612.38.38.526.995.613 1.545l.051.353c.116.834.146 1.928-.051 3.142-.389 2.395-1.664 5.252-4.866 7.466q-.022.246-.015.492l.015.498c.01.332.004.663-.088.98-.174.606-.795 1.005-1.375 1.29l-.284.135-.367.162-.25.1c-.648.248-1.43.421-1.941-.091-.232-.232-.34-.547-.426-.863l-.042-.157a16 16 0 0 0-.52-1.645 3 3 0 0 1-.181.2c-.5.498-1.177.75-1.855.944l-.45.124-.449.119-.438.11-.396.092-.474.1-.296.058a.925.925 0 0 1-1.079-1.079l.102-.505.118-.53.114-.467.206-.775c.204-.751.453-1.526 1.008-2.08l.091-.088-.7-.25-.702-.243c-.412-.136-.845-.279-1.144-.577-.546-.547-.314-1.4-.042-2.07l.152-.354.126-.276c.29-.618.703-1.33 1.36-1.518.317-.092.648-.097.98-.089l.498.017c.165.002.33 0 .492-.016 2.213-3.202 5.071-4.477 7.467-4.866a10.7 10.7 0 0 1 3.14-.05m-2.847 1.86c-2.015.328-4.463 1.407-6.374 4.28-.232.35-.623.515-1.022.578a4 4 0 0 1-.68.046l-.686-.01q-.17-.002-.342.006c-.278.37-.473.81-.618 1.247l1.375.5.565.213c1.034.406 2.035.896 2.805 1.666 1.297 1.297 1.956 2.994 2.433 4.727.418-.146.838-.334 1.194-.6l.005-.342-.01-.684c0-.227.01-.455.046-.682.062-.399.229-.79.577-1.022 2.874-1.91 3.953-4.359 4.28-6.374a8.9 8.9 0 0 0 .045-2.597 5 5 0 0 0-.177-.82 5 5 0 0 0-.82-.176 8.9 8.9 0 0 0-2.596.045m-7.575 9.817c-.321.387-.47.896-.59 1.4l-.1.43-.05.206.636-.149c.504-.12 1.014-.27 1.4-.591a.917.917 0 1 0-1.296-1.296m5.185-6.481a1.833 1.833 0 1 1 2.593 2.594 1.833 1.833 0 0 1-2.593-2.595"></path>
        </svg>
      ),
      title: "Grow: Elevate Your Career",
      description:
        "Climb with CodeHelp's Grow. Upskill through CodeHelp and achieve career success.",
    },
  ];

  return (
    <div className="relative p-5 sm:p-10 md:p-24 w-full bg-black text-white flex h-[90vh]">
      {/* <div className="flex mx-auto border-[1px] w-[90%] rounded-xl"> */}
      <div
        // className="flex mx-auto border-[1px] w-[90%] rounded-xl hover:bg-blue-500 hover:shadow-xl transition-all duration-300"
        className="flex mx-auto hover:border-[1px] w-[90%] rounded-xl"
      >
        {/* Left: Infinite Scroll Cards */}
        <div className="w-[60%] flex flex-col items-center gap-10 overflow-hidden">
          <div className="w-full flex flex-col items-center">
            <motion.div
              className="swiper-wrapper flex flex-col gap-5"
              animate={{
                y: ["0%", "-100%"], // Slide upwards infinitely
              }}
              transition={{
                duration: 15, // Duration for the infinite scroll
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="swiper-slide w-full">
                 
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 self-stretch max-w-[450px] p-5"
                    style={{
                      height: "250px",
                      marginBottom: "20px",
                      borderRadius: "12px",
                      background: "#000",
                    }} // Changed to black (#000)
                  >
                    <div className="flex p-4 justify-center items-center rounded-full border border-neutral-4 bg-black">
                      {slide.icon}
                    </div>
                    <div className="flex flex-col gap-y-2 items-start self-stretch">
                      <p className="text-xl font-semibold">{slide.title}</p>
                      <p className="text-base font-normal">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>


          </div>
        </div>

        {/* Right: Best Code Learning Choice Section */}
        <div className="w-[35%] flex flex-col items-start gap-10">
          <div className="flex flex-col gap-y-3 self-stretch items-start">
            <div className="flex flex-col items-start self-stretch gap-y-8">
              <p className="font-semibold text-lg text-indigo-500 pt-12">
                Why We're Your
              </p>
              <p className="font-semibold text-4xl">
                Best Code Learning Choice?
              </p>
            </div>
            <p className="text-base font-medium text-gray-400">
              Choose CodeHelp for an unparalleled coding experience.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-5 rounded-md">
            <p className="text-base font-medium">Let's Connect</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotionSlider;
