import { useState } from "react";
import { cn } from "@/lib/utils";
import { AiFillCheckCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaUser, FaFileAlt, FaClipboardList, FaSearch, FaArrowRight, FaArrowDown, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import Logo from "./assets/datamedlogo.jpeg"; 
import image from "./assets/image.png"; 

// Simple animation components
const FadeIn = ({ children, direction = "up", delay = 0, className = "" }) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HoverScale = ({ children, scale = 1.05 }) => (
  <motion.div whileHover={{ scale }} transition={{ duration: 0.2 }}>
    {children}
  </motion.div>
);

// Theme Context
const ThemeContext = React.createContext();
const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function AppContent() {
  const [activeLink, setActiveLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
  ];

  const handleClick = (link) => {
    setActiveLink(link.name);
    setMobileMenuOpen(false);
    const el = document.querySelector(link.path);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-white text-gray-800'
    }`}>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 shadow-lg fixed top-0 left-0 z-50 transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <HoverScale scale={1.1}>
            <div className="flex items-center space-x-2 sm:space-x-4">
          <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />
          <span className="text-lg sm:text-xl font-bold">DataMed</span>
        </div>
          </HoverScale>
          {/* <span className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            DataMed
          </span> */}
        </div>

        {/* Center: Nav links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link, index) => (
            <HoverScale key={link.name} scale={1.05}>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleClick(link)}
                className={cn(
                  "text-sm md:text-base font-medium px-3 py-2 rounded-lg transition-all duration-200",
                  activeLink === link.name
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : theme === 'dark' 
                      ? "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                )}
              >
                {link.name}
              </motion.button>
            </HoverScale>
          ))}
        </div>

        {/* Right: Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              theme === 'dark' 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </motion.button>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-full left-0 w-full shadow-lg md:hidden ${
              theme === 'dark' ? 'bg-gray-900 border-b border-gray-700' : 'bg-white'
            }`}
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link)}
                  className={cn(
                    "text-base font-medium px-6 py-3 text-left transition-colors duration-200",
                    activeLink === link.name
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : theme === 'dark'
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero / Feature Container */}
      <section
        className="flex items-center pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
        style={{ backgroundColor: "#178560" }}
      >
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Left side: Text & Buttons */}
          <FadeIn direction="left" delay={0.2} className="flex-1 text-white flex flex-col justify-center text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Smart Insurance Claims. Faster Payouts
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl mb-6"
            >
              Datamed makes claim application seamless with real-time tracking and performance insights.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <HoverScale scale={1.05}>
                <button
                  className="px-6 py-3 rounded-md font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#dd5d5d", color: "white", cursor:"pointer" }}
                >
                  Try Demo
                </button>
              </HoverScale>

              <HoverScale scale={1.05}>
                <button
                  className="px-6 py-3 rounded-md font-semibold transition-all duration-200 border-2 hover:bg-white hover:text-green-600"
                  style={{ borderColor: "#fff", color: "#fff", backgroundColor: "transparent", cursor:"pointer" }}
                >
                  Watch How It Works
                </button>
              </HoverScale>
            </motion.div>
          </FadeIn>

          {/* Right side: Image */}
          <FadeIn direction="right" delay={0.4} className="flex-1 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full max-w-md"
            >
              <div className="flex-1 flex justify-center">
      <img
        src={image}
        alt="Demo Illustration"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-12 sm:py-14 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Everything You Need in One Smart Platform
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center">
          {/* Feature 1 */}
          <HoverScale scale={1.05}>
            <motion.div 
              whileHover={{ y: -10 }}
              className={`flex flex-col items-center p-6 rounded-xl transition-all duration-200 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <AiFillCheckCircle className="h-12 w-12 text-green-500 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Apply Claims Easily</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Submit insurance claims through a clean guided web form.
              </p>
            </motion.div>
          </HoverScale>

          {/* Feature 2 */}
          <HoverScale scale={1.05}>
            <motion.div 
              whileHover={{ y: -10 }}
              className={`flex flex-col items-center p-6 rounded-xl transition-all duration-200 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <AiFillPlusCircle className="h-12 w-12 text-red-500 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Track Claim Status in Real Time</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Know exactly where your claim stands with smart tracking.
              </p>
            </motion.div>
          </HoverScale>

          {/* Feature 3 */}
          <HoverScale scale={1.05}>
            <motion.div 
              whileHover={{ y: -10 }}
              className={`flex flex-col items-center p-6 rounded-xl transition-all duration-200 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              >
                <BsFillBarChartFill className="h-12 w-12 text-green-500 mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Get insights on success rate, rejections, and more.
              </p>
            </motion.div>
          </HoverScale>
        </div>
      </section>

      {/* How Datamed Works Section */}
      <section className={`py-12 sm:py-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">How Datamed Works</h2>
          </div>
        </FadeIn>

        {/* Box container */}
        <FadeIn direction="up" delay={0.4}>
          <div className={`max-w-5xl mx-auto px-4 sm:px-6 shadow-md rounded-xl py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative border transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-300'
          }`}>
            {/* Step 1 */}
            <HoverScale scale={1.1}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg transition-all duration-200"
              >
                <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
                  1
                </div>
                <FaUser className="text-red-500 text-4xl sm:text-5xl mb-4" />
                <span className={`font-bold text-center text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>Sign in</span>
              </motion.div>
            </HoverScale>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <FaArrowRight className={`hidden md:block text-2xl ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`} />
              <FaArrowDown className={`md:hidden text-2xl ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`} />
            </div>

            {/* Step 2 */}
            <HoverScale scale={1.1}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg transition-all duration-200"
              >
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
                  2
                </div>
                <FaClipboardList className="text-green-500 text-4xl sm:text-5xl mb-4" />
                <span className={`font-bold text-center text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>Fill out the form</span>
              </motion.div>
            </HoverScale>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <FaArrowRight className={`hidden md:block text-2xl ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`} />
              <FaArrowDown className={`md:hidden text-2xl ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`} />
            </div>

            {/* Step 3 */}
            <HoverScale scale={1.1}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg transition-all duration-200"
              >
                <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
                  3
                </div>
                <FaFileAlt className="text-red-500 text-4xl sm:text-5xl mb-4" />
                <span className={`font-bold text-center text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>Submit to insurer</span>
              </motion.div>
            </HoverScale>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <FaArrowRight className={`hidden md:block text-2xl ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`} />
              <FaArrowDown className={`md:hidden text-2xl ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`} />
            </div>

            {/* Step 4 */}
            <HoverScale scale={1.1}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg transition-all duration-200"
              >
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
                  4
                </div>
                <FaSearch className="text-green-500 text-4xl sm:text-5xl mb-4" />
                <span className={`font-bold text-center text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>Track progress & view results</span>
              </motion.div>
            </HoverScale>
          </div>
        </FadeIn>
      <FadeIn direction="up" delay={0.2}>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mt-12 sm:mt-16">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8"
    >
      Ready to Simplify Insurance Claims?
    </motion.h2>
    <HoverScale scale={1.05}>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-md text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        style={{ backgroundColor: '#e45a5b' }}
      >
        Get Started with DataMed
      </motion.button>
    </HoverScale>
  </div>
</FadeIn>

      </section>



      {/* Video Section */}
      <FadeIn direction="up" delay={0.2}>
        <section className="text-center py-8 sm:py-12 px-4 sm:px-6">
          <HoverScale scale={1.02}>
            <motion.div 
              whileHover={{ y: -5 }}
              className={`mt-6 sm:mt-12 relative mx-auto w-full max-w-3xl h-48 sm:h-64 md:h-80 rounded-lg shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <motion.svg
                whileHover={{ scale: 1.1 }}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-12 w-12 sm:h-16 sm:w-16 transition-all duration-200 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </motion.svg>
            </motion.div>
          </HoverScale>
        </section>
      </FadeIn>

      {/* About Us Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">About Us</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <HoverScale scale={1.01}>
            <motion.div 
              whileHover={{ y: -5 }}
              className={`shadow-md border-2 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 transition-all duration-200 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <p className={`text-base sm:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Founded in 2023, <span className="font-semibold">Data Med for Project Management Services Co</span> is a trusted partner for healthcare providers seeking accuracy, efficiency, and compliance in their financial operations. We specialize in <span className="font-semibold">Revenue Cycle Management (RCM), E-Claim Reconciliation, and Resubmission services</span>, ensuring that hospitals, clinics, and medical centers maximize their reimbursements while minimizing administrative burden.
              </p>
              <p className={`text-base sm:text-lg leading-relaxed mt-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                With a commitment to excellence, we combine advanced technology, deep industry expertise, and a client-focused approach to deliver seamless financial workflows. Our goal is to empower healthcare organizations to focus on patient care, while we handle the complexities of claims management, reconciliation, and compliance.
              </p>
            </motion.div>
          </HoverScale>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <HoverScale scale={1.02}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`shadow rounded-lg p-6 transition-all duration-200 hover:shadow-xl h-full flex flex-col ${
                theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'
              }`}
            >
              <h3 className={`text-xl sm:text-2xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
              }`}>Mission</h3>
              <p className={`leading-relaxed text-sm sm:text-base flex-grow ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Our mission is to streamline healthcare revenue processes by delivering reliable, accurate, and efficient RCM and e-claim solutions that reduce denials, accelerate payments, and enhance financial performance for healthcare providers.
              </p>
            </motion.div>
          </HoverScale>

          <HoverScale scale={1.02}>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`shadow rounded-lg p-6 transition-all duration-200 hover:shadow-xl h-full flex flex-col ${
                theme === 'dark' ? 'bg-green-900/30' : 'bg-green-50'
              }`}
            >
              <h3 className={`text-xl sm:text-2xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-green-300' : 'text-green-700'
              }`}>Vision</h3>
              <p className={`leading-relaxed text-sm sm:text-base flex-grow ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Our vision is to become a leading RCM solutions provider in the Middle East and beyond, recognized for innovation, trust, and excellence in healthcare financial management — helping healthcare institutions achieve sustainable growth while prioritizing patient well-being.
              </p>
            </motion.div>
          </HoverScale>
        </div>
      </section>

      {/* Features / Screenshots */}
      <section id="features" className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center">Product Screenshots</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <HoverScale scale={1.05}>
            <motion.div 
              whileHover={{ y: -10 }}
              className={`h-48 sm:h-64 rounded shadow transition-all duration-200 hover:shadow-xl ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            />
          </HoverScale>
          <HoverScale scale={1.05}>
            <motion.div 
              whileHover={{ y: -10 }}
              className={`h-48 sm:h-64 rounded shadow transition-all duration-200 hover:shadow-xl ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            />
          </HoverScale>
          <HoverScale scale={1.05}>
            <motion.div 
              whileHover={{ y: -10 }}
              className={`h-48 sm:h-64 rounded shadow transition-all duration-200 hover:shadow-xl ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            />
          </HoverScale>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Contact Us</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <p className="text-center text-sm sm:text-base">Email: support@datamed.com | Phone: +1234567890</p>
        </FadeIn>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`py-4 sm:py-6 text-center text-sm sm:text-base transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'
        }`}
      >
        © 2025 DataMed. All rights reserved.
      </motion.footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}