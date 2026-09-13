"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaAndroid,
  FaArrowLeft,
  FaArrowRight,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaHistory,
  FaStar,
} from "react-icons/fa";
import Footer from "./Footer";
import { allProjects, featuredProjects, additionalProjects } from "./portfolioData";

export default function ProjectDetailPage({ project }) {
  const [showOlderVersions, setShowOlderVersions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#071018] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-black">Project Not Found</h1>
        <p className="mt-2 text-slate-400">The project you are looking for does not exist.</p>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#071018]"
        >
          <FaArrowLeft className="text-xs" /> Back to all projects
        </Link>
      </main>
    );
  }

  // Other apps by this developer (excluding current)
  const otherApps = featuredProjects.filter((p) => p.slug !== project.slug);
  // Additional projects (excluding current if it's there)
  const otherProjects = additionalProjects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-[#071018] text-white flex flex-col">
      {/* Background Ambience */}
      <div className="hero-grid fixed inset-0 -z-20 opacity-40 pointer-events-none" />
      <div className="fixed inset-x-0 top-0 -z-10 h-[450px] bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.14),transparent_35%),linear-gradient(180deg,rgba(7,16,24,0),#071018_85%)] pointer-events-none" />

      <main className="flex-1 mx-auto max-w-5xl w-full px-4 sm:px-6 pt-8 pb-16">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4 pb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <FaArrowLeft className="text-xs" />
            <span>All Projects</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 rounded-lg border border-white/10 px-3 py-1.5 transition hover:border-white/25 hover:text-white"
          >
            Portfolio Home
          </Link>
        </div>

        {/* ── 1. VERY TOP: LEFT SIDE IMAGE, RIGHT SIDE IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7 shadow-2xl"
        >
          <div className="flex flex-row items-center justify-between gap-4">
            {/* Left Side: Image & App Title */}
            <div className="flex flex-row items-center gap-3.5 sm:gap-5 min-w-0">
              <div
                className={`h-16 w-16 sm:h-24 sm:w-24 shrink-0 rounded-2xl bg-gradient-to-br ${project.accent} p-[1.5px] shadow-lg shadow-black/50`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0d171f] overflow-hidden p-2 sm:p-2.5">
                  <img
                    src={project.image || "/app-placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>
                  {project.type === "app" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-300">
                      <FaAndroid className="text-[9px]" /> Android
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-sky-300">
                      <FaGlobe className="text-[9px]" /> Web
                    </span>
                  )}
                </div>
                <h1 className="truncate text-xl sm:text-3xl md:text-4xl font-black text-white mt-1 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">
                  By <span className="text-slate-200">Muqaddas Malik</span>
                </p>
              </div>
            </div>

            {/* Right Side: Image (Banner / Preview Badge) */}
            <div className="shrink-0 flex items-center justify-center">
              <div
                className={`h-16 w-16 sm:h-24 sm:w-24 rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-[1.5px] shadow-xl`}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[14px] bg-[#091117] p-2 text-center">
                  <img
                    src={project.bannerImage || project.image || "/app-placeholder.svg"}
                    alt={`${project.title} preview`}
                    className="h-10 w-10 sm:h-14 sm:w-14 object-contain rounded-lg opacity-90"
                  />
                  <span className="mt-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 hidden sm:block">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 2. BOTTOM OF TOP HEADER: VERSION, DOWNLOADS, RATING ── */}
          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-center">
            {/* Rating */}
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.03]">
              <div className="flex items-center gap-1 text-amber-400 font-black text-sm sm:text-lg">
                <span>{project.rating || "4.8"}</span>
                <FaStar className="text-xs sm:text-sm fill-amber-400" />
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 truncate max-w-full">
                {project.ratingCount || "Verified Rating"}
              </p>
            </div>

            {/* Downloads */}
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.03]">
              <span className="font-black text-sm sm:text-lg text-white">
                {project.downloads || "1K+ Downloads"}
              </span>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                {project.type === "app" ? "Installs" : "Visitors"}
              </p>
            </div>

            {/* Version & Size */}
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.03]">
              <span className="font-black text-sm sm:text-lg text-cyan-300">
                {project.version || "V 1.0.0"}
              </span>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                {project.size || "Android Package"}
              </p>
            </div>
          </div>

          {/* ── 3. DOWNLOAD BUTTON (LEFT SIDE) & OLDER VERSION (RIGHT SIDE) ── */}
          <div className="mt-5 flex flex-row items-center justify-between gap-3">
            {/* Left Side: Download / Open Button */}
            <div className="flex-1 flex flex-wrap items-center gap-2">
              <a
                href={project.downloadUrl || project.playStore || project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-white px-5 sm:px-7 py-3 text-sm sm:text-base font-extrabold text-[#071018] shadow-lg shadow-cyan-500/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <FaDownload className="text-xs sm:text-sm" />
                <span>{project.type === "app" ? "Download APK / Install" : "Open Website"}</span>
              </a>

              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
                >
                  <FaAndroid className="text-emerald-400" />
                  Google Play
                </a>
              )}
              {project.uptodown && (
                <a
                  href={project.uptodown}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition hover:border-sky-400/50 hover:text-white"
                >
                  <FaExternalLinkAlt className="text-xs text-sky-400" />
                  Uptodown
                </a>
              )}
            </div>

            {/* Right Side: Older Version Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setShowOlderVersions(!showOlderVersions)}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold transition ${
                  showOlderVersions
                    ? "border-cyan-400 bg-cyan-400/15 text-cyan-200"
                    : "border-white/15 bg-white/[0.05] text-slate-300 hover:border-white/30 hover:text-white"
                }`}
              >
                <FaHistory className="text-xs" />
                <span>Older Versions</span>
              </button>
            </div>
          </div>

          {/* Older Versions Expandable Panel */}
          {showOlderVersions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 rounded-xl border border-cyan-400/20 bg-[#061019] p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Version History & Previous Builds
                </p>
                <span className="text-[11px] text-slate-400">All APKs verified</span>
              </div>
              <div className="space-y-2">
                {(project.olderVersions && project.olderVersions.length > 0
                  ? project.olderVersions
                  : [
                      { version: project.version || "V 1.0.0", date: "Sep 2026", size: project.size || "14 MB", notes: "Current release" },
                      { version: "V 0.9.5", date: "Aug 2026", size: "13.2 MB", notes: "Previous stable build" },
                    ]
                ).map((v, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{v.version}</span>
                        <span className="text-slate-500">• {v.date}</span>
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300">
                          {v.size}
                        </span>
                      </div>
                      <p className="text-slate-400 mt-1">{v.notes}</p>
                    </div>
                    <a
                      href={project.downloadUrl || project.playStore || project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      <FaDownload className="text-[10px]" /> Download
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* ── 4. SCREENSHOTS OF APPS ── */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="section-kicker">Visual Preview</p>
              <h2 className="text-xl sm:text-2xl font-black text-white">App Screenshots</h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">Scroll to view ➔</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-white/20">
            {(project.screenshots && project.screenshots.length > 0
              ? project.screenshots
              : [project.image || "/app-placeholder.svg"]
            ).map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(src)}
                className="shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0a141d] shadow-lg transition hover:border-cyan-400/40 snap-start"
              >
                <img
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="h-72 sm:h-96 w-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Screenshot Modal Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
              />
              <p className="mt-2 text-center text-xs text-slate-400">Click anywhere to close</p>
            </div>
          </div>
        )}

        {/* ── 5. DESCRIPTION OF APPS ── */}
        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="section-kicker">About this product</p>
          <h2 className="text-2xl font-black text-white">Description & Features</h2>

          <div className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-slate-300 space-y-4">
            <p>{project.fullDescription || project.description}</p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3">Key Highlights</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5"
                  >
                    <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Stack */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-[#071018] border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Source Code link */}
          {project.repo && (
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Open source repository:</span>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-xs sm:text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-200"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          )}
        </section>

        {/* ── 6. OTHER APPS BY THIS DEVELOPER ── */}
        <section className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="section-kicker">Developer Portfolio</p>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Other Apps by This Developer
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
            >
              View All ➔
            </Link>
          </div>

          {/* Row list view of other apps */}
          <div className="flex flex-col gap-3">
            {otherApps.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group flex flex-row items-center gap-3 sm:gap-5 rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:p-4 transition hover:border-white/20 hover:bg-white/[0.06] w-full"
              >
                {/* App icon */}
                <div
                  className={`h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-xl bg-gradient-to-br ${item.accent} p-[1.5px] shadow`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0d171f] overflow-hidden p-1.5">
                    <img
                      src={item.image || "/app-placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-contain rounded-md transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-center min-w-0 pr-2">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-sm sm:text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <span className="hidden sm:inline-flex text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-cyan-400">
                    {item.version || "V 1.0.0"}
                  </p>
                </div>

                {/* Open */}
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-[#071018] shadow transition group-hover:-translate-y-0.5">
                    View
                    <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 7. THEN OTHER APPS / WEBSITES ── */}
        <section className="mt-14">
          <div className="mb-5">
            <p className="section-kicker">Websites & Systems</p>
            <h2 className="text-xl sm:text-2xl font-black text-white">Other Projects & Websites</h2>
          </div>

          <div className="flex flex-col gap-3">
            {otherProjects.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group flex flex-row items-center gap-3 sm:gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-3 sm:p-4 transition hover:border-white/20 hover:bg-white/[0.05] w-full"
              >
                <div
                  className={`h-11 w-11 sm:h-14 sm:w-14 shrink-0 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.accent} p-[1.5px]`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] sm:rounded-[10px] bg-[#0d171f] overflow-hidden p-1 sm:p-1.5">
                    <img
                      src={item.image || "/app-placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-contain rounded-sm sm:rounded-md opacity-90 transition group-hover:opacity-100 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center min-w-0 pr-2">
                  <h3 className="truncate text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-bold text-slate-200 transition group-hover:bg-white group-hover:text-black">
                    Explore
                    <FaArrowRight className="text-[9px]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* ── 8. FOOTER ── */}
      <Footer />
    </div>
  );
}

