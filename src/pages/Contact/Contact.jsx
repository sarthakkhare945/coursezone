import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const server = import.meta.env.VITE_API_BASE_URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(`${server}/api/contact`, formData);
      setStatus(response.data.message);

      // Show success toast
      toast.success("Message sent successfully!", { position: "top-right" });

      // Reset form fields
      setFormData({ name: "", email: "", description: "" });
    } catch (error) {
      setStatus("Error sending message. Try again.");
      toast.error("Failed to send message. Please try again.", { position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-4">
      <ToastContainer /> {/* Toast Notification Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="container mx-auto px-6 md:px-12 text-center"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-3">
          Have any questions? Feel free to reach out to us. We're happy to assist you.
        </p>

        <div className="bg-black text-white py-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 text-left">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 text-left">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 text-left">
                  Your Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="Enter your message"
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {status && <p className="mt-4 text-gray-300">{status}</p>}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
