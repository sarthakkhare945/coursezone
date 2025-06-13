import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tutorials = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
 const server = import.meta.env.VITE_API_BASE_URL
  // Fetch articles from backend when component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${server}/api/tutorial`);
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles based on search input
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  // Format date from backend
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
        Tutorials
      </h2>

      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2 mx-auto mb-12">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 text-white px-6 py-3 rounded-full outline-none shadow-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 transition-all placeholder-gray-400"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="col-span-full text-gray-400 text-center text-lg">Loading tutorials...</p>
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.div
                key={article._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.2)" }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              >
                {/* Iframe Section */}
                <motion.iframe
                  src={`https://www.youtube.com/embed/${new URL(article.videourl).searchParams.get('v')}`}
                  className="w-full h-48 object-cover rounded-t-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={article.title}
                />

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-sm text-indigo-400 mb-2">{formatDate(article.date)}</p>
                  <Link to={`/tutorials/${article._id}`}>
                    <h3 className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-300 mt-3 line-clamp-3">{article.summary}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-gray-400 text-center text-lg">No tutorials found...</p>
          )}
        </div>

   
      </div>
    </div>
  );
};

export default Tutorials;