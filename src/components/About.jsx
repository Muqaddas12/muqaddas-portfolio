import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white/10 backdrop-blur rounded-xl mx-auto max-w-4xl p-8 my-16 shadow-md text-white">
      <h2 className="text-3xl font-bold text-yellow-300 mb-4 border-b border-yellow-500 inline-block pb-1">
        About Me
      </h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        As a passionate and results-driven full-stack developer, I aim to contribute my
        technical expertise and creative problem-solving skills to build impactful digital
        experiences. I am committed to continuous learning and collaborative development,
        with a focus on scalability, user-centered design, and innovative solutions across
        web, mobile, and desktop platforms.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        I specialize in React, Node.js, Express, React Native, and Firebase, and I have experience
        with both frontend and backend technologies. My portfolio showcases mobile apps,
        university tools, and playful experiments that demonstrate both creativity and impact.
      </p>
      <p className="text-slate-300 leading-relaxed">
        Outside of development, I'm interested in cybersecurity, animation, and building tools
        that are as fun as they are useful.
      </p>
    </section>
  );
};

export default About;
