"use client";

import { useMemo, useState } from "react";

const scholarProfileUrl =
  "https://scholar.google.com/citations?user=iDcANtwAAAAJ&hl=en";
const TOTAL_PUBLICATIONS = 27; // update this anytime

const awards = [
  // --- Best Paper Awards ---
  {
    title: "Speech Emotion Recognition Using Deep Learning",
    authors: ["Chaitali Chandankhede", "Ananya Sharma", "Dharmika Tank"],
    venue:
      "8th International Conference on Computing, Communication, Control and Automation (ICCUBEA 2024) • Scopus",
    dates: "23–24 Aug 2024",
    year: 2024,
    award: "Best Paper",
  },
  {
    title:
      "Classification of Modi Lipi Characters using Deep Learning Approach",
    authors: ["Chaitali Chandankhede", "Rajneeshkaur Sachdeo"],
    venue:
      "4th International Conference on Data Analytics & Management (ICDAM 2023), London Metropolitan University • Springer LNNS",
    dates: "23–24 Jun 2023",
    year: 2023,
    award: "Best Paper",
  },

  // --- Other recognitions ---
  {
    title:
      "Modi Script Handwritten Character Classification using Drop-out Induced Incremental Learning Approach",
    authors: [
      "Chaitali Chandankhede",
      "Rajneeshkaur Sachdeo",
      "Urmila Shrawankar",
    ],
    venue:
      "International Journal of Information Systems Engineering and Management • Scopus",
    year: 2024,
    award: "Appreciation",
    notes: "Received Appreciation award from Springer",
  },
  {
    title: "Dynamic Navigation using AI for Autonomous Vehicle Systems",
    authors: [
      "Chaitali Chandankhede",
      "Chinmay Mhatre",
      "Manas Pal",
      "Meet Dhote",
      "Abhinav Prakash",
      "Urmila Shrawankar",
    ],
    venue:
      "International Journal of Information Systems Engineering and Management • Scopus",
    year: 2025,
    award: "Second Prize",
    notes: "Got second prize at RBUCON’25",
  },
];

const patents = [
  {
    title: "A Parking Assistance System",
    status: "Granted",
    number: "2023/03286",
    year: 2023,
    inventors: [
      "Chaitali Chandankhede",
      "Pratap Kakade",
      "Kabir Satya Pandey",
      "Prem Tushar Pednekar",
      "Rujul Khatavkar",
    ],
  },
  {
    title:
      "Process and apparatus for conversion of waste plastic into liquid and gaseous fuel",
    status: "Published",
    number: "201921033809",
    year: 2019,
    inventors: [
      "Chaitali Chandankhede",
      "Dr. Girish Deshmukh",
      "Deepak Awate",
      "Bhavna Tiple",
      "Shridevi Karande",
      "Vandana Jagtap",
      "Anil Pawade",
      "Piyush Dalke",
    ],
  },
];

export default function AwardsPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All"); // All | Awards | Patents

  const years = useMemo(() => {
    const set = new Set([
      ...awards.map((a) => a.year),
      ...patents.map((p) => p.year),
    ]);
    return Array.from(set).sort((a, b) => b - a);
  }, []);
  const [year, setYear] = useState("All");

  const bestPapers = awards.filter((a) => a.award === "Best Paper").length;
  const otherAwards = awards.length - bestPapers;
  const granted = patents.filter((p) => p.status === "Granted").length;
  const publishedApps = patents.filter((p) => p.status !== "Granted").length;

  const visibleAwards = useMemo(() => {
    return awards.filter((a) => {
      const yOk = year === "All" || a.year === Number(year);
      const qOk =
        query === "" ||
        `${a.title} ${a.authors.join(" ")} ${a.venue}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return yOk && qOk;
    });
  }, [year, query]);

  const visiblePatents = useMemo(() => {
    return patents.filter((p) => {
      const yOk = year === "All" || p.year === Number(year);
      const qOk =
        query === "" ||
        `${p.title} ${p.inventors.join(" ")} ${p.number}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return yOk && qOk;
    });
  }, [year, query]);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero (no breadcrumbs) */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <div className="flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            Awards & Patents
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl text-center mx-auto">
            Recognition for research excellence, including Best Paper awards,
            other distinctions and intellectual property.
          </p>
        </div>
      </section>

      {/* Stats (with Total Publications) */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Stat label="Total Publications" value={TOTAL_PUBLICATIONS} />
            <Stat label="Best Papers" value={bestPapers} />
            <Stat label="Awards" value={otherAwards} />
            <Stat label="Patents (Granted)" value={granted} />
            <Stat label="Patents (Published)" value={publishedApps} />
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            {["All", "Awards", "Patents"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  tab === t
                    ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:text-white dark:border-blue-500"
                    : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, author, venue…"
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-gray-200 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Awards */}
      {(tab === "All" || tab === "Awards") && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Awards
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {visibleAwards.map((a, i) => (
                <AwardCard key={i} item={a} />
              ))}
              {visibleAwards.length === 0 && (
                <p className="text-gray-600 dark:text-gray-300">
                  No awards match your filters.
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Patents */}
      {(tab === "All" || tab === "Patents") && (
        <section className="pb-10">
          <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Patents
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {visiblePatents.map((p, i) => (
                <PatentCard key={i} item={p} />
              ))}
              {visiblePatents.length === 0 && (
                <p className="text-gray-600 dark:text-gray-300">
                  No patents match your filters.
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA to Google Scholar */}
      <section className="py-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Want to see all publications?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Browse the full, up-to-date list on Google Scholar.
          </p>
          <a
            href={scholarProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            View on Google Scholar →
          </a>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className=" flex-col rounded-2xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-md transition-shadow">
      <div className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
        {value}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {label}
      </div>
    </div>
  );
}

function AwardCard({ item }) {
  const badge =
    item.award === "Best Paper"
      ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200"
      : item.award === "Second Prize"
      ? "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200"
      : "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200";

  return (
    <article className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium text-gray-900 dark:text-white">
          {item.title}
        </h3>
        <span
          className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${badge}`}
        >
          {item.award}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
        {item.authors.join(", ")}
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {item.venue}
        {item.dates ? ` • ${item.dates}` : ""}
      </p>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Year: {item.year}
      </p>
      {item.notes && (
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
          {item.notes}
        </p>
      )}
    </article>
  );
}

function PatentCard({ item }) {
  const badge =
    item.status === "Granted"
      ? "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-200"
      : "bg-gray-100 text-gray-900 dark:bg-gray-900/40 dark:text-gray-100";

  return (
    <article className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium text-gray-900 dark:text-white">
          {item.title}
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full ${badge}`}>
          {item.status}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
        Inventors: {item.inventors.join(", ")}
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Number: {item.number}
      </p>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Year: {item.year}
      </p>
    </article>
  );
}
