"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Creative Developer
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
            Building Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
        >
          I specialize in creating beautiful, functional web applications with
          modern technologies.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
