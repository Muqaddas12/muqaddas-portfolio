"use client"
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-700">
      {/* Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.76,22,103.91,29.68,158,18C230.16,48,284,17,339,14.46c48.21-2.28,91.79,18.47,139,26.28C542.36,55,598.64,47.83,652,29.17c47.61-16.25,89.94-45.09,139-48.43,47.41-3.25,95.26,21.51,142,35.26,37.53,11,74.23,11.17,111,2.42V0Z"
            fill="#1e293b"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h3 className="text-lg font-semibold text-yellow-300 mb-4 text-center">
          Connect With Me
        </h3>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6 text-xl">
          <a
            href="https://github.com/Muqaddas12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/muqaddas-malik-a65048229"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:muqaddasmalik781@gmail.com"
            className="hover:text-yellow-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Newsletter */}
        <div className="text-center mb-8">
          <p className="text-sm text-slate-400 mb-2">
            Want updates on my latest projects?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded bg-slate-800 text-white border border-slate-600 focus:outline-none"
            />
            <button
              className="px-4 py-2 rounded bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition"
              onClick={() => {
                alert("Thanks! Newsletter system is coming soon.");
                setEmail("");
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Muqaddas Malik. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 text-slate-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
