import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const instructorsData = [
  {
    name: "Love Babbar",
    title: "Founder - Code-Help, Ex-Amazon, Ex-Microsoft",
    description: "Love Babbar is a Software Engineer and a Youtuber, primarily known for his Coding and Software Engineering skills. He has mentored 500k+ students so far. He has worked in Amazon and Microsoft.",
    image: "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FLove-Babbar-min.png&w=640&q=75"
  },
  {
    name: "Lakshay Kumar",
    title: "CS @Adobe, Instructor @Code-Help",
    description: "Lakshay Kumar is an ace software engineer at Adobe Systems and a popular computer science instructor on CodeHelp Youtube. His real-world examples simplify complex topics.",
    image: "https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FLakshay-min.png&w=640&q=75"
  },
  {
    name: "John Doe",
    title: "Senior Engineer @Google",
    description: "John Doe is a senior software engineer at Google with over 10 years of experience in building scalable systems.",
    image: "https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1650383193773-4E38HIVJMG16Q5MHD80A/JD+Solo+by+Todd+V+Wolfson.jpg?format=2500w"
  },
];

const OurInstructors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Only show one instructor at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,  // No need for arrows, dots work fine for navigation
    centerMode: true, // This enables centering the slides in the view
    focusOnSelect: true, // Ensures the selected slide is in focus
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-center text-4xl font-semibold mb-12 text-white">Our Instructors</h2>
      
      <Slider {...settings}>
        {instructorsData.map((instructor, index) => (
          <div key={index} className="flex justify-center items-center p-8 bg-black text-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 border-2 mx-auto">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden mr-8">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content on the right */}
            <div className="max-w-lg">
              <h3 className="text-3xl font-semibold text-white mb-4">{instructor.name}</h3>
              <p className="text-xl text-white mb-4">{instructor.title}</p>
              <p className="text-md text-white">{instructor.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurInstructors;
