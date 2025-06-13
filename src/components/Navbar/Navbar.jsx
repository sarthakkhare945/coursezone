import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../../images/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
     const server = import.meta.env.VITE_API_BASE_URL

    // Check login status on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
        setSuccessMessage('');
    };

    // Handle login submission
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${server}/api/auth/login`, {
                email,
                password
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
            setIsModalOpen(false);
            setFormData({ email: '', password: '', confirmPassword: '' });
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle signup submission
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${server}/api/auth/register`, {
                name,
                email,
                password
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('Signup successful:', response.data);
            localStorage.setItem('token', response.data.token);
            setSuccessMessage('Registered successfully! Please login.');
            setIsLoginForm(true);
            setFormData({name:'', email: '', password: '', confirmPassword: '' });
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
            console.error('Signup error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setIsProfileDropdownOpen(false);
    };

    return (
        <div>
            <header className="shadow-md sticky top-0 bg-black w-full z-50">
                <nav className="container mx-auto px-4 flex items-center justify-between py-4">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="w-[200px]" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <a href="/" className="text-white text-md relative hover:text-red-600 transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Home
                        </a>
                        <a href="/courses" className="text-white text-md relative hover:text-red-600 transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Courses
                        </a>
                        <div className="relative group">
                            <a className="text-white text-md relative hover:text-red-600 transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                                Explore
                            </a>
                            <div className="absolute left-0 mt-2 w-48 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 shadow-lg">
                                <a href="/playground" className="block px-4 py-2 hover:bg-red-600 hover:text-white transition-all">
                                    Playground
                                </a>
                                {/* <a href="/live-compiler" className="block px-4 py-2 hover:bg-red-600 hover:text-white transition-all">
                                    Live Compiler
                                </a>
                                <a href="/other-option" className="block px-4 py-2 hover:bg-red-600 hover:text-white transition-all">
                                    Other Option
                                </a> */}
                            </div>
                        </div>
                        <a href="/articles" className="text-white text-md relative hover:text-red-600 transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Articles
                        </a>
                         <a href="/tutorials" className="text-white text-md relative hover:text-red-600 transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Tutorials
                        </a>
                        <a href="/about" className="text-white text-md relative hover:text-red-600 transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            About
                        </a>
                        <a href="/contact" className="text-white text-md relative hover:text-red-600 transition-all duration-300 after:block after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                            Contact
                        </a>
                    
                    </div>

                    {/* Desktop: Login or Profile */}
                    <div className="hidden lg:flex items-center gap-3 px-12">
                        {isLoggedIn ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                    className="text-white focus:outline-none"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                                {isProfileDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-22 bg-red-800 text-white rounded-lg shadow-lg z-10">
                                        {/* <a href="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProfileDropdownOpen(false)}>
                                            View Profile
                                        </a>
                                        <a href="/settings" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsProfileDropdownOpen(false)}>
                                            Settings
                                        </a> */}
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 hover:bg-red-900 hover:rounded-lg"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white pr-4"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden bg-black border-t border-gray-300 py-4">
                        <div className="flex flex-col items-start mx-5 gap-4">
                            <a href="/" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                Home
                            </a>
                            <a href="/courses" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                Courses
                            </a>
                            <a href="/playground" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                Playground
                            </a>
                            <a href="/articles" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                Articles
                            </a>
                            <a href="/about" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                About
                            </a>
                            <a href="/contact" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                Contact
                            </a>
                            <a href="/tutorials" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                Tutorials
                            </a>
                            {isLoggedIn ? (
                                <>
                                    <a href="/profile" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                        View Profile
                                    </a>
                                    <a href="/settings" className="text-white text-lg hover:text-red-600 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                        Settings
                                    </a>
                                    <button
                                        onClick={handleLogout}
                                        className="text-white text-lg hover:text-red-600 transition-all duration-300"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setMenuOpen(false);
                                    }}
                                    className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-300"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </header>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-all duration-300"
                            disabled={isLoading}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Title */}
                        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                            {isLoginForm ? 'Login to Your Account' : 'Create a New Account'}
                        </h2>

                        {/* Success Message */}
                        {successMessage && (
                            <div className="mb-4 text-green-600 text-sm text-center bg-green-100 p-2 rounded">
                                {successMessage}
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 text-red-600 text-sm text-center bg-red-100 p-2 rounded">
                                {error}
                            </div>
                        )}

                        {/* Login Form */}
                        {isLoginForm ? (
                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 placeholder-gray-400"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 placeholder-gray-400"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    ) : null}
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </button>
                                <p className="mt-4 text-sm text-center text-gray-600">
                                    Don't have an account?{' '}
                                    <span
                                        onClick={() => !isLoading && setIsLoginForm(false)}
                                        className={`text-red-600 cursor-pointer hover:underline ${isLoading ? 'opacity-50' : ''}`}
                                    >
                                        Sign Up
                                    </span>
                                </p>
                            </form>
                        ) : (
                            /* Signup Form */
                            <form onSubmit={handleSignupSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 placeholder-gray-400"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 placeholder-gray-400"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 placeholder-gray-400"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm your password"
                                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 placeholder-gray-400"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    ) : null}
                                    {isLoading ? 'Signing up...' : 'Sign Up'}
                                </button>
                                <p className="mt-4 text-sm text-center text-gray-600">
                                    Already have an account?{' '}
                                    <span
                                        onClick={() => !isLoading && setIsLoginForm(true)}
                                        className={`text-red-600 cursor-pointer hover:underline ${isLoading ? 'opacity-50' : ''}`}
                                    >
                                        Login
                                    </span>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;