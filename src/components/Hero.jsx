"use client"
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/Muqaddas12" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muqaddas-malik-a65048229" },
  { icon: <FaEnvelope />, url: "mailto:muqaddasmalik781@gmail.com" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
    >
      {/* 🎨 Animated Blobs Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-2/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* 🎯 Hero Text with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4">
          Hi, I'm Muqaddas Malik
        </h1>
        <TypeAnimation
          sequence={[
            "Full Stack Developer", 2000,
            "UI/UX Explorer", 2000,
            "Open Source Enthusiast", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-yellow-200 font-mono block"
        />

        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-2xl text-yellow-300">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* 📄 Resume Button (optional) */}
        <a
          href="/Muqaddas_Resume.pdf"
          download
          className="mt-6 inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition font-semibold"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
