import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  { name: "Michael Cannon", role: "Founder", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Krishnappa Gautam", role: "Sales Lead", img: "https://images.unsplash.com/photo-1672201050789-0b5454271405?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Devona Lane", role: "UI Designer", img: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Ronald Richards", role: "Product Designer", img: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sophia Turner", role: "Marketing Head", img: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "James Anderson", role: "Tech Lead", img: "https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function TeamSection() {
  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black py-8 mt-16 md:lg:py-2 md:lg:mt-10">
      <h2 className="text-4xl font-semibold text-white">
        Meet Our <span className="text-red-600 font-bold">Special</span> Team
      </h2>

      <div className="relative py-12 w-full overflow-hidden">
        <motion.div
          className="flex gap-2"
          initial={{ x: 0 }}
          animate={{ x: `-${index * (100 / visibleCount)}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          // style={{ width: `${(teamMembers.length / visibleCount) * 100}%` }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center lg:xl:w-1/4 md:w-1/3 px-4 flex-shrink-0 text-white"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-64 h-64 rounded-xl object-cover shadow-lg"
              />
              <h3 className="mt-5 text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-white">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex gap-6">
        <button
          className="p-4 border border-gray-300 rounded-full hover:bg-gray-200 transition-all"
          onClick={prevSlide}
        >
          <FaArrowLeft className="text-gray-600 text-xl" />
        </button>
        <button
          className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
          onClick={nextSlide}
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
}
