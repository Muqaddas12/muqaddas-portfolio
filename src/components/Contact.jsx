"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { profile } from "./portfolioData";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <FaEnvelope /> },
  { label: "GitHub", value: "github.com/Muqaddas12", href: profile.github, icon: <FaGithub /> },
  { label: "LinkedIn", value: "muqaddas-malik", href: profile.linkedin, icon: <FaLinkedinIn /> },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xvgqypag", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      event.target.reset();
    } catch {
      setError("Message could not be sent. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Have a project, role, or idea?</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Send a short message and I will reply as soon as possible. You can
            also reach me directly through email, GitHub, or LinkedIn.
          </p>

          <div className="mt-8 grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-300/12 text-cyan-200">
                  {link.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{link.label}</span>
                  <span className="text-sm text-slate-400">{link.value}</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-lg border border-white/10 bg-[#0b1720] p-6 md:p-8"
        >
          {submitted ? (
            <div className="rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-5 text-emerald-100">
              Your message has been sent. Thank you for reaching out.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-200" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
              </div>

              {error && <p className="text-sm text-red-300">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 font-bold text-[#071018] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
