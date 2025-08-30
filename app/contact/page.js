"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Contact() {
  useEffect(() => {
    const loadTallyScript = () => {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      const v = function () {
        if (typeof Tally !== "undefined") {
          Tally.loadEmbeds();
        } else {
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(
            function (e) {
              e.src = e.dataset.tallySrc;
            }
          );
        }
      };

      if (typeof Tally !== "undefined") {
        v();
      } else if (d.querySelector('script[src="' + w + '"]') === null) {
        const s = d.createElement("script");
        s.src = w;
        s.onload = v;
        s.onerror = v;
        d.body.appendChild(s);
      }
    };

    loadTallyScript();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get in touch for academic collaborations or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href="mailto:chaitali.chandankhede@mitwpu.edu.in"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    chaitali.chandankhede@mitwpu.edu.in
                  </a>
                  ,
                  <br />
                  <a
                    href="mailto:chaitalipb@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    chaitalipb@gmail.com
                  </a>
                </div>
              </div>

              {/* University */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    University
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dr. Vishwanath Karad MIT-World Peace University, Pune
                  </p>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Professional Profiles
                </h3>
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/dr-chaitali-chandankhede-6697651b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Google Scholar */}
                  <a
                    href="https://scholar.google.com/scholar?hl=hi&as_sdt=0%2C5&q=chaitali+chandankhede&btnG="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span className="sr-only">Google Scholar</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md md:h-[80vh] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>
              <iframe
                data-tally-src="https://tally.so/embed/nreLLL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="100%"
                title="Contact form"
                className="rounded-md border border-gray-200 dark:border-gray-700"
              ></iframe>
            </div>

            <p className="mt-4 text-sm text-center text-gray-500">
              Having trouble submitting the form?{" "}
              <a
                href="https://tally.so/r/nreLLL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Open it in a new tab →
              </a>
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Prefer to connect professionally? Visit my{" "}
            <a
              href="https://www.linkedin.com/in/dr-chaitali-chandankhede-6697651b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn profile
            </a>{" "}
            or check my{" "}
            <a
              href="https://scholar.google.com/citations?hl=hi&user=iDcANtwAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              research publications
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

