import React, { useEffect } from "react";
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
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-xl mx-auto max-w-4xl p-8 my-16 shadow-lg text-white backdrop-blur-md border border-yellow-500/20 hover:border-yellow-300/40 transition duration-300"
    >
      <h2
        className="text-3xl font-bold text-yellow-300 mb-6 border-b-4 border-yellow-500 pb-2 w-fit mx-auto animate-pulse"
      >
        About Me
      </h2>


      <div className="flex justify-center mb-6" data-aos="zoom-in">
        <img
          src="/Muqaddas Malik.jpg" 
          alt="Muqaddas Malik"
          className="w-24 h-24 rounded-full border-2 border-yellow-400 shadow-md"
        />
      </div>

      <p
        className="text-slate-300 leading-relaxed mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        As a passionate and results-driven full-stack developer, I aim to contribute my
        technical expertise and creative problem-solving skills to build impactful digital
        experiences. I am committed to continuous learning and collaborative development,
        with a focus on scalability, user-centered design, and innovative solutions across
        web, mobile, and desktop platforms.
      </p>

      <p
        className="text-slate-300 leading-relaxed mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I specialize in React, Node.js, Express, React Native, and Firebase, and I have experience
        with both frontend and backend technologies. My portfolio showcases mobile apps,
        university tools, and playful experiments that demonstrate both creativity and impact.
      </p>

      <p
        className="text-slate-300 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Outside of development, I'm interested in cybersecurity, animation, and building tools
        that are as fun as they are useful.
      </p>
    </section>
  );
};

export default About;
