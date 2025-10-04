import { useState } from "react";
import { cn } from "@/lib/utils";
import { AiFillCheckCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaUser, FaFileAlt, FaClipboardList, FaSearch, FaArrowRight, FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./assets/datamedlogo.jpeg"; 
import image from "./assets/image.png"; 

export default function App() {
  const [activeLink, setActiveLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 shadow-sm bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />
          <span className="text-lg sm:text-xl font-bold">DataMed</span>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center space-x-8 justify-center flex-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link)}
              className={cn(
                "text-base font-medium px-3 py-2 rounded hover:text-blue-600 hover:border-b-2 hover:border-blue-500",
                activeLink === link.name
                  ? "text-blue-600 border-b-2 border-blue-500"
                  : "text-gray-700 border-b-2 border-transparent"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link)}
                  className={cn(
                    "text-base font-medium px-6 py-3 text-left hover:bg-gray-100",
                    activeLink === link.name
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero / Feature Container */}
      <section
        className="flex items-center pt-24 sm:pt-32 pb-12 sm:pb-16"
        style={{ backgroundColor: "#178560" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Left side: Text & Buttons */}
          <div className="flex-1 text-white flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Smart Insurance Claims. Faster Payouts
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Datamed makes claim application seamless with real-time tracking and performance insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Try Demo Button */}
              <button
                className="px-6 py-3 rounded-md font-semibold transition"
                style={{ backgroundColor: "#dd5d5d", color: "white", cursor:"pointer" }}
              >
                Try Demo
              </button>

              {/* Watch How It Works Button */}
              <button
                className="px-6 py-3 rounded-md font-semibold transition border-2"
                style={{ borderColor: "#fff", color: "#fff", backgroundColor: "transparent", cursor:"pointer" }}
              >
                Watch How It Works
              </button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="flex-1 flex justify-center">
      <img
        src={image}
        alt="Demo Illustration"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Everything You Need in One Smart Platform
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <AiFillCheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Apply Claims Easily</h3>
            <p className="text-gray-700">
              Submit insurance claims through a clean guided web form.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <AiFillPlusCircle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Claim Status in Real Time</h3>
            <p className="text-gray-700">
              Know exactly where your claim stands with smart tracking.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <BsFillBarChartFill className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-gray-700">
              Get insights on success rate, rejections, and more.
            </p>
          </div>
        </div>
      </section>

      {/* How Datamed Works Section */}
      <section className="bg-gray-50 py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">How Datamed Works</h2>
        </div>

        {/* Box container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 bg-white shadow-md rounded-xl py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative border border-gray-300">

          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
              1
            </div>
            <FaUser className="text-red-500 text-4xl sm:text-5xl mb-4" />
            <span className="text-gray-700 font-bold text-center text-sm sm:text-base">Sign in</span>
          </div>

          {/* Arrow - Right on desktop, Down on mobile */}
          <div className="flex items-center justify-center">
            <FaArrowRight className="hidden md:block text-gray-500 text-2xl" />
            <FaArrowDown className="md:hidden text-gray-500 text-2xl" />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
              2
            </div>
            <FaClipboardList className="text-green-500 text-4xl sm:text-5xl mb-4" />
            <span className="text-gray-700 font-bold text-center text-sm sm:text-base">Fill out the form</span>
          </div>

          {/* Arrow - Right on desktop, Down on mobile */}
          <div className="flex items-center justify-center">
            <FaArrowRight className="hidden md:block text-gray-500 text-2xl" />
            <FaArrowDown className="md:hidden text-gray-500 text-2xl" />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
              3
            </div>
            <FaFileAlt className="text-red-500 text-4xl sm:text-5xl mb-4" />
            <span className="text-gray-700 font-bold text-center text-sm sm:text-base">Submit to insurer</span>
          </div>

          {/* Arrow - Right on desktop, Down on mobile */}
          <div className="flex items-center justify-center">
            <FaArrowRight className="hidden md:block text-gray-500 text-2xl" />
            <FaArrowDown className="md:hidden text-gray-500 text-2xl" />
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mb-2 font-semibold text-sm">
              4
            </div>
            <FaSearch className="text-green-500 text-4xl sm:text-5xl mb-4" />
            <span className="text-gray-700 font-bold text-center text-sm sm:text-base">Track progress & view results</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
            Ready to Simplify Insurance Claims?
          </h2>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-md text-base sm:text-lg"
            style={{ backgroundColor: '#e45a5b' }}
          >
            Get Started with DataMed
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="text-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="mt-6 sm:mt-12 relative mx-auto w-full max-w-3xl h-48 sm:h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
          {/* Play Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 sm:h-16 sm:w-16 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 22v-20l18 10-18 10z" />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">About Us</h2>

        {/* About Us Card */}
        <div className="bg-white shadow-md border-2 border-gray-200 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Founded in 2023, <span className="font-semibold">Data Med for Project Management Services Co</span> is a trusted partner for healthcare providers seeking accuracy, efficiency, and compliance in their financial operations. We specialize in <span className="font-semibold">Revenue Cycle Management (RCM), E-Claim Reconciliation, and Resubmission services</span>, ensuring that hospitals, clinics, and medical centers maximize their reimbursements while minimizing administrative burden.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
            With a commitment to excellence, we combine advanced technology, deep industry expertise, and a client-focused approach to deliver seamless financial workflows. Our goal is to empower healthcare organizations to focus on patient care, while we handle the complexities of claims management, reconciliation, and compliance.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-blue-50 shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-700">Mission</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our mission is to streamline healthcare revenue processes by delivering reliable, accurate, and efficient RCM and e-claim solutions that reduce denials, accelerate payments, and enhance financial performance for healthcare providers.
            </p>
          </div>

          <div className="bg-green-50 shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-green-700">Vision</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our vision is to become a leading RCM solutions provider in the Middle East and beyond, recognized for innovation, trust, and excellence in healthcare financial management — helping healthcare institutions achieve sustainable growth while prioritizing patient well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Features / Screenshots */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center">Product Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-300 h-48 sm:h-64 rounded shadow"></div>
          <div className="bg-gray-300 h-48 sm:h-64 rounded shadow"></div>
          <div className="bg-gray-300 h-48 sm:h-64 rounded shadow"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Contact Us</h2>
        <p className="text-center text-sm sm:text-base">Email: support@datamed.com | Phone: +1234567890</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 sm:py-6 text-center text-sm sm:text-base">
        © 2025 DataMed. All rights reserved.
      </footer>
    </div>
  );
}