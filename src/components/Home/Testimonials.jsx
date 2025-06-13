import { useState, useEffect, useRef } from "react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      text: "This service is amazing! It has completely transformed the way I work.",
      author: "John Doe",
    },
    {
      text: "I love the customer support. They're always available and helpful.",
      author: "Jane Smith",
    },
    {
      text: "A game-changer in the industry. Highly recommend to others.",
      author: "Mark Johnson",
    },
    {
      text: "An innovative approach to solving problems. I can't imagine working without it.",
      author: "Lucy Brown",
    },
    {
      text: "Fantastic user experience. Everything just works seamlessly.",
      author: "David Lee",
    },
  ];

  // Track screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind 'sm'
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 3);
    }
  };

  const visibleTestimonials = isMobile
    ? testimonials
    : testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-gradient-to-br from-gray-900  py-16 mt-4 text-white relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div
          className={`flex ${
            isMobile ? "flex-col space-y-6" : "flex-row space-x-8"
          } transition-all duration-500 ease-in-out`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full sm:w-1/3 hover:scale-105 transition duration-300 relative"
            >
              <div className="text-5xl text-gray-400 absolute top-4 left-4">
                “
              </div>
              <p className="text-lg text-gray-100 mt-10 mb-6 italic leading-relaxed">
                {testimonial.text}
              </p>
              <p className="font-semibold text-right text-xl text-white">
                – {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Only on non-mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white/10 border border-white text-white text-2xl p-3 rounded-full shadow-md hover:bg-white/20 transition duration-300 ease-in-out"
            >
              &#10094;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white/10 border border-white text-white text-2xl p-3 rounded-full shadow-md hover:bg-white/20 transition duration-300 ease-in-out"
            >
              &#10095;
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default TestimonialSlider;
