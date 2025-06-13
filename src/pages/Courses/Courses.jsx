import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
// import not_available from '../../assets/not_found.gif'

// Function to extract YouTube video ID
const getYouTubeVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
  return match ? match[1] : null;
};

// Component for individual course card
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
      <div className="relative w-full">
        <div className="relative w-full pt-[56.25%] mb-3 sm:mb-4">
          {isPlaying ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
      </div>

      <div className="flex flex-col flex-grow">
        <div className="mb-3 sm:mb-4">
          {course?.badges?.map((badge, index) => (
            <span
              key={index}
              className="bg-red-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-1 rounded-md mr-1.5 sm:mr-2 mb-1.5 sm:mb-2 inline-block"
            >
              {badge}
            </span>
          ))}
          <h3 className="text-base sm:text-lg font-bold">{course.courseTitle}</h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
            {course.courseDescription}
          </p>
        </div>

        <div className="mt-auto flex gap-2">
          <button
            className="bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex-1 text-sm sm:text-base"
            onClick={() => navigate(`/course/${course?._id}`)}
          >
            Buy Now
          </button>
          <button className="border border-gray-400 text-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex-1 text-sm sm:text-base"
           onClick={() => navigate(`/course/${course?._id}`)}>
            More Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};


export default function CoursePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
   const server = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${server}/api/courses`);
        const data = await response.json();
        setCourses(data?.data);
      } catch (err) {
        setError("Failed to load courses. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course?.courseTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course?.courseDescription?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow container mx-auto py-6 sm:py-10 px-4 sm:px-0">
        <div className="flex flex-col w-full items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Explore Our Course Catalog
          </h2>

          <div className="relative mb-6 w-full max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full p-2 border rounded-lg pl-10 text-white text-sm sm:text-lg bg-gray-800 outline-none border-2 shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute top-2 sm:top-2.5 left-3 sm:left-4 text-gray-400 text-lg">🔍</span>
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-400 text-sm sm:text-base">Loading courses...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-sm sm:text-base">{error}</p>
        ) : (
          <div className="flex flex-col items-center min-h-[50vh] justify-center">
            {filteredCourses?.length > 0 ? (
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
                {filteredCourses?.map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    playingVideo={playingVideo} 
                    setPlayingVideo={setPlayingVideo} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center">
                <img
                  src="https://media.giphy.com/media/3o7TKTDn976rzVgig8/giphy.gif"
                   // Replace with your GIF URL or local path
                 
                  alt="No Courses Found"
                  className="mx-auto mb-4 w-full h-64 object-cover"
                />
                <p className="text-gray-400 text-lg sm:text-2xl font-semibold">No courses found.</p>
                <p className="text-gray-500 text-sm sm:text-base mt-2">
                  Try adjusting your search or check back later for new courses.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}