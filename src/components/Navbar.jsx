"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", to: "hero", type: "scroll" },
  { name: "About", to: "about", type: "scroll" },
  { name: "Skills", to: "skills", type: "scroll" },
  { name: "Projects", to: "projects", type: "scroll" },
  { name: "Education", to: "education", type: "scroll" },
  { name: "Contact", to: "contact", type: "scroll" },
  { name: "All Projects", to: "/projects", type: "link" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#071018]/86 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white md:px-8">
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          className="group flex cursor-pointer items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-sm font-black text-[#071018] shadow-lg shadow-cyan-500/20">
            MM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide">
              Muqaddas Malik
            </span>
            <span className="text-xs text-slate-400">Full Stack Developer</span>
          </span>
        </ScrollLink>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.to}
                href={item.to}
                className="cursor-pointer rounded-full bg-cyan-300/15 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/25 hover:text-white"
              >
                {item.name}
              </Link>
            ) : (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                spy
                duration={500}
                offset={-84}
                activeClass="bg-white text-[#071018]"
                className="cursor-pointer rounded-full px-4 py-2 text-sm text-slate-300 transition hover:text-white"
              >
                {item.name}
              </ScrollLink>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="mx-5 mb-4 rounded-lg border border-white/10 bg-[#071018]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.to}
                href={item.to}
                className="block cursor-pointer rounded-md px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.name} ↗
              </Link>
            ) : (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth
                spy
                duration={500}
                offset={-84}
                className="block cursor-pointer rounded-md px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </ScrollLink>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
