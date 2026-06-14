"use client";

import { motion } from "framer-motion";
import { certifications } from "./portfolioData";

const Achievements = () => {
  return (
    <section id="achievements" className="section-shell">
      <div className="grid gap-8 rounded-lg border border-white/10 bg-[#0b1720] p-6 md:grid-cols-[0.75fr_1.25fr] md:p-8">
        <div>
          <p className="section-kicker">Proof of learning</p>
          <h2 className="section-title">Certifications and practice areas.</h2>
        </div>

        <div className="grid gap-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-300"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
