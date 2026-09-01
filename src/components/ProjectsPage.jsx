"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaAndroid,
  FaArrowLeft,
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
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.6, delay: index * 0.06 }}
    className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-white/20 hover:bg-white/[0.065]"
  >
    {/* top gradient bar */}
    <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

    <div className="flex flex-1 flex-col p-6 sm:p-7">
      {/* header row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {project.category}
            </span>
            {project.type === "app" && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-300">
                <FaAndroid /> App
              </span>
            )}
            {project.type === "web" && (
              <span className="flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-sky-300">
                <FaGlobe /> Web
              </span>
            )}
          </div>
          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
            {project.title}
          </h2>
        </div>
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} text-white`}
        >
          {project.type === "app" ? (
            <FaAndroid className="text-xl" />
          ) : (
            <FaGlobe className="text-xl" />
          )}
        </div>
      </div>

      {/* description */}
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
        {project.description}
      </p>

      {/* tech stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-lg bg-[#071018] px-3 py-1.5 text-xs font-medium text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* store badges */}
      {project.type === "app" && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.playStore && (
            <StoreBadge
              href={project.playStore}
              label="Google Play"
              icon={<FaAndroid />}
              color="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/50"
            />
          )}
          {project.uptodown && (
            <StoreBadge
              href={project.uptodown}
              label="Uptodown"
              icon={<FaExternalLinkAlt className="text-[10px]" />}
              color="border-sky-500/30 bg-sky-500/10 text-sky-300 hover:border-sky-400/50"
            />
          )}
        </div>
      )}

      {/* action buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          <FaGithub />
          View Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-[#071018] shadow-lg transition hover:-translate-y-0.5 bg-white`}
          >
            <FaExternalLinkAlt />
            {project.type === "app" ? "View on Store" : "Live Site"}
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

/* ─── small card for additional projects ─── */
const SmallCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
  >
    <div className={`mb-4 h-1 w-16 rounded-full bg-gradient-to-r ${project.accent}`} />
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
      {project.category}
    </p>
    <h3 className="mt-2 text-lg font-bold text-white">{project.title}</h3>
    <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span key={t} className="rounded-md bg-[#071018] px-2.5 py-1 text-xs text-slate-300">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
      >
        <FaGithub className="text-[10px]" />
        Code
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#071018] transition hover:-translate-y-0.5"
        >
          <FaExternalLinkAlt className="text-[10px]" />
          Live
        </a>
      )}
    </div>
  </motion.article>
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

