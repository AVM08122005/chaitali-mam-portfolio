"use client";

import React from "react";
import Link from "next/link";

// ---- Dr. Chaitali Chandankhede | Outreach data (from resume) ----

// 1) IMPACT — full 23.5-year career (conservative, resume-grounded estimates)
const IMPACT = [
  { label: "Expert Lectures / Presentations Delivered", value: "20+" },
  { label: "Workshops / STTPs Conducted", value: "10+" },
  { label: "Universities/Institutes Reached", value: "15+" },
  { label: "Learners Impacted", value: "5,000+" },
];

// 2) SERVICE_BUCKETS — strictly from resume (excluding internal university admin roles)
const SERVICE_BUCKETS = [
  {
    title: "Editorial & Boards",
    items: [
      {
        role: "Reviewer (≈10 papers)",
        org: "International Journal of Multimedia Tools and Applications (Springer)",
        year: "Ongoing",
      },
      {
        role: "Reviewer (≈2 papers)",
        org: "International Journal of Artificial Intelligence",
        year: "Ongoing",
      },
      {
        role: "Reviewer (25+ papers overall)",
        org: "Various reputed journals and conferences",
        year: "Career total",
      },
    ],
  },
  {
    // Using “Program Committees” to capture external organizing/program roles from resume
    title: "Program Committees",
    items: [
      {
        role: "Organizing / Coordination (State-level STTP)",
        org: "Network and Information Security (with QIP grant)",
        year: "2010–11",
      },
      {
        role: "Organizer / Coordinator",
        org: "Workshops: Machine Learning using Python, Internet of Things, etc.",
        year: "2018–2019",
      },
      {
        role: "Organizer",
        org: "Tour of Large Language Models (Guest Lecture – Abhishek Farkade), DCET MIT-WPU",
        year: "Apr 2025",
      },
    ],
  },
  {
    title: "Chairs & Advisory",
    items: [
      {
        role: "External Paper Setter",
        org: "Bharati Vidyapeeth (Pune) — Data Structures, Algorithms",
        year: "2021–2022",
      },
      {
        role: "Team Member / Panelist (Syllabus Implementation)",
        org: "Cummins College of Engineering, Pune — CG Laboratory",
        year: "Dec 2013",
      },
    ],
  },
  {
    title: "Judging & Outreach Events",
    items: [
      {
        role: "External Examiner",
        org: "PICT, AISSMS, BVP etc",
        year: "Ongoing",
      },
      {
        role: "Judge (Paper Presentation)",
        org: "Electronics Dept., MIT Pune — Intexication",
        year: "Mar 2019",
      },
      {
        role: "Judge (Poster Presentation – TechFest)",
        org: "MIT COE, Pune",
        year: "Mar 2017",
      },
      {
        role: "Judge (Paper Presentation)",
        org: "AISSMS COE, Pune",
        year: "Feb 2012",
      },
    ],
  },
];

// 3) TALKS — conference presentations + explicit speaker entries from resume
const TALKS = [
  {
    title: "Speech Emotion Recognition Using Deep Learning (Best Paper)",
    host: "ICCUBEA 2024",
    date: "Aug 2024",
    link: "",
  },
  {
    title: "AI-Based Music Composition and Generation",
    host: "CCIT 2024",
    date: "Jun 2024",
    link: "",
  },
  {
    title:
      "Classification of Modi Lipi Characters using Deep Learning (Best Paper)",
    host: "ICDAM 2023 (London Metropolitan University)",
    date: "Jun 2023",
    link: "",
  },
];

const INITIATIVES = [
  {
    title: "Mentorship & Research Outreach",
    blurb:
      "Long-term mentoring of PG/UG projects and presenting/participating in conferences; shares research through invited sessions and conference talks.",
  },
  {
    title: "Capacity Building via Workshops & STTPs",
    blurb:
      "Coordinated/organized multi-day programs and hands-on workshops (ML, IoT, LLMs) including a state - level STTP with grant support.",
  },
  {
    title: "Community Engagement & Academic Service",
    blurb:
      "Actively reviewing reputed journals (25+ papers), external paper setter and judging roles at inter-college tech events.",
  },
];

export default function OutreachPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Hero */}
      <section className="px-4 md:px-8 pt-10 pb-10 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 items-center">
          {/* Text Block */}
          <div className="pb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
              Outreach & Engagement
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl text-center mx-auto">
              Advancing computer science through community programs, editorial
              service, conference leadership and public engagement.
            </p>
          </div>

          {/* Impact Metrics Block */}
          <div className="grid grid-cols-2 gap-4">
            {IMPACT.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl text-center border border-gray-200 dark:border-gray-800 p-4 shadow-sm bg-white/60 backdrop-blur dark:bg-gray-900/40"
              >
                <div className="text-3xl md:text-4xl font-semibold">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Buckets (mirrors the reference site's categories) */}
      <section className="px-4 md:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Academic Service
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Editorial roles, program committees, session chairs, advisory
            memberships and judging duties.
          </p>
          <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {SERVICE_BUCKETS.map((bucket) => (
              <div
                key={bucket.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{bucket.title}</h3>
                <ul className="mt-3 space-y-2">
                  {bucket.items.map((it, idx) => (
                    <li key={idx} className="text-sm leading-snug">
                      <span className="font-medium">{it.role}</span>
                      {" — "}
                      <span className="text-gray-600 dark:text-gray-300">
                        {it.org}
                      </span>
                      <div className="text-xs text-gray-500">{it.year}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks & Workshops */}
      <section
        id="talks"
        className="px-4 md:px-8 py-10 bg-white/60 dark:bg-gray-900/40"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Recent Talks & Workshops
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Selected highlights from invited talks, FDPs and public lectures.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {TALKS.map((t) => (
              <article
                key={t.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {t.host}
                </div>
                <div className="text-xs text-gray-500">{t.date}</div>
                {t.link && (
                  <Link
                    href={t.link}
                    className="inline-block mt-3 text-sm underline"
                  >
                    Details
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="px-4 md:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Community Initiatives
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Longer-running programs with sustained impact.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {INITIATIVES.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {i.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-sm text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Invite for Outreach
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            For expert talks, workshops, mentoring programs, or community
            partnerships, please reach out via the contact page. I welcome
            opportunities that create real societal impact.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-2xl bg-blue-600 text-white dark:bg-white hover:bg-blue-700"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
