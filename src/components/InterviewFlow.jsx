"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { interviewHighlights } from "./portfolioData";

const InterviewFlow = () => {
  return (
    <section className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(103,232,249,0.10),rgba(255,255,255,0.035)_40%,rgba(251,191,36,0.08))] p-5 sm:p-7 lg:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="section-kicker">For interviewers</p>
            <h2 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
              A quick path through the portfolio.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              This section is designed to make the review easy: first understand
              how I think, then check the stack, then inspect projects and code.
            </p>
            <ScrollLink
              to="projects"
              smooth
              duration={550}
              offset={-84}
              className="group mt-6 inline-flex cursor-pointer items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#071018] transition hover:-translate-y-0.5"
            >
              Jump to work
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </ScrollLink>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {interviewHighlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-white/10 bg-[#071018]/70 p-5 shadow-xl shadow-black/10 backdrop-blur"
              >
                <span className="text-sm font-black text-cyan-200">{item.label}</span>
                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InterviewFlow;
