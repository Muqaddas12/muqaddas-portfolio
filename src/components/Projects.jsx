import React from "react";

const projects = [
  {
    title: "TrueScan - Document Scanner",
    desc: "Scanner app to convert images to PDF with viewer, sharing & smart management.",
    link: "https://truescan-documentsscanner.en.uptodown.com/android",
    img: "https://img.utdstc.com/icon/099/ef2/099ef221c896de761a116b3e86acd7bcb34d1838677afe77029b56873fee8dd4",
  },
  {
    title: "SugResults",
    desc: "Student-focused app for Shobhit University to access results in PDF format.",
    link: "https://sugresults.en.uptodown.com/android",
    img: "https://img.utdstc.com/icon/2d5/28d/2d528d79e6ad673192b61370555d5a825df2ffb6679a621dbc3e13c8655a37d1",
  },
  {
    title: "mtbyown.com",
    desc: "Tech service website offering web/mobile/desktop development.",
    link: "https://mtbyown.com",
    img: "https://www.mtbyown.com/images/logo.jpg",
  },
  {
    title: "sipligar.com",
    desc: "Creative platform for illusions, games, animations and timepass tools.",
    link: "https://sipligar.com",
  },
  {
    title: "Campus Found & Lost",
    desc: "Web app to help students report and retrieve lost items easily.",
    link: null,
  },
  {
    title: "Scholarship Management System",
    desc: "Portal for scholarship applications, tracking, and admin control.",
    link: null,
  },
  {
    title: "Download Manager (Desktop)",
    desc: "Electron-based PC app to download files with pause/resume support.",
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-6 text-white">
      <h2
        className="text-3xl font-bold text-yellow-300 mb-10 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-once="false"
          >
            {proj.img && (
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-40 object-contain bg-slate-900 p-2 rounded-md mb-4"
              />
            )}
            <h3 className="text-lg font-semibold text-yellow-200">{proj.title}</h3>
            <p className="text-sm text-slate-300 mt-2">{proj.desc}</p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-yellow-400 hover:underline"
              >
                🔗 Visit / Download
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
