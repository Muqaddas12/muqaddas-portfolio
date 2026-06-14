"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { featuredProjects, githubRepos, profile } from "./portfolioData";

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay: index * 0.05 }}
    whileHover={{ y: -10 }}
    whileTap={{ scale: 0.99 }}
    className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-white/20 hover:bg-white/[0.07] sm:p-6"
  >
    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
    <div className={`mb-6 mt-2 h-1.5 w-24 rounded-full bg-gradient-to-r ${project.accent}`} />
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
      {project.category}
    </p>
    <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">{project.title}</h3>
    <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

    <div className="mt-6 flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span key={tech} className="rounded-md bg-[#071018] px-3 py-1.5 text-xs text-slate-300">
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-7 flex flex-wrap gap-3">
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
      >
        <FaGithub />
        Code
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#071018] transition hover:-translate-y-0.5"
        >
          <FaExternalLinkAlt />
          Live
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
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">Projects with real links, repos, and product intent.</h2>
        </div>
        <p className="text-sm leading-7 text-slate-400">
          Pulled from public GitHub activity and curated for the portfolio. The
          full repository list is linked through GitHub for anyone who wants to
          inspect the code trail.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mt-10 rounded-lg border border-white/10 bg-[#0b1720] p-6"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-bold text-white">More public repositories</h3>
            <p className="mt-2 text-sm text-slate-400">
              Recent and useful repositories from Muqaddas12 on GitHub.
            </p>
          </div>
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40"
          >
            <FaGithub />
            View all repos
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {githubRepos.map((repo) => (
            <a
              key={repo}
              href={`${profile.github}/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white/[0.05] px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {repo}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
