"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaAndroid,
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { additionalProjects, featuredProjects } from "./portfolioData";

/* ─── store badge ─── */
const StoreBadge = ({ href, label, icon, color }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5 ${color}`}
    >
      {icon}
      {label}
    </a>
  ) : null;

/* ─── full project card ─── */
const FullCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-row items-center gap-3 sm:gap-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-6 transition hover:border-white/20 hover:bg-white/[0.065] w-full"
    >
      {/* Image / Icon */}
      <div className={`h-16 w-16 sm:h-24 sm:w-24 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.accent} p-[1.5px] shadow-lg shadow-black/40`}>
        <div className="flex h-full w-full items-center justify-center rounded-[10px] sm:rounded-[14px] bg-[#0d171f] overflow-hidden p-1.5 sm:p-2.5">
          <img 
            src={project.image || "/app-placeholder.svg"} 
            alt={project.title} 
            className="h-full w-full object-contain rounded-md sm:rounded-lg transition duration-300 group-hover:scale-105" 
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center min-w-0 pr-2">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
            {project.category}
          </span>
          {project.type === "app" && (
            <span className="hidden md:inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-300">
              Android
            </span>
          )}
        </div>
        <h3 className="truncate text-base sm:text-2xl font-black text-white leading-snug">
          {project.title}
        </h3>
        <p className="mt-0.5 text-xs sm:text-sm font-semibold text-cyan-400">
          {project.version || "V 1.0.0"}
        </p>
        <p className="hidden sm:block mt-1.5 text-xs text-slate-400 line-clamp-1">
          {project.description}
        </p>
      </div>

      {/* Click to open button */}
      <div className="shrink-0">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-3.5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-[#071018] shadow-lg transition group-hover:-translate-y-0.5">
          Open
          <FaArrowRight className="text-[10px] sm:text-xs" />
        </span>
      </div>
    </Link>
  </motion.div>
);

/* ─── small card for additional projects ─── */
const SmallCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-row items-center gap-3 sm:gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:p-5 transition hover:border-white/20 hover:bg-white/[0.06] w-full"
    >
      {/* Image / Icon */}
      <div className={`h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.accent} p-[1.5px]`}>
        <div className="flex h-full w-full items-center justify-center rounded-[7px] sm:rounded-[10px] bg-[#0d171f] overflow-hidden p-1 sm:p-1.5">
          <img 
            src={project.image || "/app-placeholder.svg"} 
            alt={project.title} 
            className="h-full w-full object-contain rounded-sm sm:rounded-md opacity-90 transition group-hover:opacity-100 group-hover:scale-105" 
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center min-w-0 pr-2">
        <h3 className="truncate text-sm sm:text-lg font-bold text-white leading-snug">{project.title}</h3>
        <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{project.category}</p>
      </div>

      {/* Open */}
      <div className="shrink-0">
        <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-white transition group-hover:bg-white group-hover:text-black">
          Open
          <FaArrowRight className="text-[9px] hidden sm:inline" />
        </span>
      </div>
    </Link>
  </motion.div>
);

/* ─── filter tabs ─── */
const FILTERS = ["All", "Android App", "Live Website", "Web App"];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const allFeatured = featuredProjects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Android App") return p.type === "app";
    if (filter === "Live Website") return p.category === "Live Website";
    if (filter === "Web App") return p.type === "web" && p.category !== "Live Website";
    return true;
  });

  return (
    <main className="min-h-screen bg-[#071018] text-white">
      {/* hero-grid background */}
      <div className="hero-grid fixed inset-0 -z-20 opacity-50" />
      <div className="fixed inset-x-0 top-0 -z-10 h-[400px] bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.12),transparent_30%),linear-gradient(180deg,rgba(7,16,24,0),#071018_80%)]" />

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 md:px-8 md:pt-14">
        {/* back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <FaArrowLeft className="text-xs" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* page header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-10"
        >
          <p className="section-kicker">Complete work</p>
          <h1 className="section-title">
            Every app & website I&apos;ve shipped.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            From Android apps published on Google Play Store and Uptodown, to live websites
            serving real users — this is the complete picture of what I build.
          </p>
        </motion.div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { value: "4", label: "Android Apps" },
            { value: "2+", label: "Live Websites" },
            { value: "6+", label: "Platforms" },
            { value: "2026", label: "Latest Release" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center"
            >
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="mt-0.5 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── FEATURED PROJECTS ── */}
        <div className="mt-14">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="section-kicker">Flagship projects</p>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                Apps & Websites on Live Platforms
              </h2>
            </div>

            {/* filter tabs */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    filter === f
                      ? "bg-white text-[#071018]"
                      : "border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {allFeatured.map((project, index) => (
              <FullCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* ── ADDITIONAL PROJECTS ── */}
        <div className="mt-20">
          <p className="section-kicker">More work</p>
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Additional Projects
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Web platforms, admin systems, e-commerce, and education tools also built and shipped.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {additionalProjects.map((project, index) => (
              <SmallCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-20 rounded-2xl border border-white/10 bg-[#0b1720] p-8 text-center"
        >
          <h3 className="text-2xl font-black text-white">Want to work together?</h3>
          <p className="mt-3 text-sm text-slate-400">
            I&apos;m open to full-time roles, freelance projects, and collaborations.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#071018] transition hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
            <a
              href="https://github.com/Muqaddas12?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/30"
            >
              <FaGithub />
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectsPage;
