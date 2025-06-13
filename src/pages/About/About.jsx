import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12">
      {/* Logo */}
    

      {/* About Section */}
      <div className="text-center mt-12">
        {/* <h2 className="text-5xl font-bold">CourseZone</h2> */}
        <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto text-gray-300">
          We started back in <span className="font-bold">2020</span> with our{" "}
          <span className="text-red-500 font-semibold">Youtube channel</span>.
          The idea of building a website came into vision when our sheet on
          Google Docs crashed stating{" "}
          <span className="font-semibold">"Too many people are on it"</span>.
          We started on a WordPress website in 2022 and shifted to a
          custom-made one in 2024.
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Our vision is to make learning feel seamless and enjoyable, removing
          the mugging-up factor found in most places. We cover DSA, Core
          Subjects, System Design, and OOPS as of today, and we plan to add much
          more in the future.
        </p>
      </div>

      {/* Stats Section */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold">Our Impact in Numbers</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
          {[
            { number: "6M", label: "YouTube Views", period: "in 28 days" },
            { number: "13M", label: "Page Visits", period: "monthly" },
            { number: "4.5M", label: "Sessions", period: "per month" },
            { number: "1.5M+", label: "Registered Users", period: "and growing" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg">
              <h4 className="text-3xl font-bold text-red-500">{item.number}</h4>
              <p className="text-gray-300 mt-1">{item.label}</p>
              <p className="text-gray-500 text-sm">{item.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <p className="text-center text-gray-400 mt-12 text-lg max-w-2xl mx-auto">
        takeUforward consists of all free materials, which can be a good place
        to start with, but if you're looking for a premium experience with the
        best study experience, TUF+ is our paid model.
      </p>
    </div>
  );
};

export default AboutUs;
