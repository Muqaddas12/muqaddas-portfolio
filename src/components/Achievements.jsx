"use client"

const certifications = [
  "TryHackMe – Beginner to Intermediate Labs (Privilege Escalation, CTFs)",
  "HackTheBox – Virtual Penetration Labs (Shells, Vulnerability Discovery)",
  "Coursera – Foundations of UI/UX Design (Google)",
  "Coursera – Introduction to Front-End Development (Meta)",
  "Coursera – Java Programming and Software Engineering (Duke University)",
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="max-w-5xl mx-auto py-16 px-6 text-white"
      data-aos="fade-up"
      data-aos-once="false"
    >
      <h2 className="text-3xl font-bold text-yellow-300 mb-10 text-center">
        Certifications & Achievements
      </h2>

      <div
        className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-yellow-300/10 transition duration-300"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 className="text-2xl text-yellow-200 font-semibold mb-4">
          Top Certifications
        </h3>
        <ul className="list-disc list-inside space-y-3 text-slate-300 pl-4">
          {certifications.map((cert, idx) => (
            <li key={idx} className="hover:text-yellow-100 transition duration-150">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
