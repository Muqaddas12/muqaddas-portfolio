"use client";

import { motion } from "framer-motion";
import { education } from "./portfolioData";

const Education = () => {
  return (
    <section id="education" className="section-shell">
      <div className="mb-10">
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Academic foundation with steady project practice.</h2>
      </div>

      <div className="relative grid gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 22, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -7 }}
            className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-cyan-300/30 sm:p-6"
          >
            <p className="text-sm font-semibold text-cyan-200">{item.duration}</p>
            <h3 className="mt-4 text-lg font-black text-white sm:text-xl">{item.degree}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{item.institution}</p>
            <p className="mt-5 inline-flex rounded-md bg-white/[0.06] px-3 py-2 text-sm text-slate-200">
              {item.detail}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
