import React from "react";

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
  return (
    <section id="education" className="max-w-4xl mx-auto py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-yellow-300 mb-10 text-center">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-yellow-400/10 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-yellow-200">{edu.degree}</h3>
            <p className="text-slate-300">{edu.institution}</p>
            <p className="text-slate-400 text-sm">{edu.duration}</p>
            <p className="text-slate-400 text-sm mt-1">
              {edu.cgpa !== "Ongoing" ? `CGPA: ${edu.cgpa}` : "CGPA: In Progress"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
