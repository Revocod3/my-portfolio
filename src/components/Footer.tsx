const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
