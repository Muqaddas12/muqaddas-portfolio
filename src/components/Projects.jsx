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
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55, delay: index * 0.06 }}
    whileHover={{ y: -8 }}
    className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.07] sm:p-6"
  >
    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />

    <div className="mb-5 mt-2 flex items-center gap-3">
      <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${project.accent}`} />
      {project.type === "app" && (
        <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
          <FaAndroid className="text-[9px]" /> Android
        </span>
      )}
    </div>

    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
      {project.category}
    </p>
    <h3 className="mt-2.5 text-xl font-black text-white sm:text-2xl">{project.title}</h3>
    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

    <div className="mt-5 flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-md bg-[#071018] px-2.5 py-1 text-xs text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Store badges for apps */}
    {project.type === "app" && (
      <div className="mt-4 flex flex-wrap gap-2">
        <StoreBadge
          href={project.playStore}
          label="Play Store"
          icon={<FaAndroid className="text-emerald-400" />}
        />
        <StoreBadge
          href={project.uptodown}
          label="Download on Uptodown"
          icon={<FaExternalLinkAlt className="text-[10px] text-slate-400" />}
        />
      </div>
    )}

    <div className="mt-5 flex flex-wrap gap-3">
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
      >
        <FaGithub />
        Code
      </a>
      {(project.type === "app" ? project.downloadUrl : project.live) && (
        <a
          href={project.type === "app" ? project.downloadUrl : project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#071018] transition hover:-translate-y-0.5"
        >
          <FaExternalLinkAlt />
          {project.type === "app" ? "Download App" : "Live Site"}
        </a>
      )}
    </div>
  </motion.article>
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
          6 flagship products — Android apps on Google Play Store & Uptodown, and live
          websites — built from scratch and shipped to real users. Each shows
          product thinking, clean UI, and end-to-end delivery.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
