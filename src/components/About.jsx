"use client";

import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const focusAreas = [
  {
    icon: <FaCode />,
    title: "Full-stack builds",
    text: "React and Next.js frontends connected with Node.js, Firebase, MySQL, and practical APIs.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile utilities",
    text: "Android and React Native app ideas such as scanners, result apps, downloaders, and media tools.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security mindset",
    text: "Hands-on TryHackMe and HackTheBox practice that improves how products are tested and shipped.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-kicker">About Muqaddas Malik</p>
          <h2 className="section-title">A developer who likes useful products and polished interfaces.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="space-y-6 text-base leading-8 text-slate-300"
        >
          <p>
            I build web and mobile projects with a practical mindset: fast to
            understand, responsive on every screen, and clear enough for real
            users. My work spans portfolios, service websites, admin systems,
            education tools, document scanners, and business websites.
          </p>
          <p>
            I completed my MCA with 8.19 CGPA and keep improving through
            freelance work, public GitHub projects, UI/UX learning, and
            cybersecurity labs. The common thread is simple: make software that
            feels trustworthy, focused, and easy to use.
          </p>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {focusAreas.map((area, index) => (
          <motion.article
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.06] sm:p-6"
          >
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/12 text-cyan-200">
              {area.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{area.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{area.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default About;
