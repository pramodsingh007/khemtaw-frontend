import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/logo/khemtawLogo.png'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(false);

    return (
        <nav className="bg-gray-800 text-white fixed top-0 right-0 left-0 z-20">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Link to="/" className="flex-shrink-0">
                <motion.img
                    className="h-8 w-18"
                    src={logo}
                    alt="Logo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                </Link>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink 
                    to="/about-us"
                    dropdown={
                        <div className="py-1 mt-[-22px] bg-white rounded-md">
                        <Link to="/why-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Why Us
                        </Link>
                        <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Blog
                        </Link>
                        <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Careers
                        </Link>
                        <Link to="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Resources
                        </Link>
                        </div>
                    }
                    >
                    About Us
                    </NavLink>
                    <NavLink to="/tiffin-services">Tiffin Services</NavLink>
                    <NavLink to="/join-us">Join Us</NavLink>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </div>
                </div>
            </div>
            <div className="hidden md:block">
                <motion.button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                Order Now
                </motion.button>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
                </button>
            </div>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="space-y-1">
                <button
                    onClick={() => setMobileDropdown(!mobileDropdown)}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    <span className="flex items-center justify-between">
                    About Us
                    <svg
                        className={`w-4 h-4 transition-transform ${mobileDropdown ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </span>
                </button>
                {mobileDropdown && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4"
                    >
                    <Link to="/why-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Why Us
                    </Link>
                    <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Blog
                    </Link>
                    <Link to="/careers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Careers
                    </Link>
                    <Link to="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Resources
                    </Link>
                    </motion.div>
                )}
                </div>
                <NavLink to="/tiffin-services" mobile>Tiffin Services</NavLink>
                <NavLink to="/join-us" mobile>Join Us</NavLink>
                <NavLink to="/contact-us" mobile>Contact Us</NavLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
                <motion.button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                Order Now
                </motion.button>
            </div>
            </div>
        )}
        </nav>
    );
    };

    const NavLink: React.FC<{ 
    to: string; 
    children: React.ReactNode; 
    mobile?: boolean;
    dropdown?: React.ReactNode;
    }> = ({ to, children, mobile, dropdown }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <Link
            to={to}
            className={`${
            mobile
                ? 'block px-3 py-2 rounded-md text-base font-medium'
                : 'px-3 py-2 rounded-md text-sm font-medium'
            } text-gray-300 hover:bg-gray-700 hover:text-white`}
        >
            <span className="flex items-center gap-1">
            {children}
            {dropdown && (
                <svg
                className={`w-4 h-4 transition-transform ${isHovered ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            )}
            </span>
        </Link>
        {dropdown && isHovered && (
            <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            >
            {dropdown}
            </motion.div>
        )}
        </div>
    );
    };

    export default Navbar;

