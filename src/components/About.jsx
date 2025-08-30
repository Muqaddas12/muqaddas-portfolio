"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] 
      rounded-xl mx-auto max-w-4xl p-8 my-16 shadow-lg text-white 
      backdrop-blur-md border border-yellow-500/20 hover:border-yellow-400/40 
      transition duration-500 hover:shadow-yellow-500/20 hover:scale-[1.02]"
    >
      {/* 🔥 Animated Heading */}
      <h2
        className="text-3xl font-bold text-yellow-300 mb-6 border-b-4 border-yellow-500 
        pb-2 w-fit mx-auto animate-pulse tracking-wider"
      >
        <span className="typing-text">About Me</span>
      </h2>

      {/* 👤 Profile Image */}
      <div className="flex justify-center mb-6" data-aos="zoom-in">
        <img
          src="/Muqaddas Malik.jpg"
          alt="Muqaddas Malik"
          className="w-28 h-28 rounded-full border-2 border-yellow-400 
          shadow-md transition duration-300 hover:scale-110 hover:shadow-yellow-400/60"
        />
      </div>

      {/* 📝 Description */}
      <p
        className="text-slate-300 leading-relaxed mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        As a passionate and results-driven{" "}
        <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-semibold">
          Full Stack Developer
        </span>
        , I aim to contribute my technical expertise and creative problem-solving
        skills to build impactful digital experiences.
      </p>

      <p
        className="text-slate-300 leading-relaxed mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I specialize in{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          React
        </span>
        ,{" "}
        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-semibold">
          Node.js
        </span>
        ,{" "}
        <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-semibold">
          Firebase
        </span>
        , and I have experience with both frontend and backend technologies.
      </p>

      <p
        className="text-slate-300 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Outside of development, I'm interested in{" "}
        <span className="italic text-yellow-400">cybersecurity</span>,{" "}
        <span className="italic text-yellow-400">animation</span>, and building
        tools that are as fun as they are useful.
      </p>
    </section>
  );
};

export default About;
