import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Shobhit Institute of Engineering and Technology, Meerut",
    duration: "2023 – 2025",
    cgpa: "Ongoing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Chaudhary Charan Singh University, Meerut",
    duration: "2020 – 2023",
    cgpa: "7.86 CGPA",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="education"
      className="max-w-5xl mx-auto py-20 px-6 text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-12 text-center relative inline-block">
        Education
        <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded-full animate-pulse" />
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-yellow-200 mb-2">
              {edu.degree}
            </h3>
            <p className="text-slate-300">{edu.institution}</p>
            <p className="text-slate-400 text-sm">{edu.duration}</p>
            <p className="text-slate-400 text-sm mt-1">
              CGPA:{" "}
              <span className="text-white font-medium">
                {edu.cgpa !== "Ongoing" ? edu.cgpa : "In Progress"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
