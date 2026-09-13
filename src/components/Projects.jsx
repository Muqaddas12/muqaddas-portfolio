"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaAndroid, FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { featuredProjects, profile } from "./portfolioData";

const StoreBadge = ({ href, label, icon }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
    >
      {icon}
      {label}
    </a>
  ) : null;

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-row items-center gap-3 sm:gap-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-5 transition hover:border-white/20 hover:bg-white/[0.07] w-full"
    >
      {/* Image / Icon */}
      <div className={`h-14 w-14 sm:h-20 sm:w-20 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.accent} p-[1.5px] shadow-lg shadow-black/40`}>
        <div className="flex h-full w-full items-center justify-center rounded-[10px] sm:rounded-[14px] bg-[#0d171f] overflow-hidden p-1.5 sm:p-2">
          <img 
            src={project.image || "/app-placeholder.svg"} 
            alt={project.title} 
            className="h-full w-full object-contain rounded-md sm:rounded-lg transition duration-300 group-hover:scale-105" 
          />
        </div>
      </div>

      {/* Content: Title & Version */}
      <div className="flex flex-1 flex-col justify-center min-w-0 pr-2">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-base sm:text-2xl font-bold text-white leading-snug">
            {project.title}
          </h3>
          {project.type === "app" && (
            <span className="hidden md:inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-300">
              Android
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs sm:text-sm font-semibold text-cyan-400">
          {project.version || "V 1.0.0"}
        </p>
        <p className="hidden sm:block mt-1 text-xs text-slate-400 line-clamp-1">
          {project.description}
        </p>
      </div>

      {/* Click to open button */}
      <div className="shrink-0">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-[#071018] shadow-md transition group-hover:-translate-y-0.5">
          Open
          <FaArrowRight className="text-[10px] sm:text-xs" />
        </span>
      </div>
    </Link>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">Featured work</p>
          <h2 className="section-title">
            Apps & websites built for real users.
          </h2>
        </div>
        <p className="text-sm leading-7 text-slate-400">
          Flagship products — Android apps on Google Play Store & Uptodown, and live
          websites — built from scratch and shipped to real users.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* CTA to full projects page */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mt-10 flex flex-col items-center justify-between gap-5 rounded-xl border border-white/10 bg-[#0b1720] p-6 md:flex-row"
      >
        <div>
          <h3 className="text-xl font-bold text-white">Want to see more?</h3>
          <p className="mt-1.5 text-sm text-slate-400">
            View all projects with detailed descriptions, tech stacks, and store links.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#071018] transition hover:-translate-y-0.5"
          >
            All Projects
            <FaArrowRight />
          </Link>
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
