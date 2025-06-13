import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const getYouTubeVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
  return match ? match[1] : null;
};

const CourseCard = ({ course, playingVideo, setPlayingVideo }) => {
  const navigate = useNavigate();
  const videoId = getYouTubeVideoId(course?.videourl);
  const isPlaying = playingVideo === course._id;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";

  return (
    <motion.div
      className="bg-[#3d3d3d73] w-full sm:w-[23vw] max-w-[350px] rounded-lg shadow-lg p-3 sm:p-4 flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-full pt-[56.25%] mb-3 sm:mb-4">
        {isPlaying && videoId ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg flex items-center justify-center cursor-pointer"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            onClick={() => setPlayingVideo(course._id)}
          >
            <div className="bg-black/10 w-full h-full flex items-center justify-center rounded-lg">
              <FaPlay className="text-white text-3xl sm:text-5xl opacity-80" />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-white">{course.courseTitle}</h3>
        <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
          {course.courseDescription}
        </p>
        <div className="mt-4 flex gap-2">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
            onClick={() => navigate(`/course/${course?._id}`)}
          >
            Try Free
          </button>
          <button
            className="border border-gray-400 text-gray-300 px-4 py-2 rounded-lg text-sm"
            onClick={() => navigate(`/course/${course?._id}`)}
          >
            More Info
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const server = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${server}/api/courses`);
        const data = await response.json();
        setCourses(data?.data?.slice(0, 6) || []);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <div className="py-16 bg-black text-white">
      <div className="w-[77%] md:w-[75%] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Featured Courses</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              playingVideo={playingVideo}
              setPlayingVideo={setPlayingVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
