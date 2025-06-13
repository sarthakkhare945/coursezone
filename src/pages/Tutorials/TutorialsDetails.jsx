import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const TutorialPage = () => {
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const server = import.meta.env.VITE_API_BASE_URL
  useEffect(() => {
    const fetchTutorial = async () => {
        window.scrollTo(0, 0);
      try {
        const response = await fetch(`${server}/api/tutorial/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch tutorial');
        }
        const data = await response.json();
        setTutorial(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorial();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading tutorial...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-xl">
        {error}
      </div>
    );
  }

  const { title, summary, videourl, date } = tutorial;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-8 px-4 sm:px-6 lg:px-12 text-white font-sans">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-xl p-6 sm:p-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">{title}</h1>

        {/* Date */}
        <p className="text-sm text-gray-400 mb-5">
          Published on {moment(date).format('MMMM Do, YYYY')}
        </p>

        {/* Video */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <div className="relative pb-[56.25%] h-0">
            <ReactPlayer
              url={videourl}
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="text-gray-300 text-base sm:text-lg leading-relaxed">
          {summary}
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <span className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-6 rounded-full transition duration-200 shadow-md hover:shadow-lg">
            Stay Tuned For More..
          </span>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
