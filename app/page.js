import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-15 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/chaitali-chandankhede.avif"
                  alt="Dr. Chaitali Chandankhede"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:w-1/2 space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Dr. Chaitali Chandankhede
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-400">
                Educator, Researcher & Computer Science Professional
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                A Computer Science & Engineering professional with expertise in
                AI, Machine Learning, Deep Learning, Computer Vision, Data
                Analytics and Data Security.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <>
                  <Link
                    href="https://scholar.google.com/citations?hl=hi&user=iDcANtwAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    View My Research
                  </Link>
                </>
                <>
                  <Link
                    href="/contact"
                    className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Contact Me
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Publications
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Selected research papers and publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1) Literature survey of sarcasm detection (WiSPNET 2017) */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <Image
                    src="/file.svg"
                    alt="Publication thumbnail"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Literature survey of sarcasm detection
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Survey of techniques, datasets and challenges for sarcasm
                  detection crucial to sentiment analysis.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    NLP
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Sentiment Analysis
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Machine Learning
                  </span>
                </div>
                <a
                  href="https://doi.org/10.1109/WiSPNET.2017.8300120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Publication →
                </a>
              </div>
            </div>

            {/* 2) Survey on recent cancer classification systems (WiSPNET 2017) */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <Image
                    src="/file.svg"
                    alt="Publication thumbnail"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Survey on recent cancer classification systems for cancer
                  diagnosis
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Review of ML‑based tumor classification systems and data
                  pipelines for early cancer diagnosis.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Machine Learning
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                    Healthcare
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    Data Mining
                  </span>
                </div>
                <a
                  href="https://doi.org/10.1109/WiSPNET.2017.8300231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Publication →
                </a>
              </div>
            </div>

            {/* 3) Robust technique for relational DB watermarking (ICCICT 2015) */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <Image
                    src="/file.svg"
                    alt="Publication thumbnail"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  A robust technique for relational database watermarking and
                  verification
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Method to embed imperceptible watermarks in textual & numeric
                  fields and verify ownership by extraction.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200">
                    DB Security
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    Digital Watermarking
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
                    Data Privacy
                  </span>
                </div>
                <a
                  href="https://doi.org/10.1109/ICCICT.2015.7045676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Publication →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://scholar.google.com/citations?hl=hi&user=iDcANtwAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View All Publications
            </a>
          </div>
        </div>
      </section>

      {/* Research & Publications Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Research & Publications
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              My academic contributions and research work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Publication Card 1 */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Awards & Patents
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                I have earned awards and patents for my contributions to
                computer science education and research. These recognitions
                reflect my passion for innovation and dedication to academic
                excellence.
              </p>
              <div className="mt-4">
                <a
                  href="/awards"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  View Awards & Patents
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Publication Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Outreach & Engagement
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                I actively engage in outreach through workshops, mentoring and
                talks. These initiatives connect students and professionals,
                spark innovation and create meaningful opportunities for
                learning and growth.
              </p>
              <div className="mt-4">
                <a
                  href="/outreach"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  View Outreach Activities
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Publication Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Professional Profile
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                My professional journey combines teaching, research and
                collaboration. I am passionate about guiding students, sharing
                knowledge and contributing to impactful projects. Connect with
                me on LinkedIn to know more.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/dr-chaitali-chandankhede-6697651b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  View LinkedIn Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            I'm available for academic collaborations, research opportunities,
            and educational consultations.
          </p>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-white text-blue-600 font-medium hover:bg-gray-200 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
