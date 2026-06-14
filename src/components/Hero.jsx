"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { profile, stats } from "./portfolioData";

const socialLinks = [
  { label: "GitHub", icon: <FaGithub />, url: profile.github },
  { label: "LinkedIn", icon: <FaLinkedinIn />, url: profile.linkedin },
  { label: "Email", icon: <FaEnvelope />, url: `mailto:${profile.email}` },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden px-4 pb-14 pt-24 sm:px-5 md:px-8 md:pb-16 md:pt-36"
    >
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.22),transparent_32%),radial-gradient(circle_at_76%_12%,rgba(251,191,36,0.15),transparent_28%),linear-gradient(180deg,rgba(7,16,24,0),#071018_88%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.55 }}
            className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-100 sm:text-sm"
          >
            Available for full-stack, mobile, and product-focused web work
          </motion.p>

          <h1 className="max-w-4xl text-[2.72rem] font-black leading-[0.98] tracking-normal text-white min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
            Muqaddas Malik builds{" "}
            <span className="animated-text-gradient">clean, usable</span>{" "}
            digital products.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:mt-7 sm:text-lg">
            Full Stack Developer from Meerut, India, focused on React, Next.js,
            Node.js, Firebase, mobile utilities, and practical interfaces that
            solve real problems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ScrollLink
              to="projects"
              smooth
              duration={550}
              offset={-84}
              className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 font-semibold text-[#071018] shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:shadow-cyan-400/20"
            >
              View projects
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </ScrollLink>
            <a
              href={profile.resume}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
            >
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[430px]">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-8 z-10 rounded-lg border border-white/12 bg-[#071018]/86 px-4 py-3 text-sm text-white shadow-xl backdrop-blur sm:-right-6"
            >
              8.19 CGPA MCA
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 bottom-28 z-10 rounded-lg border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-sm text-cyan-100 shadow-xl backdrop-blur sm:-left-7"
            >
              26 public repos
            </motion.div>
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#0d1b25] p-4">
              <img
                src={profile.image}
                alt="Muqaddas Malik portrait"
                className="aspect-[4/5] w-full rounded-[1.2rem] object-cover object-center"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-lg border border-white/12 bg-[#071018]/82 p-4 backdrop-blur">
                <p className="text-sm text-slate-300">Currently building</p>
                <p className="mt-1 font-semibold text-white">
                  Product websites, admin panels, mobile utilities
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
