import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const server = 'http://localhost:8000'; 
   const server = import.meta.env.VITE_API_BASE_URL
  // Fetch articles from backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${server}/api/articles`); // Adjust API URL
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();
        
        // Map backend response to match frontend structure
        const formattedArticles = data.map(article => ({
          id: article._id,
          title: article.title,
          description: article.articleDescription,
          date: new Date(article.createdAt).toDateString(),
          image: article?.image, // Replace with actual image if available
        }));

        setArticles(formattedArticles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles based on search
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Articles</h2>

      {/* Search Bar and Recent Articles in the same row */}
      <div className="flex justify-between">
        <div className="w-full md:w-3/4 mx-auto gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-2/3 mx-5">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[67vw] bg-gray-900 text-white px-5 py-3 rounded-lg outline-none shadow-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Articles List */}
          <div className="max-w-5xl mx-6 mt-8 grid gap-6">
            {loading ? (
              <p className="text-gray-500 text-center text-lg">Loading articles...</p>
            ) : error ? (
              <p className="text-red-500 text-center text-lg">{error}</p>
            ) : filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)" }}
                  className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-700"
                >
                  {/* Image Section */}
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full sm:w-[20vw] h-42 object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-between w-full">
                    <p className="text-sm text-purple-400">{article.date}</p>
                    <h3 className="text-2xl font-semibold hover:underline cursor-pointer text-white">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{article.description}</p>
                  
                    <Link
                      to={`/article/${article.id}`}
                      className="mt-4 inline-block text-purple-400 hover:text-purple-300 transition-all font-semibold"
                    >
                      Read more →
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-lg">No articles found...</p>
            )}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="w-[28vw] bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Recent Articles</h3>
          <ul className="text-gray-400 space-y-2">
            {articles.slice(0, 10).map((article) => (
              <li key={article.id} className="hover:text-white transition-all cursor-pointer">
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Articles;
