"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-6 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated floating shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 animate-gradient-x">
                  Hello, I&apos;m{" "}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Gladness",
                    1000,
                    "a Web Developer",
                    1000,
                    "a Software Developer",
                    1000,
                    "a Blockchain Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 animate-gradient-x"
                />
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl px-4 py-2 shadow-lg">
                Crafting innovative digital solutions with a passion for clean code and cutting-edge technologies. Let&apos;s build the future together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.07, backgroundColor: "#2563eb" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-blue-400 text-white font-bold rounded-full shadow-xl backdrop-blur-md hover:bg-blue-600/80 transition duration-300 ease-in-out"
                  >
                    <FaPaperPlane className="text-blue-400" />
                    Hire Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="w-[260px] h-[260px] lg:w-[400px] lg:h-[400px] relative">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 18,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-40 blur-2xl"
                ></motion.div>
                <Image
                  src="/images/hero-image3.jpg"
                  alt="Gladness profile"
                  fill
                  className="rounded-full object-cover border-4 border-blue-400 shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Optional: Add custom keyframes for gradient animation */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;