"use client";

import { motion } from "framer-motion";
import { skillGroups } from "./portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">Tools I use to move from idea to shipped product.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          The stack is intentionally practical: modern frontend foundations,
          backend basics, deployment-ready workflows, and enough mobile tooling
          to build useful apps.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 22, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            whileHover={{ y: -8 }}
            className="rounded-lg border border-white/10 bg-[#0b1720] p-5 transition hover:border-cyan-300/30 sm:p-6"
          >
            <h3 className="text-lg font-bold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 + skillIndex * 0.025 }}
                  whileHover={{ scale: 1.06 }}
                  className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
