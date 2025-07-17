import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white  scroll-smooth relative">
      {/* 🔘 Dark Mode Toggle Button */}
      <DarkModeToggle />

      {/* 🧭 Content Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Homepage;
