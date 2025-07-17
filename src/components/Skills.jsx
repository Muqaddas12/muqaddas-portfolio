import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiKotlin,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "C", icon: <SiC className="text-blue-400 text-3xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-300 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-3xl" /> },
  { name: "Java (basic)", icon: <FaJava className="text-red-400 text-3xl" /> },
  { name: "Kotlin (basic)", icon: <SiKotlin className="text-purple-400 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-200 text-3xl" /> },
  { name: "Redux (learning)", icon: <SiRedux className="text-purple-300 text-3xl" /> },
  { name: "Node.js", icon: <FaNode className="text-green-400 text-3xl" /> },
  { name: "Express.js", icon: <FaNode className="text-green-200 text-3xl" /> },
  { name: "EJS", icon: <span className="text-lg font-bold text-yellow-200">EJS</span> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-sky-300 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-400 text-3xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-300 text-3xl" /> },
];

const Skills = () => {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });
}, []);

  return (
    <section
      id="skills"
      className="text-center py-16 px-6 max-w-5xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center transition-transform hover:scale-110"
            data-aos="zoom-in"
            data-aos-delay={idx * 50}
          >
            {skill.icon}
            <span className="mt-2 text-slate-200 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
