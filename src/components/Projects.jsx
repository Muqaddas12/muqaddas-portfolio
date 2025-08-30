"use client"

const fallbackImg =
  "https://cdn-icons-png.flaticon.com/512/833/833281.png";
  
const categorizedProjects = {
  "Mobile Apps": [
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
      title: "Custom Video Player",
      desc: "React Native + Kotlin based Android app to scan, list, and play videos from storage.",
      link: null,
    },
  ],
  "Web Apps": [
    {
      title: "E-Library",
      desc: "Digital library web app with result viewer, built using Node.js & EJS.",
      link: null,
      img: "https://img.freepik.com/free-vector/library-online-cocept-layout-chart-print_1284-6709.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Loan Calculator App",
      desc: "React + Material UI app to calculate EMI, amortization schedule & currency conversion.",
      link: "https://videodownloader-4cd47.web.app/",
      img: "https://img.freepik.com/premium-photo/hand-business-people-calculating-interest_36650-554.jpg?ga=GA1.1.441274033.1756580734&semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Campus Found & Lost",
      desc: "Web app to help students report and retrieve lost items easily.",
      link: null,
  img: "https://img.utdstc.com/icon/2d5/28d/2d528d79e6ad673192b61370555d5a825df2ffb6679a621dbc3e13c8655a37d1",
    },
    {
      title: "Scholarship Management System",
      desc: "Portal for scholarship applications, tracking, and admin control.",
      link: "https://scholarship-management-system-admin.vercel.app/login",
 img: "https://img.utdstc.com/icon/2d5/28d/2d528d79e6ad673192b61370555d5a825df2ffb6679a621dbc3e13c8655a37d1",
    },
  ],
  "Desktop Apps": [
    {
      title: "Download Manager (Desktop)",
      desc: "Electron-based PC app to download files with pause/resume support.",
      link: null,
      img: "https://cdn-icons-png.freepik.com/256/14268/14268495.png?ga=GA1.1.441274033.1756580734&semt=ais_white_label",
    },
  ],
  "Freelance & Company Projects": [
    {
      title: "AbhailePhysiotherapy.com",
      desc: "Full-stack project built with Next.js, Tailwind, PostgreSQL & Stripe.",
      link: "https://abhailephysiotherapy.com",
      img: "https://www.abhailephysiotherapy.ie/logo.png",
    },
    {
      title: "mtbyown.com",
      desc: "Tech service website offering web, mobile & desktop development.",
      link: "https://mtbyown.com",
      img: "https://www.mtbyown.com/images/logo.jpg",
    },
    {
      title: "sipligar.com",
      desc: "Creative platform for illusions, games, animations and timepass tools.",
      link: "https://sipligar.com",
      img: "https://i.pinimg.com/736x/ad/8a/6e/ad8a6e45d79a2d24257059644b13b736.jpg",
    },
  ],
  "Personal / Portfolio": [
    {
      title: "Portfolio Website",
      desc: "Personal developer portfolio showcasing projects, skills & achievements.",
      link: "https://muqaddas-portfolio-zeta.vercel.app",
      img:"/Muqaddas Malik.jpg",
    },
  ],
};

// 🔹 Card Component
const ProjectCard = ({ proj }) => (
  <div
    className="bg-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
    data-aos="fade-up"
  >
    <img
      src={proj.img || fallbackImg}
      alt={proj.title}
      className="w-full h-40 object-contain bg-slate-900 p-2 rounded-md mb-4 hover:scale-105 transition-transform duration-300"
    />
    <h4 className="text-lg font-semibold text-yellow-200">{proj.title}</h4>
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
);

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

      {Object.entries(categorizedProjects).map(([category, projects], catIndex) => (
        <div key={catIndex} className="mb-14">
          <h3
            className="text-2xl font-semibold text-yellow-200 mb-6 border-b border-yellow-500 pb-2"
            data-aos="fade-up"
          >
            {category}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((proj, i) => (
              <ProjectCard key={i} proj={proj} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
