"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function About() {
  const [curryr, setcurryr] = useState(0);

  useEffect(() => {
    setcurryr(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Dr. Chaitali Chandankhede
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Educator, Researcher and Computer Science Professional
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl  align-middle">
              {/* Replace with actual profile image when available */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold ">
                <Image
                  src="/chaitali-chandankhede.avif"
                  alt="Dr. Chaitali Chandankhede"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am Dr. Chaitali Chandankhede, with a rich experience of{" "}
              {curryr - 1980 - 21}+ years as an educator and researcher in the
              field of Computer Science. Currently, I am an Assistant Professor
              at Dr. Vishwanath Karad MIT-World Peace University, Pune, where I
              am dedicated to nurture the next generation of computer science
              professionals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With a strong academic background and research experience, I focus
              on various aspects of computer science education and technical
              innovations. My research interests include Artificial
              Intelligence, Machine Learning, Deep Learning, Computer Vision,
              Data Analytics and Data Security.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Beyond academics, I strongly believe in the overall development of
              students, not only intellectually but also mentally and
              emotionally. To support this, I actively conduct counseling
              sessions at different platforms for undergraduate students,
              fostering their holistic growth at this crucial stage of
              professional learning.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/dr-chaitali-chandankhede-6697651b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn Profile
              </a>
              <a
                href="https://scholar.google.com/citations?hl=hi&user=iDcANtwAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Qualification
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Ph.D (CSE)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Doctor of Philosophy in Computer Science & Engineering
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                MBA (HR)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master of Business Administration in Human Resources
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                M.E. (IT)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master of Engineering in Information Technology
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                B.E. (CSE)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor of Engineering in Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Professional Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Researcher
              </h3>

              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Academic Research
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Publishing research papers in international journals and
                conferences, focusing on computer science education and
                technical innovations.
              </p>

              <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm">
                Year: 2013 - present ({curryr - 2013}+ yrs)
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Assistant Professor
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Dr. Vishvanath Karad MIT - World Peace University
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Teaching advanced computer science courses, guiding research
                projects, mentoring students, and contributing to curriculum
                development and academic growth at the university.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Pune, Maharashtra
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm">
                Year: 2017 - present ({curryr - 2017}+ yrs)
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Faculty Member
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Maharashtra Institute of Technology
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Teaching computer science courses, conducting research and
                mentoring students in various technical domains.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Pune, Maharashtra
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm">
                Year: 2007 - 2017 (10 yrs)
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Faculty Member
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Various SPPU colleges
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Teaching undergraduate computer science courses in various SPPU
                affiliated colleges, while gaining early academic experience and
                building a foundation in mentoring and professional growth.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Pune, Maharashtra
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm">
                Year: 2001 - 2007 (6 yrs)
              </p>
            </div>
          </div>
        </div>

        {/* Research Interests Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Deep Learning",
              "Computer Vision",
              "Data Analytics",
              "Data Security",
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-gray-50 flex justify-center dark:bg-gray-900 p-4 rounded-lg shadow-sm"
              >
                <p className="text-gray-900 dark:text-white font-medium">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I am open to academic collaborations, research opportunities and
            educational consultations.
          </p>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
