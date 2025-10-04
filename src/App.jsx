// src/App.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./assets/datamedlogo.jpeg"; 
import image from "./assets/image.png"; 
import { AiFillCheckCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaUser, FaFileAlt, FaClipboardList, FaSearch, FaArrowRight  } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn, StaggeredContainer, HoverScale, ParallaxScroll } from "./components/animations";

export default function App() {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
  ];

  const handleClick = (link) => {
    setActiveLink(link.name);
    const el = document.querySelector(link.path);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex items-center justify-between px-12 py-5 shadow-sm bg-white border-b border-gray-200 fixed top-0 left-0 z-50 gpu-accelerated"
      >
        {/* Left: Logo */}
        <FadeIn direction="left" delay={0.2} className="flex items-center space-x-4 pl-4">
          <HoverScale scale={1.1}>
            <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />
          </HoverScale>
          <span className="text-xl font-bold">DataMed</span>
        </FadeIn>

        {/* Right: Nav links */}
        <StaggeredContainer 
          className="flex items-center space-x-8 justify-center flex-1"
          staggerDelay={0.1}
          delay={0.3}
        >
          {navLinks.map((link) => (
            <HoverScale key={link.name} scale={1.05}>
              <button
                onClick={() => handleClick(link)}
                className={cn(
                  "text-base font-medium px-3 py-2 rounded smooth-transition hover:text-blue-600 hover:border-b-2 hover:border-blue-500",
                  activeLink === link.name
                    ? "text-blue-600 border-b-2 border-blue-500"
                    : "text-gray-700 border-b-2 border-transparent"
                )}
              >
                {link.name}
              </button>
            </HoverScale>
          ))}
        </StaggeredContainer>
      </motion.nav>

{/* Hero / Feature Container */}
<section
  className="flex items-center pt-32 pb-19 overflow-hidden"
  style={{ backgroundColor: "#178560" }}
>
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    {/* Left side: Text & Buttons */}
    <FadeIn direction="left" delay={0.2} className="flex-1 text-white flex flex-col justify-center">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Smart Insurance Claims. Faster Payouts
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl mb-6"
      >
        Datamed makes claim application seamless with real-time tracking and performance insights.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* Try Demo Button */}
        <HoverScale scale={1.05}>
          <button
            className="px-6 py-3 rounded-md font-semibold smooth-transition shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#dd5d5d", color: "white", cursor:"pointer" }}
          >
            Try Demo
          </button>
        </HoverScale>

        {/* Watch How It Works Button */}
        <HoverScale scale={1.05}>
          <button
            className="px-6 py-3 rounded-md font-semibold smooth-transition border-2 hover:bg-white hover:text-green-600"
            style={{ borderColor: "#fff", color: "#fff", backgroundColor: "transparent", cursor:"pointer" }}
          >
            Watch How It Works
          </button>
        </HoverScale>
      </motion.div>
    </FadeIn>

    {/* Right side: Image */}
    <FadeIn direction="right" delay={0.4} className="flex-1 flex justify-center">
      <ParallaxScroll speed={0.3}>
        <motion.img
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          src={image}
          alt="Demo Illustration"
          className="w-full h-auto rounded-lg shadow-2xl gpu-accelerated"
          style={{ transformStyle: "preserve-3d" }}
        />
      </ParallaxScroll>
    </FadeIn>
  </div>
</section>

{/* Features Section */}
<section className="bg-white py-14">
  <FadeIn direction="up" delay={0.2}>
    <div className="max-w-6xl mx-auto px-6 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        Everything You Need in One Smart Platform
      </h2>
    </div>
  </FadeIn>

  <StaggeredContainer 
    className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center"
    staggerDelay={0.2}
    delay={0.4}
  >
    {/* Feature 1 */}
    <HoverScale scale={1.05}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="flex flex-col items-center p-6 rounded-xl smooth-transition hover:shadow-lg gpu-accelerated"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <AiFillCheckCircle className="h-12 w-12 text-green-500 mb-4" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">Apply Claims Easily</h3>
        <p className="text-gray-700">
          Submit insurance claims through a clean guided web form.
        </p>
      </motion.div>
    </HoverScale>

    {/* Feature 2 */}
    <HoverScale scale={1.05}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="flex flex-col items-center p-6 rounded-xl smooth-transition hover:shadow-lg gpu-accelerated"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <AiFillPlusCircle className="h-12 w-12 text-red-500 mb-4" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">Track Claim Status in Real Time</h3>
        <p className="text-gray-700">
          Know exactly where your claim stands with smart tracking.
        </p>
      </motion.div>
    </HoverScale>

    {/* Feature 3 */}
    <HoverScale scale={1.05}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="flex flex-col items-center p-6 rounded-xl smooth-transition hover:shadow-lg gpu-accelerated"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
        >
          <BsFillBarChartFill className="h-12 w-12 text-green-500 mb-4" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
        <p className="text-gray-700">
          Get insights on success rate, rejections, and more.
        </p>
      </motion.div>
    </HoverScale>
  </StaggeredContainer>
</section>

{/* How Datamed Works Section */}
<section className="bg-gray-50 py-24">
  <FadeIn direction="up" delay={0.2}>
    <div className="max-w-6xl mx-auto px-6 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">How Datamed Works</h2>
    </div>
  </FadeIn>

  {/* Box container */}
  <FadeIn direction="up" delay={0.4}>
    <div className="max-w-5xl mx-auto px-6 bg-white shadow-md rounded-xl py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative border border-gray-300 gpu-accelerated">
      <StaggeredContainer 
        className="contents"
        staggerDelay={0.3}
        delay={0.6}
      >
        {/* Step 1 */}
        <HoverScale scale={1.1}>
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-4 rounded-lg smooth-transition hover:bg-gray-50"
          >
            {/* Number */}
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm"
            >
              1
            </motion.div>
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              <FaUser className="text-red-500 text-5xl mb-4" />
            </motion.div>
            <span className="text-gray-700 font-bold text-center">Sign in</span>
          </motion.div>
        </HoverScale>

        {/* Arrow */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
          className="hidden md:flex items-center justify-center"
        >
          <FaArrowRight className="text-gray-500 text-2xl" />
        </motion.div>

        {/* Step 2 */}
        <HoverScale scale={1.1}>
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-4 rounded-lg smooth-transition hover:bg-gray-50"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm"
            >
              2
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              <FaClipboardList className="text-green-500 text-5xl mb-4" />
            </motion.div>
            <span className="text-gray-700 font-bold text-center">Fill out the form</span>
          </motion.div>
        </HoverScale>

        {/* Arrow */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          className="hidden md:flex items-center justify-center"
        >
          <FaArrowRight className="text-gray-500 text-2xl" />
        </motion.div>

        {/* Step 3 */}
        <HoverScale scale={1.1}>
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-4 rounded-lg smooth-transition hover:bg-gray-50"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm"
            >
              3
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            >
              <FaFileAlt className="text-red-500 text-5xl mb-4" />
            </motion.div>
            <span className="text-gray-700 font-bold text-center">Submit to insurer</span>
          </motion.div>
        </HoverScale>

        {/* Arrow */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 }}
          className="hidden md:flex items-center justify-center"
        >
          <FaArrowRight className="text-gray-500 text-2xl" />
        </motion.div>

        {/* Step 4 */}
        <HoverScale scale={1.1}>
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-4 rounded-lg smooth-transition hover:bg-gray-50"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
              className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-2 font-semibold text-sm"
            >
              4
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
            >
              <FaSearch className="text-green-500 text-5xl mb-4" />
            </motion.div>
            <span className="text-gray-700 font-bold text-center">Track progress & view results</span>
          </motion.div>
        </HoverScale>
      </StaggeredContainer>
    </div>
  </FadeIn>

  {/* Mobile arrows */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.0 }}
    className="md:hidden mt-8 flex justify-between items-center"
  >
    <FaArrowRight className="text-gray-500 text-2xl" />
    <FaArrowRight className="text-gray-500 text-2xl" />
    <FaArrowRight className="text-gray-500 text-2xl" />
  </motion.div>
</section>

{/* Call-to-Action Section */}
<section className="bg-gray-50 py-3">
  <FadeIn direction="up" delay={0.2}>
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-2xl md:text-3xl font-bold mb-8"
      >
        Ready to Simplify Insurance Claims?
      </motion.h2>
      <HoverScale scale={1.05}>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ 
            boxShadow: "0 20px 40px rgba(228, 90, 91, 0.3)",
            y: -2
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 text-white font-semibold rounded-md text-lg smooth-transition shadow-lg hover:shadow-xl gpu-accelerated"
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
        <section className="text-center pt-5">
          <HoverScale scale={1.02}>
            <motion.div 
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                y: -5
              }}
              className="mt-12 relative mx-auto w-full max-w-3xl h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center cursor-pointer smooth-transition gpu-accelerated"
            >
              {/* Play Icon */}
              <motion.svg
                whileHover={{ scale: 1.1 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-500 smooth-transition"
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
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Us</h2>
        </FadeIn>

        {/* About Us Card */}
        <FadeIn direction="up" delay={0.4}>
          <HoverScale scale={1.01}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white shadow-md border-2 border-grey-200 rounded-lg p-8 mb-12 smooth-transition hover:shadow-xl gpu-accelerated"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                Founded in 2023, <span className="font-semibold">Data Med for Project Management Services Co</span> is a trusted partner for healthcare providers seeking accuracy, efficiency, and compliance in their financial operations. We specialize in <span className="font-semibold">Revenue Cycle Management (RCM), E-Claim Reconciliation, and Resubmission services</span>, ensuring that hospitals, clinics, and medical centers maximize their reimbursements while minimizing administrative burden.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-gray-700 text-lg leading-relaxed mt-4"
              >
                With a commitment to excellence, we combine advanced technology, deep industry expertise, and a client-focused approach to deliver seamless financial workflows. Our goal is to empower healthcare organizations to focus on patient care, while we handle the complexities of claims management, reconciliation, and compliance.
              </motion.p>
            </motion.div>
          </HoverScale>
        </FadeIn>

        {/* Mission & Vision Cards */}
        <StaggeredContainer 
          className="grid md:grid-cols-2 gap-8 h-80"
          staggerDelay={0.2}
          delay={0.6}
        >
          <HoverScale scale={1.02}>
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
              className="bg-blue-50 shadow rounded-lg p-6 smooth-transition hover:shadow-xl gpu-accelerated h-80 flex flex-col"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-2xl font-semibold mb-3 text-blue-700"
              >
                Mission
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-gray-700 leading-relaxed flex-grow"
              >
                Our mission is to streamline healthcare revenue processes by delivering reliable, accurate, and efficient RCM and e-claim solutions that reduce denials, accelerate payments, and enhance financial performance for healthcare providers.
              </motion.p>
            </motion.div>
          </HoverScale>

          <HoverScale scale={1.02}>
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)" }}
              className="bg-green-50 shadow rounded-lg p-6 smooth-transition hover:shadow-xl gpu-accelerated h-80 flex flex-col"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="text-2xl font-semibold mb-3 text-green-700"
              >
                Vision
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-gray-700 leading-relaxed flex-grow"
              >
                Our vision is to become a leading RCM solutions provider in the Middle East and beyond, recognized for innovation, trust, and excellence in healthcare financial management — helping healthcare institutions achieve sustainable growth while prioritizing patient well-being.
              </motion.p>
            </motion.div>
          </HoverScale>
        </StaggeredContainer>
      </section>


      {/* Features / Screenshots */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24 bg-gray-100">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-3xl font-semibold mb-12 text-center">Product Screenshots</h2>
        </FadeIn>
        <StaggeredContainer 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          staggerDelay={0.2}
          delay={0.4}
        >
          <HoverScale scale={1.05}>
            <motion.img 
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
              src="/photo1.jpg" 
              alt="Screenshot 1" 
              className="rounded shadow smooth-transition hover:shadow-xl gpu-accelerated" 
            />
          </HoverScale>
          <HoverScale scale={1.05}>
            <motion.img 
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
              src="/photo2.jpg" 
              alt="Screenshot 2" 
              className="rounded shadow smooth-transition hover:shadow-xl gpu-accelerated" 
            />
          </HoverScale>
          <HoverScale scale={1.05}>
            <motion.img 
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
              src="/photo3.jpg" 
              alt="Screenshot 3" 
              className="rounded shadow smooth-transition hover:shadow-xl gpu-accelerated" 
            />
          </HoverScale>
        </StaggeredContainer>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.4}>
          <p className="text-center">Email: support@datamed.com | Phone: +1234567890</p>
        </FadeIn>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-white py-6 text-center"
      >
        © 2025 DataMed. All rights reserved.
      </motion.footer>
    </div>
  );
}
