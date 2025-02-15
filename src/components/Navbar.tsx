"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "@/context/DarkModeContext";
import Link from "next/link";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            YourName
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <FiSun className="w-6 h-6" />
              ) : (
                <FiMoon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
