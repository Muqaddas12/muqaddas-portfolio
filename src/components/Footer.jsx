"use client";

import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "./portfolioData";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/10 bg-[#060d13] px-5 py-8 text-slate-400 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-semibold text-white">Muqaddas Malik</p>
          <p className="mt-1 text-sm">Full Stack Developer - React, Next.js, Node.js, mobile utilities.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white transition hover:border-cyan-300/40"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white transition hover:border-cyan-300/40"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="grid h-10 w-10 place-items-center rounded-lg bg-white text-[#071018] transition hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-7xl text-sm">
        Copyright {new Date().getFullYear()} Muqaddas Malik. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
