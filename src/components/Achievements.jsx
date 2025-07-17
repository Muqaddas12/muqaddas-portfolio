import React from "react";

const internships = [
  {
    title: "Frontend Intern – Jio (Remote)",
    duration: "Jan 2024 – Feb 2024",
    desc: "Worked on React.js applications and contributed to UI component development.",
  },
  {
    title: "Frontend Intern – Brigosha Technologies",
    duration: "Aug 2023 – Oct 2023",
    desc: "Built reusable components, maintained dashboards, and optimized frontend logic.",
  },
  {
    title: "Frontend Intern – CodeSoft",
    duration: "Jun 2023 – Jul 2023",
    desc: "Created projects using HTML, CSS, JS, React, and collaborated in a Git workflow.",
  },
];

const certifications = [
  "TryHackMe – Beginner to Intermediate Labs (Privilege Escalation, CTFs)",
  "HackTheBox – Virtual Penetration Labs (Shells, Vulnerability Discovery)",
  "Coursera – Foundations of UI/UX Design (Google)",
  "Coursera – Introduction to Front-End Development (Meta)",
  "Coursera – Java Programming and Software Engineering (Duke University)",
];

const Achievements = () => {
  return (
    <section id="achievements" className="max-w-5xl mx-auto py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-yellow-300 mb-10 text-center">Achievements</h2>

      {/* Internships */}
      <div className="mb-10">
        <h3 className="text-2xl text-yellow-200 font-semibold mb-4">Internships</h3>
        <div className="space-y-6">
          {internships.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-yellow-300/10 transition-transform transform hover:scale-105"
            >
              <h4 className="text-lg font-semibold text-yellow-100">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.duration}</p>
              <p className="text-slate-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl text-yellow-200 font-semibold mb-4">Certifications</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          {certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
