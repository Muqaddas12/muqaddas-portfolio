import Link from "next/link";
import { FaArrowLeft, FaHome, FaThList } from "react-icons/fa";
import { featuredProjects } from "../components/portfolioData";
import Footer from "../components/Footer";

export const metadata = {
  title: "404 - Page Not Found | Muqaddas Malik Portfolio",
  description: "The page you are looking for does not exist. Explore Muqaddas Malik's portfolio, Android apps, and web projects.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#071018] text-white flex flex-col">
      {/* Background glow effects */}
      <div className="hero-grid fixed inset-0 -z-20 opacity-35 pointer-events-none" />
      <div className="fixed inset-x-0 top-0 -z-10 h-[400px] bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.15),transparent_40%),linear-gradient(180deg,rgba(7,16,24,0),#071018_90%)] pointer-events-none" />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center max-w-2xl mx-auto w-full">
        {/* Error Code Pill */}
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
          404 Error
        </span>

        {/* Big Glitch / Gradient 404 */}
        <h1 className="mt-4 text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          404
        </h1>

        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
          The page or project link you were looking for doesn&apos;t exist, has been relocated, or is temporarily unavailable.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#071018] shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            <FaHome className="text-sm" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <FaThList className="text-xs" />
            Explore All Apps
          </Link>
        </div>

        {/* Popular Apps Quick Links */}
        <div className="mt-12 w-full pt-8 border-t border-white/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Popular Apps by Muqaddas Malik:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {featuredProjects.slice(0, 5).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-4 w-4 object-contain rounded"
                />
                <span>{project.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

