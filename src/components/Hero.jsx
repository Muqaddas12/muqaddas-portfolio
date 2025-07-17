import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/Muqaddas12" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muqaddas-malik-a65048229" },
  { icon: <FaEnvelope />, url: "mailto:muqaddasmalik781@gmail.com" },
];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-32 bg-gradient-to-b from-indigo-900 via-purple-800 to-indigo-900 text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-400">
        Hi, I'm Muqaddas Malik
      </h1>
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
        className="text-xl md:text-2xl text-yellow-200 font-mono mb-6"
      />
      <div className="flex gap-6 text-2xl text-yellow-300">
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
    </section>
  );
};

export default Hero;
