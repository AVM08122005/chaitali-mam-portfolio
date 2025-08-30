import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-4">
        {/* Bottom Row */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-col ">
            <div className="flex gap-3 p-1 justify-center md:justify-start mb-4">
              <a
                href="https://www.linkedin.com/in/dr-chaitali-chandankhede-6697651b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 
              5v14c0 2.761 2.239 5 5 
              5h14c2.762 0 5-2.239 
              5-5v-14c0-2.761-2.238-5-5-5zm-11 
              19h-3v-11h3v11zm-1.5-12.268c-.966 
              0-1.75-.79-1.75-1.764s.784-1.764 
              1.75-1.764 1.75.79 1.75 
              1.764-.783 1.764-1.75 
              1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
              0v5.604h-3v-11h3v1.765c1.396-2.586 
              7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/bhusari.chaitali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 
              6.477 2 12c0 4.991 3.657 9.128 
              8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
              1.492-3.89 3.777-3.89 1.094 0 2.238.195 
              2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 
              1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
              21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>
            </div>

            {/* Left - Copyright */}
            <div className="text-base text-gray-500 dark:text-gray-400 text-center md:text-left">
              © {currentYear} Chaitali. All rights reserved.
            </div>
          </div>

          {/* Right - Developer Credit */}
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <a
              href="https://avm08122005.github.io/my-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
            >
              Who developed this?
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
