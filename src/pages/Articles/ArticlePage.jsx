import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ArticlePage = () => {
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
const {id} = useParams()
  // Simulate fetching data from the backend API
   const server = import.meta.env.VITE_API_BASE_URL
  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch(`${server}/api/articles/${id}`); // e.g., "/api/articles/67d874e66a3637ca9ceabdb3"
        const data = await response.json();
        setArticleData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article data:", error);
        setLoading(false);
      }
    };

    fetchArticleData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 md:px-20 lg:px-32">
      {/* Back Arrow */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <FaArrowLeft className="mr-2" />
        <span className="text-lg font-medium">{articleData?.title || "Article"}</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mt-6"
      >
        {articleData?.title || "Longest Increasing Subsequence"}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 mt-2 text-lg"
      >
        {articleData?.articleDescription || "Given an integer array nums, return the length of the longest strictly increasing subsequence."}
      </motion.p>

      {/* CodeHelp Team + Date */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center justify-between mt-6"
      >
        <div className="flex items-center">
          <div className="bg-purple-600 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          <span className="ml-3 text-lg font-semibold">CodeHelp Team</span>
        </div>
        <span className="text-gray-400 text-sm">
          {new Date(articleData?.createdAt).toLocaleDateString() || "May 1, 2024"}
        </span>
      </motion.div>

      {/* Test Cases */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-2xl font-bold mt-10 border-b border-gray-700 pb-2"
      >
        Test Cases
      </motion.h2>

      {/* Dynamically Render Test Cases */}
      {articleData?.testCases.map((testCase, index) => (
        <motion.div
          key={testCase._id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
          className="mt-6"
        >
          <h3 className="text-xl font-semibold">Test Case {index + 1}:</h3>
          <p className="text-gray-400 mt-2">
            <span className="font-semibold text-white">Input:</span> {testCase.input}
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-white">Output:</span> {testCase.output}
          </p>
          {testCase.explanation && (
            <p className="text-gray-400 mt-2">
              <span className="font-semibold text-white">Explanation:</span> {testCase.explanation}
            </p>
          )}
        </motion.div>
      ))}

      {/* Playground Link */}
      <Link
        to="/playground"
        target="_blank"
        className="bg-red-500 text-white px-4 py-2 flex justify-center mx-auto rounded-md mt-10 w-max"
      >
        Hit a Try in Playground
      </Link>
    </div>
  );
};

export default ArticlePage;