"use client";

import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              />
            </div>

            <div>
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message <FiSend className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
