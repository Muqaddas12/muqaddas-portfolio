import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNode className="text-green-400 text-3xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
];

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/Muqaddas12" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muqaddas-malik-a65048229" },
  { icon: <FaEnvelope />, url: "mailto:muqaddasmalik781@gmail.com" },
];

const projects = [
  {
    title: "SugResults",
    desc: "Student-focused app for real-time result access with PDF export. 1000+ downloads. Available on Play Store & Uptodown."
  },
  {
    title: "TrueScan - Document Scanner",
    desc: "Scanner app to convert images to PDF with viewer, sharing & smart management. Live on Play Store & Uptodown."
  },
  {
    title: "mtbyown.com",
    desc: "Professional tech service website for mobile, web, and desktop app development."
  },
  {
    title: "sipligar.com",
    desc: "Experimental website with illusions, games, and tools for creative fun."
  }
];

const Home = () => {
  const [konamiCode, setKonamiCode] = useState([]);
  const secretCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKonamiCode((prev) => {
        const newCode = [...prev, e.key].slice(-secretCode.length);
        if (JSON.stringify(newCode) === JSON.stringify(secretCode)) {
          alert("🎉 Konami code activated! Hello Developer!");
        }
        return newCode;
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white px-6 py-10 relative scroll-smooth">
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none animate-pulse"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="80" fill="#38bdf8" />
        <circle cx="600" cy="150" r="60" fill="#facc15" />
        <circle cx="400" cy="300" r="50" fill="#34d399" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-center text-yellow-400"
        >
          Hi, I'm Muqaddas Malik
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "UI/UX Explorer",
            2000,
            "Open Source Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-yellow-200 font-mono text-center block mb-6"
        />

        <div className="flex justify-center gap-6 text-2xl text-yellow-300 mb-12">
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

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 rounded-xl p-8 backdrop-blur-md mb-16"
        >
          <h2 className="text-3xl font-bold text-yellow-300 mb-4 border-b border-yellow-500 inline-block pb-1">
            About Me
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            As a passionate and results-driven full-stack developer, I aim to contribute my
            technical expertise and creative problem-solving skills to build impactful digital
            experiences. I am committed to continuous learning and collaborative development,
            with a focus on scalability, user-centered design, and innovative solutions across web,
            mobile, and desktop platforms.
          </p>
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center hover:scale-110 transition-transform"
              >
                {skill.icon}
                <span className="mt-2 text-slate-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
            Live Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-yellow-400/20 transition-transform transform hover:-translate-y-1 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-yellow-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a
            href="/Muqaddas_Resume.pdf"
            download
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold text-white shadow-md inline-block"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;