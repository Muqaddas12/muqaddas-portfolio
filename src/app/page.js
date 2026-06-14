import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import InterviewFlow from "../components/InterviewFlow";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071018] text-white">
      <Navbar />
      <Hero />
      <About />
      <InterviewFlow />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Homepage;
