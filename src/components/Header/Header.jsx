import React from "react";

const Header = () => {
  return (
    <div className="relative w-full overflow-hidden">
      
      {/* <div className="relative z-10 flex flex-col items-start justify-center w-full h-full px-6 text-white"> */}
      <div className="">
        <h1
          className="text-center text-4xl md:text-5xl font-semibold mt-[100px] text-white"
          style={{ fontWeight: "700" }}
        >
          Unlock Your Potential: <span className="text-red-500">The Ultimate Prep Hub</span>
      
        </h1>
        <p className="text-[#7A7A7A] font-medium md:text-[16px] text-[12px] text-center  mt-4">
          Accelerate Your Learning Curve: Decode DSA, Strengthen CS Knowledge, Optimize System Design, Sharpen Coding Skills, and Land Offers.
        </p>
        {/* <button className="bg-yellow-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-yellow-600 focus:outline-none transition duration-300">
            Get Started
          </button> */}

        <div className="border xl:w-4/5 lg:w-5/6 w-full border-zinc-800 bg-[#191919] lg:px-12 lg:py-8 px-6 py-6 rounded-2xl flex md:flex-row flex-col justify-between items-center mt-10 mx-auto">
          <div className="flex md:flex-row flex-col items-center gap-x-3">
            <div className="bg-[#FFF9EB] px-2 py-8 rounded-3xl">
              <svg
                width="78"
                height="34"
                viewBox="0 0 78 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
               
              </svg>
            </div>
            <div className="flex flex-col md:items-start items-center justify-center">
              <p className="font-medium text-white text-center md:text-[18px] text-[14px] md:mt-0 mt-4">
              Upgrade Your Skills, Transform Your Future
              </p>
              <p className="text-[#7A7A7A] text-center font-medium md:text-[16px] text-[12px] md:mt-0 mt-2">
              Structured learning, strategic solutions,  personalized 
              </p>
              <p className="text-[#7A7A7A] text-center font-medium md:text-[16px] text-[12px]">
              roadmaps with expert guidance, and more!
              </p>
            </div>
          </div>
          <a
            className="rounded-full lg:text-[16px] text-[14px] lg:px-8 px-6 py-2 md:mt-0 mt-4 lg:py-3 bg-red-600  text-white"
            href="/courses"
          >
            Explore Courses
          </a>
        </div>
        {/* </div> */}
      </div>

      {/* Scrolling Effect: Content that Scrolls Over the Image */}
    </div>
  );
};

export default Header;
