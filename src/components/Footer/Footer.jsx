import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img
                src={logo}
                alt="CourseZone Logo"
                className="w-[180px] object-contain"
              />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              CourseZone is one of the premier online learning platforms in India. 
              With 3000+ students and highly qualified instructors, we aim to revolutionize learning.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2024 CourseZone. All rights reserved.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get updates on new courses and offers.
            </p>
            <form className="flex flex-col sm:flex-row items-stretch">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="bg-[#2c2c2c] text-white p-3 rounded-md sm:rounded-r-none sm:rounded-l-md w-full sm:w-auto sm:flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded-md sm:rounded-l-none sm:rounded-r-md w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Connect with Us</h4>
            <p className="text-sm text-gray-400 mb-4">
              Follow us on social platforms
            </p>
            <div className="flex items-center space-x-5 text-2xl">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          Designed & Developed by CourseZone Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
